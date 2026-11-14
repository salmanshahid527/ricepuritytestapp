/**
 * Anonymous score statistics.
 *
 * Opt-in only: a reader who finishes the test can add their score and an age
 * band. We never receive individual answers. Storage is a Neon Postgres database
 * reached over Neon's SQL-over-HTTP endpoint with plain fetch, so there is no
 * extra dependency and it runs on Cloudflare Workers. The whole feature stays off
 * until STATS_DATABASE_URL is set (a server secret) and NEXT_PUBLIC_STATS_ENABLED=1
 * (shows the button).
 *
 * Tables (created on first use):
 *   rpt_scores    one counter per (age band, score). Nothing else about a submission.
 *   rpt_countries one counter per country. Kept apart from scores on purpose.
 *   rpt_rate      a one-way hash of the network address for 12 hours, for rate limiting.
 */

export const AGE_BANDS = ['18', '19', '20', '21', '22', '23-25', '26-30', '31+'] as const;
export type AgeBand = (typeof AGE_BANDS)[number];

/** Minimum responses before a band's figures are published. */
export const MIN_SAMPLE = 50;

/** Read at call time, not at import: on Workers the secrets are not there when modules load. */
function connectionString(): string | undefined {
  return process.env.STATS_DATABASE_URL || undefined;
}

export function statsConfigured(): boolean {
  return Boolean(connectionString());
}

/**
 * One statement over Neon's HTTP endpoint. Parameters are sent as strings and Postgres coerces
 * them to the column types. STATS_SQL_ENDPOINT only exists so tests can point at a local proxy.
 */
async function sql(text: string, params: (string | number)[] = []): Promise<{ rows: Record<string, unknown>[] }> {
  const cs = connectionString();
  if (!cs) throw new Error('stats not configured');
  const endpoint = process.env.STATS_SQL_ENDPOINT || `https://${new URL(cs).hostname}/sql`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Neon-Connection-String': cs },
    body: JSON.stringify({ query: text, params: params.map(String) }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`stats store ${res.status}`);
  return (await res.json()) as { rows: Record<string, unknown>[] };
}

const SCHEMA = [
  'CREATE TABLE IF NOT EXISTS rpt_scores (band text NOT NULL, score smallint NOT NULL, n integer NOT NULL DEFAULT 0, PRIMARY KEY (band, score))',
  'CREATE TABLE IF NOT EXISTS rpt_countries (code char(2) PRIMARY KEY, n integer NOT NULL DEFAULT 0)',
  'CREATE TABLE IF NOT EXISTS rpt_rate (key text PRIMARY KEY, at timestamptz NOT NULL DEFAULT now())',
];

let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  schemaReady ??= (async () => {
    for (const statement of SCHEMA) await sql(statement);
  })().catch((err) => {
    schemaReady = null;
    throw err;
  });
  return schemaReady;
}

export async function recordScore(score: number, band: AgeBand, country: string | null, ipKey: string) {
  await ensureSchema();
  // One submission per network per 12 hours keeps casual spam out. Expired hashes are deleted here,
  // so a hash never lives longer than 12 hours (the privacy page says so).
  await sql(`DELETE FROM rpt_rate WHERE at < now() - interval '12 hours'`);
  const fresh = await sql('INSERT INTO rpt_rate (key) VALUES ($1) ON CONFLICT (key) DO NOTHING RETURNING key', [ipKey]);
  if (fresh.rows.length === 0) return { ok: false as const, reason: 'rate_limited' };
  await sql('INSERT INTO rpt_scores (band, score, n) VALUES ($1, $2, 1) ON CONFLICT (band, score) DO UPDATE SET n = rpt_scores.n + 1', [band, score]);
  if (country && /^[A-Z]{2}$/.test(country)) {
    await sql('INSERT INTO rpt_countries (code, n) VALUES ($1, 1) ON CONFLICT (code) DO UPDATE SET n = rpt_countries.n + 1', [country]);
  }
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

export function summarise(band: AgeBand, pairs: [number, number][]): BandStats {
  const sorted = [...pairs].sort((a, b) => a[0] - b[0]);
  const n = sorted.reduce((s, [, c]) => s + c, 0);
  if (!n) return { band, n: 0, mean: null, median: null, p25: null, p75: null };
  const mean = sorted.reduce((s, [v, c]) => s + v * c, 0) / n;
  const pct = (p: number) => {
    const target = p * n;
    let acc = 0;
    for (const [v, c] of sorted) {
      acc += c;
      if (acc >= target) return v;
    }
    return sorted[sorted.length - 1][0];
  };
  return { band, n, mean: Math.round(mean * 10) / 10, median: pct(0.5), p25: pct(0.25), p75: pct(0.75) };
}

// A short in-memory cache per Worker instance keeps the free database's compute use tiny.
let cached: { at: number; data: BandStats[] } | null = null;
const CACHE_MS = 5 * 60 * 1000;

/** Aggregates for every band; null when the feature isn't configured or the store is unreachable. */
export async function getBandStats(): Promise<BandStats[] | null> {
  if (!statsConfigured()) return null;
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.data;
  try {
    await ensureSchema();
    const { rows } = await sql('SELECT band, score, n FROM rpt_scores');
    const data = AGE_BANDS.map((band) =>
      summarise(
        band,
        rows.filter((r) => r.band === band).map((r) => [Number(r.score), Number(r.n)] as [number, number]),
      ),
    );
    cached = { at: Date.now(), data };
    return data;
  } catch {
    return null;
  }
}
