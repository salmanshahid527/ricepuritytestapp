import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

// Injected via server render below — ItemList + BreadcrumbList for rich results
const blogIndexSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Rice Purity Test Guides & Articles',
  url: `${BASE_URL}/blog`,
  description: 'Guides, score explainers, history, and tips about the Rice Purity Test.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Rice Purity Test Guides & Articles | Tips, Meaning & Insights',
  description: 'Explore Rice Purity Test guides and articles — learn tips, score meanings, history, and insights from millions of people who took the test.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Rice Purity Test Guides & Articles | Tips, Meaning & Insights',
    description: 'Explore Rice Purity Test guides and articles — tips, score meanings, history, and insights.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test Guides & Articles | Tips, Meaning & Insights',
    description: 'Rice Purity Test guides and articles — tips, score meanings, history.',
  },
};

const blogPosts = [
  {
    slug: 'what-is-rice-purity-test',
    title: 'What is the Rice Purity Test? Complete Guide for 2026',
    description: 'Everything you need to know about the Rice Purity Test — its origins, how it works, and what your score means.',
    date: '2026-01-15',
    readTime: '8 min read',
    category: 'Guide',
    categoryColor: 'green',
  },
  {
    slug: 'rice-purity-test-score-meaning',
    title: 'Rice Purity Test Score Meaning: Understanding Your Results',
    description: 'Learn how to interpret your Rice Purity Test score and what different score ranges mean for your life experiences.',
    date: '2026-01-14',
    readTime: '6 min read',
    category: 'Scores',
    categoryColor: 'blue',
  },
  {
    slug: 'average-rice-purity-test-score',
    title: 'Average Rice Purity Test Score: Statistics & Trends',
    description: 'Discover average Rice Purity Test scores by age, gender, and demographics. See how your score compares.',
    date: '2026-01-13',
    readTime: '5 min read',
    category: 'Statistics',
    categoryColor: 'purple',
  },
  {
    slug: 'rice-purity-test-history',
    title: 'The History of the Rice Purity Test: From Campus to Internet',
    description: 'Explore the fascinating history of the Rice Purity Test, from its origins at Rice University to becoming a viral internet phenomenon.',
    date: '2026-01-12',
    readTime: '7 min read',
    category: 'History',
    categoryColor: 'amber',
  },
  {
    slug: 'how-to-take-rice-purity-test',
    title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
    description: 'Get the most accurate Rice Purity Test results with these expert tips on answering questions honestly and understanding your score.',
    date: '2026-01-11',
    readTime: '4 min read',
    category: 'Tips',
    categoryColor: 'teal',
  },
  {
    slug: 'rice-purity-test-for-college-students',
    title: 'Rice Purity Test for College Students: What to Expect',
    description: 'A complete guide to the Rice Purity Test for college students — average scores by year, how to take it with your dorm, and what the numbers mean.',
    date: '2026-02-10',
    readTime: '9 min read',
    category: 'College',
    categoryColor: 'indigo',
  },
  {
    slug: 'rice-purity-test-tiktok-trend',
    title: 'Why the Rice Purity Test Went Viral on TikTok',
    description: 'Explore why the Rice Purity Test became a massive TikTok trend — the psychology behind viral score-sharing and what millions of views revealed.',
    date: '2026-02-20',
    readTime: '7 min read',
    category: 'Culture',
    categoryColor: 'pink',
  },
  {
    slug: 'rice-purity-test-questions-breakdown',
    title: 'Rice Purity Test Questions: Full Category Breakdown & Analysis',
    description: 'A detailed breakdown of all 100 Rice Purity Test questions by category — what types of experiences are covered and how questions are structured.',
    date: '2026-03-01',
    readTime: '10 min read',
    category: 'Questions',
    categoryColor: 'orange',
  },
  {
    slug: 'rice-purity-test-with-friends',
    title: 'How to Take the Rice Purity Test with Friends: Social Guide',
    description: 'A complete guide to taking the Rice Purity Test with friends — how to compare scores, what to discuss, and how to make it a fun, comfortable activity.',
    date: '2026-03-10',
    readTime: '6 min read',
    category: 'Social',
    categoryColor: 'rose',
  },
  {
    slug: 'what-is-a-good-rice-purity-score',
    title: 'What Is a Good Rice Purity Score? The Honest Answer',
    description: 'People ask what a "good" Rice Purity Score is. Here\'s the honest, nuanced answer — why the question itself is tricky and what your score actually tells you.',
    date: '2026-03-20',
    readTime: '8 min read',
    category: 'Scores',
    categoryColor: 'blue',
  },
];

const categoryColorMap: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
  amber: 'bg-amber-100 text-amber-700',
  teal: 'bg-teal-100 text-teal-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  pink: 'bg-pink-100 text-pink-700',
  orange: 'bg-orange-100 text-orange-700',
  rose: 'bg-rose-100 text-rose-700',
};

export default function BlogPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rice Purity Test Articles',
    itemListElement: blogPosts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]} />

        <div className="mb-10">
          <Heading as="h1" size="3xl" className="mb-4">
            Rice Purity Test Guides &amp; Articles
          </Heading>
          <Text variant="large" className="text-gray-600">
            Learn everything about the Rice Purity Test — guides, tips, score meanings, history, and insights from millions of test takers.
          </Text>
        </div>

        {/* Featured Post */}
        <div className="mb-8">
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="block bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColorMap[blogPosts[0].categoryColor]}`}>
                {blogPosts[0].category}
              </span>
              <span className="text-xs text-gray-400 font-medium">Featured</span>
            </div>
            <Heading size="2xl" className="mb-3 text-green-700 group-hover:text-green-600 transition-colors">
              {blogPosts[0].title}
            </Heading>
            <Text color="default" className="text-gray-600 mb-5 text-lg leading-relaxed">
              {blogPosts[0].description}
            </Text>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
              <span className="ml-auto text-green-600 font-medium">Read article →</span>
            </div>
          </Link>
        </div>

        {/* All Posts */}
        <div className="space-y-4">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColorMap[post.categoryColor]}`}>
                      {post.category}
                    </span>
                  </div>
                  <Heading size="lg" className="mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </Heading>
                  <Text color="default" className="text-gray-600 text-sm leading-relaxed mb-3">
                    {post.description}
                  </Text>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 text-gray-300 group-hover:text-green-500 transition-colors mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <Heading size="2xl" className="mb-3 text-green-700">
            Ready to Take the Test?
          </Heading>
          <Text variant="large" className="text-gray-600 mb-6">
            Free, anonymous, instant results. No account required.
          </Text>
          <Link
            href="/test"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 hover:shadow-lg transition-all duration-300 text-lg"
          >
            Start the Rice Purity Test
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
