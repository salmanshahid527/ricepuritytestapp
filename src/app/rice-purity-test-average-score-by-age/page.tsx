import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Rice Purity Test Average Score by Age (2026)',
  description: 'Find the Rice Purity Test average score by age for 18-22, 23-25, 26-30, and 31+, then compare your score with typical ranges.',
  keywords: 'rice purity test average score by age, average rice purity test score, rice purity test average score, average rice purity score',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-average-score-by-age` },
  openGraph: {
    title: 'Rice Purity Test Average Score by Age (2026)',
    description: 'Find the Rice Purity Test average score by age for 18-22, 23-25, 26-30, and 31+. Compare your score with typical ranges.',
    url: `${BASE_URL}/rice-purity-test-average-score-by-age`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Rice Purity Test Average Score by Age (2026)', description: 'Find average Rice Purity Test scores by age group and compare your result.' },
};

export default function AverageScoreByAgePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Average Score by Age' },
        ]} />

        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Average Score by Age
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            Age is the single biggest predictor of Rice Purity Test scores. Not because older people made worse decisions than younger ones — but because the test asks about cumulative life experiences, and more years means more time to accumulate them. If you're comparing your score to someone in a different decade of life, you're not comparing apples to apples.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Overall Average — Where Most People Land
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Across all age groups, the average Rice Purity Test score falls somewhere between <strong>62 and 68</strong>. That means most people check off roughly 32-38 items out of 100. The most common range is 55-75, which accounts for about 60% of scores.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              These figures are based on self-reported data, so they reflect the population of people who voluntarily take and share their results — which skews younger and toward certain social environments. The real population average, including people who've never heard of the test, would likely be different. Use these numbers as reference points, not ground truth.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Average Score Ranges by Age Group
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Here's how scores tend to distribute by age, along with why each range makes sense:
            </Text>
            <div className="space-y-5">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">18-22 years old — Average: 70-85</Heading>
                <Text variant="body" className="leading-relaxed mb-2">This is the core demographic for the Rice Purity Test — freshmen, sophomores, early college students taking it during orientation or with a new friend group. Scores here tend to be higher for the obvious reason: you haven't had as many years to accumulate experiences.</Text>
                <Text variant="body" className="leading-relaxed">Someone who's 18 and scores a 75 isn't particularly sheltered — they're just 18. The same person retaking it at 23 will almost certainly score lower, even without doing anything dramatically different in the intervening years. A handful of ordinary life events add up quickly on a 100-item list.</Text>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">23-25 years old — Average: 60-75</Heading>
                <Text variant="body" className="leading-relaxed mb-2">Post-college, early working life. By this point most people have been in relationships, lived independently, navigated some social complexity, and encountered situations that would have been unfamiliar a few years earlier. Scores drop accordingly.</Text>
                <Text variant="body" className="leading-relaxed">This age group tends to have the most internal variation — some 24-year-olds have lived intensely, others have been focused on graduate school or career and have scores closer to their college freshman self. The range is wide for a reason.</Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">26-30 years old — Average: 50-65</Heading>
                <Text variant="body" className="leading-relaxed mb-2">The mid-to-late 20s tend to see scores dip into the 50s for most people. These are the years when a lot of the test's more significant items — longer-term relationships, more varied social environments, a few years of navigating adult life — become applicable.</Text>
                <Text variant="body" className="leading-relaxed">A score of 55 at 28 isn't anything surprising. If you're in this range and score higher than expected, you may have had a relatively contained social life — which is neither good nor bad, just different.</Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">31+ years old — Average: 45-60</Heading>
                <Text variant="body" className="leading-relaxed mb-2">By the time someone's in their 30s, the test starts feeling less like a discovery and more like a census of things they've already processed. The questions that seemed hypothetical at 20 are now just memories. Scores in this range tend to reflect that accumulated history.</Text>
                <Text variant="body" className="leading-relaxed">That said, adults in their 30s and 40s who've had quieter or more focused lives do score in the 60s and 70s. Life trajectory matters more than age alone at this point.</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
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
            <Heading size="xl" className="mb-4 text-green-500">
              What If My Score Doesn't Match My Age Group?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It's genuinely common. These are wide ranges, and they reflect central tendencies — not rules. If you're 24 and scored a 90, that doesn't mean something is wrong with you. It might mean you've had a more sheltered or focused upbringing, strong personal values, a particular social environment, or simply that you interpreted some questions conservatively.
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
                — <Link href="/rice-purity-test-score" className="text-green-600 hover:text-green-700 underline">Rice Purity Test Score — full range breakdown</Link>
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
