import type { Metadata } from "next";
import PageClientSwitcher from "@/components/PageClientSwitcher";
import FoundationID from "@/components/id/FoundationID";
import FoundationEN from "@/components/en/FoundationEN";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Yayasan Sinar Putih Edelweiss",
  description: "Yayasan Sinar Putih Edelweiss menaungi layanan pendidikan formal dan nonformal yang berkomitmen pada pendidikan berkualitas sejak 2005.",
  alternates: languageAlternates("/foundation"),
  openGraph: {
    title: "Yayasan Sinar Putih Edelweiss",
    description: "Yayasan yang menaungi layanan pendidikan formal dan nonformal Edelweiss sejak 2005.",
    url: "https://edelweisslearningcenter.com/foundation",
    images: [{ url: "/ElitePng112.png", alt: "Yayasan Sinar Putih Edelweiss" }],
  },
};

export default function Foundation() {
  return (
    <PageClientSwitcher 
      idComponent={<FoundationID />} 
      enComponent={<FoundationEN />} 
    />
  );
}
