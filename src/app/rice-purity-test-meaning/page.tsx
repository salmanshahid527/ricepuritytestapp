import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Rice Purity Test Meaning | What Does It Mean?',
  description: 'Learn what the Rice Purity Test means, its purpose, and how to interpret the results. Complete guide to understanding the test.',
  keywords: 'rice purity test meaning, what does rice purity test mean, rice purity test purpose',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-meaning` },
  openGraph: {
    title: 'Rice Purity Test Meaning | What Does It Mean?',
    description: 'Learn what the Rice Purity Test means and how to interpret your results.',
    url: `${BASE_URL}/rice-purity-test-meaning`,
  },
  twitter: { card: 'summary_large_image' },
};

export default function MeaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Meaning' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          What the Rice Purity Test Means
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test is a self-assessment survey that measures your "purity" based on life experiences. But what does "purity" actually mean in this context, and what is the purpose of the test?
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              What "Purity" Means
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              In the context of the Rice Purity Test, "purity" refers to <strong>innocence</strong> or <strong>lack of certain life experiences</strong>, not moral judgment. A higher "purity" score means you've had fewer of the experiences listed in the test.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The term is used in a lighthearted, non-judgmental way. It's not meant to suggest that having more experiences is "bad" or that having fewer is "good." It's simply a way to measure and reflect on the breadth of your life experiences.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Purpose of the Test
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test serves several purposes:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Self-Reflection:</strong> Helps you think about your life experiences and personal growth</li>
              <li><strong>Conversation Starter:</strong> Great way to bond with friends and discuss life experiences</li>
              <li><strong>Entertainment:</strong> Fun activity to pass time and learn about yourself</li>
              <li><strong>Cultural Tradition:</strong> Preserves a long-standing tradition from Rice University</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Test Measures
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test measures the number of specific life experiences you've had from a list of 100 items. It covers:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Social experiences and interactions</li>
              <li>Romantic and relationship experiences</li>
              <li>Personal milestones and achievements</li>
              <li>Various life activities and encounters</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              It does NOT measure your character, morality, worth, or future potential.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Interpreting Your Results
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              When you receive your Rice Purity Test score, remember:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>There's no "right" or "wrong" score</li>
              <li>Your score reflects your unique life journey</li>
              <li>Everyone's experiences are different and valid</li>
              <li>The test is meant for fun and reflection, not judgment</li>
            </ul>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Discover Your Meaning
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the Rice Purity Test to discover your score and what it means for you.
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
