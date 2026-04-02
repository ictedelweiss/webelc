"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PHP_API_BASE, AUTH_STORAGE_KEY } from "@/lib/api-config";
import RichTextEditor from "@/components/RichTextEditor";
import ConfirmDialog from "@/components/ConfirmDialog";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function NewArticle() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    thumbnail: "",
    content: "",
  });
  const [slugManual, setSlugManual] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "title" && !slugManual) {
      setFormData((prev) => ({ ...prev, title: value, slug: slugify(value) }));
    } else if (name === "slug") {
      setSlugManual(true);
      setFormData((prev) => ({ ...prev, slug: value.toLowerCase().replace(/[^a-z0-9-]/g, "") }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar (JPG, PNG, WEBP)");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Ukuran gambar maksimal 2MB");
      return;
    }

    setUploadingImage(true);
    setError("");

    const token = localStorage.getItem(AUTH_STORAGE_KEY);
    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    try {
      const res = await fetch(`${PHP_API_BASE}/upload.php`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataUpload,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormData((prev) => ({ ...prev, thumbnail: data.url }));
      } else {
        setError(data.message || "Gagal meng-upload gambar");
      }
    } catch {
      setError("Tidak dapat terhubung ke server untuk upload");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirmSubmit = async () => {
    setLoading(true);
    setError("");

    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    try {
      const res = await fetch(`${PHP_API_BASE}/articles.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Gagal menyimpan artikel");
        setShowConfirm(false);
      }
    } catch {
      setError("Tidak dapat terhubung ke server");
      setShowConfirm(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/dashboard" className="text-gray-400 hover:text-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Buat Artikel Baru</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">{error}</div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Judul Artikel *</label>
            <input
              type="text" name="title" required
              value={formData.title} onChange={handleChange}
              placeholder="Contoh: Tips Meningkatkan Kemampuan Bahasa Inggris"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#293C88] focus:border-transparent transition-all"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              URL Slug *
              <span className="font-normal text-gray-400 ml-2 text-xs">(otomatis dari judul)</span>
            </label>
            <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-[#293C88] focus-within:border-transparent">
              <span className="bg-gray-50 text-gray-400 px-3 py-2.5 text-sm border-r border-gray-200 flex-shrink-0">/artikel?slug=</span>
              <input
                type="text" name="slug" required
                value={formData.slug} onChange={handleChange}
                className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gambar Thumbnail</label>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="flex flex-col items-center justify-center w-full max-w-xs h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {uploadingImage ? (
                      <div className="w-8 h-8 border-4 border-[#293C88] border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg>
                        <p className="mb-1 text-sm text-gray-500 font-semibold">Upload file</p>
                        <p className="text-xs text-gray-500">JPG, PNG, WEBP (Max 2MB)</p>
                      </>
                    )}
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} />
                </label>
                {formData.thumbnail && (
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={formData.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div>
                <span className="text-xs text-gray-500 mb-1 block">Atau masukkan URL manual:</span>
                <input
                  type="text" name="thumbnail"
                  value={formData.thumbnail} onChange={handleChange}
                  placeholder="https://contoh.com/gambar.jpg"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#293C88] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Ringkasan
              <span className="font-normal text-gray-400 ml-2 text-xs">(ditampilkan di kartu artikel)</span>
            </label>
            <textarea
              name="excerpt" rows={2}
              value={formData.excerpt} onChange={handleChange}
              placeholder="Deskripsi singkat artikel..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#293C88] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Konten Artikel *
            </label>
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData((prev) => ({ ...prev, content: value }))}
              placeholder="<p>Tulis konten artikel Anda di sini...</p>"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/dashboard"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Batal
          </Link>
          <button
            type="submit" disabled={loading}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#293C88] hover:bg-[#1E2B66] active:scale-95 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Menyimpan ke MySQL..." : "Simpan Artikel"}
          </button>
        </div>
      </form>

      {/* Confirm Dialog */}
      <ConfirmDialog
        isOpen={showConfirm}
        title="Simpan Artikel Baru?"
        message={`Anda akan menyimpan artikel "${formData.title}" ke database. Pastikan semua data sudah benar sebelum melanjutkan.`}
        confirmText="Ya, Simpan"
        cancelText="Batal"
        isLoading={loading}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}
