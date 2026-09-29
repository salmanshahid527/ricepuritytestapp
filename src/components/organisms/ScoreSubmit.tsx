'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { STATS_ENABLED } from '@/lib/site';

// Mirrors AGE_BANDS in lib/stats.ts (kept here so the server-only store code stays out of the client bundle).
const AGE_BANDS = ['18', '19', '20', '21', '22', '23-25', '26-30', '31+'];
const FLAG = 'rpt-score-submitted';

/** Opt-in: adds the score and an age band to anonymous statistics. Never sends answers. */
export function ScoreSubmit({ score }: { score: number }) {
  const [band, setBand] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error' | 'already'>('idle');

  useEffect(() => {
    try {
      if (localStorage.getItem(FLAG)) setState('already');
    } catch {
      /* storage blocked: still allow one submission */
    }
  }, []);

  if (!STATS_ENABLED) return null;

  const submit = async () => {
    if (!band) return;
    setState('sending');
    try {
      const res = await fetch('/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score, ageBand: band, adult: true }),
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

  return (
    <section aria-labelledby="submit-heading" className="rounded-lg border border-brand-tint bg-brand-soft p-6 sm:p-8">
      <h2 id="submit-heading" className="font-display text-h2 font-semibold text-ink">
        Help us publish real averages
      </h2>
      <div aria-live="polite">
        {state === 'done' && <p className="mt-2 text-ink-2">Thanks. Your score was added anonymously.</p>}
        {state === 'already' && <p className="mt-2 text-ink-2">You&apos;ve already added a score from this device. Thanks!</p>}
      </div>
      {(state === 'idle' || state === 'sending' || state === 'error') && (
        <>
          <p className="mt-2 max-w-measure text-small text-ink-2">
            Add your score and age to our anonymous statistics. We receive only the number and the age band you pick,
            never your answers, and nothing that identifies you. See our{' '}
            <Link href="/privacy" className="link">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink-2" htmlFor="age-band">
                My age
              </label>
              <select
                id="age-band"
                name="age-band"
                autoComplete="off"
                value={band}
                onChange={(e) => setBand(e.target.value)}
                className="mt-1 min-h-tap rounded-md border border-control bg-surface px-3 pr-8 text-small text-ink"
              >
                <option value="">Choose…</option>
                {AGE_BANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={submit}
              disabled={!band || state === 'sending'}
              className="btn btn-primary"
            >
              {state === 'sending' ? 'Adding…' : `Add my score (${score})`}
            </button>
          </div>
          {state === 'error' && (
            <p role="alert" className="mt-3 text-small text-[#A33A2B]">
              That didn&apos;t go through. Please try again later.
            </p>
          )}
        </>
      )}
    </section>
  );
}
