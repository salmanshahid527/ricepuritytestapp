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
  title: 'Rice Purity Test Questions: Full Category Breakdown & Analysis',
  description: 'A detailed breakdown of all 100 Rice Purity Test questions by category — what types of experiences are covered, how questions are structured, and what the categories reveal.',
  keywords: 'rice purity test questions, rice purity test categories, rice purity test breakdown',
  alternates: { canonical: `${BASE_URL}/blog/rice-purity-test-questions-breakdown` },
  openGraph: {
    title: 'Rice Purity Test Questions: Full Category Breakdown & Analysis',
    description: 'Everything you need to know about the 100 Rice Purity Test questions — categories, structure, and what they reveal.',
    url: `${BASE_URL}/blog/rice-purity-test-questions-breakdown`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test Questions: Full Category Breakdown & Analysis',
    description: 'Full breakdown of the 100 Rice Purity Test questions by category.',
  },
  robots: { index: true, follow: true },
};

export default function RicePurityTestQuestionsBreakdownPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline="Rice Purity Test Questions: Full Category Breakdown & Analysis"
        datePublished="2026-03-01"
        url={`${BASE_URL}/blog/rice-purity-test-questions-breakdown`}
        description="A detailed breakdown of all 100 Rice Purity Test questions by category — what types of experiences are covered, how questions are structured, and what the categories reveal."
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Rice Purity Test Questions Breakdown' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Questions: Full Category Breakdown
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: March 1, 2026 • 10 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test&apos;s 100 questions aren&apos;t random. They follow a deliberate structure that moves from relatively mild social experiences to progressively more varied life situations. Understanding how the questions are organized helps you anticipate what you&apos;ll encounter — and understand why your score lands where it does.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Questions Are Structured
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions on the Rice Purity Test are presented as a continuous checklist without explicit category labels. But if you look at how the questions are organized, a clear pattern emerges. The test generally moves from experiences that most people have had (early questions) to experiences that progressively fewer people have had (later questions).
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This structure isn&apos;t accidental. It mirrors the original paper handout format, which was designed to start conversations comfortably and gradually move into territory that prompted more interesting discussion. Starting with something almost everyone has done (like holding hands romantically) gets you into the rhythm of the test before reaching questions that are more revealing.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The questions use &quot;Have you ever&quot; framing — asking about lifetime experiences, not current behavior or regular habits. This is important because it means the score accumulates over time. Every experience you&apos;ve ever had counts, regardless of when it happened.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Major Question Categories
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              While the test doesn&apos;t label categories explicitly, the 100 questions fall into recognizable groups based on the type of experience they address:
            </Text>

            <div className="space-y-6 my-4">
              {[
                {
                  category: 'Romantic & Social Experiences',
                  count: 'Approximately 18–20 questions',
                  color: 'blue',
                  desc: 'These questions cover the full spectrum of romantic and social interaction, starting with very mild experiences (holding hands, kissing) and moving toward more significant relationship milestones. Many of these are experiences most people have had by their early 20s.',
                  examples: ['Held hands romantically', 'Gone on a date', 'Been in a romantic relationship', 'Kissed someone'],
                  insight: 'These tend to be the questions that move scores most consistently across all age groups, since most adults have had these experiences.',
                },
                {
                  category: 'Physical Intimacy',
                  count: 'Approximately 25–28 questions',
                  color: 'purple',
                  desc: 'A significant portion of the test covers physical intimacy at various levels. These questions are more sensitive and are part of why the test recommends taking it privately. They range from first-level physical contact to more intimate experiences.',
                  examples: ['Made out with someone', 'Various levels of physical intimacy (progressively)'],
                  insight: 'This is the category most strongly correlated with age — older test-takers tend to have more of these boxes checked simply due to more years of life experience.',
                },
                {
                  category: 'Substance Use & Related Situations',
                  count: 'Approximately 12–15 questions',
                  color: 'amber',
                  desc: 'These questions ask about alcohol consumption, drug use, and situations related to substance use (being in a car with an intoxicated driver, using fake ID, etc.). College students often see the most movement in this category during their first two years.',
                  examples: ['Consumed alcohol', 'Used substances', 'Situations involving intoxication'],
                  insight: 'Cultural and geographic variation shows up strongly here — test-takers from different backgrounds report very different patterns in this category.',
                },
                {
                  category: 'Academic & Rule-Breaking',
                  count: 'Approximately 10–12 questions',
                  color: 'red',
                  desc: 'This category covers academic misconduct, minor legal situations, and boundary-pushing behaviors. Questions range from being sent to the principal\'s office to more serious academic integrity situations.',
                  examples: ['Academic misconduct', 'Rule violations', 'Minor legal situations'],
                  insight: 'These questions are among the most variable by institution type — students from different educational contexts report very different patterns.',
                },
                {
                  category: 'Social & Group Situations',
                  count: 'Approximately 20–25 questions',
                  color: 'green',
                  desc: 'A broad category covering social behaviors, group dynamics, and situational experiences. These questions are often the most conversation-generating because they tend to be highly specific and sometimes surprising.',
                  examples: ['Party-related experiences', 'Group social situations', 'Specific behavioral situations'],
                  insight: 'This is where most of the "wait, that\'s on the test?" reactions come from — these questions tend to be the most specific and sometimes unexpected.',
                },
              ].map((cat) => (
                <div key={cat.category} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <Heading size="lg" className="text-gray-800">{cat.category}</Heading>
                    <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{cat.count}</span>
                  </div>
                  <Text variant="body" className="text-gray-600 mb-4">{cat.desc}</Text>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Example question types:</div>
                    <ul className="space-y-1">
                      {cat.examples.map((ex) => (
                        <li key={ex} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="text-green-500">•</span> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <div className="text-sm font-medium text-green-800 mb-1">Key insight:</div>
                    <Text variant="small" className="text-green-700">{cat.insight}</Text>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why Some Questions Feel Surprising
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              First-time test-takers commonly report two types of surprise: either questions that seem too mild to be on the list, or questions that seem unexpectedly specific or unusual. Both reactions are part of the test&apos;s design.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The very mild questions (like holding hands) are there to establish a baseline and get test-takers into the rhythm of honest answering. The more specific or unusual questions are there to cover experiences that genuinely differentiate people — things that some people have done and others haven&apos;t, which makes them useful for comparison.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The original test was designed for a college campus in the 1980s. Some questions reflect the specific social context of that time and place. The test has been updated slightly over the decades as it circulated online, but the core structure remains largely unchanged — which is actually a feature, not a bug. The consistency allows scores to be compared meaningfully across generations.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How Questions Affect Your Score
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Every question has equal weight. Checking any one box reduces your score by exactly 1 point. This means the test doesn&apos;t distinguish between "mild" and "significant" experiences — all 100 items count equally toward your final number.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              In practice, this means that the questions most likely to affect your score are the ones that cover experiences you&apos;ve had. The early, more common questions tend to reduce most people&apos;s scores by roughly the same amount. The later, less common questions create the variation that separates scores in the 50s, 60s, and 70s.
            </Text>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
              <Heading size="lg" className="mb-4 text-gray-800">Score Math: A Simple Example</Heading>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Starting score</span>
                  <span className="font-bold">100</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Romantic/social questions checked (e.g., 12 of 20)</span>
                  <span className="font-bold text-red-500">–12</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Physical intimacy questions checked (e.g., 8 of 27)</span>
                  <span className="font-bold text-red-500">–8</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Substance questions checked (e.g., 5 of 13)</span>
                  <span className="font-bold text-red-500">–5</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Academic/rule questions checked (e.g., 3 of 11)</span>
                  <span className="font-bold text-red-500">–3</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Other questions checked (e.g., 5 of 29)</span>
                  <span className="font-bold text-red-500">–5</span>
                </div>
                <div className="flex justify-between py-3 border-t-2 border-gray-400 mt-2">
                  <span className="font-bold text-lg">Final Score</span>
                  <span className="font-bold text-lg text-green-600">67</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Ready to See the Questions Yourself?
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The best way to understand how the questions work is to take the test. You can also see all 100 questions listed without the interactive format at our <Link href="/rice-purity-test-questions" className="text-green-600 underline hover:text-green-700">questions page</Link>.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Take the Full Test Now
            </Heading>
            <Text variant="body" className="mb-4 text-gray-700">
              100 questions, anonymous, instant results. No account needed.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test">
                <Button size="lg">Start the Test</Button>
              </Link>
              <Link href="/rice-purity-test-questions">
                <Button size="lg" variant="secondary">View All Questions</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
