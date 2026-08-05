'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/organisms/Hero';
import { Text } from '@/components/atoms/Text';
import { Heading } from '@/components/atoms/Heading';
import FAQSection from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4">
        <Hero />

        {/* Section 1: What the test measures */}
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-[#f5f3f0] border-t border-b border-[#e6e2dd]">
          <div className="max-w-5xl mx-auto px-6">
            <Heading as="h2" size="3xl" className="font-display font-extrabold text-ink mb-2">
              What the test actually measures
            </Heading>

            <Text variant="large" className="text-slate mb-10">
              It is a checklist, not a diagnosis. Ten categories, ten questions each.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface border border-line rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display font-extrabold text-5xl text-plum leading-none tracking-tight">
                    10
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-slate">
                    categories
                  </span>
                </div>
                <Text variant="body" className="text-ink leading-relaxed text-[0.98rem]">
                  Social life, relationships, intimacy, substances, nightlife, risk,
                  travel, money, digital life and a final group of rarer experiences.
                </Text>
              </div>

              {/* Card 2 */}
              <div className="bg-surface border border-line rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display font-extrabold text-5xl text-plum leading-none tracking-tight">
                    100
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-slate">
                    yes/no items
                  </span>
                </div>
                <Text variant="body" className="text-ink leading-relaxed text-[0.98rem]">
                  One point for every experience you have not had. Nothing is
                  weighted, and no answer counts for more than any other.
                </Text>
              </div>

              {/* Card 3 */}
              <div className="bg-surface border border-line rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display font-extrabold text-5xl text-plum leading-none tracking-tight">
                    1
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-slate">
                    number
                  </span>
                </div>
                <Text variant="body" className="text-ink leading-relaxed text-[0.98rem]">
                  A score between 0 and 100. Lower is not worse and higher is not
                  better; it is a count, not a grade.
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Score Breakdown */}
        <section className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-white border-t border-b border-[#e8e2eb]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <Heading as="h2" size="3xl" className="font-display font-extrabold md:text-4xl text-[#1f1d2b] mb-10 tracking-tight">
              What your score means, briefly
            </Heading>

            {/* 5 Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              <div className="bg-[#f4f0f6] border border-[#e8e2eb] rounded-2xl px-6 py-7 flex flex-col justify-between">
                <span className="block font-display font-extrabold text-xl text-[#4a2e58] mb-6">
                  90–100
                </span>
                <Text variant="body" className="text-[#1f1d2b] text-[0.95rem] leading-snug">
                  Very limited experience
                </Text>
              </div>

              <div className="bg-[#f4f0f6] border border-[#e8e2eb] rounded-2xl px-6 py-7 flex flex-col justify-between">
                <span className="block font-display font-extrabold text-xl text-[#4a2e58] mb-6">
                  70–89
                </span>
                <Text variant="body" className="text-[#1f1d2b] text-[0.95rem] leading-snug">
                  Some experience
                </Text>
              </div>

              <div className="bg-[#f4f0f6] border border-[#e8e2eb] rounded-2xl px-6 py-7 flex flex-col justify-between">
                <span className="block font-display font-extrabold text-xl text-[#4a2e58] mb-6">
                  45–69
                </span>
                <Text variant="body" className="text-[#1f1d2b] text-[0.95rem] leading-snug">
                  The common middle
                </Text>
              </div>

              <div className="bg-[#f4f0f6] border border-[#e8e2eb] rounded-2xl px-6 py-7 flex flex-col justify-between">
                <span className="block font-display font-extrabold text-xl text-[#4a2e58] mb-6">
                  20–44
                </span>
                <Text variant="body" className="text-[#1f1d2b] text-[0.95rem] leading-snug">
                  Broad experience
                </Text>
              </div>

              <div className="bg-[#f4f0f6] border border-[#e8e2eb] rounded-2xl px-6 py-7 flex flex-col justify-between">
                <span className="block font-display font-extrabold text-xl text-[#4a2e58] mb-6">
                  0–19
                </span>
                <Text variant="body" className="text-[#1f1d2b] text-[0.95rem] leading-snug">
                  Very broad experience
                </Text>
              </div>
            </div>

            {/* Bottom Guide Link */}
            <div>
              <Link
                href="/rice-purity-test-score"
                className="inline-flex items-center text-[#4a2e58] font-bold text-base underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Read the full band-by-band guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
    </div>
  );
}