'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { questions } from '@/lib/questions';
import type { TestAnswers } from '@/types';

const ANSWERS_KEY = 'rpt_test_answers';

const CATEGORY_META = [
  { t: 'Social life' },
  { t: 'Dating and relationships' },
  { t: 'Intimacy' },
  { t: 'Alcohol and substances' },
  { t: 'Nightlife' },
  { t: 'Risk and the law' },
  { t: 'Travel and living independently' },
  { t: 'Money and work' },
  { t: 'Digital life' },
  { t: 'Rarer experiences' },
];

const BANDS = [
  {
    lo: 90, hi: 100, label: 'Very limited experience',
    res: 'Most of this list has not applied to your life yet. That is common, and it is not a state that needs explaining or defending.',
  },
  {
    lo: 70, hi: 89, label: 'Some experience',
    res: 'A familiar range. You have done a fair amount of what the list asks about and not much of the rarer end.',
  },
  {
    lo: 45, hi: 69, label: 'The common middle',
    res: 'The widest part of the curve, where most adult answers land. Nothing about this range is unusual in either direction.',
  },
  {
    lo: 20, hi: 44, label: 'Broad experience',
    res: 'Most of the list applies to you. Usually this reflects age and opportunity more than anything else.',
  },
  {
    lo: 0, hi: 19, label: 'Very broad experience',
    res: 'Nearly the whole list applies. Genuinely uncommon — though it often means the list happened to match your life rather than anything more than that.',
  },
];

function bandFor(score: number) {
  return BANDS.find((b) => score >= b.lo && score <= b.hi) || BANDS[2];
}

function ScoreRibbon({ score }: { score: number }) {
  const W = 700;
  const H = 150;
  const base = 104;
  const bh = 16;
  const n = 40;
  const bars = [];

  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const v = Math.exp(-Math.pow(t - 0.55, 2) / 0.045) + 0.35 * Math.exp(-Math.pow(t - 0.85, 2) / 0.02);
    const h = (64 * v) / 1.15;
    bars.push(
      <rect
        key={i}
        x={(t * (W - W / n)).toFixed(1)}
        y={(base - 10 - h).toFixed(1)}
        width={(W / n - 3).toFixed(1)}
        height={h.toFixed(1)}
        rx="2"
        fill="var(--plum)"
        opacity="0.16"
      />
    );
  }

  const mx = (W * score) / 100;

  return (
    <div className="my-5">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label={`Score ${score} of 100 shown on a distribution`}>
        {bars}
        <rect x="0" y={base} width={W} height={bh + 10} rx="13" fill="var(--plum-tint)" />
        <rect x="0" y={base} width={mx} height={bh + 10} rx="13" fill="var(--plum)" />
        <rect x={mx - 3} y={base - 16} width="6" height={bh + 42} rx="3" fill="var(--amber)" />
        <rect x={mx - 30} y={base - 58} width="60" height="34" rx="6" fill="var(--amber)" />
        <text x={mx} y={base - 34} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="21" fontWeight="600" fill="var(--ink)">
          {score}
        </text>
      </svg>
      <div className="flex justify-between font-mono text-xs text-slate mt-1">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}

function CatBar({ name, count }: { name: string; count: number }) {
  const isHigh = count >= 7;
  return (
    <div className="flex items-center gap-3.5 mb-2.5">
      <span className="flex-none w-[9.5rem] text-sm text-ink">{name}</span>
      <span className="flex-1 h-3.5 bg-plum-tint rounded-full overflow-hidden">
        <span
          className={`block h-full rounded-full ${isHigh ? 'bg-sage' : 'bg-plum'}`}
          style={{ width: `${count * 10}%` }}
        />
      </span>
      <span className="flex-none w-11 text-right font-mono text-xs font-semibold text-slate">
        {count}/10
      </span>
    </div>
  );
}

