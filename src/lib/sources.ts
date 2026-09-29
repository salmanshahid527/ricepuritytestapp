import type { Source } from '@/components/molecules/AboutThisGuide';

/** Published sources cited on the guides. Each link was checked when it was added. */
export const SOURCES = {
  thresher2017: {
    href: 'https://www.ricethresher.org/article/purity-test-evolves-spreads-beyond-rice-20170823',
    label: 'Rice Thresher, “Purity Test evolves, spreads beyond Rice” (August 23, 2017)',
  },
  thresher1924: {
    href: 'https://digitalcollections.rice.edu/Documents/Detail/the-thresher-houston-tex.-vol.-9-no.-22-ed.-1-friday-march-7-1924/16589',
    label: 'The Thresher, vol. 9, no. 22 (March 7, 1924), Rice University Digital Collections',
  },
  independent2022: {
    href: 'https://www.independent.co.uk/life-style/rice-purity-test-tik-tok-b2120206.html',
    label: 'The Independent, “What is the Rice purity test and how do you play?” (July 11, 2022)',
  },
  wikipedia: {
    href: 'https://en.wikipedia.org/wiki/Purity_test',
    label: 'Wikipedia, “Purity test”',
  },
} satisfies Record<string, Source>;
