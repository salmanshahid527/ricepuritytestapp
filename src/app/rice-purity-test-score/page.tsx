import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import type { ReactNode } from 'react';
import { KeyAnswer } from '@/components/molecules/KeyAnswer';
import { AboutThisGuide } from '@/components/molecules/AboutThisGuide';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { TYPICAL_ADULT, OVERALL_AVERAGE, LOOKUP_BANDS, ageGroupsFor, range } from '@/lib/estimates';
import { GUIDES } from '@/lib/guides';
import { PAGE_DATES, reviewedOn } from '@/lib/dates';
import { BASE_URL } from '@/lib/site';

const PATH = '/rice-purity-test-score';
const URL = `${BASE_URL}${PATH}`;
const DATES = PAGE_DATES[PATH];
const TITLE = 'Rice Purity Test Score Meaning: Every Range Explained';
const DESCRIPTION =
  'What your Rice Purity score means, from 100 down to 0: how it is calculated, a score chart, a lookup for any number, what counts as normal, and whether a high or low score is better.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

/** Same bands and labels the results page uses (see SCORE_RANGES in lib/constants). */
const CHART = [
  { range: '100', label: 'Perfect score', note: 'Nothing on the list checked. Rare for anyone past their first year of college.' },
  { range: '98–99', label: 'Extremely pure', note: 'One or two items, usually holding hands or a first date.' },
  { range: '94–97', label: 'Very pure', note: 'A few dating and kissing items, little else.' },
  { range: '90–93', label: 'Relatively pure', note: 'Kissing and relationship items, perhaps a first drink.' },
  { range: '87–89', label: 'Moderately pure', note: 'Most of the dating section plus a few social items.' },
  { range: '84–86', label: 'Fairly pure', note: 'Typical of someone early in college.' },
  { range: '80–83', label: 'Somewhat pure', note: 'Dating, kissing and some alcohol items; common at 18 to 20.' },
  { range: '77–79', label: 'Lightly tarnished', note: 'Starting into the physical-intimacy section. Very ordinary.' },
  { range: '70–76', label: 'Moderately experienced', note: 'Right around the typical adult range. Common in the early twenties.' },
  { range: '60–69', label: 'Experienced', note: 'The middle of the pack for adults; the overall average sits here.' },
  { range: '50–59', label: 'Very experienced', note: 'Typical for many people in their late twenties.' },
  { range: '40–49', label: 'Highly experienced', note: 'Well into the later sections of the list.' },
  { range: '30–39', label: 'Extremely experienced', note: 'Most of the list checked, including many partner items.' },
  { range: '20–29', label: 'Exceptionally experienced', note: 'Uncommon; the rarer items near the end are checked too.' },
  { range: '10–19', label: 'Nearly everything', note: 'Very uncommon.' },
  { range: '1–9', label: "You've done it all", note: 'Extremely rare.' },
  { range: '0', label: 'Ultimate experience', note: 'Every item checked. Almost nobody scores this.' },
];

/**
 * One lookup table answers every "is N a good score?" question (never one page
 * per score). Rows are derived from the same estimated ranges as the age page,
 * and each row has an id (#score-71) so the results page can link to it.
 */
const LOOKUP = LOOKUP_BANDS.map(({ low, high, id }) => {
  const groups = ageGroupsFor(low, high);
  let adult: string;
  if (low > TYPICAL_ADULT.high) adult = 'Above the typical adult range';
  else if (high < TYPICAL_ADULT.low) adult = 'Below the typical adult range';
  else adult = 'Within the typical adult range';
  const nearAverage = high >= OVERALL_AVERAGE.low && low <= OVERALL_AVERAGE.high;
  return {
    id,
    scores: `${low}–${high}`,
    items: `${100 - high}–${100 - low}`,
    groups: groups.length ? groups.join(', ') : low > 90 ? 'Above every age range' : 'Below every age range',
    adult: nearAverage ? `${adult}; includes the estimated average` : adult,
  };
});

/**
 * The specific numbers people search for most, answered in one place. Nearby
 * numbers are folded into each answer instead of getting their own heading.
 * Every age range quoted here comes from AGE_ESTIMATES via ageGroupsFor().
 */
