import type { Metadata } from 'next';
import { LegalLayout } from '@/components/templates/LegalLayout';
import { CtaBox } from '@/components/organisms/CtaBox';
import { BASE_URL, STATS_ENABLED } from '@/lib/site';

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

export default function AboutPage() {
  return (
    <LegalLayout crumb="About" href="/about" title="About This Site">
      <h2 style={{ marginTop: 0 }}>Who Runs It</h2>
      <p>
        This site is run by Teknoesis. You can reach us at{' '}
        <a href="mailto:contact@ricepuritytestapp.com">contact@ricepuritytestapp.com</a>.
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

      <h2>How the Question Set Was Built</h2>
      <p>
        The hundred items follow the widely shared version of the test that grew out of the Rice University student
        tradition, ordered roughly from common experiences to rare ones. We reworded items that used &ldquo;MPS&rdquo; so
        they are gender-neutral, and replaced three items.
      </p>
      <p>
        Items that score things we do not think should be scored, such as anything involving family members, animals,
        minors, or self-harm, are not included; that is why three items differ from other versions. The list is reviewed
        regularly, and the review date is shown on the questions page.
      </p>

      <h2>How the Data Works</h2>
      <p>
        {STATS_ENABLED
          ? 'Readers can choose to add their score anonymously after finishing the test. We store the score, an age band, and a country.'
          : 'We are setting up an optional way for readers to add their score anonymously after finishing the test. When it is live, we will store only the score, an age band, and a country.'}
      </p>
      <p>We never store individual answers, and we never store anything that identifies a person.</p>
      <p>
        Aggregate figures are published with the number of responses behind them. Where we have no data, we say so instead
        of guessing.
      </p>

      <h2>What This Site Is Not</h2>
      <p>It is not affiliated with, endorsed by, or connected to Rice University.</p>
      <p>It is not a psychological assessment, and it does not diagnose anything.</p>
      <p>It is intended for adults aged 18 and over.</p>

      <h2>Corrections</h2>
      <p>
        If something here is wrong, tell us and we will fix it. Corrections to published pages are noted at the bottom of
        the page along with the date.
      </p>

      <CtaBox heading="Ready to Take the Test?" cta="Start the Test">
        <p>Take the Rice Purity Test and see your score when you finish.</p>
      </CtaBox>
    </LegalLayout>
  );
}
