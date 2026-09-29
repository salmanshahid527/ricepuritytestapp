/**
 * Editorial ESTIMATES of typical Rice Purity scores. These are not survey
 * results: there is no official dataset. They are the ranges published on
 * /rice-purity-test-average-score-by-age and are reused on the score and
 * results pages so every page quotes the same numbers. Real figures only come
 * from opt-in submissions (lib/stats.ts) and are shown separately.
 */

export const OVERALL_AVERAGE = { low: 62, high: 68 } as const;

/** The most common range for adults. */
export const TYPICAL_ADULT = { low: 55, high: 75 } as const;

export interface AgeEstimate {
  age: string;
  low: number;
  high: number;
  why: string;
}

export const AGE_ESTIMATES: AgeEstimate[] = [
  { age: '18', low: 75, high: 90, why: 'Most items become possible only with time and independence; many 18-year-olds have just started college or work.' },
  { age: '19–22', low: 65, high: 85, why: 'College years: the drinking, dating and first-relationship items start to add up.' },
  { age: '23–25', low: 60, high: 75, why: 'Living independently and longer relationships; the widest spread of any group.' },
  { age: '26–30', low: 50, high: 65, why: 'More of the partner and relationship items apply to most people by now.' },
  { age: '31+', low: 45, high: 60, why: 'A running total that only goes up, though quieter lives still score in the 60s and 70s.' },
];

export const range = (r: { low: number; high: number }) => `${r.low}–${r.high}`;

/** Age groups whose estimated range overlaps [low, high]. */
export function ageGroupsFor(low: number, high: number): string[] {
  return AGE_ESTIMATES.filter((e) => e.high >= low && e.low <= high).map((e) => e.age);
}

/**
 * The 5-point bands of the score page's lookup table (96–100 down to 0–5).
 * Each row has an id, so the results page can link a reader to their own row.
 */
export interface LookupBand {
  low: number;
  high: number;
  id: string;
}

export const LOOKUP_BANDS: LookupBand[] = Array.from({ length: 20 }, (_, i) => {
  const high = 100 - i * 5;
  const low = i === 19 ? 0 : high - 4;
  return { low, high, id: `score-${low}` };
});

export function lookupBandFor(score: number): LookupBand {
  const i = Math.min(19, Math.max(0, Math.floor((100 - score) / 5)));
  return LOOKUP_BANDS[i];
}
