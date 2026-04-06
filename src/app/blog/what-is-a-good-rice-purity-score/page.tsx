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
  title: 'What Is a Good Rice Purity Score? The Honest Answer',
  description: 'People ask what a "good" Rice Purity Score is. Here\'s the honest, nuanced answer — why the question itself is tricky and what your score actually tells you.',
  keywords: 'what is a good rice purity score, good rice purity test score, rice purity score meaning',
  alternates: { canonical: `${BASE_URL}/blog/what-is-a-good-rice-purity-score` },
  openGraph: {
    title: 'What Is a Good Rice Purity Score? The Honest Answer',
    description: 'What does "good" mean for a Rice Purity Score? Here\'s the honest answer and what your number actually tells you about your experiences.',
    url: `${BASE_URL}/blog/what-is-a-good-rice-purity-score`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Good Rice Purity Score? The Honest Answer',
    description: 'What is a good Rice Purity Score? The honest answer.',
  },
  robots: { index: true, follow: true },
};

export default function WhatIsGoodRicePurityScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="What Is a Good Rice Purity Score? The Honest Answer"
        datePublished="2026-03-20"
        url={`${BASE_URL}/blog/what-is-a-good-rice-purity-score`}
        description="People ask what a 'good' Rice Purity Score is. Here's the honest, nuanced answer — why the question itself is tricky and what your score actually tells you."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'What Is a Good Rice Purity Score?' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          What Is a Good Rice Purity Score? The Honest Answer
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: March 20, 2026 • 8 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            &quot;What&apos;s a good Rice Purity score?&quot; is one of the most common questions people ask after taking the test. The honest answer is more nuanced than most articles give you — because &quot;good&quot; depends entirely on what you&apos;re optimizing for, and the test itself doesn&apos;t make a claim about what that should be.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Short Answer
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              There is no universally &quot;good&quot; Rice Purity score. The test measures accumulated life experiences, not virtue, wisdom, or personal quality. A score of 45 and a score of 85 can both belong to people living well-considered, healthy, fulfilling lives — they&apos;ve just had different experiences.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What people usually mean when they ask &quot;what&apos;s a good score&quot; is one of three different questions:
            </Text>
            <ul className="space-y-3 list-disc list-inside pl-4">
              <li><strong>What&apos;s an average score?</strong> — Around 62–68 for adults, higher for younger people</li>
              <li><strong>What score will impress others?</strong> — This varies by social context; there&apos;s no universal answer</li>
              <li><strong>What does my score say about me?</strong> — Less than you might think; see below</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Different Score Ranges Actually Mean
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Here&apos;s an honest breakdown of what different score ranges indicate — not a moral judgment, but a factual interpretation of what the number tells you:
            </Text>

            <div className="space-y-3 my-4">
              {[
                { range: '90–100', label: 'Very Few Checked Items', color: 'emerald', desc: 'You\'ve checked very few items on the list — typically fewer than 10. This often indicates youth, limited social exposure, or specific personal choices. It\'s not a badge of virtue; it\'s just a count.', common: 'Most common in younger teens and people who took the test early in life' },
                { range: '80–89', label: 'Below Average Checked', color: 'green', desc: 'You\'ve checked 11–20 items. You\'re in the above-average purity range for most adult populations. Many of the romantic and social experiences on the list may be things you haven\'t encountered yet or have chosen not to pursue.', common: 'Common in late teens and young adults with more conservative backgrounds' },
                { range: '70–79', label: 'Near Average Range', color: 'teal', desc: '21–30 items checked. This is close to the average range for adults. You\'ve had a typical mix of social, romantic, and other experiences for your age group.', common: 'One of the most common ranges for college freshmen and sophomores' },
                { range: '60–69', label: 'Average Adult Range', color: 'blue', desc: '31–40 items checked. This is the sweet spot for average adult scores. Most people in their mid-20s to early 30s land somewhere in this range. It indicates a fairly full range of common life experiences.', common: 'The most common range for adults 22–30' },
                { range: '50–59', label: 'Above Average Experience', color: 'indigo', desc: '41–50 items checked. You\'ve had more of the experiences on the list than average. This is common for people who are more socially active, older, or have had a wider range of life experiences.', common: 'Common for adults in their late 20s and 30s' },
                { range: '30–49', label: 'High Experience', color: 'purple', desc: '51–70 items checked. You\'ve checked the majority of items on the list. This typically correlates with a wide range of social and personal experiences accumulated over time.', common: 'More common in adults 30+, people with diverse social backgrounds' },
                { range: '0–29', label: 'Very High Experience', color: 'red', desc: '71–100 items checked. You\'ve checked nearly everything on the list. This is relatively rare and typically indicates a very wide range of accumulated experiences.', common: 'Less than 5% of all reported scores' },
              ].map((row) => (
                <div key={row.range} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-800 sm:w-24">{row.range}</span>
                    <span className="font-semibold text-gray-700">{row.label}</span>
                  </div>
                  <Text variant="body" className="text-gray-600 mb-2">{row.desc}</Text>
                  <Text variant="small" className="text-gray-500 italic">{row.common}</Text>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why &quot;Higher Is Better&quot; Is a Misleading Frame
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test is called the &quot;Purity&quot; Test, which implies that higher scores are purer — and therefore better, in some sense. This framing is worth examining.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The original campus context used &quot;purity&quot; somewhat ironically. It was the 1980s, the test was a student social activity, and the word choice was partly a joke — a way to frame a checklist of life experiences in a way that made for interesting conversation, not a genuine claim about moral worth.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              When the test went online and spread through social media, that ironic context got stripped away. Without it, &quot;higher purity = better person&quot; started to feel like the intended meaning — which it wasn&apos;t.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Equally problematic is the counter-framing that emerged on social media: that a lower score is something to be proud of, a marker of having &quot;lived.&quot; That&apos;s also not what the test is for. Neither high nor low is the goal. The number is just a count.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Makes a Score Meaningful to You
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              A score becomes meaningful when you use it as a starting point for genuine reflection, not when you judge it against some external standard. Here are some questions that make better use of your number than &quot;is this good?&quot;:
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <ul className="space-y-3">
                {[
                  'Are there items I checked that I wish I hadn\'t done?',
                  'Are there items I didn\'t check that I\'d like to eventually experience?',
                  'How does my score compare to what I expected before taking the test?',
                  'How might my score look in 5 or 10 years?',
                  'Which category of questions affected my score most?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">Q</span>
                    <Text variant="body">{q}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <Text variant="body" className="leading-relaxed mb-4">
              These questions are more productive than asking whether your number is good or bad, because they invite reflection on your own life rather than comparison to an arbitrary scale.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Scores Relative to Your Peers
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you&apos;re curious about how your score compares to others in your age group, that&apos;s a genuinely useful data point — not as a judgment, but as context. You can see average scores by age at our <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline hover:text-green-700">average score by age page</Link>.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The most important comparison is to your own age group. A 19-year-old and a 35-year-old with the same score have very different relative standings — because the 35-year-old has had 16 more years to accumulate experiences. Comparing across age groups doesn&apos;t tell you much.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Take the Test and Find Out
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              The only &quot;good&quot; score is an honest one. Free, anonymous, no account required.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test">
                <Button size="lg">Start the Test</Button>
              </Link>
              <Link href="/rice-purity-test-score">
                <Button size="lg" variant="secondary">See Full Score Guide</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
