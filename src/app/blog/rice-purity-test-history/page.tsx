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
  title: 'The History of the Rice Purity Test: From Campus to Internet',
  description: 'Explore the fascinating history of the Rice Purity Test, from its origins at Rice University to becoming a viral internet phenomenon.',
  keywords: 'rice purity test history, rice purity test origins, rice university purity test history',
  robots: {
    index: true,
    follow: true,
  },
};

export default function HistoryBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'History' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          The History of the Rice Purity Test: From Campus to Internet
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 12, 2026 • 7 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test has a fascinating history that spans decades, from its humble beginnings at Rice University to becoming one of the most popular online quizzes in the world. Understanding this history helps us appreciate the cultural significance of this unique test.
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Origins at Rice University (1980s)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test was created in the 1980s at Rice University in Houston, Texas. Originally, it was a paper-based questionnaire distributed during orientation week to help incoming freshmen bond and share experiences in a lighthearted, non-judgmental environment.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test served as an icebreaker activity that allowed new students to connect with their peers by discussing life experiences. It was never meant to be a serious assessment, but rather a fun way to start conversations and build friendships during the transition to college life.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The original version was created by students for students, making it an authentic representation of college culture at the time. It reflected the social norms, experiences, and values of college students in the 1980s.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              The Internet Era (1990s-2000s)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              As the internet became widespread in the late 1990s and early 2000s, students began sharing digital versions of the test. What started as a local campus tradition quickly spread beyond Rice University, becoming accessible to anyone with internet access.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Websites dedicated to hosting the test began appearing, allowing users to take the test online and calculate their scores instantly. This marked the beginning of the test's transformation into a global internet phenomenon. The test's format evolved from paper to HTML forms, making it more interactive and accessible.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              During this period, the test gained popularity on college campuses across America and eventually spread internationally. Students would share links to the test via email, forums, and early social networking sites.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Social Media Explosion (2010s-Present)
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test's popularity exploded with the rise of social media platforms. People began sharing their scores on Facebook, Twitter, Instagram, and TikTok, turning it into a viral trend. The hashtag #RicePurityTest became popular, with millions of people taking and sharing their results.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Today, the Rice Purity Test is one of the most popular online quizzes, with millions of people taking it annually. It has become a cultural touchstone, particularly among college students and young adults. The test has been featured in memes, YouTube videos, and countless social media posts.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test's evolution reflects broader changes in how we share and discuss personal experiences online. It has become a way for people to connect, compare experiences, and engage in lighthearted self-reflection in the digital age.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Evolution of the Test Format
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              While the core concept has remained the same, the test has evolved over the years:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>1980s - Original Version:</strong> Paper-based, distributed at Rice University orientation</li>
              <li><strong>1990s - Early Digital:</strong> Simple HTML forms on personal websites and forums</li>
              <li><strong>2000s - Interactive Web:</strong> JavaScript-enabled sites with instant scoring</li>
              <li><strong>2010s - Modern Web Apps:</strong> Responsive designs, mobile-friendly interfaces</li>
              <li><strong>2020s - Current Version:</strong> Advanced web applications with progress tracking, social sharing, and enhanced user experience</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              Despite these changes, the original 100 questions and scoring system have remained largely consistent, preserving the authenticity of the original test while adapting to modern technology.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Cultural Impact and Legacy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The Rice Purity Test has had a significant cultural impact:
            </Text>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Became a rite of passage for many college students</li>
              <li>Inspired countless memes and social media trends</li>
              <li>Created a shared cultural experience across generations</li>
              <li>Helped normalize conversations about life experiences</li>
              <li>Became a topic of academic discussion about internet culture</li>
              <li>Influenced the creation of similar "purity tests" and quizzes</li>
            </ul>
            <Text variant="body" className="leading-relaxed mt-4">
              The test's enduring popularity speaks to its ability to adapt to changing times while maintaining its core purpose: helping people reflect on their experiences and connect with others through shared conversation.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Preserving the Tradition
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Today, platforms like ours work to preserve the authenticity of the original Rice Purity Test while making it accessible to a modern audience. We maintain the original 100 questions and scoring system, ensuring that the test remains true to its roots while benefiting from modern web technology.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The test continues to evolve, but its core mission remains the same: providing a fun, anonymous way for people to reflect on their life experiences and engage in meaningful conversations with friends and peers.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading as="h2" size="lg" className="mb-4 text-green-600">
              Experience the Tradition
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Take the Rice Purity Test and become part of this decades-long tradition that has connected millions of people worldwide.
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
