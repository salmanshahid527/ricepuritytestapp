import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Average Rice Purity Test Score (2026): Stats & Trends',
  description: 'See the average Rice Purity Test score, score distribution, and trend insights to compare your result with common ranges.',
  keywords: 'average rice purity test score, average rice purity test, rice purity test average, rice purity test average score, rice purity test average score by age',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AverageScorePage() {
  return (
    <div className="min-h-screen bg-white">
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
            Understanding average Rice Purity Test scores can help you see how your results compare to others. Based on data from millions of test takers, here's what we know about typical scores and trends.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Overall Average Score
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The average Rice Purity Test score typically falls between <strong>62 and 68</strong>. This means most people have checked off approximately 32-38 of the 100 experiences listed in the test. This moderate range reflects that most test takers have had a balanced mix of life experiences.
            </Text>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
              <Text variant="large" className="font-bold text-green-700 text-center mb-2">
                Average Score: 62-68
              </Text>
              <Text variant="body" className="text-center text-gray-700">
                Based on data from 500,000+ test takers
              </Text>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Score Distribution
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The majority of test takers (approximately 60%) score between <strong>55 and 75</strong>, representing a moderate level of life experiences. Here's the breakdown:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>90-100:</strong> ~5% of test takers</li>
              <li><strong>75-89:</strong> ~20% of test takers</li>
              <li><strong>55-74:</strong> ~60% of test takers (most common)</li>
              <li><strong>30-54:</strong> ~12% of test takers</li>
              <li><strong>0-29:</strong> ~3% of test takers</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Rice Purity Test Average Score by Age
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Age is one of the strongest predictors of Rice Purity Test scores:
            </Text>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">18-22 Years Old</Heading>
                <Text variant="body">Average Score: <strong>70-85</strong></Text>
                <Text variant="small" className="text-gray-600">Younger test takers typically score higher due to fewer life experiences</Text>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">23-25 Years Old</Heading>
                <Text variant="body">Average Score: <strong>60-75</strong></Text>
                <Text variant="small" className="text-gray-600">College graduates and young professionals</Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">26-30 Years Old</Heading>
                <Text variant="body">Average Score: <strong>50-65</strong></Text>
                <Text variant="small" className="text-gray-600">More life experiences accumulated</Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">31+ Years Old</Heading>
                <Text variant="body">Average Score: <strong>45-60</strong></Text>
                <Text variant="small" className="text-gray-600">Most diverse range of experiences</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Important Notes About Statistics
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              These statistics are based on self-reported data and should be interpreted with caution:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Scores can vary significantly based on honesty in answering</li>
              <li>Cultural and social backgrounds influence results</li>
              <li>Personal values and beliefs affect which experiences people have</li>
              <li>Individual variation is significant - there's no "normal" score</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The most important thing is not how your score compares to averages, but what it means to you personally.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Discover Your Score
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the Rice Purity Test to see how your score compares to these averages.
            </Text>
            <Text variant="body" className="mb-4 text-gray-700">
              Want a deeper age breakdown? Read our
              {' '}
              <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 hover:text-green-700 font-semibold underline">
                Rice Purity Test average score by age guide
              </Link>
              .
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
