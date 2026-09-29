'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { STATS_ENABLED } from '@/lib/site';

// Mirrors AGE_BANDS in lib/stats.ts (kept here so the server-only store code stays out of the client bundle).
const AGE_BANDS = ['18', '19', '20', '21', '22', '23-25', '26-30', '31+'];
const FLAG = 'rpt-score-submitted';

type State = 'idle' | 'sending' | 'done' | 'error' | 'already' | 'skipped';

const show = (band: string) => band.replace('-', '–');

/**
 * Opt-in: one tap on an age band adds the score and that band to anonymous
 * statistics. The consent text sits above the buttons, so it is read before the
 * tap. Nothing is pre-selected, nothing is sent until a band is tapped, and
 * "No thanks" is as easy as saying yes. Never sends answers.
 */
export function ScoreSubmit({ score }: { score: number }) {
  const [state, setState] = useState<State>('idle');
  const [band, setBand] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(FLAG)) setState('already');
    } catch {
      /* storage blocked: still allow one submission */
    }
  }, []);

  if (!STATS_ENABLED) return null;

  const submit = async (chosen: string) => {
    if (state === 'sending') return;
    setBand(chosen);
    setState('sending');
    try {
      const res = await fetch('/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score, ageBand: chosen, adult: true }),
      });
      if (res.ok || res.status === 429) {
        setState(res.ok ? 'done' : 'already');
        try {
          localStorage.setItem(FLAG, '1');
        } catch {
          /* ignore */
        }
      } else setState('error');
    } catch {
      setState('error');
    }
  };

  const open = state === 'idle' || state === 'sending' || state === 'error';

  return (
    <section aria-labelledby="submit-heading" className="rounded-lg border border-brand-tint bg-brand-soft p-6 sm:p-8">
      <h2 id="submit-heading" className="font-display text-h2 font-semibold text-ink">
        {state === 'done' ? 'Score added' : 'Add your score to the averages?'}
      </h2>

      <div aria-live="polite">
        {state === 'done' && (
          <p className="mt-2 text-ink-2">
            Added: your {score} now counts toward the {show(band ?? '')} age group. We publish a group&apos;s figures once it
            has 50 responses, on the{' '}
            <Link href="/rice-purity-test-average-score-by-age#where-numbers-come-from" className="link">
              average score by age
            </Link>{' '}
            page.
          </p>
        )}
        {state === 'already' && <p className="mt-2 text-ink-2">A score from this device or network is already counted. Thanks!</p>}
        {state === 'skipped' && <p className="mt-2 text-ink-2">No problem. Nothing was sent.</p>}
      </div>

      {open && (
        <>
          <p className="mt-2 max-w-measure text-ink-2">
            The averages on this site are estimates. Anonymous scores from readers will replace them with real figures. It
            is optional.
          </p>
          <p className="mt-3 max-w-measure text-small text-ink-2">
            <strong className="font-semibold text-ink">Tapping your age sends two things:</strong> your score ({score}) and
            that age band. It also confirms you are 18 or over. We never receive your answers, and we count the country your
            connection comes from separately. Details are in the{' '}
            <Link href="/privacy#score-submission" className="link">
              privacy policy
            </Link>
            .
          </p>
          <fieldset className="mt-5" disabled={state === 'sending'}>
            <legend className="text-small font-semibold text-ink">Tap your age to add your score</legend>
            <div className="mt-2 grid grid-cols-4 gap-2 sm:max-w-md">
              {AGE_BANDS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => submit(b)}
                  aria-label={`Add my score as age ${show(b)}`}
                  className="btn btn-secondary px-2 tabular-nums disabled:cursor-wait"
                >
                  {state === 'sending' && band === b ? 'Adding…' : show(b)}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => setState('skipped')} className="btn btn-quiet px-3" disabled={state === 'sending'}>
              No thanks
            </button>
            {state === 'error' && (
              <p role="alert" className="text-small text-[#A33A2B]">
                That didn&apos;t go through, so nothing was added. Tap your age to try again.
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
}
