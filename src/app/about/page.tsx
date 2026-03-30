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
  title: 'About RicePurityTestApp – Mission, Team & What We Do',
  description: 'Learn about RicePurityTestApp — our mission to make the Rice Purity Test fun, informative, and easy to use. Discover why millions take the quiz!',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About RicePurityTestApp – Mission, Team & What We Do',
    description: 'Learn about RicePurityTestApp and our mission to make the Rice Purity Test fun and easy to use.',
    url: `${BASE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RicePurityTestApp – Mission, Team & What We Do',
    description: 'Learn about RicePurityTestApp and the Rice Purity Test.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Learn About the Rice Purity Test
        </Heading>

        <div className="space-y-8 text-gray-700">
          <section>
            <Text variant="large" className="leading-relaxed mb-4">
              The Rice Purity Test started in the 1980s as a paper handout at Rice University — a way for incoming students to break the ice during orientation. It was never a serious survey. It was a conversation starter. Something to laugh over, compare with your roommate, and use as a way into topics that might otherwise be awkward to bring up with people you'd just met.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Decades later, it's still doing the same thing — just for a much bigger audience. What was once exclusive to one Houston campus now gets taken by people on every continent. The questions are largely the same ones from the original handout. The format has changed; the purpose hasn't.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Test Actually Is
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It's a checklist of 100 life experiences. You check off the ones you've had. Your score is 100 minus the number of boxes you checked. That's it. The scale runs from 0 (you've had every experience on the list) to 100 (you've had none of them). Most people land somewhere in the 55-75 range.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The word "purity" sounds judgmental, but it wasn't meant that way. In the original campus context, it was used loosely — almost ironically. A high score doesn't mean you're a better person. A low score doesn't mean you've gone off the rails. It's just a count. The interesting part isn't the number itself; it's what the number gets you talking about.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              About This Site
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We built RicePurityTestApp in 2023 because most versions of the test online were cluttered, slow, or buried in ads. We wanted a clean, fast version that people could actually use — on any device, without creating an account, without giving up any personal information.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Your answers never leave your browser. There's no database storing what you've checked. We process everything locally on your device, which means even we don't know your score. That's not just a privacy policy checkbox — it's how the test is supposed to work. People answer more honestly when they know nobody's watching.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What We've Kept, What We've Changed
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions are the widely-recognized set that has circulated since the test first went digital in the late 1990s. We haven't added questions, removed awkward ones, or modernized the language. The point is that the test has always been the same test — that consistency is what makes scores meaningful to compare across different years and friend groups.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What we did change: the interface. Progress saves automatically so you don't lose your place. The scoring and sharing work cleanly on mobile. The results page gives you context so a number like "67" actually means something when you see it.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              A Few Things Worth Knowing
            </Heading>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>The test is free and will stay free — no premium tier, no locked results</li>
              <li>No account needed, no email required, nothing tracked</li>
              <li>Questions cover the full range from very tame to fairly mature — it's intended for people 13 and up</li>
              <li>Scores are most meaningful when compared within your own age group — <a href="/rice-purity-test-average-score-by-age" className="text-green-600 underline hover:text-green-700">see averages by age</a></li>
              <li>If you want to understand what your score actually means, the <a href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">score guide</a> has the full breakdown</li>
            </ul>
          </section>

          <section className="pt-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <Heading size="lg" className="mb-4 text-green-600">
                Ready to Find Out?
              </Heading>
              <Text variant="body" className="mb-6 text-gray-700">
                It takes about 10-15 minutes. Your answers stay private. Your results are instant.
              </Text>
              <Link href="/test">
                <Button size="lg">Start the Test</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
