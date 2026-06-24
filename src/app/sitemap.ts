import type { MetadataRoute } from "next";
import { getArticles, getArticleUpdatedAt } from "@/lib/articles";

const SITE_URL = "https://edelweisslearningcenter.com";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/visi-misi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/foundation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/program`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/program/elite-academia`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/program/english-course`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/program/playteracy`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/program/ipdc`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/kurikulum`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/kontak`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/artikel`, changeFrequency: "daily", priority: 0.9 },
  ];
  const englishPaths = [
    "",
    "/visi-misi",
    "/foundation",
    "/program",
    "/program/elite-academia",
    "/program/english-course",
    "/program/playteracy",
    "/program/ipdc",
    "/kurikulum",
    "/kontak",
  ];
  const englishPages: MetadataRoute.Sitemap = englishPaths.map((path) => ({
    url: `${SITE_URL}/en${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 0.9 : 0.7,
  }));
  const articles: MetadataRoute.Sitemap = (await getArticles()).map((article) => ({
    url: `${SITE_URL}/artikel/${article.slug}`,
    lastModified: getArticleUpdatedAt(article),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...pages, ...englishPages, ...articles];
}
