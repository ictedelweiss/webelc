"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PHP_API_BASE } from "@/lib/api-config";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

// ─── Article List ────────────────────────────────────────────────────────────

function ArtikelList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${PHP_API_BASE}/articles.php`)
      .then((r) => r.json())
      .then(setArticles)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
            <div className="h-48 bg-gray-200" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-full" />
              <div className="h-3 bg-gray-100 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <svg className="mx-auto h-14 w-14 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-gray-600 font-semibold">Belum ada artikel</h3>
        <p className="text-gray-400 text-sm mt-1">Artikel sedang dalam tahap penulisan, nantikan update kami!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/artikel?slug=${article.slug}`}
          className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="h-52 bg-gray-100 relative overflow-hidden">
            {article.thumbnail ? (
              <img
                src={article.thumbnail}
                alt={article.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-[#293C88]/10">
                <svg className="w-14 h-14 text-[#293C88]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1 p-6 flex flex-col">
            <span className="text-xs font-semibold text-[#FED700] uppercase tracking-widest mb-2">Artikel</span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#293C88] transition-colors line-clamp-2 mb-3 font-poppins">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-3 flex-1">
              {article.excerpt || article.content.replace(/<[^>]+>/g, "").substring(0, 150)}...
            </p>
            <div className="mt-5 flex items-center justify-between">
              <time className="text-xs text-gray-400">
                {new Date(article.created_at).toLocaleDateString("id-ID", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </time>
              <span className="text-xs font-semibold text-[#293C88] group-hover:underline">
                Baca →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ─── Article Detail ──────────────────────────────────────────────────────────

function ArtikelDetail({ slug }: { slug: string }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`${PHP_API_BASE}/articles.php?slug=${encodeURIComponent(slug)}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); return null; }
        return r.json();
      })
      .then((data) => { if (data) setArticle(data); })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-100 rounded w-1/3 mx-auto" />
        <div className="h-72 bg-gray-200 rounded-2xl" />
        <div className="space-y-3">
          {[1,2,3,4,5].map(i => <div key={i} className={`h-3 bg-gray-100 rounded ${i === 5 ? 'w-2/3' : 'w-full'}`} />)}
        </div>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">Artikel tidak ditemukan.</p>
        <button onClick={() => router.push("/artikel")} className="mt-4 text-[#293C88] font-medium hover:underline">
          ← Kembali ke daftar artikel
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => router.push("/artikel")}
        className="inline-flex items-center gap-2 text-[#293C88] hover:text-[#1E2B66] transition-colors font-medium mb-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Artikel
      </button>

      <article>
        <header className="mb-10 text-center">
          <span className="text-xs font-semibold text-[#FED700] uppercase tracking-widest">Artikel</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#293C88] mt-3 mb-6 leading-tight font-poppins">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={article.created_at}>
              {new Date(article.created_at).toLocaleDateString("id-ID", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          </div>
        </header>

        {article.thumbnail && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img src={article.thumbnail} alt={article.title} className="w-full h-72 sm:h-[480px] object-cover" />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#293C88] prose-a:text-[#293C88]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

function ArtikelContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  return (
    <div className="bg-white min-h-screen pb-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {!slug && (
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#293C88] tracking-tight mb-4">
              Artikel & Kabar Terbaru
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center.
            </p>
          </div>
        )}
        {slug ? <ArtikelDetail slug={slug} /> : <ArtikelList />}
      </div>
    </div>
  );
}

export default function ArtikelPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-10 h-10 border-4 border-[#293C88] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ArtikelContent />
    </Suspense>
  );
}
