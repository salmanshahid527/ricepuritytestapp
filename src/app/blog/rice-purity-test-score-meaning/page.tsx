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
  title: 'Rice Purity Test Score Meaning: 0-100 Explained',
  description: 'Understand Rice Purity Test score meaning for every range from 0 to 100, with simple explanations for low, average, and high scores.',
  keywords: 'rice purity test score meaning, rice purity test score, rice purity test scores, rice purity score interpretation, what does my rice purity score mean',
  alternates: { canonical: `${BASE_URL}/blog/rice-purity-test-score-meaning` },
  openGraph: {
    title: 'Rice Purity Test Score Meaning: 0-100 Explained',
    description: 'Learn what your Rice Purity Test score means with clear explanations for every range from 0 to 100.',
    url: `${BASE_URL}/blog/rice-purity-test-score-meaning`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Rice Purity Test Score Meaning: 0-100 Explained', description: 'Learn what your score means.' },
  robots: { index: true, follow: true },
};

export default function ScoreMeaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="Rice Purity Test Score Meaning: Understanding Your Results"
        datePublished="2026-01-14"
        url={`${BASE_URL}/blog/rice-purity-test-score-meaning`}
        description="Learn what your Rice Purity Test score means with clear explanations for every range from 0 to 100."
      />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Score Meaning' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Score Meaning: Understanding Your Results
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 14, 2026 • 6 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            You got your number. Now what? A lot of people experience a surprisingly strong reaction to their Rice Purity Test score relief, pride, embarrassment, curiosity, or just confusion about why they feel anything at all. Here's a more honest look at what the score means, why it lands the way it does emotionally, and how to actually use it.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Number Is (and Isn't)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The mechanics are simple: your score equals 100 minus the number of boxes you checked. A 72 means you checked 28 items. A 48 means you checked 52. The formula never changes.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What makes the result feel more significant than that is what the questions touch. They're not asking about abstract preferences they're asking about things that actually happened in your life. That makes the counting feel personal, even though it's just counting.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Worth knowing: all 100 questions are weighted equally. Something minor and something major each count as one point. Two people with identical scores can have dramatically different stories behind them. The number flattens context that matters a lot.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why Your Score Might Have Surprised You
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              One of the more common reactions is discovering your score is lower than you expected meaning you've checked more boxes than you anticipated. This usually happens for one of two reasons.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              First, people often answer for their recent self rather than their whole life. The test asks "have you ever"  not "in the past year" or "currently." Things you did years ago, in a different context, with a different crowd, still count. If you're answering with your present-day self in mind, you're going to undercount.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Second, people have an internal sense of themselves as "not really that experienced" based on comparison to specific people they know close friends, social media, whatever. The test cuts through that relative self-assessment and just asks about absolute history. The gap between self-perception and what actually happened is often bigger than expected.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The opposite happens too — some people score higher than expected, which can bring its own complicated feelings. Both reactions are worth sitting with. The surprise itself is information.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Score Ranges — What They Tend to Reflect
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The full breakdown is in the <Link href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">score guide</Link>. But here's the emotional shorthand for each range:
            </Text>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">100-94: High end</Heading>
                <Text variant="body" className="leading-relaxed">People here are usually young, have had a more sheltered upbringing, or hold values that kept most of the list at bay. The emotional response is often mild pride mixed with curiosity about what they'll experience later. A score this high is less a personality trait and more a time stamp.</Text>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">93-55: Middle range</Heading>
                <Text variant="body" className="leading-relaxed">This is most people. The emotional range here is wide some feel relieved to be "average," some feel unexpectedly low, some feel higher than their friend group and wonder why. The middle is also where the most interesting conversations happen, because nobody's at an extreme that explains everything.</Text>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">54-0: Lower end</Heading>
                <Text variant="body" className="leading-relaxed">Low scores can trigger shame responses that are worth examining. The test was designed with no moral hierarchy a low score isn't a verdict. It usually reflects age and experience, a particular social context, or a period of life that's now over. Feeling bad about it is a reaction to a cultural assumption, not something built into the number itself.</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Score and Social Comparison
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test works best when it generates conversation comparing your score with a friend and noticing where you're similar and where you diverge. Those divergences are usually more interesting than the scores themselves. Why did one person check something the other didn't, even though their friendship suggests similar life paths? That question is worth more than the number.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What doesn't work well: using the score as a status marker. People who treat a high score as a badge of virtue (or a low score as a badge of coolness) are both missing the point. The test was created to start conversation, not rank people. Treating it like a ranking tends to make people answer dishonestly, which makes the score less meaningful, which defeats the whole purpose.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What To Do With It
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The most useful thing you can do with your score is compare it with someone you're close to and actually talk about the differences. Not to judge each other but to understand each other a little better. The test is a surprisingly good tool for that because it covers ground that usually takes years of friendship to reach.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Beyond that, let it be what it is: a casual number from a quiz created by 1980s college students. It's a snapshot of one dimension of your history, not a summary of who you are.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Haven't taken it yet?
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Get your score in 10-15 minutes. Everything stays private.
            </Text>
            <Link href="/test">
              <Button size="lg">Take the Rice Purity Test</Button>
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
