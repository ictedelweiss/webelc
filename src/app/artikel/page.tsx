import type { Metadata } from "next";
import ArtikelPageClient from "./ArtikelPageClient";

export const metadata: Metadata = {
  title: "Artikel & Kabar Terbaru",
  description: "Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center. Baca artikel tentang pendidikan, parenting, dan perkembangan anak.",
  openGraph: {
    title: "Artikel & Kabar Terbaru — Edelweiss Learning Center",
    description: "Berita terkini, wawasan pendidikan, dan informasi program unggulan dari Edelweiss Learning Center.",
    url: "https://www.edelweisslearningcenter.com/artikel",
  },
};

export default function ArtikelPage() {
  return <ArtikelPageClient />;
}
