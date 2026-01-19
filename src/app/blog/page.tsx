import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rice Purity Test Blog | Guides, Tips & Insights',
  description: 'Learn everything about the Rice Purity Test - guides, tips, score meanings, history, and more.',
  robots: {
    index: true,
    follow: true,
  },
};

const blogPosts = [
  {
    slug: 'what-is-rice-purity-test',
    title: 'What is the Rice Purity Test? Complete Guide for 2026',
    description: 'Everything you need to know about the Rice Purity Test - its origins, how it works, and what your score means.',
    date: '2026-01-15',
    readTime: '8 min read',
  },
  {
    slug: 'rice-purity-test-score-meaning',
    title: 'Rice Purity Test Score Meaning: Understanding Your Results',
    description: 'Learn how to interpret your Rice Purity Test score and what different score ranges mean for your life experiences.',
    date: '2026-01-14',
    readTime: '6 min read',
  },
  {
    slug: 'average-rice-purity-test-score',
    title: 'Average Rice Purity Test Score: Statistics & Trends',
    description: 'Discover average Rice Purity Test scores by age, gender, and demographics. See how your score compares.',
    date: '2026-01-13',
    readTime: '5 min read',
  },
  {
    slug: 'rice-purity-test-history',
    title: 'The History of the Rice Purity Test: From Campus to Internet',
    description: 'Explore the fascinating history of the Rice Purity Test, from its origins at Rice University to becoming a viral internet phenomenon.',
    date: '2026-01-12',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-take-rice-purity-test',
    title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
    description: 'Get the most accurate Rice Purity Test results with these expert tips on answering questions honestly and understanding your score.',
    date: '2026-01-11',
    readTime: '4 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]} />
        <Heading size="3xl" className="mb-6">
          Rice Purity Test Blog
        </Heading>
        <Text variant="large" className="mb-8 text-gray-700">
          Learn everything about the Rice Purity Test - guides, tips, score meanings, history, and insights from millions of test takers.
        </Text>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Heading size="xl" className="mb-3 text-green-600">
                {post.title}
              </Heading>
              <Text color="default" className="text-gray-700 mb-4">
                {post.description}
              </Text>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
