import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Average Rice Purity Score by Age | What Is Actually Known',
  description: 'What age genuinely changes about your Rice Purity score, and why we do not publish unsourced average tables.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-average-score-by-age` },
  openGraph: {
    title: 'Average Rice Purity Score by Age | What Is Actually Known',
    description: 'What age genuinely changes about your Rice Purity score, and why we do not publish unsourced average tables.',
    url: `${BASE_URL}/rice-purity-test-average-score-by-age`,
  },
  twitter: { card: 'summary_large_image' },
};

const FOOT_LINKS = [
  { href: '/rice-purity-test-score', label: 'Score guide' },
  { href: '/rice-purity-test-questions', label: 'All 100 questions' },
  { href: '/test', label: 'Take the test' },
];

export default function AverageScoreByAgePage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Averages by age' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-3 text-ink">
          Average Rice Purity scores by age: what is actually known
        </Heading>

        <Text variant="large" className="leading-relaxed text-slate mb-8">
          Short version: far less than the internet suggests.
        </Text>

        <article className="space-y-10">
          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Why we do not publish a table of averages
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4 text-ink">
              Search for an average Rice Purity score by age and you will find plenty of
              tables. Almost none of them cite a source. Where a source is given, it is
              usually another site with a table of its own. There is no published,
              methodologically sound dataset for this test — it is an informal
              questionnaire that has circulated for decades in dozens of variants, and
              nobody has run a representative survey on it.
            </Text>
            <Text variant="body" className="leading-relaxed text-ink">
              Repeating those numbers would be easy and it would be wrong, so this page
              does not. Instead it explains what age actually does to a score, which is
              more useful and happens to be true.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-ink">
              What age genuinely changes
            </Heading>
            <ul className="list-disc list-inside space-y-3 ml-1">
              <li className="text-ink leading-relaxed">
                <strong>Early adulthood is where the ordinary items fill in.</strong>{' '}
                First relationships, first drinks, first nights out — the largest and
                fastest-moving categories.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>The middle years fill in slowly.</strong> Travel, money, work
                and legal items accumulate steadily but not dramatically.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>The rare items rarely fill in at all.</strong> The final
                category is uncommon by design.
              </li>
              <li className="text-ink leading-relaxed">
                <strong>Circumstance outweighs age at the edges.</strong> Money,
                geography and legal environment change which items are even available
                to a person.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              What we are doing instead
            </Heading>
            <Text variant="body" className="leading-relaxed mb-6 text-ink">
              At the end of the test there is an optional prompt to add your score
              anonymously. It collects three things — the score, an age band and a
              country — and nothing else. Once enough responses have come in, this page
              will carry a real table with a real sample size next to it, and it will
              say plainly how the data was gathered and what its limitations are.
            </Text>

            <p className="font-mono text-xs uppercase tracking-widest text-plum mb-3">
              Placeholder — not published until populated
            </p>

            <table className="w-full border-collapse text-sm mb-3">
              <thead>
                <tr>
                  <th className="bg-plum-deep text-white font-mono text-[0.72rem] font-semibold tracking-widest uppercase text-left px-3 py-3">
                    Age band
                  </th>
                  <th className="bg-plum-deep text-white font-mono text-[0.72rem] font-semibold tracking-widest uppercase text-left px-3 py-3">
                    Median score
                  </th>
                  <th className="bg-plum-deep text-white font-mono text-[0.72rem] font-semibold tracking-widest uppercase text-left px-3 py-3">
                    Responses
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['18–20', '—', '—'],
                  ['21–24', '—', '—'],
                  ['25–29', '—', '—'],
                  ['30–39', '—', '—'],
                  ['40+', '—', '—'],
                ].map(([band, median, responses], i) => (
                  <tr key={band}>
                    <td className={`border border-line px-3 py-2.5 ${i % 2 === 1 ? 'bg-bone' : 'bg-surface'}`}>
                      {band}
                    </td>
                    <td className={`border border-line px-3 py-2.5 ${i % 2 === 1 ? 'bg-bone' : 'bg-surface'}`}>
                      {median}
                    </td>
                    <td className={`border border-line px-3 py-2.5 ${i % 2 === 1 ? 'bg-bone' : 'bg-surface'}`}>
                      {responses}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Text variant="body" className="text-sm text-slate">
              A band appears only once it holds at least a few hundred responses, and
              the count is shown next to every figure. A table with &quot;n = 412&quot;
              beside it is credible. A table with no denominator is not.
            </Text>
          </section>

          <p className="text-sm pt-4 border-t border-line">
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
      {/* <Footer /> */}
    </div>
  );
}