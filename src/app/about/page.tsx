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
  title: 'About RicePurityTestApp – Who We Are & How It Works',
  description:
    'Learn about RicePurityTestApp, who runs it, how the 100 questions were created, how anonymous score data works, and what the test is not.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About RicePurityTestApp – Who We Are & How It Works',
    description:
      'Learn who runs RicePurityTestApp, how the question set was built, how anonymous data works, and what the test is not.',
    url: `${BASE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RicePurityTestApp – Who We Are & How It Works',
    description:
      'Learn more about RicePurityTestApp, how it works, and who runs the site.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-6">
          About This Site
        </Heading>

        <div className="space-y-10 text-gray-700">
          {/* Who Runs It */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Who Runs It
            </Heading>

            <Text variant="body" className="leading-relaxed">
              This site is run by Teknoesis. You can reach us at{' '}
              <a
                href="mailto:contact@ricepuritytestapp.com"
                className="text-green-600 underline hover:text-green-700"
              >
                contact@ricepuritytestapp.com
              </a>
              .
            </Text>
          </section>

          {/* Why It Exists */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why It Exists
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              There are many versions of this test online, and most of them
              are the same page repeated: the same hundred questions, the same
              score, no explanation, and no one standing behind the content.
            </Text>

            <Text variant="body" className="leading-relaxed">
              This site tries to be different in three specific ways. Every
              question is explained in plain English, and we say exactly how our
              list differs from the original. Estimates are labelled as
              estimates, and figures from reader data are published with the
              number of responses behind them. And there is a named company you
              can contact behind it.
            </Text>
          </section>

          {/* How the Question Set Was Built */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Question Set Was Built
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              The hundred items follow the widely shared version of the test
              that grew out of the Rice University student tradition, ordered
              roughly from common experiences to rare ones. We reworded items
              that used &ldquo;MPS&rdquo; so they are gender-neutral, and replaced
              three items.
            </Text>

            <Text variant="body" className="leading-relaxed">
              Items that score things we do not think should be scored, such
              as anything involving family members, animals, minors, or
              self-harm, are not included; that is why three items differ from
              other versions. The list is reviewed regularly, and the review
              date is shown on the questions page.
            </Text>
          </section>

          {/* How the Data Works */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Data Works
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              {process.env.NEXT_PUBLIC_STATS_ENABLED === '1'
                ? 'Readers can choose to add their score anonymously after finishing the test. We store the score, an age band, and a country.'
                : 'We are setting up an optional way for readers to add their score anonymously after finishing the test. When it is live, we will store only the score, an age band, and a country.'}
            </Text>

            <Text variant="body" className="mb-4 leading-relaxed">
              We never store individual answers, and we never store anything
              that identifies a person.
            </Text>

            <Text variant="body" className="leading-relaxed">
              Aggregate figures are published with the number of responses
              behind them. Where we have no data, we say so instead of
              guessing.
            </Text>
          </section>

          {/* What This Site Is Not */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What This Site Is Not
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              It is not affiliated with, endorsed by, or connected to Rice
              University.
            </Text>

            <Text variant="body" className="mb-4 leading-relaxed">
              It is not a psychological assessment, and it does not diagnose
              anything.
            </Text>

            <Text variant="body" className="leading-relaxed">
              It is intended for adults aged 18 and over.
            </Text>
          </section>

          {/* Corrections */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Corrections
            </Heading>

            <Text variant="body" className="leading-relaxed">
              If something here is wrong, tell me and I will fix it.
              Corrections to published pages are noted at the bottom of the
              page along with the date.
            </Text>
          </section>

          {/* CTA */}
          <section className="pt-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <Heading size="lg" className="mb-4 text-green-600">
                Ready to Take the Test?
              </Heading>

              <Text variant="body" className="mb-6 text-gray-700">
                Take the Rice Purity Test and see your score when you finish.
              </Text>

              <Link href="/test">
                <Button size="lg">Start the Test</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}