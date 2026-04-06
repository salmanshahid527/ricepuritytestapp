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
  title: 'Rice Purity Test for College Students: What to Expect',
  description: 'A complete guide to the Rice Purity Test for college students — what scores are average in college, how to take it with friends, and what your number really means.',
  keywords: 'rice purity test college students, college purity test, rice purity test university',
  alternates: { canonical: `${BASE_URL}/blog/rice-purity-test-for-college-students` },
  openGraph: {
    title: 'Rice Purity Test for College Students: What to Expect',
    description: 'Everything college students need to know about the Rice Purity Test — average scores, what the numbers mean, and how to take it with your dorm.',
    url: `${BASE_URL}/blog/rice-purity-test-for-college-students`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test for College Students: What to Expect',
    description: 'Rice Purity Test guide for college students — scores, averages, and what the numbers mean.',
  },
  robots: { index: true, follow: true },
};

export default function RicePurityTestCollegeStudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="Rice Purity Test for College Students: What to Expect"
        datePublished="2026-02-10"
        url={`${BASE_URL}/blog/rice-purity-test-for-college-students`}
        description="A complete guide to the Rice Purity Test for college students — what scores are average in college, how to take it with friends, and what your number really means."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Rice Purity Test for College Students' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test for College Students: What to Expect
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: February 10, 2026 • 9 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test has been a college tradition since the 1980s. It started at Rice University as a way for incoming freshmen to break the ice, and today it&apos;s still one of the most talked-about quizzes on college campuses — especially during orientation week and the first few weeks of the fall semester.
          </Text>
          <Text variant="body" className="leading-relaxed">
            If you&apos;re heading to college for the first time, or you&apos;re already there and someone just mentioned it, here&apos;s everything you need to know: what to expect, what scores are typical for college students, and how to think about your result.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why the Rice Purity Test Is So Common in College
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              College is one of the first places where many people are genuinely living away from home for the first time. New roommates, new friends, a new social environment — and a genuine curiosity about who the people around you are and what kinds of experiences they&apos;ve had. The Rice Purity Test fills a specific social gap: it gives you a structured way to have conversations about life experiences that might otherwise be awkward to bring up with someone you just met.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              That&apos;s not just speculation — it&apos;s literally why the test was created. Rice University student groups in the 1980s developed the questionnaire specifically as an orientation icebreaker. The goal was to help new students bond by sharing (or comparing) their life experiences in a low-stakes, somewhat humorous format.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Today, the tradition is informal and entirely self-directed. Nobody makes you take it. It tends to appear organically in dorm common rooms, group chats, and campus social media — usually within the first few weeks of school. Someone shares their score, others get curious, and suddenly everyone in the hall is comparing numbers.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Average Rice Purity Test Scores for College Students
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              College students score significantly lower than the general average because most have had more time to accumulate life experiences — and because many experiences on the list are specifically college-related (parties, relationships, academic misconduct, etc.).
            </Text>

            <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
              <Heading size="lg" className="mb-4 text-gray-800">Average Scores by College Year</Heading>
              <div className="space-y-3">
                {[
                  { year: 'Incoming Freshman (18)', avg: '72–80', note: 'Limited college experience, often higher scores' },
                  { year: 'Sophomore (19–20)', avg: '62–72', note: 'More social exposure, scores drop noticeably' },
                  { year: 'Junior (20–21)', avg: '55–65', note: 'Full college social life integrated' },
                  { year: 'Senior (21–22)', avg: '50–60', note: 'Most college experiences accumulated' },
                ].map((row) => (
                  <div key={row.year} className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-gray-200 last:border-0">
                    <div className="font-medium text-gray-800 sm:w-48">{row.year}</div>
                    <div className="text-green-600 font-bold sm:w-20">{row.avg}</div>
                    <div className="text-gray-600 text-sm">{row.note}</div>
                  </div>
                ))}
              </div>
              <Text variant="small" className="mt-4 text-gray-500">
                These are approximate ranges based on aggregated self-reported data. Individual scores vary widely.
              </Text>
            </div>

            <Text variant="body" className="leading-relaxed mb-4">
              The biggest score drops typically happen between freshman and sophomore year. This is when most students have their first experiences with college parties, relationships, and the kinds of social situations that tend to appear on the test. Senior year averages plateau somewhat — most people have already accumulated the experiences that would move their score by that point.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Taking the Test with Your Dorm or Friend Group
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The most common way college students take the Rice Purity Test is together — either in person or by sharing scores in a group chat. Here are some things to keep in mind if you&apos;re doing it as a group activity:
            </Text>
            <ul className="space-y-4 list-none pl-0">
              {[
                {
                  title: 'You don\'t have to share your exact score',
                  body: 'Some people share a range instead of the specific number, or just say "I got somewhere in the 60s." That\'s completely normal. The point is conversation, not a formal report.'
                },
                {
                  title: 'Answer for yourself, not for the audience',
                  body: 'It\'s tempting to answer strategically based on what you want people to think of you. But the test is most interesting when you\'re honest with yourself. Nobody is checking your answers — only you see them.'
                },
                {
                  title: 'Higher isn\'t better, lower isn\'t cooler',
                  body: 'Freshman orientation culture sometimes creates pressure to perform — either to seem experienced or to seem pure. Neither of those is the point. A high score doesn\'t make you naive; a low score doesn\'t make you impressive.'
                },
                {
                  title: 'Use it as a conversation starter',
                  body: 'The most valuable use of the test isn\'t the number — it\'s what happens after. Questions like "wait, you haven\'t done X?" or "I didn\'t expect you to have done Y" are often the beginning of genuinely interesting conversations with new friends.'
                },
              ].map((item) => (
                <li key={item.title} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-800 mb-2">{item.title}</div>
                  <Text variant="body" className="text-gray-600">{item.body}</Text>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Questions Actually Cover in College Context
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions on the Rice Purity Test cover a wide range of life experiences. Here&apos;s a breakdown of the general categories and how they tend to be relevant to the college experience:
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {[
                { category: 'Romantic & Social', count: '~20 questions', desc: 'Dating, physical affection, relationships' },
                { category: 'Intimacy', count: '~25 questions', desc: 'Physical intimacy at various levels' },
                { category: 'Substance Use', count: '~15 questions', desc: 'Alcohol, drugs, related situations' },
                { category: 'Academic & Legal', count: '~15 questions', desc: 'Academic misconduct, minor legal situations' },
                { category: 'Social Situations', count: '~25 questions', desc: 'Parties, social behavior, group activities' },
              ].map((cat) => (
                <div key={cat.category} className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="font-semibold text-green-800 mb-1">{cat.category}</div>
                  <div className="text-green-600 text-sm font-medium mb-1">{cat.count}</div>
                  <Text variant="small" className="text-gray-600">{cat.desc}</Text>
                </div>
              ))}
            </div>
            <Text variant="body" className="leading-relaxed mb-4">
              College students tend to encounter more of these categories naturally than high schoolers. That&apos;s not a judgment — it&apos;s just the reality of living independently, having more social freedom, and being in an environment where many of these experiences are more accessible or common.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Should You Be Worried About a Low Score?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              No. A low score (say, anything below 50) simply means you&apos;ve checked more boxes on the list than average. It doesn&apos;t indicate anything about your character, your decision-making, or your future. The test was designed as a light-hearted questionnaire, not a moral assessment.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Similarly, a high score (above 85) isn&apos;t something to be embarrassed about in a college environment. You&apos;ve just had fewer of the specific experiences on this particular list. That says nothing about your social skills, your fun quotient, or how much you&apos;re going to enjoy the next four years.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The best way to approach the result: treat it as a data point, not a verdict. It tells you something about your history up to this moment. It says nothing about where you&apos;re going.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Privacy: Is the Test Anonymous?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              When you take the test on this site, yes — completely. Your answers are processed locally in your browser. Nothing is sent to any server, no account is required, and nothing is stored beyond your own device. The only person who sees your answers is you.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This is important because people answer more honestly when they know there&apos;s no audience. The test is designed to give you an accurate picture of your own experiences — and that only works if you&apos;re not curating your answers for external judgment.
            </Text>
            <Text variant="body" className="leading-relaxed">
              What you share after — your score, your reactions, which questions surprised you — is entirely up to you.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Ready to Find Out Your Score?
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              Free, anonymous, 100 questions. Takes about 10–15 minutes. No account required.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test">
                <Button size="lg">Start the Rice Purity Test</Button>
              </Link>
              <Link href="/rice-purity-test-average-score-by-age">
                <Button size="lg" variant="secondary">See Average Scores by Age</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
