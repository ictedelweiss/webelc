import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import KontakID from "@/components/id/KontakID";
import KontakEN from "@/components/en/KontakEN";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description: "Hubungi Edelweiss Learning Center. Alamat: Jatibening Estate, Bekasi. Telepon: +62 811-8817-757. Email: cs@edelweiss.sch.id. Kami siap membantu Anda.",
  openGraph: {
    title: "Kontak Kami — Edelweiss Learning Center",
    description: "Hubungi Edelweiss Learning Center untuk informasi program dan pendaftaran. Lokasi di Jatibening Estate, Bekasi.",
    url: "https://www.edelweisslearningcenter.com/kontak",
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
