export const BASE_URL = 'https://www.ricepuritytestapp.com';
export const SITE_NAME = 'Rice Purity Test App';

/** Who runs the site, as stated on /about. Nothing else about the company is claimed anywhere. */
export const PUBLISHER = 'Teknoesis';
export const CONTACT_EMAIL = 'contact@ricepuritytestapp.com';
export const PRESS_EMAIL = 'press@ricepuritytestapp.com';

/** Ad placeholders render only when this is set. No real ad code lives in the repo. */
export const AD_SLOTS_ENABLED = Boolean(process.env.NEXT_PUBLIC_ADSENSE_SLOTS);

/** Opt-in score statistics (see lib/stats.ts). */
export const STATS_ENABLED = process.env.NEXT_PUBLIC_STATS_ENABLED === '1';
