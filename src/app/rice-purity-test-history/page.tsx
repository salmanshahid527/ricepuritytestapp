import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'A Short History of the Rice Purity Test',
  description: 'What can be established, what is repeated without evidence, and how a campus questionnaire became a recurring internet phenomenon.',
  keywords: 'rice purity test history, rice purity test origins, rice university purity test',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-history` },
  openGraph: {
    title: 'A Short History of the Rice Purity Test',
    description: 'What can be established, what is repeated without evidence, and how a campus questionnaire became a recurring internet phenomenon.',
    url: `${BASE_URL}/rice-purity-test-history`,
  },
  twitter: { card: 'summary_large_image' },
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'History' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6 text-ink">
          A short history of the Rice Purity Test
        </Heading>

        <article className="space-y-6 text-ink">
          <Text variant="large" className="leading-relaxed">
            What can be established, what is repeated without evidence, and how a
            campus questionnaire became a recurring internet phenomenon.
          </Text>

          <div className="bg-amber-tint border border-[#EBD6B0] border-l-[5px] border-l-signal rounded-lg px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A6420] mb-2">
              Editorial note
            </p>
            <Text variant="body" className="text-sm leading-relaxed">
              The origin story of this test is repeated everywhere online and
              sourced almost nowhere. Where a specific claim needs checking against
              the Rice Thresher archives or the Woodson Research Center, this page
              says so rather than guessing.
            </Text>
          </div>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Campus origins
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test takes its name from Rice University in Houston, Texas, where
              a questionnaire of this kind is understood to have circulated among
              students as an informal orientation-week activity. It was not an
              official university instrument, and it has never been endorsed or
              administered by the university. Accounts describe it as a self-scored
              list passed between students the sort of thing that spreads because
              it is fun to compare, not because anyone designed it to measure
              anything.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Beyond that, the record thins quickly. Specific founding dates
              circulate widely online without attribution, and different sources
              place the origin decades apart.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              From paper to the web
            </Heading>
            <Text variant="body" className="leading-relaxed">
              Like most campus ephemera, the list moved online as soon as students
              had somewhere to put it first on personal and university-hosted
              pages, later on standalone quiz sites. Each move produced variants:
              questions were added, dropped, reworded and reordered, and no single
              version ever became canonical. That is why two people who both say
              they have taken &quot;the Rice Purity Test&quot; may have answered
              substantially different questionnaires.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              The social media revivals
            </Heading>
            <Text variant="body" className="leading-relaxed">
              The test has resurfaced periodically as social platforms have made
              score-sharing easy. Each revival follows a similar pattern: a format
              spreads, scores are posted and compared, dozens of near-identical
              websites appear to serve the search demand, and interest fades until
              the next time.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Why it endures
            </Heading>
            <Text variant="body" className="leading-relaxed">
              Three reasons, none of them to do with accuracy. It produces a single
              number, which is shareable in a way that a paragraph is not. It
              invites comparison without requiring anyone to explain themselves.
              And it is structured so that any score can be read as a story about
              yourself.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              What it is not
            </Heading>
            <Text variant="body" className="leading-relaxed">
              It is not a psychological instrument. It has no validation studies,
              no standardised version, no scoring norms and no clinical use. Nobody
              has established that the total correlates with anything. It is a
              list, and its interest is social rather than diagnostic.
            </Text>
          </section>

          <section className="bg-plum-tint border border-line rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-plum-deep">
              Add yourself to the history
            </Heading>
            <Text variant="body" className="mb-6 text-ink">
              Forty-plus years of people taking this test. Find out where you land.
            </Text>
            <Link href="/test">
              <Button size="lg" variant="primary">Take the Test</Button>
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}