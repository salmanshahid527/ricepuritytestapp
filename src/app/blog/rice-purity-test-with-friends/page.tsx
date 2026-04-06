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
  title: 'How to Take the Rice Purity Test with Friends: Social Guide',
  description: 'A complete guide to taking the Rice Purity Test with friends — how to compare scores, what to talk about, and how to make it a fun social activity without awkwardness.',
  keywords: 'rice purity test with friends, compare rice purity scores, rice purity test group',
  alternates: { canonical: `${BASE_URL}/blog/rice-purity-test-with-friends` },
  openGraph: {
    title: 'How to Take the Rice Purity Test with Friends: Social Guide',
    description: 'A guide to taking the Rice Purity Test as a group — comparing scores, what to discuss, and keeping it fun and comfortable for everyone.',
    url: `${BASE_URL}/blog/rice-purity-test-with-friends`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Take the Rice Purity Test with Friends: Social Guide',
    description: 'A guide to taking the Rice Purity Test with friends.',
  },
  robots: { index: true, follow: true },
};

export default function RicePurityTestWithFriendsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="How to Take the Rice Purity Test with Friends: Social Guide"
        datePublished="2026-03-10"
        url={`${BASE_URL}/blog/rice-purity-test-with-friends`}
        description="A complete guide to taking the Rice Purity Test with friends — how to compare scores, what to talk about, and how to make it a fun social activity."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Rice Purity Test with Friends' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          How to Take the Rice Purity Test with Friends
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: March 10, 2026 • 6 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test started as a group activity — a way for college students to break the ice and compare life experiences with people they&apos;d just met. Taking it with friends remains one of the most popular ways to use it. But doing it well as a group requires a bit of thought about how you set it up, what you discuss afterward, and how you handle the inevitable surprises.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Setting Up the Group Experience
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The first decision is whether you take the test simultaneously or share scores you&apos;ve already taken individually. Both formats work, but they create different dynamics:
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <Heading size="lg" className="mb-2 text-blue-800">Taking it together</Heading>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• More social and interactive in the moment</li>
                  <li>• People react to questions in real time</li>
                  <li>• Creates shared experience</li>
                  <li>• Harder to be fully private</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <Heading size="lg" className="mb-2 text-green-800">Sharing results separately</Heading>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• More honest answers (taken privately)</li>
                  <li>• Score-reveal moment is a clear social event</li>
                  <li>• Less peer influence on individual answers</li>
                  <li>• Works well over group chat or video call</li>
                </ul>
              </div>
            </div>
            <Text variant="body" className="leading-relaxed mb-4">
              Most people who regularly use the test as a social activity prefer the &quot;take separately, share together&quot; approach. Answering privately leads to more honest results, and the score-reveal becomes a clean social moment you can build conversation around.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How to Compare Scores Without It Getting Awkward
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Score comparisons are the whole point, but they can get awkward if the group isn&apos;t aligned on tone. A few things that help:
            </Text>
            <div className="space-y-4 my-4">
              {[
                {
                  number: '1',
                  title: 'Establish that nobody is judging',
                  body: 'Say it explicitly before scores are shared: high and low are both fine, and neither number says anything about someone\'s character or value as a person. This sounds obvious but hearing it said out loud changes the dynamic significantly.'
                },
                {
                  number: '2',
                  title: 'You don\'t have to share the exact number',
                  body: 'It\'s completely acceptable to say "somewhere in the 60s" or "pretty low" or "higher than I expected." You don\'t owe anyone your exact score. The point is to have a conversation, not to produce a data point for analysis.'
                },
                {
                  number: '3',
                  title: 'Focus on questions, not overall scores',
                  body: 'The most interesting conversations aren\'t about overall numbers — they\'re about specific questions. "I can\'t believe that\'s on the list" or "wait, you haven\'t done that?" are more generative than "your score is lower than mine."'
                },
                {
                  number: '4',
                  title: 'Avoid ranking people',
                  body: 'Don\'t treat the scores as a leaderboard. The person with the highest score isn\'t "winning" and the person with the lowest isn\'t "losing." Framing it that way undermines the actual purpose of the activity.'
                },
                {
                  number: '5',
                  title: 'Match your group\'s comfort level',
                  body: 'If you\'re with close friends you\'ve known for years, the conversation can go deeper. If you\'re with people you just met, keep it lighter. The test works at both levels — adjust accordingly.'
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                    {item.number}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-2">{item.title}</div>
                    <Text variant="body" className="text-gray-600">{item.body}</Text>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Conversation Starters After Sharing Scores
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The score reveal is just the beginning. Here are some directions you can take the conversation:
            </Text>
            <ul className="space-y-3 pl-4">
              {[
                'Ask which question surprised someone the most — either that it was on the list, or that they had to think about it',
                'Compare which category of questions moved scores the most for each person',
                'Talk about which experiences feel clearly dated (the test has some very 1980s questions) vs. still relevant',
                'Discuss the age effect — would your score be higher or lower if you\'d taken it five years ago?',
                'Ask which questions feel most like "icebreaker" level vs. which feel genuinely personal',
              ].map((starter, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 font-bold mt-1">→</span>
                  <Text variant="body">{starter}</Text>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Taking It Over Video Call or Group Chat
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test works well as a remote social activity. Here&apos;s how to make it work over video call:
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <ol className="space-y-3">
                {[
                  'Share the link to the test with everyone before the call',
                  'Have everyone take the test individually before joining or early in the call (muted, cameras off)',
                  'Set a time limit — 15 minutes is usually enough',
                  'Do a simultaneous reveal by countdown — everyone shares their score at the same time',
                  'Use breakout rooms or just open chat for more specific question discussion',
                  'Screenshot or note your score before leaving the test — it\'s on your device only, so it won\'t be available after you close the tab',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-bold">{i + 1}</span>
                    <Text variant="body" className="text-gray-700">{step}</Text>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              For the Person Organizing the Activity
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              If you&apos;re the one suggesting the Rice Purity Test to a group, a few things worth considering:
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Know your audience. The test covers a wide range of life experiences including some mature topics. It&apos;s designed for adults, and it works best with a group that has some level of comfort discussing personal experiences. It&apos;s not ideal for very new acquaintances or groups where there are large age differences (say, mixing high schoolers with adults).
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Make participation optional. Someone might not want to share their score, and that should be completely fine. The point is connection and conversation — anyone who isn&apos;t comfortable sharing shouldn&apos;t feel pressured.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Set the tone early. Make it clear from the start that this is a lighthearted activity, not a judgment exercise. The more playful and non-judgmental the atmosphere, the better the conversation tends to be.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Share This with Your Group
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              Take the test individually first, then compare. Free, anonymous, no account needed.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test">
                <Button size="lg">Start the Test</Button>
              </Link>
              <Link href="/blog/how-to-take-rice-purity-test">
                <Button size="lg" variant="secondary">Tips for Accurate Results</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
