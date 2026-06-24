"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcherUI() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const hasEnglishVersion = !pathname.startsWith("/artikel");
  const idPath = isEnglish ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const enPath = isEnglish
    ? pathname
    : !hasEnglishVersion
      ? "/en"
      : pathname === "/"
        ? "/en"
        : `/en${pathname}`;

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 border border-gray-200 ml-4">
      <Link
        href={idPath}
        hrefLang="id-ID"
        className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${!isEnglish ? 'bg-white text-[#293C88] shadow-sm' : 'text-gray-500 hover:text-[#293C88] delay-75'}`}
      >
        ID
      </Link>
      <Link
        href={enPath}
        hrefLang="en"
        className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${isEnglish ? 'bg-white text-[#293C88] shadow-sm' : 'text-gray-500 hover:text-[#293C88] delay-75'}`}
      >
        EN
      </Link>
    </div>
  );
}
