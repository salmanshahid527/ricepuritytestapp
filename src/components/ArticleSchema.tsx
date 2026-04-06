import React from 'react';

const BASE_URL = 'https://www.ricepuritytestapp.com';

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  description: string;
  wordCount?: number;
  articleSection?: string;
}

export function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  url,
  description,
  wordCount,
  articleSection,
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'RicePurityTestApp Editorial Team',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rice Purity Test App',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    description,
  };

  if (wordCount) schema.wordCount = wordCount;
  if (articleSection) schema.articleSection = articleSection;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
