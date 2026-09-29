import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';
import { BASE_URL } from '@/lib/site';

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
    description: 'Contact RicePurityTestApp for corrections, suggestions, privacy requests, or press inquiries.',
  },
};

export default function ContactPage() {
  return (
    <LegalLayout crumb="Contact" href="/contact" title="Contact">
      <h2 style={{ marginTop: 0 }}>Get in Touch</h2>
      <p>
        Email <a href="mailto:contact@ricepuritytestapp.com">contact@ricepuritytestapp.com</a> and you will get a reply,
        usually within a few working days.
      </p>
      <p>Use this address for corrections, question suggestions, privacy requests, or anything else related to the site.</p>

      <h2>Press Inquiries</h2>
      <p>
        For press inquiries, email <a href="mailto:press@ricepuritytestapp.com">press@ricepuritytestapp.com</a>.
      </p>

      <h2>Privacy Requests</h2>
      <p>
        For data access, correction, or deletion requests, put <strong>&ldquo;Privacy request&rdquo;</strong> in the subject
        line.
      </p>
      <p>
        See our <Link href="/privacy">Privacy Policy</Link> for information about what we hold, which is very little.
      </p>

      <h2>What We Cannot Help With</h2>
      <p>
        We cannot interpret your score for you beyond what the <Link href="/rice-purity-test-score">score guide</Link>{' '}
        already says.
      </p>
      <p>We also cannot provide medical, psychological, or legal advice.</p>
      <p>
        If you are struggling, there are better places to go for support. In the US you can call or text 988; outside the
        US, findahelpline.com lists free services by country.
      </p>
    </LegalLayout>
  );
}
