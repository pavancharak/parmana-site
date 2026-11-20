import type { MetadataRoute } from "next";

const base = "https://parmanasystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: base + "/business", changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/engineering", changeFrequency: "monthly", priority: 0.9 },
    { url: base + "/architecture", changeFrequency: "monthly", priority: 0.85 },
    { url: base + "/use-cases", changeFrequency: "monthly", priority: 0.85 },
    { url: base + "/research", changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/team", changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/vision", changeFrequency: "monthly", priority: 0.4 },
    { url: base + "/license", changeFrequency: "yearly", priority: 0.3 },
  ];
}