const SPECIFIC = [
  {
    id: 'is-85-good',
    q: 'Is 85 a good Rice Purity score?',
    a: 'An 85 means you checked 15 items. It sits above the typical adult range and inside the estimated ranges for 18-year-olds (75 to 90) and for 19 to 22 (65 to 85), so it is a very ordinary score early in college. The rest of the 80s read much the same way.',
  },
  {
    id: 'is-77-good',
    q: 'Is 77 a good Rice Purity score?',
    a: 'A 77 means you checked 23 items. That sits just above the typical adult range, so it is very ordinary, especially for someone aged 18 to their early twenties. A 76 or a 78 reads the same way.',
  },
  {
    id: 'is-68-normal',
    q: 'Is 68 or 65 a normal score?',
    a: 'Yes. A 68 (32 items) and a 65 (35 items) both fall inside the estimated overall average of 62 to 68, in the middle of the most common band for adults. Scores in the 60s are typical for most people in their twenties.',
  },
  {
    id: 'is-55-bad',
    q: 'Is 55 a bad Rice Purity score?',
    a: 'No. A 55 means 45 items checked, which is within the normal range for adults and common from the late twenties onward. Scores in the 40s and 50s, such as 48 or 53, are not bad either. There are no bad scores, only different histories.',
  },
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: 'Is a higher or lower Rice Purity score better?',
    a: 'Neither. A high score means you have checked few of the listed items; a low score means you have checked many. The test counts experiences and does not judge them, so there is no good or bad score: a 90 and a 45 are both just numbers on a checklist.',
  },
  {
    q: 'What is a normal Rice Purity score?',
    a: (
      <>
        For adults, anything from about 55 to 75 is squarely typical, and the overall average is estimated in the
        mid-60s. For an 18-year-old, the high 70s to high 80s is normal. See{' '}
        <Link href={`${GUIDES.age.href}#normal-score`}>what counts as normal at each age</Link>.
      </>
    ),
  },
  {
    q: 'What is the highest and lowest possible score?',
    a: 'The test is scored out of 100. The highest possible score is 100 (nothing checked) and the lowest is 0 (everything checked). Both extremes are rare.',
  },
];

const BANDS = [
  {
    heading: '98 to 100: extremely pure',
    text: "You've checked almost nothing. It usually means you've had few chances for these experiences yet, grew up in a close-knit or religious environment, or hold values that keep most of this list off the table. All of those are valid; none of them is a character judgment.",
  },
  {
    heading: '77 to 97: relatively pure',
    text: "A wide and very common band, especially from 18 to about 21. You've had real social and romantic experiences, but most of the later items on the list are still unchecked. First-year college students often sit in the 80s and move toward the 70s over the next few years.",
  },
  {
    heading: '45 to 76: moderate',
    text: "This is where most adults land. You've said yes to things, tried things, and probably regret one or two. A score in the 50s or 60s at 25 is as ordinary as a score in the 80s at 18.",
  },
  {
    heading: '9 to 44: experienced',
    text: "You've checked a lot of boxes. This tends to come with age, a particular social scene, or simply a life that leaned toward trying things. People here often find the test more nostalgic than surprising.",
  },
  {
    heading: '0 to 8: highly experienced',
    text: "Very uncommon. You've encountered nearly everything on a list that covers a wide spread of adult experience, including the rarest items.",
  },
];

const TOC = [
  { id: 'how-calculated', label: 'How the score is calculated' },
  { id: 'score-chart', label: 'Score chart, 100 to 0' },
  { id: 'score-lookup', label: 'Is my score good? Lookup' },
  { id: 'ranges', label: 'What each range means' },
  { id: 'common-questions', label: 'Common questions' },
  { id: 'what-it-doesnt-tell', label: 'What it doesn’t tell you' },
];

