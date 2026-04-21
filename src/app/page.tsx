import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import HomeID from "@/components/id/HomeID";
import HomeEN from "@/components/en/HomeEN";

export const metadata: Metadata = {
  title: "Edelweiss Learning Center | A Safe Place to Learn, Grow, and Shine",
  description: "Edelweiss Learning Center — Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi. Program unggulan: Elite Academia, English Course, Playteracy, dan IPDC sejak 2005.",
  openGraph: {
    title: "Edelweiss Learning Center | A Safe Place to Learn, Grow, and Shine",
    description: "Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi dengan program unggulan sejak 2005.",
    url: "https://www.edelweisslearningcenter.com",
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
