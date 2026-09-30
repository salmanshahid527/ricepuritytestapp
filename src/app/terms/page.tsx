import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';

import { BASE_URL } from '@/lib/site';

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
    description: 'Read the Terms of Service for RicePurityTestApp.',
  },
};

export default function TermsPage() {
  return (
    <LegalLayout crumb="Terms of Service" href="/terms" title="Terms of Service" meta="Last updated: August 13, 2026">
      <h2>Using This Site</h2>
      <p>By using ricepuritytestapp.com you agree to these terms. If you do not agree, please do not use the site.</p>
      <p>You must be 18 or older to take the test.</p>
      <h2>What the Test Is</h2>
      <p>The test is provided for entertainment and self-reflection.</p>
      <p>
        It is not a psychological, medical, or diagnostic instrument, it has not been validated, and no result it
        produces should be used to make a decision about anyone.
      </p>
      <h2>No Affiliation</h2>
      <p>
        This site is not affiliated with, endorsed by, or connected to Rice University or any other institution. Names
        used are for identification only.
      </p>
      <h2>Content and Ownership</h2>
      <p>
        The hundred-item question set, the written content, the design, and the brand marks on this site are original
        works owned by Teknoesis.
      </p>
      <p>
        You are welcome to link to any page and to quote briefly with attribution. Reproducing the question set or
        substantial page content elsewhere is not permitted.
      </p>
      <h2>Your Submissions</h2>
      <p>
        If you choose to add your score to our statistics, you grant permission for it to be included in aggregate
        figures published on this site.
      </p>
      <p>Submissions are anonymous and cannot be withdrawn individually because they are not linked to you.</p>
      <h2>Availability and Liability</h2>
      <p>The site is provided as is.</p>
      <p>We do not guarantee that it will be available, accurate, or uninterrupted.</p>
      <p>To the fullest extent permitted by law, we are not liable for any loss arising from use of the site.</p>
      <h2>Contact and Governing Law</h2>
      <p>
        Questions can be sent to <a href="mailto:contact@ricepuritytestapp.com">contact@ricepuritytestapp.com</a>.
      </p>
      <p>These terms are governed by the laws of the United States.</p>
      <h2>Related Pages</h2>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </LegalLayout>
  );
}