export default function ResultsPage() {
  const [loaded, setLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [perCat, setPerCat] = useState<{ nm: string; v: number }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(ANSWERS_KEY);
    const answers: TestAnswers = saved ? JSON.parse(saved) : {};

    const yes = Object.values(answers).filter(Boolean).length;
    const calculatedScore = 100 - yes;

    const catBreakdown = CATEGORY_META.map((c, ci) => {
      let no = 0;
      for (let i = 0; i < 10; i++) {
        const qId = ci * 10 + i + 1;
        if (!answers[qId]) no++;
      }
      return { nm: c.t, v: no };
    });

    setYesCount(yes);
    setScore(calculatedScore);
    setPerCat(catBreakdown);
    setLoaded(true);
  }, []);

  const restart = () => {
    localStorage.removeItem(ANSWERS_KEY);
    window.location.href = '/test';
  };

  if (!loaded) return null;

  const band = bandFor(score);

  return (
    <div className="min-h-screen bg-surface">

      {/* Score section */}
      <section className="bg-surface border-t border-b border-line py-14">
        <div className="max-w-[1120px] mx-auto px-5">
          <p className="font-mono text-xs tracking-widest uppercase text-plum mb-3">
            Your result
          </p>

          <div className="flex items-end gap-4 flex-wrap">
            <span className="font-display font-extrabold text-ink leading-none text-[clamp(3.5rem,12vw,5.5rem)]">
              {score}
            </span>
            <span className="font-display font-semibold text-lg text-slate pb-2">
              out of 100
            </span>
            <span className="font-semibold text-plum text-lg pb-2">{band.label}</span>
          </div>

          <p className="mt-5 max-w-[62ch] text-ink leading-relaxed">
            You answered yes to {yesCount} of the 100 items. {band.res} It is not a
            verdict on your character and it does not predict anything about your
            future.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            <div>
              <ScoreRibbon score={score} />
            </div>
            <div className="bg-bone border border-line rounded-xl p-6">
              <p className="font-mono text-xs tracking-widest uppercase text-plum mb-2">
                Add yours anonymously?
              </p>
              <p className="text-sm text-ink leading-relaxed mb-4">
                We store the score, an age band and a country. Never your individual
                answers, never anything that identifies you. It is off unless you turn
                it on.
              </p>
              <button className="w-full bg-amber text-ink font-display font-semibold rounded-lg min-h-[48px] hover:brightness-105 transition-all">
                Add my score anonymously
              </button>
              <p className="font-mono text-[0.72rem] text-slate mt-3">
                Percentile appears once there are enough responses to compute one
                honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="py-14">
        <div className="max-w-[1120px] mx-auto px-5">
          <h2 className="font-display font-extrabold text-2xl text-ink mb-6">
            Where your points came from
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
            <div>{perCat.slice(0, 5).map((c) => <CatBar key={c.nm} name={c.nm} count={c.v} />)}</div>
            <div>{perCat.slice(5).map((c) => <CatBar key={c.nm} name={c.nm} count={c.v} />)}</div>
          </div>

          <div className="bg-bone border border-line rounded-lg px-5 py-4 mt-8 max-w-[68ch]">
            <p className="font-mono text-xs uppercase tracking-widest text-plum mb-2">
              If anything here brought something up
            </p>
            <p className="text-sm text-ink leading-relaxed mb-2">
              Some of these questions touch on difficult experiences. If any of them
              left you feeling low, support is free and confidential, and it is
              available around the clock in most countries.
            </p>
            <Link href="/help" className="text-sm font-semibold text-plum hover:underline">
              Find support in your country →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={restart}
              className="bg-surface text-ink border border-ink font-display font-semibold rounded-lg min-h-[48px] px-6 hover:border-plum hover:text-plum transition-all"
            >
              Take it again
            </button>
            <Link
              href="/rice-purity-test-score"
              className="inline-flex items-center bg-transparent border border-line text-plum font-display font-semibold rounded-lg min-h-[48px] px-6 hover:bg-plum-tint transition-all"
            >
              What {score} means in detail
            </Link>
          </div>

          <p className="text-sm mt-8 pt-4 border-t border-line">
            <strong className="font-mono text-[0.78rem] tracking-widest text-ink">
              KEEP READING&nbsp;&nbsp;
            </strong>
            <Link href="/rice-purity-test-score" className="text-plum hover:underline">
              Score guide
            </Link>
            <span className="text-slate">&nbsp;·&nbsp;</span>
            <Link href="/rice-purity-test-average-score-by-age" className="text-plum hover:underline">
              Averages by age
            </Link>
            <span className="text-slate">&nbsp;·&nbsp;</span>
            <Link href="/rice-purity-test-questions" className="text-plum hover:underline">
              All 100 questions
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}