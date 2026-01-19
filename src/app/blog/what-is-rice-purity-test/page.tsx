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
  title: 'What is the Rice Purity Test? Complete Guide for 2026',
  description: 'Everything you need to know about the Rice Purity Test - its origins at Rice University, how it works, what questions it asks, and how to interpret your score.',
  keywords: 'what is rice purity test, rice purity test guide, rice purity test explained',
  robots: {
    index: true,
    follow: true,
  },
};

export default function WhatIsRicePurityTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'What is the Rice Purity Test?' }
        ]} />
        <Heading size="3xl" className="mb-6">
          What is the Rice Purity Test? Complete Guide for 2026
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 15, 2026 • 8 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test is a self-graded survey that has become one of the most popular online quizzes, taken by millions of people worldwide. Originally created at Rice University in Houston, Texas, this 100-question test assesses participants' life experiences and calculates a "purity score" from 0 to 100.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Understanding the Rice Purity Test
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test consists of 100 questions covering various life experiences, from innocent activities to more mature encounters. Participants check off each experience they've had, and their score is calculated by subtracting the number of checked items from 100. A score of 100 means you've had none of the experiences (most "pure"), while a score of 0 means you've had all of them.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test is designed to be fun and introspective, not a judgment of character. It's become particularly popular among college students and young adults as an icebreaker activity and conversation starter.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Origins and History
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test was created at Rice University in the 1980s as a way for incoming students to bond and share experiences during orientation week. Originally a paper-based questionnaire, it served as an icebreaker that helped new students connect with their peers in a lighthearted, non-judgmental environment.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              As the internet became widespread in the late 1990s and early 2000s, the test found its way online. Students began sharing digital versions, and it quickly spread beyond the Rice University campus, becoming a viral internet phenomenon.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Test Works
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Taking the Rice Purity Test is simple:
            </Text>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Answer all 100 questions honestly by checking off experiences you've had</li>
              <li>Your progress is automatically saved as you go</li>
              <li>Calculate your score (100 minus the number of checked items)</li>
              <li>Share your results with friends if you choose (completely optional)</li>
            </ol>
            <Text variant="body" className="leading-relaxed mt-4">
              The test is completely anonymous - we don't collect, store, or track any of your answers. Everything is processed locally on your device.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Means
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Your Rice Purity Test score reflects the number of experiences you've had from the test's list. Here's a general guide:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>100-98:</strong> Extremely Pure - Very few experiences</li>
              <li><strong>97-94:</strong> Very Pure - Quite innocent</li>
              <li><strong>93-77:</strong> Relatively Pure - Some experiences but still innocent</li>
              <li><strong>76-45:</strong> Moderate - Average range of experiences</li>
              <li><strong>44-9:</strong> Experienced - Many experiences</li>
              <li><strong>8-0:</strong> Highly Experienced - Most things on the list</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              Remember, there's no "right" or "wrong" score. The test is meant to be fun and reflective, not a definitive measure of your character.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why Take the Rice Purity Test?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test offers several benefits:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Self-reflection:</strong> Helps you think about your life experiences and personal growth</li>
              <li><strong>Conversation starter:</strong> Great way to bond with friends and discuss life experiences</li>
              <li><strong>Fun activity:</strong> Lighthearted way to pass time and learn about yourself</li>
              <li><strong>Anonymous:</strong> Completely private - no one sees your answers</li>
              <li><strong>Free:</strong> No cost, no sign-up required</li>
            </ul>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Ready to Take the Test?
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Now that you understand what the Rice Purity Test is, why not take it yourself? It's free, anonymous, and takes just 10-20 minutes.
            </Text>
            <Link href="/test">
              <Button size="lg">Start the Rice Purity Test</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
