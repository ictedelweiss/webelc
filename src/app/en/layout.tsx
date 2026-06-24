import type { Metadata } from "next";
import DocumentLanguage from "@/components/DocumentLanguage";

export const metadata: Metadata = {
  openGraph: { locale: "en_US" },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <DocumentLanguage lang="en" />
      {children}
    </div>
  );
}
