import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Contact Us | RicePurityTestApp Support & Feedback',
  description: 'Get in touch with RicePurityTestApp — contact us for support, feedback, or questions about the Rice Purity Test quiz and blog content.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact Us | RicePurityTestApp Support & Feedback',
    description: 'Contact RicePurityTestApp for support, feedback, or questions about the Rice Purity Test.',
    url: `${BASE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | RicePurityTestApp Support & Feedback',
    description: 'Contact RicePurityTestApp for support and feedback.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Contact Us
        </Heading>

        <div className="space-y-8 text-gray-700">
          <section>
            <Text variant="large" className="leading-relaxed mb-4">
              We'd love to hear from you! Whether you have questions, feedback, or need support, we're here to help.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              General Inquiries
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              For general questions about the Rice Purity Test, please email us at:{' '}
              <a 
                href="mailto:support@ricepuritytestapp.com" 
                className="text-green-500 hover:underline font-semibold"
              >
                support@ricepuritytestapp.com
              </a>
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Privacy & Data Concerns
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you have concerns about privacy or data handling, please review our{' '}
              <a href="/privacy" className="text-green-500 hover:underline">
                Privacy Policy
              </a>
              {' '}or contact us directly.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Technical Support
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Experiencing technical issues? Please include details about your browser, device, and the specific problem you're encountering in your message.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Feedback & Suggestions
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We welcome your feedback and suggestions for improving the Rice Purity Test experience. Your input helps us make the site better for everyone.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Response Time
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We aim to respond to all inquiries within 48 hours. Please note that we may receive a high volume of emails, so thank you for your patience.
            </Text>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-3 text-gray-800">
              Before Contacting Us
            </Heading>
            <Text variant="body" className="text-gray-700 mb-3">
              You might find answers to common questions in our FAQ section on the{' '}
              <a href="/#faq" className="text-green-500 hover:underline">
                homepage
              </a>
              .
            </Text>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Check our <a href="/about" className="text-green-500 hover:underline">About page</a> for information about the test</li>
              <li>Review our <a href="/privacy" className="text-green-500 hover:underline">Privacy Policy</a> for data-related questions</li>
              <li>Read our <a href="/terms" className="text-green-500 hover:underline">Terms of Service</a> for usage guidelines</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
