import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';

import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Disclaimer | RicePurityTestApp',
  description:
    'Read the RicePurityTestApp disclaimer. The test is for entertainment and self-reflection only and is not a psychological, medical, or legal assessment.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/disclaimer`,
  },
  openGraph: {
    title: 'Disclaimer | RicePurityTestApp',
    description:
      'Important information about the purpose, limitations, accuracy, and intended use of the RicePurityTestApp.',
    url: `${BASE_URL}/disclaimer`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | RicePurityTestApp',
    description: 'Important information about the RicePurityTestApp and its intended use.',
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout crumb="Disclaimer" href="/disclaimer" title="Disclaimer">
      <h2>Entertainment Only</h2>
      <p>
        Everything on this site is for entertainment and self-reflection. The test is an informal questionnaire, not a
        psychological assessment. It has no validated scoring, no clinical use, and no predictive value.
      </p>
      <p>A score does not describe your character, your health, or your future.</p>
      <h2>Not Professional Advice</h2>
      <p>Nothing here is medical, psychological, or legal advice.</p>
      <p>
        If you are worried about your health, your wellbeing, or your safety, speak to a qualified professional. In the
        US you can call or text 988; outside the US, findahelpline.com lists free services by country.
      </p>
      <h2>No Affiliation</h2>
      <p>This site is not affiliated with, endorsed by, or connected to Rice University.</p>
      <p>There is no official version of this test, and this site does not claim to publish one.</p>
      <h2>Accuracy</h2>
      <p>
        We try to be accurate. Figures based on reader data are published with the number of responses behind them;
        everything else is clearly labelled as an estimate.
      </p>
      <p>
        Where we do not have data, we say so. If you find an error, tell us and we will correct it and note the
        correction.
      </p>
      <h2>Age</h2>
      <p>This site is intended for adults aged 18 and over.</p>
      <h2>Related Pages</h2>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </LegalLayout>
  );
}
