import type { MetadataRoute } from "next";

const BASE = "https://www.ricepuritytestapp.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/test",
  "/blog",
  "/blog/what-is-rice-purity-test",
  "/blog/rice-purity-test-score-meaning",
  "/blog/rice-purity-test-history",
  "/blog/how-to-take-rice-purity-test",
  "/blog/average-rice-purity-test-score",
  "/rice-purity-test-score",
  "/rice-purity-test-questions",
  "/rice-purity-test-meaning",
  "/rice-purity-test-history",
  "/rice-purity-test-average-score-by-age",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog") ? 0.8 : 0.7,
  }));
}
