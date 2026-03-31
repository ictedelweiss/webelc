"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PHP_API_BASE, AUTH_STORAGE_KEY } from "@/lib/api-config";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

export default function Dashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    try {
      const res = await fetch(`${PHP_API_BASE}/articles.php`);
      if (res.ok) {
        setArticles(await res.json());
      } else {
        setError("Gagal memuat artikel dari database.");
      }
    } catch {
      setError("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id: number, title: string) => {
    if (!window.confirm(`Hapus artikel "${title}"? Tindakan ini tidak bisa dibatalkan.`)) return;

    setDeletingId(id);
    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    try {
      const res = await fetch(`${PHP_API_BASE}/articles.php?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Gagal menghapus artikel");
      }
    } catch {
      alert("Terjadi kesalahan koneksi");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Artikel</h1>
          <p className="text-sm text-gray-500 mt-1">
            {articles.length} artikel tersimpan di database MySQL
          </p>
        </div>
        <Link
          href="/admin/dashboard/new"
          className="inline-flex items-center gap-2 bg-[#FED700] hover:bg-yellow-400 text-gray-900 font-semibold px-5 py-2.5 rounded-xl shadow transition-all hover:shadow-md active:scale-95 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Artikel
        </Link>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-4 border-[#293C88] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
          <svg className="mx-auto h-12 w-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-900 font-semibold">Belum ada artikel</p>
          <p className="text-gray-400 text-sm mt-1">Mulai dengan menambahkan artikel pertama Anda</p>
          <Link
            href="/admin/dashboard/new"
            className="inline-block mt-4 bg-[#293C88] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#1E2B66] transition-colors"
          >
            Tambah Artikel
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Judul</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Tanggal</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {article.thumbnail ? (
                        <img src={article.thumbnail} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 bg-[#293C88]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#293C88]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <span className="text-sm font-semibold text-gray-900 line-clamp-1">{article.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-mono">{article.slug}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/edit/${article.id}`}
                        className="text-[#293C88] hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(article.id, article.title)}
                        disabled={deletingId === article.id}
                        className="text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                      >
                        {deletingId === article.id ? "Menghapus..." : "Hapus"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
