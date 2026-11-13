import type { MetadataRoute } from "next";

const base = "https://parmanasystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: base + "/research", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/team", changeFrequency: "monthly", priority: 0.6 },
  ];
}
