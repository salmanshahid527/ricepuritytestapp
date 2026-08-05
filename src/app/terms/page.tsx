import React from 'react';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Terms of Service | Rice Purity Test',
  description: 'Terms of Service for Rice Purity Test — use the test responsibly for entertainment. Free, anonymous, no account required.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Service' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-2 text-ink">
          Terms of service
        </Heading>
        <Text variant="small" className="text-slate mb-8 font-mono block">
          
          Last updated July 31, 2026  
        </Text>

        <article className="space-y-8 text-ink max-w-2xl mx-auto">

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Using this site
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              By using 
          {' '}
           <a href="/" className="text-ink hover:underline font-semibold  hover:text-plum">
                RicePurityTestApp.com
              </a>  
               {' '} you agree to these terms. If you do
              not agree, please do not use the site. You must be 18 or older to
              take the test.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              What the test is
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              The test is provided for entertainment and self-reflection. It is
              not a psychological, medical or diagnostic instrument, it has not
              been validated, and no result it produces should be used to make a
              decision about anyone.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              No affiliation
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              This site is not affiliated with, endorsed by, or connected to Rice
              University or any other institution. Names used are for
              identification only.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Content and ownership
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              The hundred-item question set, the written content, the design and
              the brand marks on this site are original works owned by{' '}
              <strong>Rice Purity Test App</strong>. You are welcome to link to any
              page and to quote briefly with attribution. Reproducing the
              question set or substantial page content elsewhere is not
              permitted.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Your submissions
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              If you choose to add your score to our statistics, you grant
              permission for it to be included in aggregate figures published
              on this site. Submissions are anonymous and cannot be withdrawn
              individually because they are not linked to you.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Availability and liability
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              The site is provided as-is. We do not guarantee that it will be
              available, accurate or uninterrupted. To the fullest extent
              permitted by law, we are not liable for any loss arising from use
              of the site.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Contact and governing law
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              Questions: <strong>support@ricepuritytestapp.com</strong>. These terms are governed by
              the laws of <strong> Pakistan</strong>.
            </Text>
          </section>
        </article>
      </main>
    </div>
  );
}