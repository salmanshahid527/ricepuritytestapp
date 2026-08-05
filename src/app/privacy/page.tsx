import React from 'react';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rice Purity Test',
  description: 'Rice Purity Test privacy policy — 100% anonymous, no data collection, no tracking. Your answers stay on your device.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6 text-ink">
          Privacy Policy
        </Heading>
        <Text variant="small" color="muted" className="mb-8">
          Last updated: 30 july 2026
        </Text>

        <div className="space-y-8 text-ink">
          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Data Collection & Privacy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
        We do not collect, store, or track any personal information. The Rice Purity Test is completely anonymous. Your test answers are processed locally within your browser and are never transmitted to or stored on our servers.            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Cookies and Web Beacons
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
      We use cookies to store information about visitors' preferences and to record user-specific information on which pages the user accesses or visits. This helps us optimize the user experience.            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Third-Party Services & Advertising
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
We may use third-party services, including Google Analytics and Google AdSense, to analyze traffic and display advertisements on our website.
Google, as a third-party vendor, uses cookies to serve ads based on users' prior visits to our website or other websites on the internet.
Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
Users may opt out of personalized advertising by visiting Google Ads Settings.          
  </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Data Security
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Since we do not collect or store your test answers, there is no risk of data breaches or unauthorized access to your responses. All processing happens locally on your device.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Children's Privacy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
           Our service is intended for users aged 18 and above. We do not knowingly collect personal identifiable information from children under 13.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Changes to This Privacy Policy

            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
      We reserve the right to update or change our Privacy Policy at any time. Any updates will be posted on this page with a revised date.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-ink">
              Contact
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you have any questions  or suggestions about our Privacy Policy, please contact us through our{' '}
              <a href="/contact" className="text-plum hover:underline">
                contact page
              </a>
              .
            </Text>
          </section>
        </div>
      </main>
    </div>
  );
}