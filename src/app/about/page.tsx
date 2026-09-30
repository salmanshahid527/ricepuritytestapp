import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/atoms/JsonLd';
import { LegalLayout } from '@/components/templates/LegalLayout';
import { CtaBox } from '@/components/organisms/CtaBox';
import { GUIDES } from '@/lib/guides';
import { reviewedOn } from '@/lib/dates';
import { ORGANIZATION_ID } from '@/lib/schema';
import { BASE_URL, CONTACT_EMAIL, PRESS_EMAIL, PUBLISHER, STATS_ENABLED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About RicePurityTestApp – Who We Are & How It Works',
  description:
    'Learn about RicePurityTestApp, who runs it, how the 100 questions were created, how anonymous score data works, and what the test is not.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About RicePurityTestApp – Who We Are & How It Works',
    description:
      'Learn who runs RicePurityTestApp, how the question set was built, how anonymous data works, and what the test is not.',
    url: `${BASE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RicePurityTestApp – Who We Are & How It Works',
    description: 'Learn more about RicePurityTestApp, how it works, and who runs the site.',
  },
};

const ABOUT_PAGE = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE_URL}/about#page`,
  url: `${BASE_URL}/about`,
  name: 'About This Site',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': ORGANIZATION_ID },
  mainEntity: { '@id': ORGANIZATION_ID },
};

export default function AboutPage() {
  return (
    <LegalLayout crumb="About" href="/about" title="About This Site" meta={`Last updated: ${reviewedOn('/about')}`}>
      <JsonLd data={ABOUT_PAGE} />
      <h2 id="who-runs-it" style={{ marginTop: 0 }}>
        Who Runs It
      </h2>
      <p>
        This site is run by {PUBLISHER}, which publishes every guide on it. You can reach us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, and press can write to{' '}
        <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a>.
      </p>

      <h2>Why It Exists</h2>
      <p>
        There are many versions of this test online, and most of them are the same page repeated: the same hundred
        questions, the same score, no explanation, and no one standing behind the content.
      </p>
      <p>
        This site tries to be different in three specific ways. Every question is explained in plain English, and we say
        exactly how our list differs from the original. Estimates are labelled as estimates, and figures from reader data
        are published with the number of responses behind them. And there is a named company you can contact behind it.
      </p>

      <h2 id="how-we-write">How We Write and Review the Guides</h2>
      <ul>
        <li>
          <strong>No invented people.</strong> Guides are credited to the site itself, not to made-up authors or experts,
          and they don&apos;t claim experience nobody had.
        </li>
        <li>
          <strong>Estimates are labelled.</strong> There is no official dataset of Rice Purity scores, so every average on
          the site is marked as an estimate. The method is on the average score page, under{' '}
          <Link href={`${GUIDES.age.href}#where-numbers-come-from`}>how we estimate these ranges</Link>.
        </li>
        <li>
          <strong>Real figures only from real submissions.</strong> Numbers based on reader data appear only once an age
          group has at least 50 opt-in responses, and the count is always shown next to them.
        </li>
        <li>
          <strong>Sources are linked.</strong> Historical facts come from primary sources where we can find them, such as
          the <em>Rice Thresher</em>&apos;s own archive, and each guide links to them.
        </li>
        <li>
          <strong>Plain, non-explicit wording.</strong> The 100 questions are listed as they are. Notes explain what a phrase
          means or what counts; they never describe acts.
        </li>
        <li>
          <strong>Honest dates.</strong> Each guide shows when it was last reviewed, and that date changes only when the
          content does, not for small fixes.
        </li>
      </ul>

      <h2>How the Question Set Was Built</h2>
      <p>
        The hundred items follow the widely shared version of the test that grew out of the Rice University student
        tradition, ordered roughly from common experiences to rare ones. We reworded items that used &ldquo;MPS&rdquo; so
        they are gender-neutral, and replaced three items.
      </p>
      <p>
        Items that score things we do not think should be scored, such as anything involving family members, animals,
        minors, or self-harm, are not included; that is why three items differ from other versions. The list is reviewed
        regularly, and the review date is shown on the <Link href={GUIDES.questions.href}>questions page</Link>.
      </p>

      <h2>How the Data Works</h2>
      <p>
        {STATS_ENABLED
          ? 'Readers can choose to add their score anonymously after finishing the test. Each submission adds one to a count for that score in the age band the reader picks, and one to a separate count for the country the connection comes from.'
          : 'We are setting up an optional way for readers to add their score anonymously after finishing the test. When it is live, each submission will add one to a count for that score in the age band the reader picks, and one to a separate count for the country the connection comes from.'}
      </p>
      <p>
        We never store individual answers, no record links a score to a country or to a person, and we never store
        anything that identifies you. The <Link href="/privacy#score-submission">privacy policy</Link> has the details.
      </p>
      <p>
        Aggregate figures are published with the number of responses behind them. Where we have no data, we say so instead
        of guessing.
      </p>

      <h2>What This Site Is Not</h2>
      <p>It is not affiliated with, endorsed by, or connected to Rice University.</p>
      <p>It is not a psychological assessment, and it does not diagnose anything.</p>
      <p>It is intended for adults aged 18 and over.</p>

      <h2 id="corrections">Corrections</h2>
      <p>
        If something here is wrong, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will fix it.
        When we correct a published page, we note the correction and the date at the bottom of that page.
      </p>

      <CtaBox heading="Ready to Take the Test?" cta="Start the Test">
        <p>Take the Rice Purity Test and see your score when you finish.</p>
      </CtaBox>
    </LegalLayout>
  );
}
