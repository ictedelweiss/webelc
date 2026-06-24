import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import HomeID from "@/components/id/HomeID";
import HomeEN from "@/components/en/HomeEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Edelweiss Learning Center | A Safe Place to Learn, Grow, and Shine",
  description: "Edelweiss Learning Center — Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi. Program unggulan: Elite Academia, English Course, Playteracy, dan IPDC sejak 2005.",
  alternates: languageAlternates("/"),
  openGraph: {
    title: "Edelweiss Learning Center | A Safe Place to Learn, Grow, and Shine",
    description: "Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi dengan program unggulan sejak 2005.",
    url: "https://edelweisslearningcenter.com",
    images: [{ url: "/ElitsFix1.png", width: 1200, height: 630, alt: "Edelweiss Learning Center" }],
  },
};

export default function Home() {
  return (
    <PageClientSwitcher 
      idComponent={<HomeID />} 
      enComponent={<HomeEN />} 
    />
  );
}
