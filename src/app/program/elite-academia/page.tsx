import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import EliteAcademiaID from "@/components/id/EliteAcademiaID";
import EliteAcademiaEN from "@/components/en/EliteAcademiaEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Elite Academia — Homeschooling Berkualitas",
  description: "Elite Academia adalah program homeschooling berstandar internasional dari Edelweiss Learning Center. Pembelajaran hybrid, kurikulum fleksibel (Nasional, Internasional, ELITS) untuk SD, SMP, dan SMA.",
  alternates: languageAlternates("/program/elite-academia"),
  openGraph: {
    title: "Elite Academia — World Class Homeschooling",
    description: "Program homeschooling berstandar internasional dengan pembelajaran hybrid dan pilihan kurikulum yang disesuaikan untuk SD, SMP, SMA.",
    url: "https://edelweisslearningcenter.com/program/elite-academia",
    images: [{ url: "/slider_elite.webp", alt: "Elite Academia Homeschooling" }],
  },
};

export default function EliteAcademia() {
  return (
    <PageClientSwitcher 
      idComponent={<EliteAcademiaID />} 
      enComponent={<EliteAcademiaEN />} 
    />
  );
}
