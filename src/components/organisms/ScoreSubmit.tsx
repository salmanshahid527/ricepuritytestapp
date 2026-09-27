'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const BANDS = ['18', '19', '20', '21', '22', '23-25', '26-30', '31+'];
const FLAG = 'rpt-score-submitted';
const ENABLED = process.env.NEXT_PUBLIC_STATS_ENABLED === '1';

/** Opt-in: adds the score and an age band to anonymous statistics. Never sends answers. */
export const ScoreSubmit: React.FC<{ score: number }> = ({ score }) => {
  const [band, setBand] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error' | 'already'>('idle');

  useEffect(() => {
    try {
      if (localStorage.getItem(FLAG)) setState('already');
    } catch {
      /* storage blocked: still allow one submission */
    }
  }, []);

  if (!ENABLED) return null;

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
    <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Help us publish real averages</h2>
      {state === 'done' && <p className="text-gray-700">Thanks. Your score was added anonymously.</p>}
      {state === 'already' && <p className="text-gray-700">You&apos;ve already added a score from this device. Thanks!</p>}
      {(state === 'idle' || state === 'sending' || state === 'error') && (
        <>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Add your score and age to our anonymous statistics. We receive only the number and the age band you pick,
            never your answers, and nothing that identifies you. See our{' '}
            <Link href="/privacy" className="underline">privacy policy</Link>.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm text-gray-700" htmlFor="age-band">My age</label>
            <select
              id="age-band"
              value={band}
              onChange={(e) => setBand(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="">Choose…</option>
              {BANDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={submit}
              disabled={!band || state === 'sending'}
              className="bg-green-600 text-white text-sm font-semibold rounded-lg px-4 py-2 disabled:opacity-50"
            >
              {state === 'sending' ? 'Adding…' : `Add my score (${score})`}
            </button>
          </div>
          {state === 'error' && <p className="text-sm text-red-600 mt-3">That didn&apos;t go through. Please try again later.</p>}
        </>
      )}
    </section>
  );
};
