import type { Metadata } from "next";
import ArtikelPageClient from "./ArtikelPageClient";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Artikel & Kabar Terbaru",
  description: "Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center. Baca artikel tentang pendidikan, parenting, dan perkembangan anak.",
  alternates: { canonical: `${SITE_URL}/artikel` },
  openGraph: {
    title: "Artikel & Kabar Terbaru — Edelweiss Learning Center",
    description: "Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center.",
    url: `${SITE_URL}/artikel`,
    images: [{ url: "/ElitsFix1.png", alt: "Artikel Edelweiss Learning Center" }],
  },
};

export default function ArtikelPage() {
  return <ArtikelPageClient />;
}
