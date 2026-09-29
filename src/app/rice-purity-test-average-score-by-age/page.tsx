import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import { KeyAnswer } from '@/components/molecules/KeyAnswer';
import { AboutThisGuide } from '@/components/molecules/AboutThisGuide';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { LiveStats } from '@/components/organisms/LiveStats';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { AGE_ESTIMATES, OVERALL_AVERAGE, TYPICAL_ADULT, range } from '@/lib/estimates';
import { GUIDES } from '@/lib/guides';
import { PAGE_DATES, reviewedOn } from '@/lib/dates';
import { SOURCES } from '@/lib/sources';
import { BASE_URL, STATS_ENABLED } from '@/lib/site';

// The estimated number goes in the title, meta and first line ("average rice purity score"
// earns impressions at position ~10 with no clicks); it stays labelled as an estimate.
const TITLE = 'Average Rice Purity Score by Age (Estimated 62–68 Overall)';
const DESCRIPTION =
  'The average Rice Purity score is an estimated 62 to 68, and most adults land between 55 and 75. Typical ranges for ages 18, 19-22, 23-25, 26-30 and 31+, and how to read yours.';
const PATH = '/rice-purity-test-average-score-by-age';
const URL = `${BASE_URL}${PATH}`;
const DATES = PAGE_DATES[PATH];

export const revalidate = 3600;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const TOC = [
  { id: 'at-a-glance', label: 'Typical score by age' },
  { id: 'where-numbers-come-from', label: 'How we estimate these ranges' },
  { id: 'overall-average', label: 'The overall average' },
  { id: 'normal-score', label: 'What counts as a normal score' },
  { id: 'by-age-group', label: 'Each age group, explained' },
  { id: 'age-18', label: 'Average at 18' },
  { id: 'age-19-22', label: 'Average at 19, 20, 21 and 22' },
  { id: 'under-18', label: 'Under 18' },
  { id: 'why-age', label: 'Why age affects score' },
  { id: 'mismatch', label: 'Is my score normal for my age?' },
];

const GROUPS = [
  {
    heading: '18 to 22 years old: typically 65 to 90',
    paras: [
      'This is the core audience for the test: first- and second-year college students taking it at orientation or with a new group of friends. Scores here tend to be higher for the obvious reason: you haven\'t had as many years to accumulate experiences.',
      'Someone who\'s 18 and scores a 75 isn\'t particularly sheltered — they\'re just 18. The same person retaking it at 23 will almost certainly score lower, even without doing anything dramatically different in the intervening years. A handful of ordinary life events add up quickly on a 100-item list.',
    ],
  },
  {
    heading: '23 to 25 years old: typically 60 to 75',
    paras: [
      'Post-college, early working life. By this point most people have been in relationships, lived independently, navigated some social complexity, and encountered situations that would have been unfamiliar a few years earlier. Scores drop accordingly.',
      'This age group tends to have the most internal variation — some 24-year-olds have lived intensely, others have been focused on graduate school or career and have scores closer to their college freshman self. The range is wide for a reason.',
    ],
  },
  {
    heading: '26 to 30 years old: typically 50 to 65',
    paras: [
      'The mid-to-late 20s tend to see scores dip into the 50s for most people. These are the years when a lot of the test\'s more significant items — longer-term relationships, more varied social environments, a few years of navigating adult life — become applicable.',
      'A score of 55 at 28 isn\'t anything surprising. If you\'re in this range and score higher than expected, you may have had a relatively contained social life — which is neither good nor bad, just different.',
    ],
  },
  {
    heading: '31 and older: typically 45 to 60',
    paras: [
      'By the time someone\'s in their 30s, the test starts feeling less like a discovery and more like a census of things they\'ve already processed. The questions that seemed hypothetical at 20 are now just memories. Scores in this range tend to reflect that accumulated history.',
      'That said, adults in their 30s and 40s who\'ve had quieter or more focused lives do score in the 60s and 70s. Life trajectory matters more than age alone at this point.',
    ],
  },
];

