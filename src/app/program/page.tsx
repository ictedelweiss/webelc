import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import ProgramPageID from "@/components/id/ProgramPageID";
import ProgramPageEN from "@/components/en/ProgramPageEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Program Unggulan",
  description: "Edelweiss Learning Center menawarkan program pendidikan inovatif: Elite Academia (homeschooling), English Course, Playteracy, dan IPDC untuk anak dan remaja di Bekasi.",
  alternates: languageAlternates("/program"),
  openGraph: {
    title: "Program Unggulan — Edelweiss Learning Center",
    description: "Elite Academia, English Course, Playteracy, dan IPDC — program pendidikan inovatif berstandar internasional untuk anak dan remaja di Bekasi.",
    url: "https://edelweisslearningcenter.com/program",
    images: [{ url: "/ElitsFix1.png", alt: "Program Edelweiss Learning Center" }],
  },
};

export default function ProgramPage() {
  return (
    <PageClientSwitcher 
      idComponent={<ProgramPageID />} 
      enComponent={<ProgramPageEN />} 
    />
  );
}
