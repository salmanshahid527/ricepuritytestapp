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
  title: 'What is the Rice Purity Test? Complete Guide for 2026 | Rice Purity Test Guide & Tips',
  description: 'Read this guide on what the Rice Purity Test is — learn key tips, explanations, and actionable insights about the Rice Purity Test and scores.',
  keywords: 'what is rice purity test, rice purity test guide, rice purity test explained',
  alternates: { canonical: `${BASE_URL}/blog/what-is-rice-purity-test` },
  openGraph: {
    title: 'What is the Rice Purity Test? Complete Guide for 2026',
    description: 'Everything you need to know about the Rice Purity Test - origins, how it works, and what your score means.',
    url: `${BASE_URL}/blog/what-is-rice-purity-test`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'What is the Rice Purity Test? Complete Guide for 2026', description: 'Everything you need to know about the Rice Purity Test.' },
  robots: { index: true, follow: true },
};

export default function WhatIsRicePurityTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="What is the Rice Purity Test? Complete Guide for 2026"
        datePublished="2026-01-15"
        url={`${BASE_URL}/blog/what-is-rice-purity-test`}
        description="Everything you need to know about the Rice Purity Test - origins, how it works, and what your score means."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'What is the Rice Purity Test?' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Complete Guide to the Rice Purity Test (2026)
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 15, 2026 • 8 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            Someone just sent you a number and called it their "Rice Purity score." Maybe you saw it on TikTok, or your college roommate mentioned it, or a friend texted asking if you've taken it. Here's everything you need to know before you take it yourself — what it actually is, what to expect, and what to do with the result.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Short Version
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test is a list of 100 life experiences. You check off the ones that apply to you. Your score is 100 minus the number you checked. That's it. A 90 means you checked 10 items. A 45 means you checked 55.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The experiences range from very ordinary (things most people in their 20s have done) to pretty intense (things most people haven't done). There's no judgment built into the test — your score is just a count. The interesting part is comparing your count with other people's counts and having a conversation about the differences.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Where Did It Come From?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rice University is a small private university in Houston, Texas. In the 1980s, students there started passing around a paper questionnaire during freshman orientation — a checklist of life experiences used as an icebreaker. The name "purity test" was partly ironic; the campus version was self-aware about the loaded connotations of that word.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test stayed on paper for over a decade. Then the internet happened. By the late 1990s, students were posting it online, and it spread university by university. By the 2010s, it was a mainstream internet quiz. By the 2020s, TikTok had turned it into a genuine cultural phenomenon, with millions of people posting reaction videos and debating their numbers publicly.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The remarkable thing: the questions themselves barely changed. What started as a paper handout at one Texas university in the '80s is essentially the same test people take today.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What to Expect When You Take It
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              You'll see 100 checkboxes. The questions start relatively tame and get progressively more varied. Some will seem obviously applicable to your life; others will have nothing to do with you. A few might surprise you — either because you realized you've done something you'd forgotten about, or because you hadn't expected the question to be on the list.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The whole thing takes 10-15 minutes if you read each question. Your progress saves automatically, so you can pause and come back. When you're done, you get your number. You can share it or keep it to yourself — that's entirely up to you.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              One thing worth knowing going in: answer for your whole life, not just recently. The questions ask "have you ever" — not "are you currently" or "do you regularly." Something that happened once, five years ago, counts the same as something you do every weekend.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Actually Means
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The average score is roughly 62-68, which means the typical person checks off about a third of the list. Most scores fall in the 55-75 range. Scores above 90 are uncommon; scores below 30 are also uncommon.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Your score is strongly influenced by your age. An 18-year-old and a 28-year-old with similar life values and similar decision-making will still have different scores because one of them has had 10 more years to accumulate experiences. Comparing across age groups doesn't tell you much.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The score also doesn't say anything about your character, intelligence, or future. It's a count from one specific checklist — one that leaves out enormous parts of what makes a life interesting. Two people with identical scores can have led radically different lives. Use the number as a starting point for conversation, not as a verdict.
            </Text>
            <Text variant="body" className="leading-relaxed">
              For a full breakdown of what each range means in practice, check the <Link href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">score guide</Link>. For how your number compares across age groups, see the <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline hover:text-green-700">average score by age</Link> page.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Is It Private?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Yes. Your answers never leave your device — there's no account, no data sent to any server, nothing stored anywhere. You decide what to share and with whom. The test is designed to work this way because people answer more honestly when they know there's no audience.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Ready to take it?
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Free, anonymous, no sign-up. Takes about 10-15 minutes.
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
