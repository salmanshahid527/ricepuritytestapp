import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

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

const guides = [
  {
    href: '/rice-purity-test-average-score-by-age',
    title: 'Rice Purity Test Average Score by Age',
    description: 'Typical score ranges for 18-22, 23-25, 26-30 and 31+, and how to compare your own result.',
  },
  {
    href: '/rice-purity-test-score',
    title: 'Rice Purity Test Score: What Your Score Means',
    description: 'How the score is calculated and what each range from 0 to 100 usually looks like in practice.',
  },
  {
    href: '/rice-purity-test-questions',
    title: 'All 100 Rice Purity Test Questions, Explained',
    description: 'Every question on the test, grouped by category, with notes on the ones people find confusing.',
  },
  {
    href: '/rice-purity-test-meaning',
    title: 'What Is the Rice Purity Test?',
    description: 'What the test is, what it is not, and how to read your result without over-reading it.',
  },
  {
    href: '/rice-purity-test-history',
    title: 'Rice Purity Test History',
    description: 'From a Rice University orientation handout to a TikTok trend: how the test spread.',
  },
  {
    href: '/blog/how-to-take-rice-purity-test',
    title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
    description: 'How to handle ambiguous questions, why to answer for your whole life, and what to do with your score.',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Guides
        </Heading>
        <Text variant="large" className="mb-8 text-gray-700">
          Everything we've written about the Rice Purity Test in one place: what scores mean, how they vary by age, the questions themselves, and where the test came from.
        </Text>

        <div className="space-y-6">
          {guides.map((post, index) => (
            <Link
              key={post.href}
              href={post.href}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Heading size="xl" className="mb-3 text-green-600">
                {post.title}
              </Heading>
              <Text color="default" className="text-gray-700 mb-4">
                {post.description}
              </Text>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
