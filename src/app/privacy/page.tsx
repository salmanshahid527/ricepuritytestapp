import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rice Purity Test',
  description: 'Privacy Policy for Rice Purity Test - Learn how we protect your privacy and data.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]} />
        <Heading size="3xl" className="mb-6">
          Privacy Policy
        </Heading>
        <Text variant="small" color="muted" className="mb-8">
          Last updated: January 16, 2026
        </Text>

        <div className="space-y-8 text-gray-700">
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Data Collection
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We do not collect, store, or track any personal information. The Rice Purity Test is completely anonymous. Your answers are processed locally in your browser and are never sent to our servers.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Cookies
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We use minimal cookies for site functionality only. These cookies are essential for the website to function properly and do not track your personal information or test answers.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Third-Party Services
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We may use analytics services (such as Google Analytics) to understand site usage patterns. These services collect anonymous, aggregated data and do not identify individual users or their test responses.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Data Security
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Since we do not collect or store your test answers, there is no risk of data breaches or unauthorized access to your responses. All processing happens locally on your device.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Children's Privacy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Our service is intended for users aged 13 and above. We do not knowingly collect information from children under 13.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Changes to This Policy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Contact
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us through our{' '}
              <a href="/contact" className="text-green-500 hover:underline">
                contact page
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
