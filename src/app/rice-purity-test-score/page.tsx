import React from 'react';
import Link from 'next/link';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'What Your Rice Purity Score Means | Score Guide',
  description: 'Every band, what it usually reflects, and the things a score genuinely cannot tell you.',
  keywords: 'rice purity test score, rice purity score meaning, rice purity test results',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-score` },
};

const BANDS = [
  {
    lo: 90, hi: 100, label: 'Very limited experience',
    guide: 'Most of the list has not applied to your life yet. This band is common among people who have recently become adults, among people who have had less opportunity or inclination to do the things the list asks about, and among people whose lives are simply organised differently. It says nothing about maturity.',
  },
  {
    lo: 70, hi: 89, label: 'Some experience',
    guide: 'A very typical range. Most of the ordinary items are yes; most of the rarer ones are no. Scores here move slowly — the remaining points sit in categories where experiences accumulate over years rather than months.',
  },
  {
    lo: 45, hi: 69, label: 'The common middle',
    guide: 'The widest part of the curve. If you are here, roughly half the list applies to you and roughly half does not, and there is nothing to interpret beyond that. People often arrive here having scored in the sixties and expecting the number to mean something specific. It does not.',
  },
  {
    lo: 20, hi: 44, label: 'Broad experience',
    guide: 'Most of the list applies. In practice this usually reflects age, independence and opportunity — travel, money, nightlife and legal items fill up over time for anyone whose life takes them through them. It is not a measure of recklessness, though the framing of the test invites you to read it that way.',
  },
  {
    lo: 0, hi: 19, label: 'Very broad experience',
    guide: 'Genuinely uncommon. Scoring here means nearly every item on a hundred-item list applies to you, which is rarer than people assume, because the final category is deliberately made up of unusual experiences.',
  },
];

const FAQS = [
  {
    q: 'Is a higher score better?',
    a: 'No. It is a count of things that have not happened, and there is no version of that which is straightforwardly good or bad.',
  },
  {
    q: 'What is an average score?',
    a: 'Published averages for this test are almost entirely unsourced — see our averages by age page for why we do not repeat them.',
  },
  {
    q: 'Can my score go up?',
    a: 'No. It only counts experiences you have had, and those do not un-happen. If your score rises on a retake, you answered differently, not truthfully differently.',
  },
  {
    q: 'Should I share my score?',
    a: 'Entirely your call. It is worth remembering that a score implies specific things about your life to anyone who knows the list, and you cannot control what they infer.',
  },
];

const FOOT_LINKS = [
  { href: '/rice-purity-test-questions', label: 'All 100 questions' },
  { href: '/rice-purity-test-average-score-by-age', label: 'Averages by age' },
  { href: '/test', label: 'Take the test' },
];

export default function ScoreGuidePage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Score guide' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-3 text-ink">
          What your Rice Purity score means
        </Heading>

        <Text variant="large" className="leading-relaxed text-slate mb-10">
          Every band, what it usually reflects, and the things a score genuinely
          cannot tell you.
        </Text>

        <article className="space-y-8 text-ink max-w-2xl mx-auto">
          <section>
            <Text variant="body" className="leading-relaxed text-ink">
              A Rice Purity score is a count. You start at 100 and lose a point for
              each of a hundred listed experiences you have had. That is the entire
              mechanism, and understanding it is most of what you need to interpret
              your result.
            </Text>
          </section>

          <section>
            <Text variant="body" className="leading-relaxed text-ink">
              It matters because the mechanism has consequences people rarely think
              through. The score has no idea how old you are. It cannot tell the
              difference between one eventful year and a decade of ordinary living. It
              treats a parking fine and an arrest as the same single point. And it
              only counts experiences that happen to be on the list — a person could
              have lived an extraordinary life and still score in the nineties, simply
              because their extraordinary life was not the kind this list asks about.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-ink">
              The five bands
            </Heading>
            <div className="space-y-3">
              {BANDS.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-5 bg-surface border border-line border-l-[6px] border-l-plum-tint rounded-lg p-5"
                >
                  <span className="font-mono font-semibold text-plum sm:w-24 flex-shrink-0">
                    {b.lo} – {b.hi}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-1">
                      {b.label}
                    </h3>
                    <Text variant="body" className="text-sm text-slate leading-relaxed">
                      {b.guide}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              What the score cannot tell you
            </Heading>
            <ul className="space-y-3 list-disc list-inside">
              <li className="text-ink leading-relaxed">
                <strong>Your age</strong>, though age is probably the largest single
                influence on it.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>Anything about how you behave now.</strong> Every item asks
                whether something has ever happened, so a score records your past and
                nothing else.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>Whether you were the person acting or the person it happened
                to.</strong> Several items are ambiguous on this and no version of the
                test resolves it.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>Anything about consent, safety or harm.</strong> A person who
                had a bad experience and a person who had a good one lose the same
                point.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>Anything comparable across countries or decades.</strong>{' '}
                Drinking ages, drug laws and social norms differ enough that the same
                life produces different scores in different places.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Common questions about scores
            </Heading>
            <div className="space-y-2.5">
              {FAQS.map((faq) => (
                <details key={faq.q} className="bg-surface border border-line rounded-lg group">
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold flex justify-between items-center gap-4 text-ink">
                    {faq.q}
                    <span className="text-plum text-xl leading-none group-open:hidden">+</span>
                    <span className="text-plum text-xl leading-none hidden group-open:inline">–</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-ink leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <p className="text-sm pt-6 border-t border-line">
            <strong className="font-mono text-[0.78rem] tracking-widest text-ink">
              KEEP READING&nbsp;&nbsp;
            </strong>
            {FOOT_LINKS.map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && <span className="text-slate">&nbsp;·&nbsp;</span>}
                <Link href={link.href} className="text-plum hover:underline">
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </p>
        </article>
      </main>
    </div>
  );
}