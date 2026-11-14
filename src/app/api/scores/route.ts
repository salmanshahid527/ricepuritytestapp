import { NextResponse } from 'next/server';
import { AGE_BANDS, getBandStats, MIN_SAMPLE, recordScore, statsConfigured, type AgeBand } from '@/lib/stats';

export const dynamic = 'force-dynamic';

async function hashIp(ip: string): Promise<string> {
  const data = new TextEncoder().encode(`rpt:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** The live figures for the stats section. Small, cached for five minutes, 503 while the store is off. */
export async function GET() {
  const bands = await getBandStats();
  if (!bands) return NextResponse.json({ ok: false }, { status: 503 });
  return NextResponse.json(
    { ok: true, minSample: MIN_SAMPLE, bands },
    { headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' } },
  );
}

export async function POST(req: Request) {
  if (!statsConfigured()) return NextResponse.json({ ok: false, reason: 'disabled' }, { status: 503 });
  let body: { score?: unknown; ageBand?: unknown; adult?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_json' }, { status: 400 });
  }
  const score = Number(body.score);
  const band = String(body.ageBand) as AgeBand;
  if (body.adult !== true || !Number.isInteger(score) || score < 0 || score > 100 || !AGE_BANDS.includes(band)) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 400 });
  }
  const ip = req.headers.get('cf-connecting-ip') || (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const country = req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry');
  try {
    const result = await recordScore(score, band, country, await hashIp(ip));
    return NextResponse.json(result, { status: result.ok ? 200 : 429 });
  } catch {
    return NextResponse.json({ ok: false, reason: 'store_error' }, { status: 502 });
  }
}
