import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akerkaou.org";

  const newsArticles = [
    { slug: "road-paving-oussilat", priority: 0.9, changeFrequency: "monthly" as const },
    { slug: "mosque-lighting-maintenance", priority: 0.9, changeFrequency: "monthly" as const },
    { slug: "lamps-replacement", priority: 0.8, changeFrequency: "monthly" as const },
    { slug: "ramadan-basket", priority: 0.8, changeFrequency: "monthly" as const },
    { slug: "road-repair-ait-tabia", priority: 0.8, changeFrequency: "monthly" as const },
    { slug: "road-repair-ntourirt-indali", priority: 0.8, changeFrequency: "monthly" as const },
    { slug: "celebrating-young-talent", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const newsEntries: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: article.changeFrequency,
    priority: article.priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...newsEntries,
  ];
}
