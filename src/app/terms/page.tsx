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
  title: 'Terms of Service | RicePurityTestApp',
  description:
    'Read the Terms of Service for RicePurityTestApp, including rules for using the site, content ownership, score submissions, liability, and governing law.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | RicePurityTestApp',
    description:
      'Terms governing the use of RicePurityTestApp, including content ownership, anonymous score submissions, and site liability.',
    url: `${BASE_URL}/terms`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | RicePurityTestApp',
    description:
      'Read the Terms of Service for RicePurityTestApp.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Service' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-4">
          Terms of Service
        </Heading>

        <Text variant="small" color="muted" className="mb-8">
          Last updated: August 13, 2026
        </Text>

        <div className="space-y-10 text-gray-700">
          {/* Using This Site */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Using This Site
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              By using ricepuritytestapp.com you agree to these terms. If you
              do not agree, please do not use the site.
            </Text>

            <Text variant="body" className="leading-relaxed">
              You must be 18 or older to take the test.
            </Text>
          </section>

          {/* What the Test Is */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Test Is
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              The test is provided for entertainment and self-reflection.
            </Text>

            <Text variant="body" className="mb-4 leading-relaxed">
              It is not a psychological, medical, or diagnostic instrument, it
              has not been validated, and no result it produces should be used
              to make a decision about anyone.
            </Text>
          </section>

          {/* No Affiliation */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              No Affiliation
            </Heading>

            <Text variant="body" className="leading-relaxed">
              This site is not affiliated with, endorsed by, or connected to
              Rice University or any other institution. Names used are for
              identification only.
            </Text>
          </section>

          {/* Content and Ownership */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Content and Ownership
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              The hundred-item question set, the written content, the design,
              and the brand marks on this site are original works owned by
              Teknoesis.
            </Text>

            <Text variant="body" className="leading-relaxed">
              You are welcome to link to any page and to quote briefly with
              attribution. Reproducing the question set or substantial page
              content elsewhere is not permitted.
            </Text>
          </section>

          {/* Your Submissions */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Your Submissions
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              If you choose to add your score to our statistics, you grant
              permission for it to be included in aggregate figures published
              on this site.
            </Text>

            <Text variant="body" className="leading-relaxed">
              Submissions are anonymous and cannot be withdrawn individually
              because they are not linked to you.
            </Text>
          </section>

          {/* Availability and Liability */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Availability and Liability
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              The site is provided as is.
            </Text>
            <Text variant="body" className="mb-4 leading-relaxed">
              We do not guarantee that it will be available, accurate, or
              uninterrupted.
            </Text>

            <Text variant="body" className="leading-relaxed">
              To the fullest extent permitted by law, we are not liable for
              any loss arising from use of the site.
            </Text>
          </section>

          {/* Contact and Governing Law */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Contact and Governing Law
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              Questions can be sent to{' '}
              <a
                href="mailto:contact@ricepuritytestapp.com"
                className="text-green-600 underline hover:text-green-700"
              >
                contact@ricepuritytestapp.com
              </a>
              .
            </Text>

            <Text variant="body" className="leading-relaxed">
              These terms are governed by the laws of the United States.
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