import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeEN from "@/components/en/HomeEN";
import VisiMisiEN from "@/components/en/VisiMisiEN";
import FoundationEN from "@/components/en/FoundationEN";
import ProgramPageEN from "@/components/en/ProgramPageEN";
import EliteAcademiaEN from "@/components/en/EliteAcademiaEN";
import EnglishCourseEN from "@/components/en/EnglishCourseEN";
import PlayteracyEN from "@/components/en/PlayteracyEN";
import IPDCEN from "@/components/en/IPDCEN";
import KurikulumEN from "@/components/en/KurikulumEN";
import KontakEN from "@/components/en/KontakEN";
import { englishLanguageAlternates, SITE_URL } from "@/lib/seo";

const pages = {
  "": {
    component: HomeEN,
    title: "Edelweiss Learning Center | A Safe Place to Learn, Grow, and Shine",
    description: "A quality ISO 21001-certified education center in Bekasi offering Elite Academia, English Course, Playteracy, and IPDC programs since 2005.",
  },
  "visi-misi": {
    component: VisiMisiEN,
    title: "Vision & Mission",
    description: "Discover the vision and mission of Edelweiss Learning Center in developing excellent generations through quality education and universal values.",
  },
  foundation: {
    component: FoundationEN,
    title: "Edelweiss White Light Foundation",
    description: "Learn about the foundation behind Edelweiss Learning Center and its commitment to quality formal and non-formal education since 2005.",
  },
  program: {
    component: ProgramPageEN,
    title: "Our Programs",
    description: "Explore Elite Academia, English Course, Playteracy, and IPDC educational programs from Edelweiss Learning Center in Bekasi.",
  },
  "program/elite-academia": {
    component: EliteAcademiaEN,
    title: "Elite Academia — World Class Homeschooling",
    description: "International-standard hybrid homeschooling with flexible curriculum options for elementary, junior high, and senior high school students.",
  },
  "program/english-course": {
    component: EnglishCourseEN,
    title: "English Course — Achieve English Excellence",
    description: "A CEFR and Pearson Edexcel-aligned English course for children and teenagers aged 7–17 in Bekasi.",
  },
  "program/playteracy": {
    component: PlayteracyEN,
    title: "Playteracy — Learn to Read Through Play",
    description: "A fun Letterland phonics program for children aged 2–8 that develops English literacy through songs, stories, and play.",
  },
  "program/ipdc": {
    component: IPDCEN,
    title: "IPDC — Indonesia Pedagogics Development Center",
    description: "Global-standard professional development, curriculum development, and educational consultation for teachers and institutions.",
  },
  kurikulum: {
    component: KurikulumEN,
    title: "Curriculum & Learning Methods",
    description: "ELITS Curriculum integrates Pearson Edexcel, Indonesia's National Curriculum, and Letterland for a comprehensive learning experience.",
  },
  kontak: {
    component: KontakEN,
    title: "Contact Us",
    description: "Contact Edelweiss Learning Center in Jatibening Estate, Bekasi for program information and enrollment assistance.",
  },
} as const;

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((path) => ({
    slug: path ? path.split("/") : [],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = (await params).slug?.join("/") ?? "";
  const page = pages[path as keyof typeof pages];
  if (!page) return { robots: { index: false, follow: false } };

  const routePath = path ? `/${path}` : "/";
  const url = `${SITE_URL}/en${routePath === "/" ? "" : routePath}`;
  return {
    title: page.title,
    description: page.description,
    alternates: englishLanguageAlternates(routePath),
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      locale: "en_US",
    },
  };
}

export default async function EnglishPage({ params }: Props) {
  const path = (await params).slug?.join("/") ?? "";
  const page = pages[path as keyof typeof pages];
  if (!page) notFound();
  const Component = page.component;
  return <Component />;
}
