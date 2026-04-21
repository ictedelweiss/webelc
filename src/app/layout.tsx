import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/article-responsive.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Edelweiss Learning Center",
    template: "%s | Edelweiss Learning Center",
  },
  description: "Edelweiss Learning Center — Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi dengan program Elite Academia, English Course, Playteracy, dan IPDC sejak 2005.",
  keywords: ["lembaga pendidikan Bekasi", "homeschooling Bekasi", "kursus bahasa Inggris anak", "Playteracy", "IPDC guru", "Elite Academia", "Edelweiss Learning Center"],
  authors: [{ name: "Edelweiss Learning Center" }],
  metadataBase: new URL("https://www.edelweisslearningcenter.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.edelweisslearningcenter.com",
    siteName: "Edelweiss Learning Center",
    title: "Edelweiss Learning Center",
    description: "Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi dengan program Elite Academia, English Course, Playteracy, dan IPDC sejak 2005.",
    images: [
      {
        url: "/ElitsFix1.png",
        width: 1200,
        height: 630,
        alt: "Edelweiss Learning Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edelweiss Learning Center",
    description: "Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi sejak 2005.",
    images: ["/ElitsFix1.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body className="scroll-smooth">
        <LanguageProvider>
          {/* Sticky Navbar - visible on all pages */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>

          {/* Main content with top padding for sticky navbar */}
          <main className="pt-[70px] md:pt-[75px]">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
