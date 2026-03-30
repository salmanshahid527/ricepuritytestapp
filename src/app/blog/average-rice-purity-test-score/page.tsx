import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { ArticleSchema } from '@/components/ArticleSchema';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Average Rice Purity Test Score (2026): Stats & Trends',
  description: 'See the average Rice Purity Test score, score distribution, and trend insights to compare your result with common ranges.',
  keywords: 'average rice purity test score, average rice purity test, rice purity test average, rice purity test average score, rice purity test average score by age',
  alternates: { canonical: `${BASE_URL}/blog/average-rice-purity-test-score` },
  openGraph: {
    title: 'Average Rice Purity Test Score (2026): Stats & Trends',
    description: 'See the average Rice Purity Test score, score distribution, and trends to compare your result.',
    url: `${BASE_URL}/blog/average-rice-purity-test-score`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Average Rice Purity Test Score (2026)', description: 'See average scores and trends to compare your result.' },
  robots: { index: true, follow: true },
};

export default function AverageScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="Average Rice Purity Test Score (2026): Stats & Trends"
        datePublished="2026-01-13"
        url={`${BASE_URL}/blog/average-rice-purity-test-score`}
        description="See the average Rice Purity Test score, score distribution, and trends to compare your result."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Average Score Statistics' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Average Rice Purity Test Score: Statistics and Trends
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 13, 2026 • 5 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The average Rice Purity Test score is somewhere around 62-68. But a raw average tells you less than you might think. Here's what the distribution actually looks like, why it's skewed the way it is, and how to make sense of where your number lands.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Average — and Why It Might Be Misleading
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The commonly cited average falls between <strong>62 and 68</strong>. That means most people check off roughly 32-38 items out of 100 — about a third of the list.
            </Text>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
              <Text variant="large" className="font-bold text-green-700 text-center mb-2">
                Average Score: 62-68
              </Text>
              <Text variant="body" className="text-center text-gray-600">
                Based on self-reported data from online test takers
              </Text>
            </div>
            <Text variant="body" className="leading-relaxed mb-4">
              Here's the catch: this average comes from the population of people who take the test online and share their results — which skews heavily toward college students and people in their early 20s. The "true" average for the general adult population would probably be different, possibly lower, since older adults have had more time to accumulate experiences.
            </Text>
            <Text variant="body" className="leading-relaxed">
              So when you read "the average is 65," that's the average for a population that's already self-selected in a particular direction. Your score relative to that average is useful context — just not a universal benchmark.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Score Distribution — How Scores Actually Spread Out
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The distribution isn't a neat bell curve. It's more of a peak in the middle with long tails at both ends. Here's approximately how it breaks down:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>90-100:</strong> ~5% of test takers — genuinely uncommon, usually younger or more sheltered</li>
              <li><strong>75-89:</strong> ~20% of test takers — above average, typically early 20s</li>
              <li><strong>55-74:</strong> ~60% of test takers — the core of the distribution, most common range</li>
              <li><strong>30-54:</strong> ~12% of test takers — below average, usually older or with wider social exposure</li>
              <li><strong>0-29:</strong> ~3% of test takers — rare, usually reflects a very specific life context</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The 55-74 band is where the real action is — 60% of people score here. If you're in this range, you're not remarkable in either direction. You've lived a life that's fairly typical for someone who's been socially active and out in the world for a few years.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why the Average Changes Over Time
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test has been taken by each new college cohort since the 1980s. That means there's effectively a rolling population of 18-22 year olds cycling through the test each year, keeping the average higher than it would be if the test were taken evenly across all age groups.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              There's also a social context effect: the test is more likely to be shared in certain environments — college dormitories, friend groups who are already comfortable being open about experiences, online communities with a particular demographic. People who find the test in those contexts aren't a random sample of the population.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This is why trends in the average are hard to interpret. If the average appears to be changing over time, it might reflect genuinely different behavior patterns — or it might just reflect which age group happened to share results most in a given year.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Age-Group Averages — The More Useful Comparison
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rather than comparing yourself to the overall average, comparing within your age group gives you a more meaningful reference:
            </Text>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">18-22 years old — Average: 70-85</Heading>
                <Text variant="small" className="text-gray-600">Higher scores are expected here. Less time to encounter most items on the list.</Text>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">23-25 years old — Average: 60-75</Heading>
                <Text variant="small" className="text-gray-600">Post-college, early careers. Scores dip as independence and social range expand.</Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">26-30 years old — Average: 50-65</Heading>
                <Text variant="small" className="text-gray-600">More varied life circumstances start showing up in the numbers.</Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">31+ years old — Average: 45-60</Heading>
                <Text variant="small" className="text-gray-600">Accumulated history shows. Scores here are less about recent choices and more about the full arc of a life.</Text>
              </div>
            </div>
            <Text variant="body" className="leading-relaxed mt-4">
              For a detailed breakdown of why each age group lands where it does — and what to think if your score doesn't match your group — see the <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 hover:text-green-700 underline font-semibold">average score by age guide</Link>.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Statistics Can't Tell You
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Two people can have the same score and completely different lives. The test doesn't weight experiences — checking "have you ever jaywalked" counts the same as checking something significantly more significant. A score of 60 might reflect someone who's had 40 very minor experiences or someone who's had 40 major ones. The number is the same; the stories are not.
            </Text>
            <Text variant="body" className="leading-relaxed">
              The most useful thing about the average isn't the number itself — it's the reference point it gives you for starting a conversation. Knowing most people score 62-68 means a 55 and a 75 both feel less like outliers and more like two points in the same normal range. That reframing can take a lot of the pressure off the result.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Find out where you land
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the test and see how your score compares.
            </Text>
            <Link href="/test">
              <Button size="lg">Take the Test Now</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
