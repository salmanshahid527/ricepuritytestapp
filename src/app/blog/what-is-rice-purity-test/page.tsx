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
  title: 'What Is the Rice Purity Test? Complete Guide 2026',
  description: 'The Rice Purity Test is a 100-question checklist of life experiences from Rice University. Here\'s what it is, where it came from, what scores mean, and what to expect.',
  keywords: 'what is rice purity test, rice purity test guide, rice purity test explained',
  alternates: { canonical: `${BASE_URL}/blog/what-is-rice-purity-test` },
  openGraph: {
    title: 'What Is the Rice Purity Test? Complete Guide 2026',
    description: 'The Rice Purity Test is a 100-question checklist of life experiences. Here\'s what it is, where it came from, and what your score actually means.',
    url: `${BASE_URL}/blog/what-is-rice-purity-test`,
    type: 'article',
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'What Is the Rice Purity Test?' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is the Rice Purity Test? Complete Guide 2026',
    description: 'The Rice Purity Test is a 100-question checklist of life experiences. Here\'s everything you need to know.',
  },
  robots: { index: true, follow: true },
};

export default function WhatIsRicePurityTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="What Is the Rice Purity Test? Complete Guide 2026"
        datePublished="2026-01-15"
        dateModified="2026-04-06"
        url={`${BASE_URL}/blog/what-is-rice-purity-test`}
        description="The Rice Purity Test is a 100-question checklist of life experiences from Rice University. Here's what it is, where it came from, what scores mean, and what to expect."
        wordCount={1600}
        articleSection="Guide"
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'What Is the Rice Purity Test?' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-4">
          What Is the Rice Purity Test? Complete Guide 2026
        </Heading>
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-3">
          <span>By RicePurityTestApp Editorial Team</span>
          <span>·</span>
          <span>Published: January 15, 2026</span>
          <span>·</span>
          <span>Updated: April 6, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">

          {/* Intro */}
          <Text variant="large" className="leading-relaxed">
            Someone just sent you a number and called it their &quot;Rice Purity score.&quot; Maybe you saw it on TikTok, or your college roommate mentioned it, or a friend texted asking if you&apos;ve taken it. Here&apos;s everything you need to know before you take it yourself — what it actually is, what to expect, and what to do with the result.
          </Text>

          {/* Key facts box */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
            <Heading size="lg" className="mb-3 text-green-700">Key Facts</Heading>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>✓ 100 yes/no questions about life experiences</li>
              <li>✓ Score = 100 minus the number of boxes checked</li>
              <li>✓ Average score: roughly 62–68 for adults</li>
              <li>✓ Most scores fall in the 55–75 range</li>
              <li>✓ Started at Rice University, Houston, Texas — circa 1980s</li>
              <li>✓ Takes 10–15 minutes, completely anonymous</li>
            </ul>
          </div>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Short Version
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test is a list of 100 life experiences. You check off the ones that apply to you. Your score is 100 minus the number you checked. That&apos;s it. A 90 means you checked 10 items. A 45 means you checked 55.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The experiences range from very ordinary — things most people in their 20s have done — to fairly varied situations that fewer people have encountered. There&apos;s no judgment built into the test. Your score is just a count. The interesting part is comparing your count with other people&apos;s and having a conversation about the differences.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test is not scientific. It was never designed to measure anything clinically meaningful. It was created by college students as an icebreaker, and that&apos;s what it still is at its core — a structured way to talk about personal experiences with people you&apos;re just getting to know.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Where Did It Come From?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rice University is a small private research university in Houston, Texas. In the 1980s, students there started passing around a paper questionnaire during freshman orientation — a checklist of life experiences used as an icebreaker. The name &quot;purity test&quot; was partly ironic; the campus version was self-aware about the loaded connotations of that word.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test stayed on paper for over a decade. Then the internet happened. By the late 1990s, students were posting it online, and it spread university by university. By the 2010s, it was a mainstream internet quiz with dozens of unofficial versions floating around. By the 2020s, TikTok had turned it into a genuine cultural phenomenon — millions of people posting reaction videos, comparing numbers, and debating what different scores mean.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The remarkable thing: the questions themselves barely changed. What started as a paper handout at one Texas university in the &apos;80s is essentially the same test people take today. The consistency is part of why the test retains cultural staying power — a score from 1988 is meaningfully comparable to a score from 2026.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              For a deeper look at the full evolution of the test, from campus handout to global internet phenomenon, see our <Link href="/blog/rice-purity-test-history" className="text-green-600 underline hover:text-green-700">complete history of the Rice Purity Test</Link>.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What to Expect When You Take It
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              You&apos;ll see 100 checkboxes. The questions start relatively tame and get progressively more varied as you go. Some will seem obviously applicable to your life; others will have nothing to do with you. A few might surprise you — either because you realized you&apos;ve done something you&apos;d forgotten about, or because you hadn&apos;t expected the question to be on the list.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The whole thing takes 10–15 minutes if you read each question. Your progress saves automatically in your browser, so you can pause and come back. When you&apos;re done, you get your number. You can share it or keep it to yourself — that&apos;s entirely up to you.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              One thing worth knowing going in: answer for your whole life, not just recently. The questions ask &quot;have you ever&quot; — not &quot;are you currently&quot; or &quot;do you regularly.&quot; Something that happened once, five years ago, counts the same as something you do every weekend. People commonly under-report because they&apos;re thinking about their present self rather than their full history.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              When a question is ambiguous, go with your gut on the first read. If your immediate instinct is &quot;yes, technically&quot; — that counts. Overthinking them leads to under-counting. The goal is an honest self-inventory, not a technically perfect legal answer.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How Scoring Works
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The scoring formula is simple subtraction. You start at 100. Each item you check reduces your score by 1 point. Check 12 boxes: score is 88. Check 41 boxes: score is 59. The test has no partial credit, no weighted questions, and no curve.
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-4">
              <Heading size="lg" className="mb-3 text-gray-800">Score at a Glance</Heading>
              <div className="space-y-2 text-sm">
                {[
                  { range: '90–100', label: 'Fewer than 10 items checked — very limited experience' },
                  { range: '70–89', label: '11–30 items — below average, common in younger adults' },
                  { range: '55–69', label: '31–45 items — the most common range for adults' },
                  { range: '40–54', label: '46–60 items — above average experience' },
                  { range: '0–39', label: '61–100 items — wide range of accumulated experiences' },
                ].map(row => (
                  <div key={row.range} className="flex gap-4 py-1.5 border-b border-gray-200 last:border-0">
                    <span className="font-bold text-green-600 w-20 flex-shrink-0">{row.range}</span>
                    <span className="text-gray-600">{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Text variant="body" className="leading-relaxed mb-4">
              For a much more detailed breakdown of what each score range means in practical terms — including how scores compare by age group — see the <Link href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">full score guide</Link>.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Actually Means
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The average score is roughly 62–68, which means the typical person checks off about a third of the list. Most scores fall in the 55–75 range. Scores above 90 are uncommon but not rare among younger test-takers; scores below 30 are uncommon across all age groups.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Your score is strongly influenced by your age. An 18-year-old and a 28-year-old with similar values and similar decision-making will still have different scores because one of them has had 10 more years to accumulate experiences. This is why comparing scores across age groups doesn&apos;t tell you very much. The meaningful comparison is within your own peer group — same rough age, similar background.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Your score also doesn&apos;t say anything about your character, intelligence, or future. It&apos;s a count from one specific checklist — one that leaves out enormous parts of what makes a life interesting or meaningful. Two people with identical scores can have led radically different lives. Use the number as a starting point for conversation, not as a verdict.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              For how your number compares across age groups, see the <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline hover:text-green-700">average score by age</Link> page.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Common Misconceptions About the Test
            </Heading>
            <div className="space-y-4">
              {[
                {
                  myth: 'A higher score means you\'re a better person',
                  reality: 'The test measures accumulated life experiences, not virtue. "Purity" in the name was always somewhat ironic — it\'s a count, not a moral judgment.',
                },
                {
                  myth: 'A lower score means you\'ve made bad choices',
                  reality: 'A low score means you\'ve checked more boxes. That could reflect age, social environment, curiosity, or just more years of living — not poor judgment.',
                },
                {
                  myth: 'Your score should stay the same over time',
                  reality: 'Scores always go down over time, never up. Every new experience is a point you can\'t unclaim. People who retake it after a few years almost always score lower.',
                },
                {
                  myth: 'The test was created by Rice University officially',
                  reality: 'The test was created by students at Rice University — it was never an official university program. It spread because students shared it informally, not because the university endorsed it.',
                },
              ].map(item => (
                <div key={item.myth} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-sm font-semibold text-red-600 mb-1">Myth: {item.myth}</div>
                  <div className="text-sm text-gray-600"><span className="font-semibold text-green-600">Reality: </span>{item.reality}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Is It Private?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Yes — completely. Your answers are processed entirely in your browser. Nothing is sent to any server, no account is required, and nothing is stored anywhere beyond your own device&apos;s local storage (which clears when you close the browser or clear your cache). We don&apos;t know your score. Nobody does unless you choose to share it.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This privacy design is intentional. The test is most useful when people answer honestly, and people answer more honestly when they know there&apos;s no audience. Building the test to be fully local wasn&apos;t just a privacy checkbox — it was a product decision that makes the test work better.
            </Text>
            <Text variant="body" className="leading-relaxed">
              For full details on what we do and don&apos;t collect, see our <Link href="/privacy" className="text-green-600 underline hover:text-green-700">Privacy Policy</Link>.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why People Take It
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Curiosity is the most common driver — people want to know where they stand and how they compare with the people around them. But the test also works as a genuine social tool. Sharing a score opens conversations that might not happen otherwise. &quot;Wait, you got an 81? I would never have guessed&quot; is the beginning of a conversation about two people&apos;s very different experiences — without either person having to volunteer those specifics unprompted.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              That social function is exactly what the original test was designed for: a structured way to talk about things that are genuinely interesting but also genuinely personal. The number gives you a safe entry point into a deeper conversation.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              On social media, it works differently — as a performance and comparison mechanism. TikTok score-reveal videos became their own genre because people found it compelling to see others react to their own numbers. That&apos;s a different use case, but still traces back to the same underlying human interest: curiosity about where you stand relative to everyone else.
            </Text>
            <Text variant="body" className="leading-relaxed">
              For more on why the test went viral and what the TikTok moment revealed about collective scores, see our piece on <Link href="/blog/rice-purity-test-tiktok-trend" className="text-green-600 underline hover:text-green-700">why the Rice Purity Test went viral on TikTok</Link>.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Ready to take it?
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              Free, anonymous, no sign-up. Takes about 10–15 minutes. Your answers never leave your device.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test">
                <Button size="lg">Start the Rice Purity Test</Button>
              </Link>
              <Link href="/rice-purity-test-score">
                <Button size="lg" variant="secondary">See Score Guide</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
