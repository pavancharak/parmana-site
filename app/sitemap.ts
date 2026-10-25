import type { MetadataRoute } from "next";
import { questions } from "../lib/questions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://parmanasystems.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/questions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vision`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/security`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/verify`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...questions.map((q) => ({
      url: `${base}/questions/${q.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
