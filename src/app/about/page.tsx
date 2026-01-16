import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Rice Purity Test | History & Origins',
  description: 'Learn about the history and origins of the Rice Purity Test, a tradition at Rice University.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Heading size="3xl" className="mb-8">
          About the Rice Purity Test
        </Heading>

        <div className="space-y-8 text-gray-700">
          <section>
            <Text variant="large" className="leading-relaxed mb-4">
              The Rice Purity Test has been a tradition at Rice University for decades. Originally created to foster bonding among students, it has become a popular online quiz taken by millions worldwide.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Origins and History
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Created at Rice University in Houston, Texas, this self-assessment survey was designed to gauge the maturity level of students. The test consists of 100 questions covering various life experiences, from innocent activities to more mature encounters.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test was originally used as an icebreaker activity for incoming students, helping them bond and share experiences in a lighthearted way. Over time, it spread beyond the Rice University campus and became a popular online phenomenon.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              How the Test Works
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test presents 100 questions about various life experiences. Participants check off each experience they've had, and their score is calculated by subtracting the number of checked items from 100. A score of 100 means you've had none of the experiences listed (most "pure"), while a score of 0 means you've had all of them.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Understanding Your Score
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test is meant to be fun and introspective, not a judgment of character. Your score simply reflects the number of experiences you've had from the list. There's no "right" or "wrong" score - it's all about self-reflection and having conversations with friends.
            </Text>
            <ul className="space-y-2 list-disc list-inside text-gray-700 mt-4">
              <li><strong>100-98:</strong> Extremely Pure - You've had very few experiences</li>
              <li><strong>97-94:</strong> Very Pure - You're quite innocent</li>
              <li><strong>93-77:</strong> Relatively Pure - Some experiences but still innocent</li>
              <li><strong>76-45:</strong> Moderate - Average range of experiences</li>
              <li><strong>44-9:</strong> Experienced - You've had many experiences</li>
              <li><strong>8-0:</strong> Highly Experienced - You've done most things on the list</li>
            </ul>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Our Mission
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Our goal is to provide a free, anonymous, and accessible version of the Rice Purity Test. We believe in privacy and user experience, which is why we don't collect or store any of your answers. Everything is processed locally on your device.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Privacy and Anonymity
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              We take your privacy seriously. The test is completely anonymous - we don't ask for your name, email, or any personal information. Your answers are never sent to our servers and are only stored locally in your browser if you choose to save your progress.
            </Text>
          </section>

          <section className="pt-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <Heading size="lg" className="mb-4 text-green-600">
                Ready to Take the Test?
              </Heading>
              <Text variant="body" className="mb-6 text-gray-700">
                Discover your purity score with the original 100-question Rice Purity Test.
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
