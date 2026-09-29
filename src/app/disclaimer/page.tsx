import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Disclaimer | RicePurityTestApp',
  description:
    'Read the RicePurityTestApp disclaimer. The test is for entertainment and self-reflection only and is not a psychological, medical, or legal assessment.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/disclaimer`,
  },
  openGraph: {
    title: 'Disclaimer | RicePurityTestApp',
    description:
      'Important information about the purpose, limitations, accuracy, and intended use of the RicePurityTestApp.',
    url: `${BASE_URL}/disclaimer`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | RicePurityTestApp',
    description:
      'Important information about the RicePurityTestApp and its intended use.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Disclaimer' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-6">
          Disclaimer
        </Heading>

        <div className="space-y-10 text-gray-700">
          {/* Entertainment Only */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Entertainment Only
            </Heading>

            <Text variant="body" className="leading-relaxed">
              Everything on this site is for entertainment and self-reflection.
              The test is an informal questionnaire, not a psychological
              assessment. It has no validated scoring, no clinical use, and no
              predictive value.
            </Text>

            <Text variant="body" className="mt-4 leading-relaxed">
              A score does not describe your character, your health, or your
              future.
            </Text>
          </section>

          {/* Not Professional Advice */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Not Professional Advice
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              Nothing here is medical, psychological, or legal advice.
            </Text>

            <Text variant="body" className="leading-relaxed">
              If you are worried about your health, your wellbeing, or your
              safety, speak to a qualified professional. Our{' '}
              <Link
                href="/help"
                className="text-green-600 underline hover:text-green-700"
              >
                help resources page
              </Link>{' '}
              lists places to start.
            </Text>
          </section>

          {/* No Affiliation */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              No Affiliation
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              This site is not affiliated with, endorsed by, or connected to
              Rice University.
            </Text>

            <Text variant="body" className="leading-relaxed">
              There is no official version of this test, and this site does
              not claim to publish one.
            </Text>
          </section>

          {/* Accuracy */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Accuracy
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              We try to be accurate. Figures based on reader data are published
              with the number of responses behind them; everything else is
              clearly labelled as an estimate.
            </Text>

            <Text variant="body" className="leading-relaxed">
              Where we do not have data, we say so. If you find an error, tell
              us and we will correct it and note the correction.
            </Text>
          </section>

          {/* Age */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Age
            </Heading>

            <Text variant="body" className="leading-relaxed">
              This site is intended for adults aged 18 and over.
            </Text>
          </section>

          {/* Related Pages */}
          <section className="border-t border-gray-200 pt-8">
            <Heading size="xl" className="mb-4">
              Related Pages
            </Heading>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="text-green-600 underline hover:text-green-700"
              >
                About
              </Link>

              <Link
                href="/privacy"
                className="text-green-600 underline hover:text-green-700"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-green-600 underline hover:text-green-700"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-green-600 underline hover:text-green-700"
              >
                Contact
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}