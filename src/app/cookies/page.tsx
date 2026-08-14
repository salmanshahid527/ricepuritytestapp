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
  title: 'Cookie Policy | RicePurityTestApp',
  description:
    'Learn what cookies and browser storage RicePurityTestApp uses, why they are used, how long they last, and how to manage your choices.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/cookies`,
  },
  openGraph: {
    title: 'Cookie Policy | RicePurityTestApp',
    description:
      'Learn what is stored on your device, why it is stored, and how to manage cookie choices on RicePurityTestApp.',
    url: `${BASE_URL}/cookies`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | RicePurityTestApp',
    description:
      'Learn about cookies and browser storage used by RicePurityTestApp.',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Cookie Policy' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-6">
          Cookie Policy
        </Heading>

        <div className="space-y-10 text-gray-700">
          {/* Introduction */}
          <section>
            <Text variant="large" className="leading-relaxed">
              This page lists what is stored on your device and why. Our{' '}
              <Link
                href="/privacy"
                className="text-green-600 underline hover:text-green-700"
              >
                Privacy Policy
              </Link>{' '}
              explains the wider picture.
            </Text>
          </section>

          {/* Cookies and Storage */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Cookies and Storage We Use
            </Heading>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Name / Type
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Set By
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Purpose
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Lifetime
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      <code>rpt_progress</code>
                      <br />
                      <span className="text-sm text-gray-500">
                        Local storage
                      </span>
                    </td>
                    <td className="px-4 py-3">This site</td>
                    <td className="px-4 py-3">
                      Saves your answers so you can return
                    </td>
                    <td className="px-4 py-3">
                      Until you clear browsing data
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      <code>rpt_age_ok</code>
                      <br />
                      <span className="text-sm text-gray-500">
                        Local storage
                      </span>
                    </td>
                    <td className="px-4 py-3">This site</td>
                    <td className="px-4 py-3">
                      Remembers your age confirmation
                    </td>
                    <td className="px-4 py-3">
                      Until you clear browsing data
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      <code>rpt_consent</code>
                    </td>
                    <td className="px-4 py-3">
                      This site / consent tool
                    </td>
                    <td className="px-4 py-3">
                      Records your cookie choices
                    </td>
                    <td className="px-4 py-3">12 months</td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      Analytics cookies
                    </td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">
                      Aggregate page statistics
                    </td>
                    <td className="px-4 py-3">26 months</td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      Advertising cookies
                    </td>
                    <td className="px-4 py-3">Google and partners</td>
                    <td className="px-4 py-3">
                      Ad delivery and frequency capping
                    </td>
                    <td className="px-4 py-3">Set by the provider</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">
                      DoubleClick DART
                    </td>
                    <td className="px-4 py-3">Google</td>
                    <td className="px-4 py-3">
                      Ad serving based on visits to this and other sites
                    </td>
                    <td className="px-4 py-3">Set by Google</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Controls */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Controls
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              You can change your choices at any time through the manage
              choices link in the footer.
            </Text>

            <Text variant="body" className="mb-4 leading-relaxed">
              You can opt out of personalized Google advertising through
              Google&apos;s advertising settings.
            </Text>

            <Text variant="body" className="leading-relaxed">
              You can also block or delete cookies in your browser settings.
              The site will still work.
            </Text>
          </section>

          {/* Related Pages */}
          <section className="border-t border-gray-200 pt-8">
            <Heading size="xl" className="mb-4">
              Related Pages
            </Heading>

            <div className="flex flex-wrap gap-4">
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