export default function AverageScoreByAgePage() {
  const age18 = AGE_ESTIMATES[0];
  const age19to22 = AGE_ESTIMATES[1];
  return (
    <>
      <ArticleSchema headline={TITLE} datePublished={DATES.published} dateModified={DATES.modified} url={URL} description={DESCRIPTION} />
      <GuideLayout
        crumbs={[{ label: 'Rice Purity Test Average Score by Age', href: PATH }]}
        title="Average Rice Purity Score by Age"
        meta={`Last reviewed ${reviewedOn(PATH)} · For adults 18+`}
        toc={TOC}
        answer={
          <KeyAnswer question="What is the average Rice Purity score?">
            <p className="text-lead text-ink">
              <strong className="font-semibold">
                The average Rice Purity score is an estimated {OVERALL_AVERAGE.low} to {OVERALL_AVERAGE.high}
              </strong>
              , so most people check about a third of the list.
            </p>
            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-md bg-surface p-3.5">
                <dt className="text-xs font-medium text-ink-3">Estimated average</dt>
                <dd className="font-display text-[2rem] font-semibold leading-tight text-brand-deep tabular-nums">
                  {range(OVERALL_AVERAGE)}
                </dd>
              </div>
              <div className="rounded-md bg-surface p-3.5">
                <dt className="text-xs font-medium text-ink-3">Most common range</dt>
                <dd className="font-display text-[2rem] font-semibold leading-tight text-ink tabular-nums">{range(TYPICAL_ADULT)}</dd>
              </div>
            </dl>
            <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
              <li>
                A typical <strong className="font-semibold text-ink">18-year-old</strong> scores in the high 70s to high
                80s; by the <strong className="font-semibold text-ink">late 20s</strong> most people are in the 50s or low
                60s.
              </li>
              <li>
                These are estimates, not survey results. There is no official dataset;{' '}
                <a href="#where-numbers-come-from" className="link">
                  here is how we estimate them
                </a>
                .
              </li>
            </ul>
          </KeyAnswer>
        }
        footer={
          <>
            <AboutThisGuide path={PATH} sources={[SOURCES.thresher2017]} />
            <AdSlot name="age-end" className="mt-14" />
            <RelatedGuides
              guides={[
                { ...GUIDES.score, label: 'Is my score good? Every score range explained' },
                { ...GUIDES.meaning, label: 'What the Rice Purity Test is and how to read it' },
                GUIDES.questions,
                GUIDES.history,
              ]}
            />
            <CtaBox heading="See where you land" secondary={{ href: GUIDES.score.href, label: 'What scores mean' }}>
              <p>Take the 100-question test. Your answers stay in your browser.</p>
            </CtaBox>
          </>
        }
      >
        <h2 id="at-a-glance" style={{ marginTop: 0 }}>
          Typical score by age at a glance
        </h2>
        <div className="table-wrap">
          <table className="table-clean">
            <thead>
              <tr>
                <th scope="col">Age</th>
                <th scope="col">Typical range (estimate)</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              {AGE_ESTIMATES.map((e) => (
                <tr key={e.age}>
                  <td className="whitespace-nowrap font-semibold text-ink">{e.age}</td>
                  <td className="whitespace-nowrap font-semibold text-brand-deep">{range(e)}</td>
                  <td>{e.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-lead">
          Age is the single biggest predictor of a Rice Purity score. Not because older people made worse decisions, but
          because the test asks about cumulative life experiences, and more years means more time to accumulate them. If
          you&apos;re comparing your score to someone in a different decade of life, you&apos;re not comparing like with
          like.
        </p>

        <section aria-labelledby="where-numbers-come-from" className="rounded-lg border border-note-line bg-note/60 p-5 sm:p-6">
          <h2 id="where-numbers-come-from" style={{ marginTop: 0 }}>
            How we estimate these ranges
          </h2>
          <p className="mt-3">
            There is no official dataset of Rice Purity scores, so the ranges on this page are editorial estimates, not
            survey results. Many sites quote precise &ldquo;averages&rdquo; without saying where they came from; this is
            how ours are made, and how they will be replaced with real figures.
          </p>
          <ol className="mt-4 space-y-3">
            <li>
              <strong>Start from the list itself.</strong> Many of the{' '}
              <Link href={GUIDES.questions.href}>100 questions</Link> only become possible with time and independence:
              drinking legally, living away from home, longer relationships. That is why the ranges fall with age.
            </li>
            <li>
              <strong>Check them against published figures.</strong> The only published averages we know of come from
              Rice University&apos;s student newspaper. The <em>Rice Thresher</em> reported an average of 65 for the
              roughly 274 tests taken in Houston on one Saturday in August 2017, just after orientation week. We also
              compare our ranges with those other published guides report.
            </li>
            <li>
              <strong>Keep them wide.</strong> One day in one city is a small, self-selected sample, and everyone who
              takes the test chose to. So each age range spans 15 to 20 points, and the overall average is given as a
              range ({range(OVERALL_AVERAGE)}), not a single number.
            </li>
            <li>
              <strong>Replace them with real data.</strong>{' '}
              {STATS_ENABLED
                ? 'Readers who finish the test can add their score and age band anonymously. When an age group reaches 50 responses, its real figures appear on this page with the number of responses behind them.'
                : 'We are setting up an anonymous, opt-in way for readers to add their score and age band. Once an age group has 50 responses, its real figures will appear on this page with the number of responses behind them.'}
            </li>
          </ol>
          <p className="mt-4 text-small text-ink-3">
            Estimates last reviewed {reviewedOn(PATH)}. Source:{' '}
            <a href={SOURCES.thresher2017.href} rel="noopener" target="_blank">
              {SOURCES.thresher2017.label}
            </a>
            .
          </p>
        </section>

        <LiveStats />

        <AdSlot name="age-mid" />

        <h2 id="overall-average">The overall average: where most people land</h2>
        <p>
          Across all age groups, the average Rice Purity score is estimated at <strong>62 to 68</strong>. That means most
          people check roughly 32 to 38 items out of 100, and the bulk of scores fall between 55 and 75.
        </p>
        <p>
          Keep in mind who takes this test: mostly college students and people in their twenties who chose to. A true
          population average, including people who have never heard of it, would look different.
        </p>

        <h2 id="normal-score">What is a normal Rice Purity score?</h2>
        <p>
          For adults, a normal Rice Purity score is anything from about {TYPICAL_ADULT.low} to {TYPICAL_ADULT.high}, and
          the estimated average is {range(OVERALL_AVERAGE)}. What counts as normal depends mostly on age: the high 70s to
          the high 80s is typical at 18, and scores in the 50s are typical by the late twenties.
        </p>
        <p>
          Normal isn&apos;t the same as good. The test isn&apos;t supposed to come out high or low: a high score means
          fewer items checked, a low score means more, and neither is better. The score guide explains{' '}
          <Link href={`${GUIDES.score.href}#common-questions`}>whether a higher or lower score is better</Link>.
        </p>

        <h2 id="by-age-group">Average score ranges by age group, explained</h2>
        <p>Here&apos;s how scores tend to distribute by age, along with why each range makes sense:</p>
        <div className="space-y-4">
          {GROUPS.map((g) => (
            <section key={g.heading} className="rounded-lg border border-line bg-surface p-5 sm:p-6">
              <h3 style={{ marginTop: 0 }}>{g.heading}</h3>
              {g.paras.map((p) => (
                <p key={p.slice(0, 24)} className="mt-2">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <h2 id="age-18">What is the average Rice Purity score for an 18-year-old?</h2>
        <p>
          At 18, the average Rice Purity score is an estimated {range(age18)}: most 18-year-olds land somewhere between the
          high 70s and the high 80s. Many of the items near the end of the list (the ones about partners, travel and the
          law) simply haven&apos;t had a chance to happen yet, while the dating, kissing and first-drink items often have.
          A score of 80 at 18 is completely ordinary; so is a 92 or a 70.
        </p>

        <h2 id="age-19-22">Average score at 19, 20, 21 and 22</h2>
        <p>
          The estimated range for ages 19 to 22 is {range(age19to22)}. Within it, scores usually drift into the 70s at 19
          and 20, and by 21 and 22 many people are somewhere in the 60s or low 70s. These are the college years, when the
          drinking, dating and first-relationship items start to add up.
        </p>
        <p>
          The drop is gradual: a few new experiences a year move the number more than people expect.
        </p>

        <h2 id="under-18">What about people under 18?</h2>
        <p>
          We don&apos;t publish figures for anyone under 18. The questions are about sex, drugs and trouble with the law,
          and the test is meant for adults. If you&apos;re under 18, please skip it; it will still be here later.
        </p>

        <h2 id="why-age">Why Age Affects Score — The Simple Explanation</h2>
        <p>
          The test asks &ldquo;have you ever&rdquo; for each item — not &ldquo;have you recently&rdquo; or &ldquo;do you
          regularly.&rdquo; That means it&apos;s a running total that can only go up over time. You can&apos;t uncross
          something you&apos;ve already crossed.
        </p>
        <p>
          Add to that: the items on the list include a lot of things that are simply more likely to happen as you get older
          and have more social opportunities, more independence, and more years of relationships behind you. Not because
          older people are reckless — because some experiences just take time to encounter.
        </p>
        <p>
          This is why comparing your score to someone ten years older or younger isn&apos;t that meaningful. A 19-year-old
          with a 78 and a 32-year-old with a 58 might have had very similar proportional life experiences for their age —
          the raw numbers don&apos;t tell you that.
        </p>

        <h2 id="mismatch">Is my score normal for my age?</h2>
        <p>
          Find your age in the <a href="#at-a-glance">table at the top of this page</a>. If your score falls inside that
          range, it&apos;s typical for your age. If it doesn&apos;t, that&apos;s common too: the ranges are estimates with
          soft edges, and plenty of people score well above or below them.
        </p>
        <p>
          These are wide ranges, and they reflect central tendencies — not rules. If you&apos;re 24 and scored a 90, that
          doesn&apos;t mean something is wrong with you. It might mean you&apos;ve had a more sheltered or focused
          upbringing, strong personal values, a particular social environment, or simply that you interpreted some
          questions conservatively.
        </p>
        <p>
          If you&apos;re 21 and scored a 45, that doesn&apos;t mean you&apos;ve burned your life down. It might mean
          you&apos;ve had a wider social range than most people your age, grew up faster, or moved in environments where
          more of these experiences were normal.
        </p>
        <p>
          The average is a reference point for comparison — not a benchmark you should feel pressure to hit. The more
          interesting question is usually not &ldquo;how do I compare to the average?&rdquo; but &ldquo;what does my
          specific number reflect about my actual life?&rdquo; For a specific number, such as 68 or 55, the{' '}
          <Link href={`${GUIDES.score.href}#score-lookup`}>score lookup</Link> shows how many items it means and which age
          groups it is typical for.
        </p>
      </GuideLayout>
    </>
  );
}
