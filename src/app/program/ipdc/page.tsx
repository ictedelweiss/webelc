import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import IPDCID from "@/components/id/IPDCID";
import IPDCEN from "@/components/en/IPDCEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IPDC — Indonesia Pedagogics Development Center",
  description: "IPDC (Indonesia Pedagogics Development Center) — program pengembangan profesional guru berstandar global. Pelatihan intensif, pengembangan kurikulum, dan konsultasi pendidikan dari Edelweiss Learning Center.",
  alternates: languageAlternates("/program/ipdc"),
  openGraph: {
    title: "IPDC — Indonesia Pedagogics Development Center",
    description: "Program pengembangan guru dan kurikulum berstandar global dari Edelweiss Learning Center. Pelatihan intensif, konsultasi, dan riset pendidikan.",
    url: "https://edelweisslearningcenter.com/program/ipdc",
    images: [{ url: "/slider_ipdc.webp", alt: "Indonesia Pedagogics Development Center" }],
  },
};

export default function IPDC() {
  return (
    <PageClientSwitcher 
      idComponent={<IPDCID />} 
      enComponent={<IPDCEN />} 
    />
  );
}
