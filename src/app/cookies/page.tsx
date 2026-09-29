import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';
import { STORAGE_KEYS } from '@/lib/constants';
import { reviewedOn } from '@/lib/dates';
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

const ext = { rel: 'noopener', target: '_blank' } as const;

interface Row {
  name: string;
  where: string;
  purpose: string;
  lifetime: string;
}

/** The three keys the site's own code writes (lib/constants.ts, ScoreSubmit.tsx). */
const STORAGE: Row[] = [
  {
    name: STORAGE_KEYS.ANSWERS,
    where: 'Local storage, this site',
    purpose: 'Remembers which boxes you checked so you can come back to the test',
    lifetime: 'Until you reset the test, press “Start over” or clear site data',
  },
  {
    name: STORAGE_KEYS.SCORE,
    where: 'Local storage, this site',
    purpose: 'Holds your latest score for the results page',
    lifetime: 'Until you reset the test, press “Start over” or clear site data',
  },
  {
    name: 'rpt-score-submitted',
    where: 'Local storage, this site',
    purpose: 'Notes that you already added a score to the optional statistics',
    lifetime: 'Until you clear site data',
  },
];

/** Lifetimes as Google lists them (business.safety.google/adscookies, Analytics help), checked 2026-09-30. */
const ANALYTICS: Row[] = [
  { name: '_ga', where: 'This site (set by Google Analytics)', purpose: 'Tells visits from different browsers apart', lifetime: '2 years' },
  { name: '_ga_<ID>', where: 'This site (set by Google Analytics)', purpose: 'Keeps track of the current session', lifetime: '2 years' },
];

const ADVERTISING: Row[] = [
  { name: '__gads', where: 'This site (set by Google AdSense)', purpose: 'Advertising and security', lifetime: '13 months' },
  { name: '__gpi', where: 'This site (set by Google AdSense)', purpose: 'Advertising and security', lifetime: '13 months' },
  { name: '__eoi', where: 'This site (set by Google AdSense)', purpose: 'Security and fraud prevention', lifetime: '6 months' },
  { name: 'id', where: 'doubleclick.net (Google)', purpose: 'Ad serving, personalization where allowed, and security', lifetime: '13 months in the EEA and UK, 24 months elsewhere' },
  { name: 'test_cookie', where: 'doubleclick.net (Google)', purpose: 'Checks whether your browser accepts cookies', lifetime: '15 minutes' },
];

const CONSENT: Row[] = [
  { name: 'FCCDCF', where: 'This site (set by Google’s consent message)', purpose: 'Stores the choice you made in the consent message', lifetime: '13 months' },
  { name: 'FCNEC', where: 'This site (set by Google’s consent message)', purpose: 'Measures how the consent message is used', lifetime: '365 days' },
];

function CookieTable({ rows, caption }: { rows: Row[]; caption: string }) {
  return (
    <div className="table-wrap">
      <table className="table-clean">
        <caption className="mb-2 text-left text-small text-ink-3">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Where</th>
            <th scope="col">Purpose</th>
            <th scope="col">Lifetime</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="whitespace-nowrap">
                <code>{r.name}</code>
              </td>
              <td>{r.where}</td>
              <td>{r.purpose}</td>
              <td>{r.lifetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <LegalLayout crumb="Cookie Policy" href="/cookies" title="Cookie Policy" meta={`Last updated: ${reviewedOn('/cookies')}`}>
      <p style={{ marginTop: 0 }}>
        This page lists everything this site stores on your device and why. The site&apos;s own code sets no cookies: it
        only uses your browser&apos;s local storage to save your test. Every cookie below is set by Google, for Google
        Analytics and Google AdSense. Our <Link href="/privacy">Privacy Policy</Link> explains the wider picture.
      </p>

      <h2 id="browser-storage">Browser Storage Set by This Site</h2>
      <p>
        Local storage stays on your device. It isn&apos;t sent with requests, and we can&apos;t read it. Your answers are
        never sent anywhere.
      </p>
      <CookieTable rows={STORAGE} caption="Local storage keys written by this site" />

      <h2 id="analytics-cookies">Google Analytics Cookies</h2>
      <p>
        We use Google Analytics to count visits and see which pages are read. It never receives your answers. See{' '}
        <a href="https://support.google.com/analytics/answer/11397207" {...ext}>
          Google&apos;s Analytics cookie page
        </a>
        .
      </p>
      <CookieTable rows={ANALYTICS} caption="Cookies set by Google Analytics" />

      <h2 id="advertising-cookies">Google AdSense Cookies</h2>
      <p>
        Ads on this site are served by Google AdSense. Google and its partners use cookies to show ads, limit how often you
        see the same one, measure them and prevent fraud, and, where you allow it, to personalize them based on your visits
        to this and other sites. The names below are the main ones; Google keeps the full, current list on{' '}
        <a href="https://business.safety.google/adscookies/" {...ext}>
          Cookies used by Google advertising products
        </a>
        , and explains its use of data in{' '}
        <a href="https://policies.google.com/technologies/partner-sites" {...ext}>
          How Google uses information from sites or apps that use our services
        </a>
        .
      </p>
      <CookieTable rows={ADVERTISING} caption="Main cookies set by Google AdSense" />

      <h2 id="consent-cookies">Consent Cookies (EEA, UK and Switzerland)</h2>
      <p>
        Visitors in the EEA, the UK and Switzerland are shown Google&apos;s consent message before advertising and
        analytics cookies are used for personalized ads and related purposes. The message stores your choice in these
        cookies.
      </p>
      <CookieTable rows={CONSENT} caption="Cookies set by Google’s consent message" />

      <h2 id="controls">Your Choices</h2>
      <ul>
        <li>
          <strong>In the EEA, the UK and Switzerland:</strong> make your choice in Google&apos;s consent message. To change
          it, clear this site&apos;s cookies and reload the page; the message will ask again.
        </li>
        <li>
          <strong>Personalized ads, anywhere:</strong> opt out in{' '}
          <a href="https://adssettings.google.com" {...ext}>
            Google&apos;s Ads Settings
          </a>{' '}
          or at{' '}
          <a href="https://optout.aboutads.info/" {...ext}>
            aboutads.info
          </a>
          .
        </li>
        <li>
          <strong>Google Analytics, anywhere:</strong> install{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" {...ext}>
            Google&apos;s opt-out browser add-on
          </a>
          .
        </li>
        <li>
          <strong>Your browser:</strong> you can block or delete cookies in its settings. The test still works. If you
          also block local storage, the test works but won&apos;t remember your progress.
        </li>
      </ul>

      <h2>Related Pages</h2>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </LegalLayout>
  );
}
