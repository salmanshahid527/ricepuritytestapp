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
  title: 'Rice Purity Test Questions | All 100 Questions Explained',
  description: 'View all 100 Rice Purity Test questions. Learn about the question categories and what the test covers.',
  keywords: 'rice purity test questions, all rice purity test questions, rice purity test 100 questions',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-questions` },
  openGraph: {
    title: 'Rice Purity Test Questions | All 100 Questions Explained',
    description: 'View all 100 Rice Purity Test questions and learn what the test covers.',
    url: `${BASE_URL}/rice-purity-test-questions`,
  },
  twitter: { card: 'summary_large_image' },
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
        <Heading as="h1" size="3xl" className="mb-6">
          All 100 Rice Purity Test Questions
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test consists of 100 questions covering various life experiences. These questions are designed to assess different aspects of your life, from innocent activities to more mature encounters.
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Question Categories
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions in the Rice Purity Test cover several broad categories, each designed to explore different aspects of your life experiences. Understanding these categories can help you better prepare for taking the test and interpreting your results.
            </Text>
            <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
              <li><strong>Social Experiences:</strong> Questions about parties, social events, group activities, and interactions with friends and peers. These questions explore your social life and how you've engaged with others in various settings.</li>
              <li><strong>Romantic Relationships:</strong> Questions covering dating, relationships, romantic encounters, and intimate experiences. This category explores your experiences with romantic partners and relationships.</li>
              <li><strong>Personal Boundaries:</strong> Questions about personal space, privacy, individual choices, and personal decisions. These questions assess how you've navigated personal boundaries and made independent choices.</li>
              <li><strong>Life Milestones:</strong> Questions about significant life events, achievements, and experiences that mark important moments in your life journey. These questions explore major life transitions and accomplishments.</li>
              <li><strong>Personal Development:</strong> Questions about growth, learning, self-discovery, and personal evolution. This category explores how you've developed as an individual and learned about yourself.</li>
            </ul>
            <Text variant="body" className="leading-relaxed">
              Each category contributes to your overall score, creating a comprehensive picture of your life experiences. The test is designed to be balanced across all these categories, ensuring a fair and representative assessment.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              How Questions Work
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Each question in the Rice Purity Test asks whether you've had a specific experience at any point in your life. The format is simple: you check the box if you've had that experience, or leave it unchecked if you haven't. There are no right or wrong answers - the test is about honest self-reflection and understanding your own life journey.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The questions range from very innocent activities (like "Have you ever held hands?" or "Have you ever been to a party?") to more mature experiences. The test is designed to create a spectrum that allows you to see where you fall in terms of life experiences. This spectrum is not about judgment, but rather about self-awareness and reflection.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Some questions may seem ambiguous or open to interpretation. In these cases, it's best to go with your first instinct about what the question means to you personally. The test is designed to be flexible and accommodate different interpretations, as long as you're consistent in how you answer.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Remember that the test asks about experiences you've had at any point in your life, not just recent experiences. This means you should consider your entire life history when answering, from childhood through your current age.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Answering Honestly
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The most important thing when taking the Rice Purity Test is to answer honestly. Since the test is completely anonymous and your answers are never stored or shared, there's no reason to be dishonest. Your score will only be meaningful if you're truthful about your experiences.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Many people feel tempted to either inflate or deflate their scores based on what they think is "normal" or "acceptable." However, the test is most valuable when you answer based on your actual experiences, not what you think others expect or what you wish were true.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Remember: The test asks about experiences you've had at any point in your life, not just recently. Make sure you're considering your entire life history when answering. This includes experiences from childhood, adolescence, and adulthood.
            </Text>
            <Text variant="body" className="leading-relaxed">
              If you're unsure about a question, take a moment to think about it. There's no time limit, so you can take as long as you need to answer each question thoughtfully and honestly.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              View All Questions
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              To see all 100 questions and take the test, click the button below. The test is free, anonymous, and takes about 10-20 minutes to complete. You can take your time with each question - there's no rush.
            </Text>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4">
              <Text variant="body" className="mb-4">
                The full list of 100 questions is available when you start the test. Each question is clearly presented in an easy-to-read format, and you can take your time to answer honestly. Your progress is automatically saved as you go, so you can pause and come back later if needed.
              </Text>
              <Text variant="body">
                The questions are organized in a logical flow, starting with more general experiences and moving toward more specific ones. This organization helps make the test easier to complete and more enjoyable to take.
              </Text>
            </div>
            <Text variant="body" className="leading-relaxed">
              Once you've answered all 100 questions, you'll be able to calculate your score instantly. The scoring is automatic and happens in real-time, so you'll know your result immediately after completing the test.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading as="h2" size="lg" className="mb-4 text-green-600">
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
