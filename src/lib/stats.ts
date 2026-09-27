/**
 * Anonymous score statistics.
 *
 * Opt-in only: a reader who finishes the test can add their score and an age
 * band. We never receive individual answers. Storage is Upstash Redis over its
 * REST API, so no extra dependency is needed. The whole feature stays off until
 * UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are set (server) and
 * NEXT_PUBLIC_STATS_ENABLED=1 (shows the button).
 */

export const AGE_BANDS = ['18', '19', '20', '21', '22', '23-25', '26-30', '31+'] as const;
export type AgeBand = (typeof AGE_BANDS)[number];

/** Minimum responses before a band's figures are published. */
export const MIN_SAMPLE = 50;

const URL_ = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export const statsConfigured = Boolean(URL_ && TOKEN);

async function redis(command: (string | number)[], revalidate?: number): Promise<unknown> {
  if (!URL_ || !TOKEN) throw new Error('stats not configured');
  const res = await fetch(URL_, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    ...(revalidate ? { next: { revalidate } } : { cache: 'no-store' as const }),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const json = (await res.json()) as { result?: unknown; error?: string };
  if (json.error) throw new Error(json.error);
  return json.result;
}

export async function recordScore(score: number, band: AgeBand, country: string | null, ipKey: string) {
  // One submission per network per 12 hours keeps casual spam out.
  const fresh = await redis(['SET', `rpt:rl:${ipKey}`, '1', 'NX', 'EX', 43200]);
  if (fresh !== 'OK') return { ok: false as const, reason: 'rate_limited' };
  await redis(['HINCRBY', `rpt:scores:${band}`, String(score), 1]);
  if (country && /^[A-Z]{2}$/.test(country)) await redis(['HINCRBY', 'rpt:countries', country, 1]);
  return { ok: true as const };
}

export interface BandStats {
  band: AgeBand;
  n: number;
  mean: number | null;
  median: number | null;
  p25: number | null;
  p75: number | null;
}

function summarise(band: AgeBand, flat: string[]): BandStats {
  const pairs: [number, number][] = [];
  for (let i = 0; i < flat.length; i += 2) pairs.push([Number(flat[i]), Number(flat[i + 1])]);
  pairs.sort((a, b) => a[0] - b[0]);
  const n = pairs.reduce((s, [, c]) => s + c, 0);
  if (!n) return { band, n: 0, mean: null, median: null, p25: null, p75: null };
  const mean = pairs.reduce((s, [v, c]) => s + v * c, 0) / n;
  const pct = (p: number) => {
    const target = p * n;
    let acc = 0;
    for (const [v, c] of pairs) {
      acc += c;
      if (acc >= target) return v;
    }
    return pairs[pairs.length - 1][0];
  };
  return { band, n, mean: Math.round(mean * 10) / 10, median: pct(0.5), p25: pct(0.25), p75: pct(0.75) };
}

/** Aggregates for every band; null when the feature isn't configured or the store is unreachable. */
export async function getBandStats(revalidateSeconds = 3600): Promise<BandStats[] | null> {
  if (!statsConfigured) return null;
  try {
    const out: BandStats[] = [];
    for (const band of AGE_BANDS) {
      const flat = (await redis(['HGETALL', `rpt:scores:${band}`], revalidateSeconds)) as string[] | null;
      out.push(summarise(band, flat ?? []));
    }
    return out;
  } catch {
    return null;
  }
}
