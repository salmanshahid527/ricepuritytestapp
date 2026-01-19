import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Rice Purity Test',
  description: 'Terms of Service for Rice Purity Test - Read our terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service' }
        ]} />
        <Heading size="3xl" className="mb-6">
          Terms of Service
        </Heading>
        <Text variant="small" color="muted" className="mb-8">
          Last updated: January 16, 2026
        </Text>

        <div className="space-y-8 text-gray-700">
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Usage
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test is provided for entertainment purposes only. By using this service, you agree to use it responsibly and in accordance with these terms.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Content
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              All content is provided as-is. The test results are not scientifically validated and should not be used for any serious decision-making purposes. The questions and scoring system are based on the traditional Rice University purity test format.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Age Restriction
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Users must be 13 years of age or older to use this service. If you are under 13, please do not use this website.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Intellectual Property
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test originated at Rice University. This website is an independent implementation of the test format. All website design, code, and original content are the property of ricepuritytestapp.com.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Limitation of Liability
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We are not liable for any consequences resulting from the use of this service. The test is provided for entertainment purposes only, and users take the test at their own discretion.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Changes to Terms
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Contact
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us through our{' '}
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
