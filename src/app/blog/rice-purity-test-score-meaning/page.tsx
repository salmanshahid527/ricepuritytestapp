import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Purity Test Score Meaning: Understanding Your Results | Rice Purity Test Guide & Tips',
  description: 'Read this guide on Rice Purity Test score meaning — learn key tips, explanations, and actionable insights about the Rice Purity Test and scores.',
  keywords: 'rice purity test score meaning, rice purity score interpretation, what does my rice purity score mean',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ScoreMeaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Score Meaning' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          Understanding Your Rice Purity Test Results
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 14, 2026 • 6 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            After taking the Rice Purity Test, you receive a score from 0 to 100. But what does this number actually mean? This comprehensive guide will help you understand your Rice Purity Test score and what it says about your life experiences.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How Scores Are Calculated
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Your Rice Purity Test score is calculated using a simple formula: <strong>Score = 100 - (number of checked boxes)</strong>. This means:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>If you check 0 boxes, your score is 100 (most "pure")</li>
              <li>If you check 50 boxes, your score is 50 (moderate)</li>
              <li>If you check all 100 boxes, your score is 0 (least "pure")</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The term "purity" refers to innocence or lack of certain life experiences, not moral judgment. A higher score simply means you've had fewer of the experiences listed in the test.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Score Range Interpretations
            </Heading>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  100-98: Extremely Pure
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  Scores in this range indicate you've had very few of the experiences listed. This typically suggests someone who has led a relatively sheltered life, perhaps focusing heavily on academics, family values, or personal development. People in this range often have strong moral convictions or have prioritized other aspects of life.
                </Text>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  97-94: Very Pure
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  This range suggests you're quite innocent but have had a few life experiences. You may have experimented slightly or had limited exposure to certain activities, but overall maintain a high level of "purity" according to the test's standards.
                </Text>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  93-77: Relatively Pure
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  This is a moderate range indicating you've had some experiences but are still relatively innocent. You've likely explored certain aspects of life while maintaining boundaries in other areas. Common among college students and young adults.
                </Text>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  76-45: Moderate Experience
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  Scores in this range represent an average level of life experiences. You've likely had a balanced approach to life, experiencing various activities while maintaining some boundaries. Typical for adults who have lived diverse lives.
                </Text>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  44-9: Experienced
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  This range indicates you've had many life experiences. You've likely explored various aspects of life extensively and have a broad range of experiences. People in this range often have adventurous personalities.
                </Text>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded">
                <Heading size="lg" className="mb-2 text-gray-800">
                  8-0: Highly Experienced
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  Scores in this lowest range mean you've checked off most or all of the experiences. This indicates an extremely diverse and extensive range of life experiences. Remember, a low score isn't necessarily negative—it simply reflects the breadth of experiences you've had.
                </Text>
              </div>
            </div>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Factors That Influence Your Score
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Several factors can influence your Rice Purity Test score:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Age:</strong> Older individuals typically have lower scores due to more life experiences</li>
              <li><strong>Cultural background:</strong> Different cultures have varying norms and experiences</li>
              <li><strong>Personal values:</strong> Your beliefs and priorities affect which experiences you've pursued</li>
              <li><strong>Social environment:</strong> The people and communities you've been part of</li>
              <li><strong>Life circumstances:</strong> Opportunities and situations you've encountered</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What Your Score Doesn't Mean
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It's important to remember what your Rice Purity Test score does NOT indicate:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>It's not a measure of your character or morality</li>
              <li>It's not a judgment of your worth as a person</li>
              <li>It's not a predictor of future behavior</li>
              <li>It's not scientifically validated</li>
              <li>It's not a definitive assessment of your life</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The test is meant to be fun, introspective, and a conversation starter—not a serious psychological evaluation.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Take the Test to Get Your Score
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Ready to discover your Rice Purity Test score? Take the test now and see where you fall on the spectrum.
            </Text>
            <Link href="/test">
              <Button size="lg">Take the Rice Purity Test</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
