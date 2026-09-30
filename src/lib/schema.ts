import { BASE_URL, CONTACT_EMAIL, PRESS_EMAIL, PUBLISHER, SITE_NAME } from './site';

export const ORGANIZATION_ID = `${BASE_URL}/#organization`;

/**
 * The publisher. Every property here is stated on the site itself: the name and
 * logo in the header, the two addresses in the footer and on /contact, the
 * company that runs it and the editorial policy on /about.
 */
export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png`, width: 512, height: 512 },
  description: 'A free, anonymous online version of the classic Rice Purity Test for adults.',
  email: CONTACT_EMAIL,
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer support', email: CONTACT_EMAIL, availableLanguage: 'en' },
    { '@type': 'ContactPoint', contactType: 'press', email: PRESS_EMAIL, availableLanguage: 'en' },
  ],
  parentOrganization: { '@type': 'Organization', name: PUBLISHER },
  publishingPrinciples: `${BASE_URL}/about#how-we-write`,
};

/** Short reference used inside other entities (author, publisher). */
export const ORGANIZATION_REF = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png`, width: 512, height: 512 },
};

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
  publisher: { '@id': ORGANIZATION_ID },
};
