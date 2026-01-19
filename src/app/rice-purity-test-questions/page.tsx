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
  title: 'Rice Purity Test Questions | All 100 Questions Explained',
  description: 'View all 100 Rice Purity Test questions. Learn about the question categories and what the test covers.',
  keywords: 'rice purity test questions, all rice purity test questions, rice purity test 100 questions',
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuestionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test Questions' }
        ]} />
        <Heading size="3xl" className="mb-6">
          Rice Purity Test Questions: All 100 Questions
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test consists of 100 questions covering various life experiences. These questions are designed to assess different aspects of your life, from innocent activities to more mature encounters.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Question Categories
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions in the Rice Purity Test cover several broad categories:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Social Experiences:</strong> Parties, social events, group activities</li>
              <li><strong>Romantic Relationships:</strong> Dating, relationships, romantic encounters</li>
              <li><strong>Personal Boundaries:</strong> Personal space, privacy, individual choices</li>
              <li><strong>Life Milestones:</strong> Significant life events and experiences</li>
              <li><strong>Personal Development:</strong> Growth, learning, self-discovery</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How Questions Work
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Each question asks whether you've had a specific experience. You simply check the box if you've had that experience, or leave it unchecked if you haven't. There are no right or wrong answers - the test is about honest self-reflection.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The questions range from very innocent activities (like "Have you ever held hands?") to more mature experiences. The test is designed to create a spectrum that allows you to see where you fall.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Answering Honestly
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The most important thing when taking the Rice Purity Test is to answer honestly. Since the test is completely anonymous, there's no reason to be dishonest. Your score will only be meaningful if you're truthful about your experiences.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Remember: The test asks about experiences you've had at any point in your life, not just recently. Make sure you're considering your entire life history when answering.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              View All Questions
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              To see all 100 questions and take the test, click the button below. The test is free, anonymous, and takes about 10-20 minutes to complete.
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <Text variant="body" className="mb-4">
                The full list of 100 questions is available when you start the test. Each question is clearly presented, and you can take your time to answer honestly.
              </Text>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Take the Test to See All Questions
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Start the Rice Purity Test to view all 100 questions and calculate your score.
            </Text>
            <Link href="/test">
              <Button size="lg">Start the Test</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
