'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { STORAGE_KEYS, TOTAL_QUESTIONS } from '@/lib/constants';
import { getScoreInterpretation } from '@/lib/utils';
import { AGE_ESTIMATES, OVERALL_AVERAGE, TYPICAL_ADULT, range } from '@/lib/estimates';
import { GUIDES } from '@/lib/guides';
import { STATS_ENABLED } from '@/lib/site';
import { ButtonLink } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { ScoreScale } from '../molecules/ScoreScale';
import { RelatedGuides } from './RelatedGuides';
import { SharePanel } from './SharePanel';
import { ScoreSubmit } from './ScoreSubmit';
import { AdSlot } from './AdSlot';

const parse = (v: string | null) => {
  if (v === null) return null;
  const n = Number.parseInt(v, 10);
  return Number.isInteger(n) && n >= 0 && n <= TOTAL_QUESTIONS ? n : null;
};

/** Counts down from 100 to the score; instant when the reader prefers reduced motion. */
function useCountDown(target: number | null) {
  const [shown, setShown] = useState<number | null>(null);
  useEffect(() => {
    if (target === null) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || target === TOTAL_QUESTIONS) {
      setShown(target);
      return;
    }
    const start = performance.now();
    const duration = 700;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(TOTAL_QUESTIONS - (TOTAL_QUESTIONS - target) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return shown;
}

function relation(score: number, low: number, high: number) {
  if (score > high) return 'above';
  if (score < low) return 'below';
  return 'within';
}

const STATUS_LABEL = {
  above: 'Above the range',
  within: 'Within the range',
  below: 'Below the range',
} as const;

/** Reserved-size placeholder used before the score is read from storage (no layout shift). */
function ScoreCardShell({ children }: { children?: ReactNode }) {
  return (
    <div className="card grid min-h-[22rem] gap-6 p-6 sm:min-h-[18rem] sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-10 sm:p-10">
      {children}
    </div>
  );
}

export function ResultsView({ liveStats }: { liveStats?: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [score, setScore] = useState<number | null>(null);
  const shown = useCountDown(score);

  useEffect(() => {
    // A shared link can carry ?score=; otherwise use the score saved by the test.
    const fromUrl = parse(searchParams.get('score'));
    let stored: number | null = null;
    try {
      if (fromUrl !== null) window.localStorage.setItem(STORAGE_KEYS.SCORE, String(fromUrl));
      else stored = parse(window.localStorage.getItem(STORAGE_KEYS.SCORE));
    } catch {
      /* storage blocked */
    }
    const value = fromUrl ?? stored;
    if (value === null) router.replace('/test');
    else setScore(value);
  }, [searchParams, router]);

  const startOver = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.ANSWERS);
      window.localStorage.removeItem(STORAGE_KEYS.SCORE);
    } catch {
      /* ignore */
    }
    router.push('/test');
  };

  const heading = (
    <h1 className="font-display text-h1 font-semibold text-ink">Your Rice Purity score</h1>
  );

  if (score === null) {
    return (
      <div className="page pt-8 sm:pt-10">
        {heading}
        <div className="mt-6">
          <ScoreCardShell>
            <p className="text-ink-3" role="status">
              Loading your score…
            </p>
          </ScoreCardShell>
        </div>
      </div>
    );
  }

  const band = getScoreInterpretation(score);
  const checked = TOTAL_QUESTIONS - score;
  const overall = relation(score, OVERALL_AVERAGE.low, OVERALL_AVERAGE.high);

  return (
    <div className="page pt-8 sm:pt-10">
      {heading}

      {/* The answer: score, band, and what it means */}
      <div className="mt-6">
        <ScoreCardShell>
          <div className="text-center sm:text-left">
            <p className="sr-only">
              Your score is {score} out of {TOTAL_QUESTIONS}.
            </p>
            <p aria-hidden="true" className="font-display text-[6.5rem] font-semibold leading-none tracking-[-0.03em] text-brand-deep tabular-nums sm:text-[8rem]">
              <span className="inline-block min-w-[3ch] text-center sm:text-left">{shown ?? score}</span>
            </p>
            <p className="mt-1 text-small font-medium text-ink-3">out of {TOTAL_QUESTIONS}</p>
          </div>
          <div>
            <p className="eyebrow">Score range {band.range.replace('-', '–')}</p>
            <h2 className="mt-2 font-display text-h2 font-semibold text-ink">{band.title}</h2>
            <p className="mt-2 text-ink-2">{band.description}</p>
            <p className="mt-3 text-small text-ink-3">
              You checked {checked} of {TOTAL_QUESTIONS} items. Every item counts the same, and there is no good or bad
              score.
            </p>
            <ScoreScale score={score} className="mt-5" />
          </div>
        </ScoreCardShell>
      </div>

      {/* Comparison with the estimated averages */}
      <section aria-labelledby="compare-heading" className="mt-12">
        <h2 id="compare-heading" className="font-display text-h2 font-semibold text-ink">
          How your score compares
        </h2>
        <p className="mt-3 max-w-measure text-ink-2">
          {overall === 'within' && (
            <>
              A {score} is right around the estimated overall average of <strong className="text-ink">{range(OVERALL_AVERAGE)}</strong>.
            </>
          )}
          {overall === 'above' && (
            <>
              A {score} is above the estimated overall average of <strong className="text-ink">{range(OVERALL_AVERAGE)}</strong>, so
              you checked fewer items than that average.
            </>
          )}
          {overall === 'below' && (
            <>
              A {score} is below the estimated overall average of <strong className="text-ink">{range(OVERALL_AVERAGE)}</strong>, so
              you checked more items than that average.
            </>
          )}{' '}
          Most adults land between {TYPICAL_ADULT.low} and {TYPICAL_ADULT.high}. Age matters most, so here is your score next
          to the typical range for each age group.
        </p>
        <p className="mt-3 inline-flex items-start gap-2 rounded-md border border-note-line bg-note px-3 py-2 text-xs text-note-ink">
          <Icon name="info" className="mt-px h-4 w-4 shrink-0" />
          <span>
            These ranges are editorial estimates, not survey results.{' '}
            <Link href={`${GUIDES.age.href}#where-numbers-come-from`} className="font-semibold underline underline-offset-2">
              Where the numbers come from
            </Link>
          </span>
        </p>
        <div className="table-wrap mt-5">
          <table className="table-clean max-w-2xl">
            <caption className="sr-only">Your score of {score} compared with the estimated typical range for each age group</caption>
            <thead>
              <tr>
                <th scope="col">Age</th>
                <th scope="col">Typical range (estimate)</th>
                <th scope="col">Your {score}</th>
              </tr>
            </thead>
            <tbody>
              {AGE_ESTIMATES.map((e) => {
                const r = relation(score, e.low, e.high);
                return (
                  <tr key={e.age}>
                    <th scope="row" className="whitespace-nowrap border-b border-line py-3 pl-0 pr-3 text-left text-small font-semibold normal-case tracking-normal text-ink">
                      {e.age}
                    </th>
                    <td className="whitespace-nowrap">{range(e)}</td>
                    <td>
                      <span
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap font-medium ${
                          r === 'within' ? 'text-brand-deep' : 'text-ink-2'
                        }`}
                      >
                        {r === 'within' && <Icon name="check" className="h-4 w-4" />}
                        {STATUS_LABEL[r]}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {liveStats && <div className="mt-6 max-w-2xl">{liveStats}</div>}
      </section>

      <div className={`mt-12 grid gap-6 ${STATS_ENABLED ? 'lg:grid-cols-2' : 'max-w-3xl'}`}>
        <SharePanel score={score} />
        <ScoreSubmit score={score} />
      </div>

      <AdSlot name="results-mid" className="mt-12" />

      <RelatedGuides
        heading="Next steps"
        guides={[
          { ...GUIDES.score, href: `${GUIDES.score.href}#score-lookup`, blurb: 'Look up your number and see which ranges it falls in.' },
          GUIDES.age,
          GUIDES.questions,
          GUIDES.howTo,
        ]}
      />

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <ButtonLink href="/test" variant="secondary">
          Change my answers
        </ButtonLink>
        <button type="button" onClick={startOver} className="btn btn-quiet">
          <Icon name="reset" className="h-4 w-4" /> Start over
        </button>
        <ButtonLink href="/" variant="quiet">
          Back to home
        </ButtonLink>
      </div>
    </div>
  );
}
