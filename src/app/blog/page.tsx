import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/atoms/JsonLd';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { CtaBox } from '@/components/organisms/CtaBox';
import { GUIDES, type GuideKey } from '@/lib/guides';
import { OVERALL_AVERAGE, range } from '@/lib/estimates';
import { QUESTION_NOTES } from '@/lib/questionNotes';
import { PAGE_DATES, formatDate, type DatedPath } from '@/lib/dates';
import { ORGANIZATION_ID } from '@/lib/schema';
import { BASE_URL, PUBLISHER } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
  description: 'Guides to the Rice Purity Test: average scores by age, what each score range means, all 100 questions explained, and the history of the test.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
    description: 'Average scores by age, score meanings, all 100 questions explained, and the history of the test.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
    description: 'Average scores by age, score meanings, questions and history.',
  },
};

interface HubGuide {
  key: GuideKey;
  title: string;
  /** The guide's main answer, shown on the card so the hub is useful on its own. */
  answer: string;
  summary: string;
}

const NOTE_COUNT = Object.keys(QUESTION_NOTES).length;

/** Every guide on the site, in the order a reader usually needs them. */
const SECTIONS: { id: string; heading: string; intro: string; guides: HubGuide[] }[] = [
  {
    id: 'before-the-test',
    heading: 'Before you take the test',
    intro: 'What the test is, how to answer it honestly, and every question in advance.',
    guides: [
      {
        key: 'meaning',
        title: 'What Is the Rice Purity Test?',
        answer: 'A 100-item checklist, not a moral grade',
        summary: 'What “purity” means here, why it is named after Rice University, what MPS stands for, and what a result can and can’t tell you.',
      },
      {
        key: 'howTo',
        title: 'How to Take the Rice Purity Test',
        answer: 'Answer for your whole life, not the last year',
        summary: 'How to handle ambiguous items, the one mistake that makes scores too high, and what to do with the number afterwards.',
      },
      {
        key: 'questions',
        title: 'All 100 Rice Purity Test Questions, Explained',
        answer: `6 themes, notes on ${NOTE_COUNT} items`,
        summary: 'The full list grouped by theme, with plain-English notes on slang and confusing wording such as “kissed horizontally”, “sensual context” and MPS.',
      },
    ],
  },
  {
    id: 'after-the-test',
    heading: 'After you get your score',
    intro: 'What your number means and how it compares with other people’s.',
    guides: [
      {
        key: 'score',
        title: 'Rice Purity Test Score Meaning',
        answer: 'Score = 100 − items checked',
        summary: 'How the score is calculated, the chart from 100 down to 0, and a lookup that answers “is my score good?” for any number.',
      },
      {
        key: 'age',
        title: 'Average Rice Purity Score by Age',
        answer: `Estimated average: ${range(OVERALL_AVERAGE)}`,
        summary: 'Estimated typical ranges for 18, 19–22, 23–25, 26–30 and 31+, what counts as normal, and exactly how the estimates are made.',
      },
    ],
  },
  {
    id: 'background',
    heading: 'Background',
    intro: 'Where the test came from.',
    guides: [
      {
        key: 'history',
        title: 'The History of the Rice Purity Test',
        answer: 'Began as a 1924 student-newspaper survey',
        summary: 'From a ten-question survey in the Rice Thresher to a 100-item TikTok trend, with links to the original sources.',
      },
    ],
  },
];

const ALL = SECTIONS.flatMap((s) => s.guides);

const COLLECTION = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/blog#page`,
  url: `${BASE_URL}/blog`,
  name: 'Rice Purity Test Guides',
  inLanguage: 'en-US',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  publisher: { '@id': ORGANIZATION_ID },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ALL.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}${GUIDES[g.key].href}`,
      name: g.title,
    })),
  },
};

export default function BlogPage() {
  return (
    <main id="main" className="page pb-4 pt-3 sm:pt-5">
      <JsonLd data={COLLECTION} />
      <Breadcrumbs items={[{ label: 'Guides', href: '/blog' }]} />
      <h1 className="mt-2 font-display text-h1 font-semibold text-ink">Rice Purity Test Guides</h1>
      <p className="mt-4 max-w-measure text-lead text-ink-2">
        Everything we&apos;ve written about the Rice Purity Test in one place: what the test is, every question explained,
        what scores mean, how they vary by age, and where the test came from. Each guide leads with its answer, so the
        line under each title is the short version.
      </p>

      <nav aria-label="Guide sections" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex min-h-tap items-center rounded-full border border-line bg-surface px-4 text-small font-medium text-ink-2 hover:border-brand hover:text-brand-deep"
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {SECTIONS.map((s) => (
        <section key={s.id} aria-labelledby={s.id} className="mt-12">
          <h2 id={s.id} className="font-display text-h2 font-semibold text-ink">
            {s.heading}
          </h2>
          <p className="mt-1 text-ink-3">{s.intro}</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.guides.map((g) => {
              const href = GUIDES[g.key].href;
              const reviewed = PAGE_DATES[href as DatedPath]?.modified;
              return (
                <li key={g.key}>
                  <article className="group relative flex h-full flex-col rounded-lg border border-line bg-surface p-6 shadow-card transition-[border-color,box-shadow] hover:border-brand hover:shadow-lift">
                    <h3 className="font-display text-[1.3rem] font-semibold leading-snug text-ink">
                      <Link href={href} className="after:absolute after:inset-0 after:rounded-lg group-hover:text-brand-deep">
                        {g.title}
                      </Link>
                    </h3>
                    <p className="mt-2 font-semibold text-brand-deep">{g.answer}</p>
                    <p className="mt-2 text-small text-ink-2">{g.summary}</p>
                    {reviewed && (
                      <p className="mt-auto pt-4 text-xs text-ink-3">
                        Last reviewed <time dateTime={reviewed}>{formatDate(reviewed)}</time>
                      </p>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <aside aria-labelledby="how-guides-are-made" className="mt-14 max-w-measure rounded-lg border border-line bg-sunken/70 p-5 text-small text-ink-2 sm:p-6">
        <h2 id="how-guides-are-made" className="font-display text-h3 font-semibold text-ink">
          How these guides are made
        </h2>
        <p className="mt-2">
          The guides are published by this site, which {PUBLISHER} runs. There are no invented experts, reviews or
          statistics: averages are labelled as estimates and the method behind them is on the{' '}
          <Link href={`${GUIDES.age.href}#where-numbers-come-from`} className="link">
            average score page
          </Link>
          , and historical facts link to their sources, including the <em>Rice Thresher</em>&apos;s own archive. Each
          guide shows the date it was last reviewed. Read our{' '}
          <Link href="/about#how-we-write" className="link">
            editorial standards
          </Link>
          .
        </p>
      </aside>

      <div className="max-w-measure">
        <CtaBox heading="Take the test first">
          <p>Free, anonymous, about 10 minutes. Your answers stay in your browser.</p>
        </CtaBox>
      </div>
    </main>
  );
}
