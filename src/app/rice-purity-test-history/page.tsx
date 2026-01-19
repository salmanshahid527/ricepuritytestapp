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
  title: 'Rice Purity Test History | Origins & Evolution',
  description: 'Learn about the history of the Rice Purity Test, from its origins at Rice University to becoming a viral internet phenomenon.',
  keywords: 'rice purity test history, rice purity test origins, rice university purity test',
  robots: {
    index: true,
    follow: true,
  },
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test History' }
        ]} />
        <Heading size="3xl" className="mb-6">
          Rice Purity Test History: From Campus to Internet
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test has a fascinating history that spans decades, from its humble beginnings at Rice University to becoming one of the most popular online quizzes in the world.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Origins at Rice University (1980s)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test was created in the 1980s at Rice University in Houston, Texas. Originally, it was a paper-based questionnaire distributed during orientation week to help incoming freshmen bond and share experiences in a lighthearted, non-judgmental environment.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test served as an icebreaker activity that allowed new students to connect with their peers by discussing life experiences. It was never meant to be a serious assessment, but rather a fun way to start conversations and build friendships.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Internet Era (1990s-2000s)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              As the internet became widespread in the late 1990s and early 2000s, students began sharing digital versions of the test. What started as a local campus tradition quickly spread beyond Rice University, becoming accessible to anyone with internet access.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Websites dedicated to hosting the test began appearing, allowing users to take the test online and calculate their scores instantly. This marked the beginning of the test's transformation into a global internet phenomenon.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Social Media Explosion (2010s-Present)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test's popularity exploded with the rise of social media platforms. People began sharing their scores on Facebook, Twitter, Instagram, and TikTok, turning it into a viral trend. The hashtag #RicePurityTest became popular, with millions of people taking and sharing their results.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Today, the Rice Purity Test is one of the most popular online quizzes, with millions of people taking it annually. It has become a cultural touchstone, particularly among college students and young adults.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Evolution of the Test
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              While the core concept has remained the same, the test has evolved over the years:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Original Version:</strong> Paper-based, distributed at Rice University</li>
              <li><strong>Early Digital:</strong> Simple HTML forms on websites</li>
              <li><strong>Modern Version:</strong> Interactive web applications with instant scoring</li>
              <li><strong>Mobile Apps:</strong> Native apps for iOS and Android</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              Despite these changes, the original 100 questions and scoring system have remained largely consistent, preserving the authenticity of the original test.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Cultural Impact
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test has had a significant cultural impact:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Became a rite of passage for many college students</li>
              <li>Inspired countless memes and social media trends</li>
              <li>Created a shared cultural experience across generations</li>
              <li>Helped normalize conversations about life experiences</li>
            </ul>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Experience the Tradition
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the Rice Purity Test and become part of this decades-long tradition.
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
