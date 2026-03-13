import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';

export const metadata: Metadata = {
  title: 'Rice Purity Test Average Score by Age (2026)',
  description: 'Find the Rice Purity Test average score by age for 18-22, 23-25, 26-30, and 31+, then compare your score with typical ranges.',
  keywords: 'rice purity test average score by age, average rice purity test score, rice purity test average score, average rice purity score',
  robots: {
    index: true,
    follow: true,
  },
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
            If you are wondering whether your score is common for your age, this guide breaks down the Rice Purity Test average score by age and explains how to compare your result fairly.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Overall Average Rice Purity Test Score
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Across large groups of test takers, the average Rice Purity Test score usually falls between
              {' '}
              <strong>62 and 68</strong>
              . This means many people check around 32-38 items out of 100.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Age-Based Average Score Ranges
            </Heading>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">18-22 years old</Heading>
                <Text variant="body">Average score: <strong>70-85</strong></Text>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">23-25 years old</Heading>
                <Text variant="body">Average score: <strong>60-75</strong></Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">26-30 years old</Heading>
                <Text variant="body">Average score: <strong>50-65</strong></Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">31+ years old</Heading>
                <Text variant="body">Average score: <strong>45-60</strong></Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How to Compare Your Score Correctly
            </Heading>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Compare against your age group first, not all users.</li>
              <li>Use ranges, not exact numbers, because personal backgrounds vary.</li>
              <li>Remember the test is for reflection and fun, not judgment.</li>
            </ul>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Related Guides
            </Heading>
            <div className="space-y-3">
              <Text variant="body">
                - <Link href="/rice-purity-test-score" className="text-green-600 hover:text-green-700 underline">Rice Purity Test Score guide</Link>
              </Text>
              <Text variant="body">
                - <Link href="/blog/rice-purity-test-score-meaning" className="text-green-600 hover:text-green-700 underline">Rice Purity Test score meaning</Link>
              </Text>
              <Text variant="body">
                - <Link href="/blog/average-rice-purity-test-score" className="text-green-600 hover:text-green-700 underline">Average score statistics article</Link>
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
