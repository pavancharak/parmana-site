import type { MetadataRoute } from "next";

const base = "https://parmanasystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: base + "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/check-a-record", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/who-its-for", changeFrequency: "monthly", priority: 0.7 },
  ];
}
