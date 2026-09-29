import Link from 'next/link';
import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';
import { STORAGE_KEYS } from '@/lib/constants';
import { reviewedOn } from '@/lib/dates';
import { BASE_URL, CONTACT_EMAIL, PUBLISHER, STATS_ENABLED } from '@/lib/site';

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

/** Google's own pages, linked where AdSense and Analytics are described. */
const GOOGLE = {
  partnerSites: 'https://policies.google.com/technologies/partner-sites',
  privacy: 'https://policies.google.com/privacy',
  adsSettings: 'https://adssettings.google.com',
  adCookies: 'https://business.safety.google/adscookies/',
  gaCookies: 'https://support.google.com/analytics/answer/11397207',
  gaOptOut: 'https://tools.google.com/dlpage/gaoptout',
};

const ext = { rel: 'noopener', target: '_blank' } as const;

/**
 * Every statement here is checked against the code: the three localStorage keys
 * (lib/constants.ts, ScoreSubmit.tsx), the Google tags in app/layout.tsx, the
 * `test_complete` event (TestForm.tsx) and the opt-in store (lib/stats.ts,
 * app/api/scores/route.ts). Update this page whenever one of those changes.
 */
export default function PrivacyPage() {
  return (
    <LegalLayout crumb="Privacy Policy" href="/privacy" title="Privacy Policy" meta={`Last updated: ${reviewedOn('/privacy')}`}>
      <h2 style={{ marginTop: 0 }}>The Short Version</h2>
      <ul>
        <li>There are no accounts, and we never ask who you are.</li>
        <li>Your test answers are saved only in your own browser. They are never sent to us or to anyone else.</li>
        <li>
          We use Google Analytics to count visits and Google AdSense to show ads. Both use cookies. Visitors in the EEA,
          the UK and Switzerland are asked for their choice first, through Google&apos;s consent message.
        </li>
        <li>
          If you choose to add your score to our anonymous statistics, we receive the score and an age band, never your
          answers.
        </li>
      </ul>

      <h2>Who We Are</h2>
      <p>
        ricepuritytestapp.com is run by {PUBLISHER}, the data controller for this site. For any privacy question or
        request, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2 id="browser-storage">What Stays in Your Browser</h2>
      <p>
        The test saves your progress in your browser&apos;s local storage. This is a store on your own device: it is not a
        cookie, it is not sent with requests, and we cannot read it from our servers.
      </p>
      <div className="table-wrap">
        <table className="table-clean">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">What it holds</th>
              <th scope="col">How long</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{STORAGE_KEYS.ANSWERS}</code>
              </td>
              <td>Which boxes you have checked, so you can close the tab and come back</td>
              <td>Until you reset the test, press &ldquo;Start over&rdquo; or clear your browsing data</td>
            </tr>
            <tr>
              <td>
                <code>{STORAGE_KEYS.SCORE}</code>
              </td>
              <td>Your latest score, so the results page can show it</td>
              <td>Until you reset the test, press &ldquo;Start over&rdquo; or clear your browsing data</td>
            </tr>
            <tr>
              <td>
                <code>rpt-score-submitted</code>
              </td>
              <td>A marker that you already added a score (only if you used the optional feature)</td>
              <td>Until you clear your browsing data</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>If you block storage, the test still works; it just won&apos;t remember your progress.</p>

      <h2>What We Receive</h2>
      <ul>
        <li>
          <strong>Standard request logs.</strong> Like every website, the site receives your IP address, browser type, the
          page you asked for and the time. Our hosting provider, Vercel, processes these logs to deliver and protect the
          site and keeps them for a limited time under{' '}
          <a href="https://vercel.com/legal/privacy-notice" {...ext}>
            its own privacy notice
          </a>
          . We don&apos;t use them to identify visitors.
        </li>
        <li>
          <strong>Google Analytics.</strong> The pages you view, roughly where you are (country or city level), your device
          and browser, and a single &ldquo;test finished&rdquo; event when you calculate a score. It never receives your
          answers, and the score is not sent with that event. If you open a link with a score in its address (for example{' '}
          <code>/results?score=72</code>), that address is recorded like any other page address.
        </li>
        <li>
          <strong>Google AdSense.</strong> Google serves the ads and sets the cookies described below.
        </li>
        <li>
          <strong>An optional score</strong>, only if you choose to add it (see{' '}
          <a href="#score-submission">Optional Score Submission</a>).
        </li>
      </ul>
      <p>We never receive your individual answers, your name, your email address or any account details.</p>

      <h2 id="analytics">Google Analytics</h2>
      <p>
        Google Analytics sets two first-party cookies: <code>_ga</code>, which tells visits from different browsers
        apart, and <code>_ga_&lt;ID&gt;</code>, which keeps track of the current session. By default both last two years
        (browsers may delete them sooner). We use the reports only in aggregate, to see which pages are read and whether
        the test works. Google explains these cookies on{' '}
        <a href={GOOGLE.gaCookies} {...ext}>
          its Analytics cookie page
        </a>
        , and you can block Analytics on every site with{' '}
        <a href={GOOGLE.gaOptOut} {...ext}>
          Google&apos;s opt-out browser add-on
        </a>
        .
      </p>

      <h2 id="advertising">Advertising and Third-Party Cookies</h2>
      <ul>
        <li>Third-party advertising is served on this site through Google AdSense. We don&apos;t work with any other ad network.</li>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or
          other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visits to
          this site and/or other sites on the Internet.
        </li>
        <li>
          You can opt out of personalized advertising in{' '}
          <a href={GOOGLE.adsSettings} {...ext}>
            Google&apos;s Ads Settings
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at{' '}
          <a href="https://optout.aboutads.info/" {...ext}>
            aboutads.info
          </a>{' '}
          or, in Europe,{' '}
          <a href="https://www.youronlinechoices.eu/" {...ext}>
            youronlinechoices.eu
          </a>
          .
        </li>
        <li>
          Google explains what it does with this data in{' '}
          <a href={GOOGLE.partnerSites} {...ext}>
            How Google uses information from sites or apps that use our services
          </a>{' '}
          and in its{' '}
          <a href={GOOGLE.privacy} {...ext}>
            privacy policy
          </a>
          . The cookies themselves are listed on <Link href="/cookies">our cookie page</Link>.
        </li>
      </ul>

      <h2 id="consent">Consent in the EEA, the UK and Switzerland</h2>
      <p>
        Google&apos;s consent message (Google&apos;s own consent management platform, set up through AdSense) is shown
        to visitors in the EEA, the UK and Switzerland. It asks whether Google and its ad partners may use cookies and personal data for
        personalized ads and related purposes, and you can accept, refuse or choose by purpose. Your choice also applies to
        Google Analytics on this site. If you don&apos;t consent, Google may still show ads that are not personalized.
      </p>
      <p>
        The message stores your choice in a cookie on this site (see <Link href="/cookies#consent-cookies">the cookie
        page</Link>). To change it later, clear this site&apos;s cookies and reload the page, and the message will ask
        again. Visitors outside these regions don&apos;t see the message; the opt-outs above work everywhere.
      </p>

      <h2 id="score-submission">Optional Score Submission</h2>
      <p>
        {STATS_ENABLED
          ? 'After you finish the test, the results page offers to add your score to anonymous statistics. It is optional and nothing is sent unless you tap your age.'
          : 'This feature is currently switched off, so nothing described in this section happens today. When it is on, the results page offers to add your score to anonymous statistics after you finish the test. It is optional and nothing is sent unless you tap your age.'}
      </p>
      <ul>
        <li>
          <strong>What you send:</strong> your score (0 to 100), the age band you tap, and a confirmation that you are 18
          or over. Never your answers.
        </li>
        <li>
          <strong>What we keep:</strong> we add one to a running count for that score in that age band, and one to a
          separate count for the country your connection comes from, which our host reads from its standard location
          header. The two counts are kept apart, so no record links a score to a country, and nothing is stored about you.
        </li>
        <li>
          <strong>Abuse protection:</strong> to allow one submission per network every 12 hours, we keep a one-way hash of
          your IP address for 12 hours. It is deleted automatically after that.
        </li>
        <li>
          <strong>Where:</strong> the counts are held in a database run for us by Upstash, a cloud database provider.
        </li>
        <li>
          <strong>What is published:</strong> an age group&apos;s figures appear on the site only once it has at least 50
          responses, and always with the number of responses.
        </li>
        <li>
          Because a submission isn&apos;t linked to you, it can&apos;t be found or withdrawn later. Your browser keeps the{' '}
          <code>rpt-score-submitted</code> marker so it doesn&apos;t offer the feature again.
        </li>
      </ul>

      <h2>Legal Bases (EEA and UK)</h2>
      <ul>
        <li>
          <strong>Consent</strong> for advertising and analytics cookies (given in Google&apos;s consent message) and for
          the optional score submission.
        </li>
        <li>
          <strong>Legitimate interests</strong> for request logs and the 12-hour anti-abuse hash, which keep the site
          running and protect it.
        </li>
        <li>
          Saving your answers in your own browser is strictly necessary to provide the test you asked for.
        </li>
      </ul>

      <h2>Your Rights in the EU, EEA, and UK (GDPR)</h2>
      <p>
        You have the right to access, correct, erase, restrict, object to, and transfer your data, to withdraw consent
        at any time, and to file a complaint with your national supervisory authority. Because we hold almost nothing that
        identifies you, most requests will be about the cookies Google sets; you can manage those with the controls above.
      </p>
      <p>
        To make a request, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with &ldquo;Privacy
        request&rdquo; in the subject line.
      </p>

      <h2>Your Rights in California (CCPA/CPRA)</h2>
      <p>
        Categories collected in the past twelve months include internet activity, device and connection information from
        request logs and Google Analytics, and, only if you chose to submit it, a score with an age band. We do not sell
        your personal information. Google&apos;s advertising cookies may count as sharing for cross-context behavioral
        advertising; you can opt out through Google&apos;s Ads Settings or aboutads.info, linked above.
      </p>

      <h2>Age</h2>
      <p>This site is intended for adults aged 18 and over.</p>
      <p>
        We do not knowingly collect information from anyone under 18. In compliance with COPPA, we do not knowingly
        collect any information from children under 13.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a meaningful way, we will update the date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy or want to make a privacy request, please contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
