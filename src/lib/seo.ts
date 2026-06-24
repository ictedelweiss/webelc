import type { Metadata } from "next";

export const SITE_URL = "https://edelweisslearningcenter.com";

export function languageAlternates(path: string): Metadata["alternates"] {
  const normalizedPath = path === "/" ? "" : path;
  return {
    canonical: `${SITE_URL}${normalizedPath || "/"}`,
    languages: {
      "id-ID": `${SITE_URL}${normalizedPath || "/"}`,
      en: `${SITE_URL}/en${normalizedPath}`,
      "x-default": `${SITE_URL}${normalizedPath || "/"}`,
    },
  };
}

export function englishLanguageAlternates(path: string): Metadata["alternates"] {
  const normalizedPath = path === "/" ? "" : path;
  return {
    canonical: `${SITE_URL}/en${normalizedPath}`,
    languages: {
      "id-ID": `${SITE_URL}${normalizedPath || "/"}`,
      en: `${SITE_URL}/en${normalizedPath}`,
      "x-default": `${SITE_URL}${normalizedPath || "/"}`,
    },
  };
}
