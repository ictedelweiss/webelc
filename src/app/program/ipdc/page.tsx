import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import IPDCID from "@/components/id/IPDCID";
import IPDCEN from "@/components/en/IPDCEN";

export const metadata: Metadata = {
  title: "IPDC — Indonesia Pedagogics Development Center",
  description: "IPDC (Indonesia Pedagogics Development Center) — program pengembangan profesional guru berstandar global. Pelatihan intensif, pengembangan kurikulum, dan konsultasi pendidikan dari Edelweiss Learning Center.",
  openGraph: {
    title: "IPDC — Indonesia Pedagogics Development Center",
    description: "Program pengembangan guru dan kurikulum berstandar global dari Edelweiss Learning Center. Pelatihan intensif, konsultasi, dan riset pendidikan.",
    url: "https://www.edelweisslearningcenter.com/program/ipdc",
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
