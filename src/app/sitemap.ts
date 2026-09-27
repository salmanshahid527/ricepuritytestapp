import type { MetadataRoute } from "next";

const BASE = "https://www.ricepuritytestapp.com";

// lastModified = when the page content last actually changed (not build time),
// so Google can trust the signal.
const routes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-27" },
  { path: "/test", lastModified: "2026-09-27" },
  { path: "/rice-purity-test-average-score-by-age", lastModified: "2026-09-27" },
  { path: "/rice-purity-test-score", lastModified: "2026-09-27" },
  { path: "/rice-purity-test-questions", lastModified: "2026-03-13" },
  { path: "/rice-purity-test-meaning", lastModified: "2026-03-30" },
  { path: "/rice-purity-test-history", lastModified: "2026-03-30" },
  { path: "/blog", lastModified: "2026-09-27" },
  { path: "/blog/how-to-take-rice-purity-test", lastModified: "2026-09-27" },
  { path: "/about", lastModified: "2026-08-14" },
  { path: "/contact", lastModified: "2026-08-14" },
  { path: "/privacy", lastModified: "2026-08-14" },
  { path: "/terms", lastModified: "2026-08-14" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/test" ? 0.9 : 0.7,
  }));
}
