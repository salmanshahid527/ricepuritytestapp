import { BASE_URL } from './site';

/** The test itself. Used on the home page and /test, the two pages that host it. No ratings. */
export const WEB_APPLICATION = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${BASE_URL}/#test`,
  name: 'Rice Purity Test',
  url: `${BASE_URL}/test`,
  description: 'Take the classic 100-question Rice Purity Test online. Free, anonymous, and scored instantly in your browser.',
  applicationCategory: 'Entertainment',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  audience: { '@type': 'PeopleAudience', suggestedMinAge: 18 },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: ['100 questions survey', 'Anonymous testing', 'Instant results', 'Score sharing'],
  publisher: { '@id': `${BASE_URL}/#organization` },
};
