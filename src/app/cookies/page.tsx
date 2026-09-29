import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';

import { BASE_URL } from '@/lib/site';

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
    description: 'Learn about cookies and browser storage used by RicePurityTestApp.',
  },
};

export default function CookiesPage() {
  return (
    <LegalLayout crumb="Cookie Policy" href="/cookies" title="Cookie Policy">
      <p>
        This page lists what is stored on your device and why. Our <Link href="/privacy">Privacy Policy</Link> explains
        the wider picture.
      </p>
      <h2>Cookies and Storage We Use</h2>
      <div className="table-wrap">
        <table className="table-clean">
          <thead>
            <tr>
              <th scope="col">Name / Type</th>
              <th scope="col">Set By</th>
              <th scope="col">Purpose</th>
              <th scope="col">Lifetime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>rpt_progress</code>
                <br />
                <span className="text-xs text-ink-3">Local storage</span>
              </td>
              <td>This site</td>
              <td>Saves your answers so you can return</td>
              <td>Until you clear browsing data</td>
            </tr>
            <tr>
              <td>
                <code>rpt_age_ok</code>
                <br />
                <span className="text-xs text-ink-3">Local storage</span>
              </td>
              <td>This site</td>
              <td>Remembers your age confirmation</td>
              <td>Until you clear browsing data</td>
            </tr>
            <tr>
              <td>
                <code>rpt_consent</code>
              </td>
              <td>This site / consent tool</td>
              <td>Records your cookie choices</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td>Analytics cookies</td>
              <td>Google Analytics</td>
              <td>Aggregate page statistics</td>
              <td>26 months</td>
            </tr>
            <tr>
              <td>Advertising cookies</td>
              <td>Google and partners</td>
              <td>Ad delivery and frequency capping</td>
              <td>Set by the provider</td>
            </tr>
            <tr>
              <td>DoubleClick DART</td>
              <td>Google</td>
              <td>Ad serving based on visits to this and other sites</td>
              <td>Set by Google</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Controls</h2>
      <p>You can change your choices at any time through the manage choices link in the footer.</p>
      <p>You can opt out of personalized Google advertising through Google&apos;s advertising settings.</p>
      <p>You can also block or delete cookies in your browser settings. The site will still work.</p>
      <h2>Related Pages</h2>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </LegalLayout>
  );
}
