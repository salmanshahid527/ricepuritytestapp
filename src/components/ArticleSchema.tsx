import React from 'react';

const BASE_URL = 'https://www.ricepuritytestapp.com';

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  description: string;
}

export function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  url,
  description,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { '@type': 'Organization', name: 'Rice Purity Test App' },
    publisher: {
      '@type': 'Organization',
      name: 'Rice Purity Test App',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    description,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
