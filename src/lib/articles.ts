import "server-only";

import { PHP_API_BASE } from "@/lib/api-config";

export interface Article {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  created_at?: string;
  updated_at?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getArticleCreatedAt = (article: Article) =>
  article.created_at ?? article.createdAt ?? "";

export const getArticleUpdatedAt = (article: Article) =>
  article.updated_at ?? article.updatedAt ?? getArticleCreatedAt(article);

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function getArticleDescription(article: Article) {
  const value = stripHtml(article.excerpt || article.content);
  return value.length > 160 ? `${value.slice(0, 157).trimEnd()}...` : value;
}

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${PHP_API_BASE}/articles.php`, {
      cache: "force-cache",
    });
    if (!response.ok) throw new Error(`Article API returned ${response.status}`);
    const articles = (await response.json()) as Article[];
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    console.warn("Article API unavailable during build; using local fallback.", error);
    const fallback = await import("@/data/articles.json");
    return fallback.default as Article[];
  }
}

export async function getArticleBySlug(slug: string) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}
