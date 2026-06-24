import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import KontakID from "@/components/id/KontakID";
import KontakEN from "@/components/en/KontakEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description: "Hubungi Edelweiss Learning Center. Alamat: Jatibening Estate, Bekasi. Telepon: +62 811-8817-757. Email: cs@edelweiss.sch.id. Kami siap membantu Anda.",
  alternates: languageAlternates("/kontak"),
  openGraph: {
    title: "Kontak Kami — Edelweiss Learning Center",
    description: "Hubungi Edelweiss Learning Center untuk informasi program dan pendaftaran. Lokasi di Jatibening Estate, Bekasi.",
    url: "https://edelweisslearningcenter.com/kontak",
    images: [{ url: "/ElitePng112.png", alt: "Kontak Edelweiss Learning Center" }],
  },
};

export default function Kontak() {
  return (
    <PageClientSwitcher 
      idComponent={<KontakID />} 
      enComponent={<KontakEN />} 
    />
  );
}
