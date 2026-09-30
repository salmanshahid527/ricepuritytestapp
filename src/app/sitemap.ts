import type { MetadataRoute } from "next";
import { PAGE_DATES, type DatedPath } from "@/lib/dates";

const BASE = "https://www.ricepuritytestapp.com";

// lastModified = when the page content last actually changed (not build time),
// so Google can trust the signal. The dates live in lib/dates.ts, next to the
// visible "Last reviewed" lines and BlogPosting dateModified.
const paths: DatedPath[] = [
  "/",
  "/test",
  "/rice-purity-test-average-score-by-age",
  "/rice-purity-test-score",
  "/rice-purity-test-questions",
  "/rice-purity-test-meaning",
  "/rice-purity-test-history",
  "/blog",
  "/blog/how-to-take-rice-purity-test",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => {
    const path = p === "/" ? "" : p;
    return {
      url: `${BASE}${path}`,
      lastModified: new Date(PAGE_DATES[p].modified),
      changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/test" ? 0.9 : 0.7,
    };
  });
}
