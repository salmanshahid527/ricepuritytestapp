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
import { LiveStats } from '@/components/organisms/LiveStats';

const BASE_URL = 'https://www.ricepuritytestapp.com';

const TITLE = 'Average Rice Purity Score by Age (18 to 31+)';
const DESCRIPTION =
  'The average Rice Purity score is estimated in the mid-60s, and most adults land between 55 and 75. Typical ranges for ages 18, 19-22, 23-25, 26-30 and 31+, and how to read yours.';
const URL = `${BASE_URL}/rice-purity-test-average-score-by-age`;

export const revalidate = 3600;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const ESTIMATES = [
  { age: '18', range: '75–90', why: 'Most items become possible only with time and independence; many 18-year-olds have just started college or work.' },
  { age: '19–22', range: '65–85', why: 'College years: the drinking, dating and first-relationship items start to add up.' },
  { age: '23–25', range: '60–75', why: 'Living independently and longer relationships; the widest spread of any group.' },
  { age: '26–30', range: '50–65', why: 'More of the partner and relationship items apply to most people by now.' },
  { age: '31+', range: '45–60', why: 'A running total that only goes up, though quieter lives still score in the 60s and 70s.' },
];

export default function AverageScoreByAgePage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema headline={TITLE} datePublished="2026-01-20" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Average Score by Age' },
        ]} />

        <Heading as="h1" size="3xl" className="mb-2">
          Average Rice Purity Score by Age
        </Heading>
        <Text variant="small" color="muted" className="mb-6">Last reviewed September 27, 2026 · For adults 18+</Text>

        <article className="space-y-6 text-gray-700">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <Heading as="h2" size="lg" className="mb-3">The short answer</Heading>
            <ul className="list-disc ml-5 space-y-2">
              <li>The overall average Rice Purity score is <strong>roughly 62 to 68</strong>, so most people check about a third of the list.</li>
              <li>The most common range is <strong>55 to 75</strong>.</li>
              <li>A typical <strong>18-year-old</strong> scores in the high 70s to high 80s; by the <strong>late 20s</strong> most people are in the 50s or low 60s.</li>
              <li>These are estimates, not survey results. There is no official dataset (see below).</li>
            </ul>
          </div>

          <Text variant="large" className="leading-relaxed">
            Age is the single biggest predictor of a Rice Purity score. Not because older people made worse decisions,
            but because the test asks about cumulative life experiences, and more years means more time to accumulate
            them. If you&apos;re comparing your score to someone in a different decade of life, you&apos;re not comparing
            like with like.
          </Text>

          <LiveStats />

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Typical score by age at a glance</Heading>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Age</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Typical range (estimate)</th>
                    <th className="py-2 font-semibold text-gray-800">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {ESTIMATES.map((e) => (
                    <tr key={e.age} className="border-b border-gray-100 align-top">
                      <td className="py-2 pr-4 font-medium whitespace-nowrap">{e.age}</td>
                      <td className="py-2 pr-4 whitespace-nowrap">{e.range}</td>
                      <td className="py-2">{e.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Where these numbers come from</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              No one publishes an official, representative dataset of Rice Purity scores, and many sites quote precise
              &ldquo;averages&rdquo; without saying where they came from. The ranges on this page are our editorial
              estimates. They are based on how the list is built (which items usually become possible only with age and
              independence) and on the ranges other published guides report. Treat them as a rough guide, not a
              measurement.
            </Text>
            <Text variant="body" className="leading-relaxed">
              {process.env.NEXT_PUBLIC_STATS_ENABLED === '1'
                ? 'To do better, we ask readers who finish the test whether they would like to add their score and age band anonymously. As soon as an age group has at least 50 responses, its real figures appear on this page with the number of responses behind them.'
                : 'We are setting up an anonymous, opt-in way for readers to add their score and age band. Once an age group has at least 50 responses, its real figures will appear on this page with the number of responses behind them.'}
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">
              The overall average: where most people land
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Across all age groups, the average Rice Purity score is estimated at <strong>62 to 68</strong>. That means most people check roughly 32 to 38 items out of 100, and the bulk of scores fall between 55 and 75.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Keep in mind who takes this test: mostly college students and people in their twenties who chose to. A true population average, including people who have never heard of it, would look different.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">
              Average score ranges by age group, explained
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Here's how scores tend to distribute by age, along with why each range makes sense:
            </Text>
            <div className="space-y-5">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
                <Heading as="h3" size="lg" className="mb-2 text-gray-800">18 to 22 years old: typically 65 to 90</Heading>
                <Text variant="body" className="leading-relaxed mb-2">This is the core audience for the test: first- and second-year college students taking it at orientation or with a new group of friends. Scores here tend to be higher for the obvious reason: you haven't had as many years to accumulate experiences.</Text>
                <Text variant="body" className="leading-relaxed">Someone who's 18 and scores a 75 isn't particularly sheltered — they're just 18. The same person retaking it at 23 will almost certainly score lower, even without doing anything dramatically different in the intervening years. A handful of ordinary life events add up quickly on a 100-item list.</Text>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
                <Heading as="h3" size="lg" className="mb-2 text-gray-800">23 to 25 years old: typically 60 to 75</Heading>
                <Text variant="body" className="leading-relaxed mb-2">Post-college, early working life. By this point most people have been in relationships, lived independently, navigated some social complexity, and encountered situations that would have been unfamiliar a few years earlier. Scores drop accordingly.</Text>
                <Text variant="body" className="leading-relaxed">This age group tends to have the most internal variation — some 24-year-olds have lived intensely, others have been focused on graduate school or career and have scores closer to their college freshman self. The range is wide for a reason.</Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
                <Heading as="h3" size="lg" className="mb-2 text-gray-800">26 to 30 years old: typically 50 to 65</Heading>
                <Text variant="body" className="leading-relaxed mb-2">The mid-to-late 20s tend to see scores dip into the 50s for most people. These are the years when a lot of the test's more significant items — longer-term relationships, more varied social environments, a few years of navigating adult life — become applicable.</Text>
                <Text variant="body" className="leading-relaxed">A score of 55 at 28 isn't anything surprising. If you're in this range and score higher than expected, you may have had a relatively contained social life — which is neither good nor bad, just different.</Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
                <Heading as="h3" size="lg" className="mb-2 text-gray-800">31 and older: typically 45 to 60</Heading>
                <Text variant="body" className="leading-relaxed mb-2">By the time someone's in their 30s, the test starts feeling less like a discovery and more like a census of things they've already processed. The questions that seemed hypothetical at 20 are now just memories. Scores in this range tend to reflect that accumulated history.</Text>
                <Text variant="body" className="leading-relaxed">That said, adults in their 30s and 40s who've had quieter or more focused lives do score in the 60s and 70s. Life trajectory matters more than age alone at this point.</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">
              What is the average Rice Purity score for an 18-year-old?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Most 18-year-olds land somewhere between the high 70s and the high 80s. At 18, many of the items near the
              end of the list (the ones about partners, travel and the law) simply haven&apos;t had a chance to happen
              yet, while the dating, kissing and first-drink items often have. A score of 80 at 18 is completely
              ordinary; so is a 92 or a 70.
            </Text>
            <Text variant="body" className="leading-relaxed">
              By 19 to 20 scores usually drift into the 70s, and by 21 to 22 many people are somewhere in the 60s or low
              70s. The drop is gradual: a few new experiences a year move the number more than people expect.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What about people under 18?</Heading>
            <Text variant="body" className="leading-relaxed">
              We don&apos;t publish figures for anyone under 18. The questions are about sex, drugs and trouble with the
              law, and the test is meant for adults. If you&apos;re under 18, please skip it; it will still be here later.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">
              Why Age Affects Score — The Simple Explanation
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test asks "have you ever" for each item — not "have you recently" or "do you regularly." That means it's a running total that can only go up over time. You can't uncross something you've already crossed.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Add to that: the items on the list include a lot of things that are simply more likely to happen as you get older and have more social opportunities, more independence, and more years of relationships behind you. Not because older people are reckless — because some experiences just take time to encounter.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This is why comparing your score to someone ten years older or younger isn't that meaningful. A 19-year-old with a 78 and a 32-year-old with a 58 might have had very similar proportional life experiences for their age — the raw numbers don't tell you that.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">
              What If My Score Doesn't Match My Age Group?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It happens all the time. These are wide ranges, and they reflect central tendencies — not rules. If you're 24 and scored a 90, that doesn't mean something is wrong with you. It might mean you've had a more sheltered or focused upbringing, strong personal values, a particular social environment, or simply that you interpreted some questions conservatively.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              If you're 21 and scored a 45, that doesn't mean you've burned your life down. It might mean you've had a wider social range than most people your age, grew up faster, or moved in environments where more of these experiences were normal.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The average is a reference point for comparison — not a benchmark you should feel pressure to hit. The more interesting question is usually not "how do I compare to the average?" but "what does my specific number reflect about my actual life?"
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Related Guides
            </Heading>
            <div className="space-y-3">
              <Text variant="body">
                — <Link href="/rice-purity-test-score" className="text-green-600 hover:text-green-700 underline">Is my score good? Every score range explained</Link>
              </Text>
              <Text variant="body">
                — <Link href="/rice-purity-test-meaning" className="text-green-600 hover:text-green-700 underline">What the Rice Purity Test is and how to read it</Link>
              </Text>
              <Text variant="body">
                — <Link href="/rice-purity-test-questions" className="text-green-600 hover:text-green-700 underline">All 100 questions, explained</Link>
              </Text>
            </div>
            <div className="mt-6">
              <Link href="/test">
                <Button size="lg">Take the Test</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
