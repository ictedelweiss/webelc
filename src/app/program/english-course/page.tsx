import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import EnglishCourseID from "@/components/id/EnglishCourseID";
import EnglishCourseEN from "@/components/en/EnglishCourseEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "English Course — Kursus Bahasa Inggris Anak & Remaja",
  description: "English Course Edelweiss Learning Center: program kursus Bahasa Inggris berstandar CEFR dan Pearson Edexcel untuk usia 7–17 tahun. Pendekatan komunikatif, menyenangkan, dan terbukti efektif sejak 2005.",
  alternates: languageAlternates("/program/english-course"),
  openGraph: {
    title: "English Course — Achieve English Excellence",
    description: "Kursus Bahasa Inggris CEFR & Pearson Edexcel untuk usia 7–17 tahun. Metode komunikatif dan menyenangkan di Bekasi sejak 2005.",
    url: "https://edelweisslearningcenter.com/program/english-course",
    images: [{ url: "/slider_english_course.webp", alt: "English Course Edelweiss Learning Center" }],
  },
};

export default function EnglishCourse() {
  return (
    <PageClientSwitcher 
      idComponent={<EnglishCourseID />} 
      enComponent={<EnglishCourseEN />} 
    />
  );
}
