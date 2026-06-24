import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import PlayteracyID from "@/components/id/PlayteracyID";
import PlayteracyEN from "@/components/en/PlayteracyEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Playteracy — Belajar Membaca Lewat Bermain",
  description: "Playteracy adalah program phonics Letterland untuk anak usia 2–8 tahun. Belajar membaca Bahasa Inggris melalui lagu, cerita, dan permainan. Metode dari Inggris, digunakan di 110+ negara.",
  alternates: languageAlternates("/program/playteracy"),
  openGraph: {
    title: "Playteracy — Play & Literacy untuk Anak 2–8 Tahun",
    description: "Program phonics Letterland yang menyenangkan untuk anak usia 2–8 tahun. Belajar membaca Bahasa Inggris melalui bermain, bernyanyi, dan bercerita.",
    url: "https://edelweisslearningcenter.com/program/playteracy",
    images: [{ url: "/slider_playteracy.webp", alt: "Playteracy Edelweiss Learning Center" }],
  },
};

export default function Playteracy() {
  return (
    <PageClientSwitcher 
      idComponent={<PlayteracyID />} 
      enComponent={<PlayteracyEN />} 
    />
  );
}
