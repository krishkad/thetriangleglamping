import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thetriangleglamping.com";

  const stays = [
    "ac-pod-with-outdoor-jacuzzi",
    "cocoon-ac-tent",
    "cocoon-ac-tent-with-jacuzzi-and-mini-pool",
    "cocoon-ac-tent-with-mini-pool",
    "triangle-ac-cabin",
    "triangle-ac-cabin-with-mini-pool",
    "triangle-cooler-cabin",
    "triangle-tent",
    "triangle-tent-with-mini-pool",
  ];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...stays.map((slug) => ({
      url: `${base}/accommodations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