export default function ScorePage() {
  return (
    <>
      <ArticleSchema headline={TITLE} datePublished={DATES.published} dateModified={DATES.modified} url={URL} description={DESCRIPTION} />
      <GuideLayout
        crumbs={[{ label: 'Rice Purity Test Score', href: PATH }]}
        title="Rice Purity Test Score Meaning"
        meta={`Last reviewed ${reviewedOn(PATH)} · For adults 18+`}
        toc={TOC}
        answer={
          <KeyAnswer question="What does your Rice Purity score mean?">
            <p className="text-ink">
              Your score is the number of the test&apos;s 100 items you <em>haven&apos;t</em> done:{' '}
              <strong className="font-semibold">100 minus the number of boxes you check</strong>. A high score means few of
              the listed experiences, a low score means many. It&apos;s a count, not a grade, so there is no good or bad
              score.
            </p>
            <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
              <li>
                For adults, <strong className="font-semibold text-ink">55 to 75 is typical</strong>; the overall average is
                estimated at {range(OVERALL_AVERAGE)}.
              </li>
              <li>
                Have a specific number? <a href="#score-lookup" className="link">Look it up below</a>.
              </li>
            </ul>
          </KeyAnswer>
        }
        footer={
          <>
            <AboutThisGuide path={PATH} />
            <AdSlot name="score-end" className="mt-14" />
            <RelatedGuides guides={[GUIDES.age, GUIDES.questions, GUIDES.meaning, GUIDES.history]} />
            <CtaBox heading="Haven't taken it yet?" secondary={{ href: GUIDES.questions.href, label: 'Read the 100 questions' }}>
              <p>It takes about 10 minutes. Your answers stay in your browser; nothing is sent to us.</p>
            </CtaBox>
          </>
        }
      >
        <h2 id="how-calculated" style={{ marginTop: 0 }}>
          How is the Rice Purity score calculated?
        </h2>
        <p>
          Start at 100 and subtract one point for every item you check. Check 40 items and you score 60; check 5 and you
          score 95. The test is scored out of 100 with no weighting: every one of the{' '}
          <Link href={GUIDES.questions.href}>100 questions</Link> carries the same weight, so holding hands and the rarest
          item near the end of the list each cost exactly one point. That flat weighting is the main reason two people
          with the same score can have very different stories.
        </p>
        <p className="rounded-md border border-line bg-surface px-5 py-4 font-display text-[1.25rem] font-semibold text-ink">
          Score = 100 − (number of items checked)
        </p>
        <p>
          New to the test itself? Start with <Link href={GUIDES.meaning.href}>what the Rice Purity Test is</Link> and
          where it comes from.
        </p>

        <h2 id="score-chart">Rice Purity score chart, from 100 to 0</h2>
        <p>
          The scale runs from 100 (nothing checked) to 0 (everything checked). Find your number below. The labels are the
          same ones you see on the results page after taking the test.
        </p>
        <div className="table-wrap">
          <table className="table-clean">
            <thead>
              <tr>
                <th scope="col">Score</th>
                <th scope="col">Label</th>
                <th scope="col">What it usually looks like</th>
              </tr>
            </thead>
            <tbody>
              {CHART.map((row) => (
                <tr key={row.range}>
                  <td className="whitespace-nowrap font-semibold text-ink">{row.range}</td>
                  <td className="min-w-[7.5rem] sm:whitespace-nowrap">{row.label}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSlot name="score-mid" />

        <section aria-labelledby="score-lookup">
          <h2 id="score-lookup">Is my score good? Look up any number</h2>
          <p className="mt-3">
            No score is good or bad: the test counts experiences, it doesn&apos;t grade them. What people usually want to
            know is whether a number is typical. Find yours below to see how many items it means and which age groups it is
            typical for. The age ranges are our estimates (see{' '}
            <Link href={`${GUIDES.age.href}#where-numbers-come-from`}>how we estimate them</Link>), not survey results.
          </p>
          <div className="table-wrap mt-4">
            <table className="table-clean" aria-labelledby="score-lookup">
              <thead>
                <tr>
                  <th scope="col">Score</th>
                  <th scope="col">Items checked</th>
                  <th scope="col">Typical at age (estimate)</th>
                  <th scope="col">Compared with adults (estimate)</th>
                </tr>
              </thead>
              <tbody>
                {LOOKUP.map((r) => (
                  <tr key={r.scores} id={r.id} className="deep-link">
                    <td className="whitespace-nowrap font-semibold text-ink">{r.scores}</td>
                    <td className="whitespace-nowrap">{r.items}</td>
                    <td>{r.groups}</td>
                    <td>{r.adult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-8">The numbers people ask about most</h3>
          <div className="mt-4 space-y-5">
            {SPECIFIC.map((f) => (
              <div key={f.id} id={f.id}>
                <h4 className="font-semibold text-ink">{f.q}</h4>
                <p className="mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <h2 id="ranges">What each part of the range means</h2>
        <div className="space-y-4">
          {BANDS.map((b) => (
            <section key={b.heading} className="border-l-[3px] border-brand pl-5">
              <h3 style={{ marginTop: 0 }}>{b.heading}</h3>
              <p className="mt-1">{b.text}</p>
            </section>
          ))}
        </div>

        <h2 id="common-questions">Common questions about specific scores</h2>
        <div className="space-y-5">
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 style={{ marginTop: 0 }}>{f.q}</h3>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </div>
        <p>
          For typical scores at each age, see{' '}
          <Link href="/rice-purity-test-average-score-by-age">average Rice Purity score by age</Link>.
        </p>

        <h2 id="what-it-doesnt-tell">What your score doesn&apos;t tell you</h2>
        <p>
          Your score counts how many items on one specific checklist apply to your life, nothing more. It doesn&apos;t
          measure character, judgment or worth. The test began as a campus tradition at Rice University, where the student
          newspaper printed versions of it for new students, and it was always meant as a conversation starter rather than
          an assessment. If you want the background, read <Link href="/rice-purity-test-history">the history of the test</Link>.
        </p>
      </GuideLayout>
    </>
  );
}
