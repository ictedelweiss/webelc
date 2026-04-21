"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PageClientSwitcher({ 
  idComponent, 
  enComponent 
}: { 
  idComponent: React.ReactNode; 
  enComponent: React.ReactNode; 
}) {
  const { language, isLoaded } = useLanguage();
  
  // To avoid hydration mismatch, default to the ID component during SSR and initial mount
  if (!isLoaded) {
    return idComponent;
  }

  return language === 'en' ? enComponent : idComponent;
}
