import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';

import { BASE_URL } from '@/lib/site';

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
    description: 'Learn how RicePurityTestApp handles your information and test data.',
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout crumb="Privacy Policy" href="/privacy" title="Privacy Policy" meta="Last updated: August 13, 2026">
      <h2>The Short Version</h2>
      <p>We do not ask who you are. Your answers to the test stay in your browser.</p>
      <p>
        If you choose to add your score to our statistics, we receive three things: a score, an age band, and a country,
        and nothing that identifies you.
      </p>
      <p>
        Our advertising partners set their own cookies, and this policy explains how to opt out of personalized ads.
      </p>
      <h2>What We Collect</h2>
      <div className="table-wrap">
        <table className="table-clean">
          <thead>
            <tr>
              <th scope="col">What</th>
              <th scope="col">Why</th>
              <th scope="col">Where It Lives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your test answers and progress</td>
              <td>So you can close the tab and come back</td>
              <td>Local storage in your browser only, never sent to us</td>
            </tr>
            <tr>
              <td>Your age confirmation</td>
              <td>So the age gate does not reappear</td>
              <td>Local storage in your browser only</td>
            </tr>
            <tr>
              <td>An optional submitted score</td>
              <td>To build the published statistics</td>
              <td>Our server, only if you choose to submit it</td>
            </tr>
            <tr>
              <td>Standard server logs</td>
              <td>Security and abuse prevention</td>
              <td>Our hosting provider, retained for a limited period</td>
            </tr>
            <tr>
              <td>Advertising cookies</td>
              <td>To serve ads</td>
              <td>Set by Google and its advertising partners</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>What We Never Collect</h2>
      <ul>
        <li>Your individual answers. They are never transmitted to a server under any circumstances.</li>
        <li>Your name, email address, or account details. There are no accounts.</li>
        <li>Anything that identifies you alongside a submitted score.</li>
      </ul>
      <h2>Browser Storage</h2>
      <p>
        The test saves your progress using your browser&apos;s local storage. This is a store on your own device. It is
        not a cookie, it is not sent with requests, and we cannot read it from our servers.
      </p>
      <p>You can clear it at any time through your browser&apos;s clear browsing data settings.</p>
      <h2>Advertising and Third-Party Cookies</h2>
      <ul>
        <li>Third-party advertising is served on this site through Google AdSense.</li>
        <li>Google, as a third-party vendor, uses cookies to serve ads on this site.</li>
        <li>
          Google&apos;s use of advertising cookies allows it and its partners to serve ads based on your visits to this
          site and to other sites on the internet.
        </li>
        <li>You can opt out of personalized advertising through Google&apos;s advertising settings.</li>
        <li>Broader opt-out tools are also available through independent advertising industry services.</li>
        <li>Third-party vendors operate under their own privacy policies, which we do not control.</li>
        <li>
          You can disable cookies entirely in your browser. The test will still work, but your progress will not be
          saved.
        </li>
      </ul>
      <h2>Your Rights in the EU, EEA, and UK (GDPR)</h2>
      <p>Our legal basis for processing is your consent.</p>
      <p>
        You have the right to access, correct, erase, restrict, object to, and transfer your data, to withdraw consent
        at any time, and to file a complaint with your national supervisory authority.
      </p>
      <p>
        The data controller is Teknoesis. You can contact us at{' '}
        <a href="mailto:contact@ricepuritytestapp.com">contact@ricepuritytestapp.com</a>.
      </p>
      <h2>Your Rights in California (CCPA/CPRA)</h2>
      <p>
        Categories collected in the past twelve months include internet activity, device and connection information from
        server logs, and, only if you chose to submit it, a score with an age band and a country.
      </p>
      <p>
        We do not sell your personal information, and we do not share it for cross-context behavioral advertising
        outside of the advertising cookies described above, which you can opt out of using the available controls.
      </p>
      <h2>Age</h2>
      <p>This site is intended for adults aged 18 and over.</p>
      <p>
        We do not knowingly collect information from anyone under 18. In compliance with COPPA, we do not knowingly
        collect any information from children under 13.
      </p>
      <h2>Changes</h2>
      <p>
        If this policy changes in a meaningful way, we will update the date at the top and, where the change affects
        consent, ask for consent again.
      </p>
      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy or want to make a privacy request, please contact us at{' '}
        <a href="mailto:contact@ricepuritytestapp.com">contact@ricepuritytestapp.com</a>.
      </p>
    </LegalLayout>
  );
}
