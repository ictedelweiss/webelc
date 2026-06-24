import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleCreatedAt,
  getArticleDescription,
  getArticles,
  getArticleUpdatedAt,
} from "@/lib/articles";

const SITE_URL = "https://edelweisslearningcenter.com";
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getArticles()).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug((await params).slug);
  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const description = getArticleDescription(article);
  const canonical = `${SITE_URL}/artikel/${article.slug}`;
  return {
    title: article.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: canonical,
      publishedTime: getArticleCreatedAt(article),
      modifiedTime: getArticleUpdatedAt(article),
      images: article.thumbnail ? [{ url: article.thumbnail, alt: article.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: article.thumbnail ? [article.thumbnail] : undefined,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const article = await getArticleBySlug((await params).slug);
  if (!article) notFound();

  const createdAt = getArticleCreatedAt(article);
  const canonical = `${SITE_URL}/artikel/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: getArticleDescription(article),
    image: article.thumbnail || undefined,
    datePublished: createdAt,
    dateModified: getArticleUpdatedAt(article),
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Edelweiss Learning Center", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Edelweiss Learning Center",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/ElitePng112.png` },
    },
  };

  return (
    <div className="bg-white min-h-screen pb-16 font-poppins">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/artikel" className="inline-flex text-[#293C88] font-medium mb-10">
          ← Kembali ke Artikel
        </Link>
        <article>
          <header className="mb-10 text-center">
            <span className="text-xs font-semibold text-[#FED700] uppercase tracking-widest">
              Artikel
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#293C88] mt-3 mb-6 leading-tight">
              {article.title}
            </h1>
            <time dateTime={createdAt} className="text-gray-400 text-sm">
              {new Date(createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </header>
          {article.thumbnail && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-72 sm:h-[480px] object-cover"
              />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#293C88] prose-a:text-[#293C88] prose-p:leading-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}
