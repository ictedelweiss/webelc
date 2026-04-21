import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import VisiMisiID from "@/components/id/VisiMisiID";
import VisiMisiEN from "@/components/en/VisiMisiEN";

export const metadata: Metadata = {
  title: "Visi & Misi",
  description: "Visi dan Misi Edelweiss Learning Center: menjadi lembaga pendidikan yang berkontribusi dalam mencerdaskan bangsa dan melahirkan generasi unggul berlandaskan nilai-nilai universal.",
  openGraph: {
    title: "Visi & Misi — Edelweiss Learning Center",
    description: "Menjadi lembaga pendidikan yang mencerdaskan bangsa dan melahirkan generasi unggul berlandaskan Ketuhanan Yang Maha Esa dan nilai-nilai universal.",
    url: "https://www.edelweisslearningcenter.com/visi-misi",
  },
};

export default function VisiMisi() {
  return (
    <PageClientSwitcher 
      idComponent={<VisiMisiID />} 
      enComponent={<VisiMisiEN />} 
    />
  );
}
