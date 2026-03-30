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
            The Rice Purity Test has a deceptively simple name. "Purity" sounds like a moral verdict, but it never was one — at least not in the way the word usually gets used. Understanding what the test actually means requires separating the word from its baggage.
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              The Word "Purity" and What It Doesn't Mean
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              When the test was created at Rice University in the 1980s, "purity" was used in a deliberately ironic, self-aware way. College students weren't genuinely claiming that less experience made you a better or more virtuous person. The framing was playful — a mock-serious label for something that was never meant to be serious at all.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              That irony has gotten a little lost over the decades, especially as the test spread to audiences who didn't have the campus context. People sometimes treat a high score as something to be proud of, or a low score as something shameful. Neither reaction makes much sense. A high score usually just means you're young, sheltered, or haven't had the opportunity for certain experiences. A low score usually just means you've been around for a while and said yes to a few things.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The word "purity" in this context is best read as a placeholder for "innocence by the test's specific definition" — which is just: how many of these 100 items have you checked?
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why People Actually Take It
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The honest answer: social comparison. People want to know how they measure up against their friends, their partner, their roommate. That's not a flaw in the test — it's the entire point. The original campus version worked because it gave groups of strangers a shared framework for talking about experiences that are usually private.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              There's something psychologically interesting about a number that summarizes your history in a single figure. It makes the abstract concrete. You can't easily compare life experiences directly — they're too varied, too contextual. But "I got a 62, you got a 74" is a number you can talk around. It opens questions rather than answering them.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              That's probably why the test has lasted over 40 years despite being, technically, a very simple questionnaire. It's not the questions themselves that keep people coming back. It's the conversation that comes after.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Test Can and Can't Tell You
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test can tell you one thing reliably: how many of its 100 specific experiences you've had. That's it. The list skews toward certain types of experiences — social, romantic, and risk-related ones. It completely misses others: intellectual experiences, creative milestones, professional growth, loss, grief, financial hardship, acts of care or courage. Someone could score a perfect 100 and have had a richer, more complex life than someone who scored a 30.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test also can't account for the quality or context of experiences. Checking a box because something happened once, briefly, under specific circumstances is treated identically to someone for whom that experience has been a recurring part of their life. Two people with the same score can have lives that look nothing like each other.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              None of that makes the test useless. It just means the score is a starting point for reflection, not a destination. The most useful question isn't "what does my number mean?" — it's "what do I think about the specific things I checked, and the ones I didn't?"
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why Your Score Feels More Significant Than It Is
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              There's a reason people feel a mild jolt when they see their score — even knowing it's just a casual quiz. Numbers carry authority. They feel definitive. And because the questions touch on real, personal parts of your life, the score feels like it's saying something real about you rather than just counting checkboxes.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              That emotional reaction is worth noticing. If your score surprises you — higher or lower than expected — it's worth asking why. What were you assuming about your own history? What were you comparing yourself to? Those questions are often more revealing than the score itself.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test is at its best when it sparks that kind of reflection. It's at its worst when people treat a number as a verdict on who they are.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Cultural Life of the Test
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The fact that this test has survived from the 1980s to now — from paper handouts to viral TikTok content — says something. Each generation rediscovers it, takes it, shares it, and argues about what different scores mean. The conversation keeps regenerating because the questions touch something that doesn't really change: people's curiosity about where they fit, how their experiences compare, and what those comparisons mean.
            </Text>
            <Text variant="body" className="leading-relaxed">
              The Rice Purity Test doesn't really answer any of that. But it asks the questions in a form that's low-stakes enough that people are willing to engage. And sometimes that's exactly what you need to start talking about the things you'd otherwise avoid.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Want the numbers breakdown?
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              If you're looking for what specific scores mean in practice — the ranges, the context, the comparisons — the score guide covers it in detail.
            </Text>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/rice-purity-test-score">
                <Button size="lg" variant="secondary">Score Guide</Button>
              </Link>
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
