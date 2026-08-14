import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | RicePurityTestApp',
  description:
    'Read the RicePurityTestApp privacy policy to learn what information we collect, how test answers are stored, how optional scores are used, and how advertising cookies work.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | RicePurityTestApp',
    description:
      'Learn how RicePurityTestApp handles test answers, optional score submissions, browser storage, server logs, and advertising cookies.',
    url: `${BASE_URL}/privacy`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | RicePurityTestApp',
    description:
      'Learn how RicePurityTestApp handles your information and test data.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-4">
          Privacy Policy
        </Heading>

        <Text variant="small" color="muted" className="mb-8">
          Last updated: August 13, 2026
        </Text>

        <div className="space-y-10 text-gray-700">
          {/* The Short Version */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Short Version
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              We do not ask who you are. Your answers to the test stay in your
              browser.
            </Text>

            <Text variant="body" className="leading-relaxed">
              If you choose to add your score to our statistics, we receive
              three things: a score, an age band, and a country, and nothing
              that identifies you.
            </Text>

            <Text variant="body" className="mt-4 leading-relaxed">
              Our advertising partners set their own cookies, and this policy
              explains how to opt out of personalized ads.
            </Text>
          </section>

          {/* What We Collect */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What We Collect
            </Heading>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      What
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Why
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-800">
                      Where It Lives
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">
                      Your test answers and progress
                    </td>
                    <td className="px-4 py-3">
                      So you can close the tab and come back
                    </td>
                    <td className="px-4 py-3">
                      Local storage in your browser only, never sent to us
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Your age confirmation</td>
                    <td className="px-4 py-3">
                      So the age gate does not reappear
                    </td>
                    <td className="px-4 py-3">
                      Local storage in your browser only
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">An optional submitted score</td>
                    <td className="px-4 py-3">
                      To build the published statistics
                    </td>
                    <td className="px-4 py-3">
                      Our server, only if you choose to submit it
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Standard server logs</td>
                    <td className="px-4 py-3">
                      Security and abuse prevention
                    </td>
                    <td className="px-4 py-3">
                      Our hosting provider, retained for a limited period
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">Advertising cookies</td>
                    <td className="px-4 py-3">To serve ads</td>
                    <td className="px-4 py-3">
                      Set by Google and its advertising partners
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What We Never Collect */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What We Never Collect
            </Heading>

            <ul className="list-disc space-y-3 pl-6 leading-relaxed">
              <li>
                Your individual answers. They are never transmitted to a
                server under any circumstances.
              </li>

              <li>
                Your name, email address, or account details. There are no
                accounts.
              </li>

              <li>
                Anything that identifies you alongside a submitted score.
              </li>
            </ul>
          </section>

          {/* Browser Storage */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Browser Storage
            </Heading>

            <Text variant="body" className="leading-relaxed">
              The test saves your progress using your browser&apos;s local
              storage. This is a store on your own device. It is not a cookie,
              it is not sent with requests, and we cannot read it from our
              servers.
            </Text>

            <Text variant="body" className="mt-4 leading-relaxed">
              You can clear it at any time through your browser&apos;s clear
              browsing data settings.
            </Text>
          </section>

          {/* Advertising and Third-Party Cookies */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Advertising and Third-Party Cookies
            </Heading>

            <ul className="list-disc space-y-3 pl-6 leading-relaxed">
              <li>
                Third-party advertising is served on this site through Google
                AdSense.
              </li>

              <li>
                Google, as a third-party vendor, uses cookies to serve ads on
                this site.
              </li>

              <li>
                Google&apos;s use of advertising cookies allows it and its
                partners to serve ads based on your visits to this site and to
                other sites on the internet.
              </li>

              <li>
                You can opt out of personalized advertising through Google&apos;s
                advertising settings.
              </li>

              <li>
                Broader opt-out tools are also available through independent
                advertising industry services.
              </li>

              <li>
                Third-party vendors operate under their own privacy policies,
                which we do not control.
              </li>

              <li>
                You can disable cookies entirely in your browser. The test
                will still work, but your progress will not be saved.
              </li>
            </ul>
          </section>

          {/* GDPR */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Your Rights in the EU, EEA, and UK (GDPR)
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              Our legal basis for processing is your consent.
            </Text>

            <Text variant="body" className="leading-relaxed">
              You have the right to access, correct, erase, restrict, object
              to, and transfer your data, to withdraw consent at any time, and
              to file a complaint with your national supervisory authority.
            </Text>

            <Text variant="body" className="mt-4 leading-relaxed">
              The data controller is Teknoesis. You can contact us at{' '}
              <a
                href="mailto:contact@ricepuritytestapp.com"
                className="text-green-600 underline hover:text-green-700"
              >
                contact@ricepuritytestapp.com
              </a>
              .
            </Text>
          </section>

          {/* California Privacy Rights */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Your Rights in California (CCPA/CPRA)
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              Categories collected in the past twelve months include internet
              activity, device and connection information from server logs,
              and, only if you chose to submit it, a score with an age band and
              a country.
            </Text>

            <Text variant="body" className="leading-relaxed">
              We do not sell your personal information, and we do not share it
              for cross-context behavioral advertising outside of the
              advertising cookies described above, which you can opt out of
              using the available controls.
            </Text>
          </section>

          {/* Age */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Age
            </Heading>

            <Text variant="body" className="mb-4 leading-relaxed">
              This site is intended for adults aged 18 and over.
            </Text>

            <Text variant="body" className="leading-relaxed">
              We do not knowingly collect information from anyone under 18.
              In compliance with COPPA, we do not knowingly collect any
              information from children under 13.
            </Text>
          </section>

          {/* Changes */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Changes
            </Heading>

            <Text variant="body" className="leading-relaxed">
              If this policy changes in a meaningful way, we will update the
              date at the top and, where the change affects consent, ask for
              consent again.
            </Text>
          </section>

          {/* Contact */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Contact
            </Heading>

            <Text variant="body" className="leading-relaxed">
              If you have questions about this Privacy Policy or want to make
              a privacy request, please contact us at{' '}
              <a
                href="mailto:contact@ricepuritytestapp.com"
                className="text-green-600 underline hover:text-green-700"
              >
                contact@ricepuritytestapp.com
              </a>
              .
            </Text>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}