import { OVERALL_AVERAGE, TYPICAL_ADULT, range } from '@/lib/estimates';

/**
 * A 0–100 number line showing the estimated typical adult range and the
 * estimated overall average, with an optional marker for the reader's score.
 * Purely visual; the same numbers are always stated in text next to it.
 */
export function ScoreScale({ score, className = '' }: { score?: number; className?: string }) {
  const pct = (n: number) => `${n}%`;
  return (
    <div className={className} aria-hidden="true">
      <div className="relative h-12">
        {/* track */}
        <div className="absolute inset-x-0 top-5 h-2.5 rounded-full bg-line" />
        {/* typical adult band */}
        <div
          className="absolute top-5 h-2.5 rounded-full bg-brand-bright"
          style={{ left: pct(TYPICAL_ADULT.low), width: pct(TYPICAL_ADULT.high - TYPICAL_ADULT.low) }}
        />
        {/* estimated average */}
        <div
          className="absolute top-[0.9rem] h-[1.4rem] rounded-sm bg-accent ring-2 ring-surface"
          style={{ left: pct(OVERALL_AVERAGE.low), width: pct(OVERALL_AVERAGE.high - OVERALL_AVERAGE.low) }}
        />
        {typeof score === 'number' && (
          <div className="absolute top-0 -translate-x-1/2" style={{ left: pct(Math.min(100, Math.max(0, score))) }}>
            <div className="mx-auto h-0 w-0 border-x-[7px] border-t-[9px] border-x-transparent border-t-ink" />
            <div className="mx-auto mt-0.5 h-8 w-[3px] rounded-full bg-ink" />
          </div>
        )}
      </div>
      <div className="relative mt-1 h-5 text-xs text-ink-3 [font-variant-numeric:tabular-nums]">
        <span className="absolute left-0">0</span>
        <span className="absolute -translate-x-1/2" style={{ left: pct(TYPICAL_ADULT.low) }}>
          {TYPICAL_ADULT.low}
        </span>
        <span className="absolute -translate-x-1/2" style={{ left: pct(TYPICAL_ADULT.high) }}>
          {TYPICAL_ADULT.high}
        </span>
        <span className="absolute right-0">100</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-sm bg-brand-bright" /> Typical adult range {range(TYPICAL_ADULT)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-4 rounded-sm bg-accent" /> Estimated average {range(OVERALL_AVERAGE)}
        </span>
        {typeof score === 'number' && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-[3px] rounded-full bg-ink" /> You
          </span>
        )}
      </div>
    </div>
  );
}
