'use client';

import { useEffect, useState } from 'react';

import { STATS_ENABLED } from '@/lib/site';

/**
 * Shows real, opt-in averages once a band has enough responses; otherwise says how many have
 * been collected. Loaded in the browser from /api/scores, because the pages are built ahead of
 * time without the database secret and would otherwise show nothing. Renders nothing until the
 * statistics store is switched on and reachable.
 */
interface Band {
  band: string;
  n: number;
  mean: number | null;
  median: number | null;
  p25: number | null;
  p75: number | null;
}

type State = { status: 'loading' } | { status: 'off' } | { status: 'ready'; minSample: number; bands: Band[] };

export function LiveStats() {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    if (!STATS_ENABLED) return;
    let alive = true;
    fetch('/api/scores')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!alive) return;
        setState(d?.ok ? { status: 'ready', minSample: d.minSample, bands: d.bands } : { status: 'off' });
      })
      .catch(() => alive && setState({ status: 'off' }));
    return () => {
      alive = false;
    };
  }, []);

  if (!STATS_ENABLED || state.status === 'off') return null;
  // Reserve the space while loading so the page below does not jump.
  if (state.status === 'loading') return <div aria-hidden className="min-h-[9rem]" />;

  const MIN_SAMPLE = state.minSample;
  const stats = state.bands;
  const total = stats.reduce((s, b) => s + b.n, 0);
  const ready = stats.filter((b) => b.n >= MIN_SAMPLE);

  return (
    <section aria-labelledby="live-results" className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <h2 id="live-results" className="mt-0 font-display text-h3 font-semibold text-ink">
        Live results from our readers
      </h2>
      {ready.length === 0 ? (
        <p className="mt-2 text-small text-ink-2">
          We&apos;re collecting anonymous, opt-in scores from people who finish the test ({total.toLocaleString()} so
          far). We publish an age group&apos;s figures once it has at least {MIN_SAMPLE} responses.
        </p>
      ) : (
        <>
          <p className="mt-2 text-small text-ink-2">
            Opt-in scores from readers who finished the test, updated every few minutes. Only age groups with at least {MIN_SAMPLE}{' '}
            responses are shown. Self-selected samples lean toward people who chose to share, so read these as
            indicative.
          </p>
          <div className="table-wrap mt-3">
            <table className="table-clean">
              <thead>
                <tr>
                  <th scope="col">Age</th>
                  <th scope="col">Responses</th>
                  <th scope="col">Average</th>
                  <th scope="col">Median</th>
                  <th scope="col">Middle half</th>
                </tr>
              </thead>
              <tbody>
                {ready.map((b) => (
                  <tr key={b.band}>
                    <td className="font-semibold text-ink">{b.band}</td>
                    <td>{b.n.toLocaleString()}</td>
                    <td>{b.mean}</td>
                    <td>{b.median}</td>
                    <td>
                      {b.p25}–{b.p75}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
