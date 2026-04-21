"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcherUI() {
  const { language, setLanguage, isLoaded } = useLanguage();

  if (!isLoaded) return <div className="w-[84px] h-[34px]" />; // prevent layout shift

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 border border-gray-200 ml-4">
      <button 
        onClick={() => setLanguage('id')}
        className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${language === 'id' ? 'bg-white text-[#293C88] shadow-sm' : 'text-gray-500 hover:text-[#293C88] delay-75'}`}
      >
        ID
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${language === 'en' ? 'bg-white text-[#293C88] shadow-sm' : 'text-gray-500 hover:text-[#293C88] delay-75'}`}
      >
        EN
      </button>
    </div>
  );
}
