/** The guide pages, used for related-guide links, navigation and breadcrumbs. */
export interface GuideLink {
  href: string;
  label: string;
  blurb: string;
}

export const GUIDES = {
  age: {
    href: '/rice-purity-test-average-score-by-age',
    label: 'Average score by age',
    blurb: 'Estimated typical ranges for 18, 19–22, 23–25, 26–30 and 31+.',
  },
  questions: {
    href: '/rice-purity-test-questions',
    label: 'All 100 questions, explained',
    blurb: 'The full list by theme, with plain-English notes on confusing items.',
  },
  score: {
    href: '/rice-purity-test-score',
    label: 'What your score means',
    blurb: 'How the score is calculated, the score chart and a lookup for any number.',
  },
  meaning: {
    href: '/rice-purity-test-meaning',
    label: 'What is the Rice Purity Test?',
    blurb: 'What “purity” means here and what your result can and can’t tell you.',
  },
  history: {
    href: '/rice-purity-test-history',
    label: 'History of the test',
    blurb: 'From a 1924 Rice Thresher survey to a TikTok trend.',
  },
  howTo: {
    href: '/blog/how-to-take-rice-purity-test',
    label: 'How to take the test',
    blurb: 'Answering for your whole life and handling ambiguous questions.',
  },
} satisfies Record<string, GuideLink>;

export type GuideKey = keyof typeof GUIDES;

export function relatedGuides(keys: GuideKey[]): GuideLink[] {
  return keys.map((k) => GUIDES[k]);
}
