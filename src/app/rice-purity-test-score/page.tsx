import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';
import { ArticleSchema } from '@/components/ArticleSchema';

const BASE_URL = 'https://www.ricepuritytestapp.com';
const URL = `${BASE_URL}/rice-purity-test-score`;
const TITLE = 'Rice Purity Test Score Meaning: Every Range Explained';
const DESCRIPTION =
  'What your Rice Purity score means, from 100 down to 0: how it is calculated, a score chart, what counts as normal, and whether a high or low score is better.';

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

const FAQ = [
  {
    q: 'Is a higher or lower Rice Purity score better?',
    a: 'Neither. A higher score means you have checked fewer items, a lower score means more. The test counts experiences; it does not judge them. A 90 and a 45 are both just numbers on a checklist.',
  },
  {
    q: 'What is a normal Rice Purity score?',
    a: 'For adults, anything from about 55 to 75 is squarely typical, and the overall average is estimated in the mid-60s. For an 18-year-old, the high 70s to high 80s is normal. See the averages by age for more.',
  },
  {
    q: 'Is 77 a good Rice Purity score?',
    a: 'A 77 means you checked 23 items. That sits just above the typical adult range, so it is very ordinary, especially for someone in their late teens or early twenties.',
  },
  {
    q: 'Is 55 a bad Rice Purity score?',
    a: 'No. A 55 means 45 items checked, which is within the normal range for adults and common in the mid-to-late twenties. There are no bad scores, only different histories.',
  },
  {
    q: 'What does a score of 76 or 68 mean?',
    a: 'A 76 (24 items) and a 68 (32 items) both fall in the most common band for adults. The difference is eight experiences out of 100, which is less than it sounds.',
  },
  {
    q: 'What is the highest and lowest possible score?',
    a: 'The highest is 100 (nothing checked) and the lowest is 0 (everything checked). Both extremes are rare.',
  },
];

export default function ScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema headline={TITLE} datePublished="2026-01-15" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Rice Purity Test Score' }]} />

        <Heading as="h1" size="3xl" className="mb-2">
          Rice Purity Test Score Meaning
        </Heading>
        <Text variant="small" color="muted" className="mb-6">Last reviewed September 27, 2026 · For adults 18+</Text>

        <article className="space-y-8 text-gray-700">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <Heading as="h2" size="lg" className="mb-3">The short answer</Heading>
            <ul className="list-disc ml-5 space-y-2">
              <li>Your score is <strong>100 minus the number of items you checked</strong>.</li>
              <li>Higher means fewer of the listed experiences; lower means more.</li>
              <li>For adults, <strong>55 to 75 is typical</strong>; the overall average is estimated in the mid-60s.</li>
              <li>There is no good or bad score. It&apos;s a count, not a grade.</li>
            </ul>
          </div>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">How the score is calculated</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Start at 100 and subtract one point for every item you check. Check 40 items and you score 60; check 5 and
              you score 95. Every question carries the same weight, so holding hands and the rarest item near the end of
              the list each cost exactly one point. That flat weighting is the main reason two people with the same
              score can have very different stories.
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-gray-800">
              Score = 100 − (number of items checked)
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Rice Purity score chart</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Find your number below. The labels are the same ones you see on the results page after taking the test.
            </Text>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Score</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Label</th>
                    <th className="py-2 font-semibold text-gray-800">What it usually looks like</th>
                  </tr>
                </thead>
                <tbody>
                  {CHART.map((row) => (
                    <tr key={row.range} className="border-b border-gray-100 align-top">
                      <td className="py-2 pr-4 font-medium whitespace-nowrap">{row.range}</td>
                      <td className="py-2 pr-4 whitespace-nowrap">{row.label}</td>
                      <td className="py-2">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What each part of the range means</Heading>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <Heading as="h3" size="lg" className="mb-2">98 to 100: extremely pure</Heading>
                <Text variant="body" className="leading-relaxed">
                  You&apos;ve checked almost nothing. It usually means you&apos;ve had few chances for these experiences
                  yet, grew up in a close-knit or religious environment, or hold values that keep most of this list off
                  the table. All of those are valid; none of them is a character judgment.
                </Text>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <Heading as="h3" size="lg" className="mb-2">77 to 97: relatively pure</Heading>
                <Text variant="body" className="leading-relaxed">
                  A wide and very common band, especially from 18 to about 21. You&apos;ve had real social and romantic
                  experiences, but most of the later items on the list are still unchecked. First-year college students
                  often sit in the 80s and move toward the 70s over the next few years.
                </Text>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <Heading as="h3" size="lg" className="mb-2">45 to 76: moderate</Heading>
                <Text variant="body" className="leading-relaxed">
                  This is where most adults land. You&apos;ve said yes to things, tried things, and probably regret one
                  or two. A score in the 50s or 60s at 25 is as ordinary as a score in the 80s at 18.
                </Text>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <Heading as="h3" size="lg" className="mb-2">9 to 44: experienced</Heading>
                <Text variant="body" className="leading-relaxed">
                  You&apos;ve checked a lot of boxes. This tends to come with age, a particular social scene, or simply a
                  life that leaned toward trying things. People here often find the test more nostalgic than surprising.
                </Text>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <Heading as="h3" size="lg" className="mb-2">0 to 8: highly experienced</Heading>
                <Text variant="body" className="leading-relaxed">
                  Very uncommon. You&apos;ve encountered nearly everything on a list that covers a wide spread of adult
                  experience, including the rarest items.
                </Text>
              </div>
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Common questions about specific scores</Heading>
            <div className="space-y-5">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <Heading as="h3" size="lg" className="mb-1">{f.q}</Heading>
                  <Text variant="body" className="leading-relaxed">{f.a}</Text>
                </div>
              ))}
            </div>
            <Text variant="body" className="mt-4">
              For typical scores at each age, see{' '}
              <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline">average Rice Purity score by age</Link>.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What your score doesn&apos;t tell you</Heading>
            <Text variant="body" className="leading-relaxed">
              Your score counts how many items on one specific checklist apply to your life, nothing more. It doesn&apos;t
              measure character, judgment or worth. The test began as a campus tradition at Rice University, where the
              student newspaper printed versions of it for new students, and it was always meant as a conversation
              starter rather than an assessment. If you want the background, read{' '}
              <Link href="/rice-purity-test-history" className="text-green-600 underline">the history of the test</Link>.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <Heading as="h2" size="lg" className="mb-3 text-green-700">Haven&apos;t taken it yet?</Heading>
            <Text variant="body" className="mb-5">
              It takes about 10 minutes. Your answers stay in your browser; nothing is sent to us.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test"><Button size="lg">Take the test</Button></Link>
              <Link href="/rice-purity-test-questions"><Button size="lg" variant="secondary">Read the 100 questions</Button></Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
