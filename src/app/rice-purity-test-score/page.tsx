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
  title: 'Rice Purity Test Score | Understanding Your Results',
  description: 'Learn how to understand and interpret your Rice Purity Test score. Complete guide to score ranges, meanings, and what your number represents.',
  keywords: 'rice purity test score, rice purity score meaning, rice purity test results',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Score' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Score Guide
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            Your Rice Purity Test score is a number from 0 to 100 that reflects the number of life experiences you've had from the test's list. This comprehensive guide will help you understand what your score means and how to interpret it.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How Your Score is Calculated
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The calculation is simple: <strong>Score = 100 - (number of checked boxes)</strong>. If you check 30 experiences, your score is 70. If you check all 100, your score is 0.
            </Text>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <Text variant="body" className="font-semibold mb-2">Formula:</Text>
              <Text variant="large" className="font-mono text-blue-700">
                Score = 100 - Experiences Checked
              </Text>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Score Range Guide
            </Heading>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <Heading size="lg" className="mb-2">100-98: Extremely Pure</Heading>
                <Text variant="body">Very few experiences. Often indicates a sheltered life focused on academics, family, or personal development.</Text>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <Heading size="lg" className="mb-2">97-94: Very Pure</Heading>
                <Text variant="body">Quite innocent with limited exposure to certain activities. Common among younger individuals.</Text>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <Heading size="lg" className="mb-2">93-77: Relatively Pure</Heading>
                <Text variant="body">Some experiences but still relatively innocent. Typical for college students and young adults.</Text>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <Heading size="lg" className="mb-2">76-45: Moderate</Heading>
                <Text variant="body">Average range of experiences. Balanced approach to life with diverse encounters.</Text>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <Heading size="lg" className="mb-2">44-9: Experienced</Heading>
                <Text variant="body">Many life experiences. Broad range of activities and encounters throughout life.</Text>
              </div>
              <div className="border-l-4 border-gray-600 pl-4">
                <Heading size="lg" className="mb-2">8-0: Highly Experienced</Heading>
                <Text variant="body">Most or all experiences checked. Extremely diverse range of life experiences.</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Doesn't Mean
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Your Rice Purity Test score is NOT:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A measure of your character or morality</li>
              <li>A judgment of your worth as a person</li>
              <li>A predictor of future behavior</li>
              <li>A scientifically validated assessment</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The test is meant for fun and self-reflection, not serious evaluation.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Get Your Score
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the Rice Purity Test to discover your score and see what it means.
            </Text>
            <Link href="/test">
              <Button size="lg">Take the Test</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
