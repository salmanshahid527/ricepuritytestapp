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
  title: 'Rice Purity Test Score: Meaning, Ranges & Calculator',
  description: 'Check what your Rice Purity Test score means with clear 0-100 score ranges, interpretation tips, and quick examples.',
  keywords: 'rice purity test score, rice purity test scores, rice purity score meaning, rice purity test results',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-score` },
  openGraph: {
    title: 'Rice Purity Test Score: Meaning, Ranges & Calculator',
    description: 'Check what your Rice Purity Test score means with clear 0-100 score ranges and interpretation tips.',
    url: `${BASE_URL}/rice-purity-test-score`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test Score: Meaning, Ranges & Calculator',
    description: 'Check what your Rice Purity Test score means with clear 0-100 score ranges.',
  },
};

export default function ScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Score' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Rice Purity Test Score: What Your Score Means
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            Your Rice Purity Test score is a single number between 0 and 100. It tells you how many of the 100 listed experiences you haven't had. High score = fewer experiences. Low score = more. That's the whole system. What gets interesting is what the ranges actually mean in practice — and why the same number can mean very different things depending on your age and background.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Score is Calculated
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It's straightforward: <strong>Score = 100 minus the number of boxes you checked.</strong> Check 40 boxes, your score is 60. Check 5 boxes, your score is 95. The math never changes, regardless of which specific items you checked.
            </Text>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
              <Text variant="body" className="font-semibold mb-2">The formula:</Text>
              <Text variant="large" className="font-mono text-blue-700">
                Score = 100 − Experiences Checked
              </Text>
            </div>
            <Text variant="body" className="leading-relaxed">
              One thing worth noting: the test treats all 100 questions as equal weight. Holding hands and something far more significant count the same — one point each. That's been true since the original version at Rice University, and it's part of why the test works as a casual gauge rather than a precise measurement.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Each Score Range Actually Means
            </Heading>
            <div className="space-y-5">
              <div className="border-l-4 border-green-500 pl-4">
                <Heading size="lg" className="mb-2">100-98: Extremely Pure</Heading>
                <Text variant="body" className="leading-relaxed">You've checked almost nothing. This puts you in a small minority — most estimates suggest under 5% of test takers score here. It usually means you're either quite young (and simply haven't had the opportunity for many of these experiences yet), you've grown up in a closely sheltered environment, or you hold personal values that have kept most of this list off-limits. All of those are valid; none of them are a character judgment.</Text>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <Heading size="lg" className="mb-2">97-94: Very Pure</Heading>
                <Text variant="body" className="leading-relaxed">You've dipped in but kept most of the list unchecked. Scores in this range typically belong to high schoolers or early college students who've had some social experiences — maybe a few parties, some romantic firsts — but haven't ventured into the more unusual or intense items on the list. Nothing here suggests inexperience in a negative sense; it just marks where you are in life.</Text>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <Heading size="lg" className="mb-2">93-77: Relatively Pure</Heading>
                <Text variant="body" className="leading-relaxed">This is a wide, meaningful range. You've had real experiences — this isn't a score for someone who's never left the house. But you've also opted out of (or simply not encountered) a significant portion of the list. People score here for very different reasons: some by choice, some by circumstance, some just because they're on the younger side. First-time test takers often expect to score lower and are surprised to land here.</Text>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <Heading size="lg" className="mb-2">76-45: Moderate</Heading>
                <Text variant="body" className="leading-relaxed">This is where the majority of people land — roughly 60% of scores fall in the 55-75 band, which sits squarely in this range. You've lived a varied life. You've said yes to things, experimented, navigated different social environments. A score here doesn't suggest recklessness or naivety — it's just what an active adult life tends to look like when you run it through this particular checklist.</Text>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <Heading size="lg" className="mb-2">44-9: Experienced</Heading>
                <Text variant="body" className="leading-relaxed">You've checked a lot of boxes. People in this range often find the test less surprising and more nostalgic — a tour through a specific period of their life rather than a discovery. This frequently comes with age, a particular social scene, or an environment that exposed you to a wide range of situations. The test isn't making a statement about any of that; it's just counting what happened.</Text>
              </div>
              <div className="border-l-4 border-gray-600 pl-4">
                <Heading size="lg" className="mb-2">8-0: Highly Experienced</Heading>
                <Text variant="body" className="leading-relaxed">Scoring this low is genuinely uncommon. It means you've encountered nearly everything on a list that covers a very wide spectrum of human experience. Whether that came from a specific time in your life, a certain crowd, or simply a lot of years lived — a low score now doesn't define who you are today. It's a record of the past, not a verdict on the present.</Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Doesn't Tell You
            </Heading>
            <Text variant="body" className="leading-relaxed">
              Your score is a count of how many items from one specific checklist apply to your life. That's all. It doesn't measure your character, your judgment, your worth as a person, or where you'll end up. The test was designed by college students in the 1980s as a social activity — it was never meant to be anything more rigorous than that. Treat your number with the same casual spirit it was created in.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Haven't taken the test yet?
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Get your score in about 10-15 minutes. Everything runs locally — nothing stored, nothing tracked.
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
