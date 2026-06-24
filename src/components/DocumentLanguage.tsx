"use client";

import { useEffect } from "react";

export default function DocumentLanguage({ lang }: { lang: "id" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = "id";
    };
  }, [lang]);

  return null;
}
