import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/article-responsive.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Edelweiss Learning Center",
  description: "Excellence in Education since 2005",
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="scroll-smooth">
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
      </body>
    </html>
  );
}
