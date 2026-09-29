import { JsonLd } from './atoms/JsonLd';
import { BASE_URL } from '@/lib/site';
import { ORGANIZATION_REF } from '@/lib/schema';

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  description: string;
}

/**
 * BlogPosting markup for guide pages. The author is the site itself (an
 * Organization), never an invented person. Dates are the real content dates;
 * don't change them for cosmetic edits.
 */
export function ArticleSchema({ headline, datePublished, dateModified, url, description }: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline,
        description,
        datePublished,
        dateModified: dateModified ?? datePublished,
        inLanguage: 'en-US',
        image: `${BASE_URL}/og-image.jpg`,
        author: ORGANIZATION_REF,
        publisher: ORGANIZATION_REF,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      }}
    />
  );
}
