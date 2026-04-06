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
  title: 'About RicePurityTestApp — Who We Are & What We Do',
  description: 'RicePurityTestApp is a free, anonymous Rice Purity Test built in 2023. Learn who we are, why we built it, and how your privacy is protected.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About RicePurityTestApp — Who We Are & What We Do',
    description: 'RicePurityTestApp is a free, anonymous Rice Purity Test built in 2023. Learn who we are and how your privacy is protected.',
    url: `${BASE_URL}/about`,
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'About RicePurityTestApp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RicePurityTestApp — Who We Are & What We Do',
    description: 'RicePurityTestApp — free, anonymous Rice Purity Test. Learn who we are and how your privacy is protected.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rice Purity Test App',
  url: BASE_URL,
  foundingDate: '2023',
  description: 'Free, anonymous Rice Purity Test — 100 questions, instant results, zero data collection.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@ricepuritytestapp.com',
    url: `${BASE_URL}/contact`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          About RicePurityTestApp — Who We Are &amp; What We Do
        </Heading>

        <div className="space-y-8 text-gray-700">

          {/* Who we are */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Who We Are
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              RicePurityTestApp was built in 2023 by a small team of developers and writers who kept running into the same problem: every version of the Rice Purity Test online was cluttered with ads, slow to load, or required creating an account. We wanted one clean, fast version that worked well on any device — and that took privacy seriously.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              We&apos;re a small independent team. We don&apos;t have a corporate backer or investor. The site runs lean, stays free, and is built around a straightforward idea: give people a good version of a 40-year-old test without making them jump through hoops to use it.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              If you have a question, a bug to report, or just want to reach us, the best way is through our <Link href="/contact" className="text-green-600 underline hover:text-green-700">contact page</Link>. We read everything, though we can&apos;t always reply to every message.
            </Text>
          </section>

          {/* About the test */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              About the Rice Purity Test
            </Heading>
            <Text variant="large" className="leading-relaxed mb-4">
              The Rice Purity Test started in the 1980s as a paper handout at Rice University — a way for incoming students to break the ice during orientation. It was never a serious survey. It was a conversation starter. Something to laugh over, compare with your roommate, and use as a way into topics that might otherwise be awkward to bring up with people you&apos;d just met.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Decades later, it&apos;s still doing the same thing — just for a much bigger audience. What was once exclusive to one Houston campus now gets taken by people on every continent. The questions are largely the same ones from the original handout. The format has changed; the purpose hasn&apos;t.
            </Text>
          </section>

          {/* What the test is */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What the Test Actually Is
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It&apos;s a checklist of 100 life experiences. You check off the ones you&apos;ve had. Your score is 100 minus the number of boxes you checked. That&apos;s it. The scale runs from 0 (you&apos;ve had every experience on the list) to 100 (you&apos;ve had none of them). Most people land somewhere in the 55–75 range.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The word &quot;purity&quot; sounds judgmental, but it wasn&apos;t meant that way. In the original campus context, it was used loosely — almost ironically. A high score doesn&apos;t mean you&apos;re a better person. A low score doesn&apos;t mean you&apos;ve gone off the rails. It&apos;s just a count. The interesting part isn&apos;t the number itself; it&apos;s what the number gets you talking about.
            </Text>
          </section>

          {/* Our approach */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              What We&apos;ve Kept, What We&apos;ve Changed
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The 100 questions are the widely-recognized set that has circulated since the test first went digital in the late 1990s. We haven&apos;t added questions, removed awkward ones, or modernized the language. The point is that the test has always been the same test — that consistency is what makes scores meaningful to compare across different years and friend groups.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What we did change: the interface. Progress saves automatically so you don&apos;t lose your place. The scoring and sharing work cleanly on mobile. The results page gives you context so a number like &quot;67&quot; actually means something when you see it.
            </Text>
          </section>

          {/* Privacy commitment */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Our Commitment to Privacy
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Your answers never leave your browser. There&apos;s no database storing what you&apos;ve checked. We process everything locally on your device, which means even we don&apos;t know your score. That&apos;s not just a privacy policy checkbox — it&apos;s how the test is supposed to work. People answer more honestly when they know nobody&apos;s watching.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The only data we collect is anonymous usage analytics via Google Analytics — page views, session duration, general geographic region. We don&apos;t collect names, email addresses, or any information that could identify you. We use Google Analytics solely to understand how the site is being used so we can improve it. You can read our full <Link href="/privacy" className="text-green-600 underline hover:text-green-700">Privacy Policy</Link> for details.
            </Text>
          </section>

          {/* Key facts */}
          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              A Few Things Worth Knowing
            </Heading>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>The test is free and will stay free — no premium tier, no locked results</li>
              <li>No account needed, no email required, nothing tracked beyond anonymous analytics</li>
              <li>Questions cover the full range from very tame to fairly mature — intended for people 13 and up</li>
              <li>Scores are most meaningful when compared within your own age group — <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline hover:text-green-700">see averages by age</Link></li>
              <li>If you want to understand what your score actually means, the <Link href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">score guide</Link> has the full breakdown</li>
              <li>Founded in 2023, based online — reach us at <a href="mailto:contact@ricepuritytestapp.com" className="text-green-600 underline hover:text-green-700">contact@ricepuritytestapp.com</a></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="pt-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <Heading size="lg" className="mb-4 text-green-600">
                Ready to Find Out?
              </Heading>
              <Text variant="body" className="mb-6 text-gray-700">
                It takes about 10–15 minutes. Your answers stay private. Your results are instant.
              </Text>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/test">
                  <Button size="lg">Start the Test</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
