"use client";

import { useEffect, useState } from "react";
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
}

export default function ArtikelPageClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${PHP_API_BASE}/articles.php`)
      .then((response) => response.json())
      .then(setArticles)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white min-h-screen pb-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#293C88] tracking-tight mb-4">
            Artikel &amp; Kabar Terbaru
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <h2 className="text-gray-600 font-semibold">Belum ada artikel</h2>
            <p className="text-gray-400 text-sm mt-1">
              Artikel sedang dalam tahap penulisan, nantikan update kami!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-52 bg-gray-100 relative overflow-hidden">
                  {article.thumbnail && (
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <span className="text-xs font-semibold text-[#FED700] uppercase tracking-widest mb-2">
                    Artikel
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#293C88] transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 flex-1">
                    {article.excerpt || article.content.replace(/<[^>]+>/g, "").substring(0, 150)}...
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <time dateTime={article.created_at} className="text-xs text-gray-400">
                      {new Date(article.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
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
        )}
      </div>
    </div>
  );
}
