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
  title: 'Contact RicePurityTestApp',
  description:
    'Contact RicePurityTestApp for corrections, question suggestions, privacy requests, press inquiries, or other questions.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact RicePurityTestApp',
    description:
      'Get in touch with RicePurityTestApp for corrections, suggestions, privacy requests, press inquiries, or other questions.',
    url: `${BASE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RicePurityTestApp',
    description:
      'Contact RicePurityTestApp for corrections, suggestions, privacy requests, or press inquiries.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-6">
          Contact
        </Heading>

        <div className="space-y-10 text-gray-700">
          {/* General Contact */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Get in Touch
            </Heading>

            <Text variant="body" className="leading-relaxed">
              Email{' '}
              <a
                href="mailto:contact@ricepuritytestapp.com"
                className="font-semibold text-green-600 hover:underline"
              >
                contact@ricepuritytestapp.com
              </a>{' '}
              and you will get a reply, usually within a few working days.
            </Text>

            <Text variant="body" className="mt-4 leading-relaxed">
              Use this address for corrections, question suggestions, privacy
              requests, or anything else related to the site.
            </Text>
          </section>

          {/* Press */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Press Inquiries
            </Heading>

            <Text variant="body" className="leading-relaxed">
              For press inquiries, email{' '}
              <a
                href="mailto:press@ricepuritytestapp.com"
                className="font-semibold text-green-600 hover:underline"
              >
                press@ricepuritytestapp.com
              </a>
              .
            </Text>
          </section>

          {/* Privacy Requests */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Privacy Requests
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              For data access, correction, or deletion requests, put{' '}
              <strong>"Privacy request"</strong> in the subject line.
            </Text>

            <Text variant="body" className="leading-relaxed">
              See our{' '}
              <Link
                href="/privacy"
                className="text-green-600 underline hover:text-green-700"
              >
                Privacy Policy
              </Link>{' '}
              for information about what we hold, which is very little.
            </Text>
          </section>

          {/* What We Cannot Help With */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What We Cannot Help With
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              We cannot interpret your score for you beyond what the{' '}
              <Link
                href="/rice-purity-test-score"
                className="text-green-600 underline hover:text-green-700"
              >
                score guide
              </Link>{' '}
              already says.
            </Text>

            <Text variant="body" className="mb-4 leading-relaxed">
              We also cannot provide medical, psychological, or legal advice.
            </Text>

            <Text variant="body" className="leading-relaxed">
              If you are struggling, our{' '}
              <Link
                href="/help"
                className="text-green-600 underline hover:text-green-700"
              >
                help resources page
              </Link>{' '}
              lists better places to go for support.
            </Text>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}