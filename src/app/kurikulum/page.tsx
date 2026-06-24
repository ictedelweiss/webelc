import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import KurikulumID from "@/components/id/KurikulumID";
import KurikulumEN from "@/components/en/KurikulumEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kurikulum & Metode Belajar",
  description: "Edelweiss Learning Center menggunakan ELITS Curriculum — integrasi kurikulum internasional Pearson Edexcel, Kurikulum Nasional, dan Letterland untuk pengalaman belajar yang komprehensif.",
  alternates: languageAlternates("/kurikulum"),
  openGraph: {
    title: "Kurikulum & Metode Belajar — Edelweiss Learning Center",
    description: "ELITS Curriculum: integrasi Pearson Edexcel, Kurikulum Nasional, dan Letterland untuk pengalaman belajar berstandar internasional.",
    url: "https://edelweisslearningcenter.com/kurikulum",
    images: [{ url: "/Kurikulum.png", alt: "Kurikulum Edelweiss Learning Center" }],
  },
};

export default function Kurikulum() {
  return (
    <PageClientSwitcher 
      idComponent={<KurikulumID />} 
      enComponent={<KurikulumEN />} 
    />
  );
}
