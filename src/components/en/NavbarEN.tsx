"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcherUI from "../LanguageSwitcherUI";

export default function Navbar() {
  const [tentangKamiOpen, setTentangKamiOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile accordion states
  const [mobileTentangKamiOpen, setMobileTentangKamiOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

  return (
    <div className="bg-[#FFF] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/ElitePng112.png"
            className="w-[140px] md:w-[180px] h-[45px] md:h-[55px] object-contain"
            alt="Edelweiss Learning Center"
          />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#293C88] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Home
          </Link>

          {/* Desktop Tentang Kami with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTentangKamiOpen(true)}
            onMouseLeave={() => setTentangKamiOpen(false)}
          >
            <button className="text-[#293C88] font-poppins text-base font-medium flex items-center gap-1 hover:text-[#FED700] transition-colors py-2">
              About Us
              <svg
                className={`w-4 h-4 transition-transform ${tentangKamiOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {tentangKamiOpen && (
              <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl py-2 min-w-[180px] border border-gray-100 z-50">
                <Link href="/visi-misi" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">Vision & Mission</Link>
                <Link href="/foundation" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">Foundation</Link>
              </div>
            )}
          </div>

          {/* Desktop Program with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button className="text-[#293C88] font-poppins text-base font-medium flex items-center gap-1 hover:text-[#FED700] transition-colors py-2">
              Programs
              <svg
                className={`w-4 h-4 transition-transform ${programOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programOpen && (
              <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100 z-50">
                <Link href="/program/elite-academia" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">Elite Academia Homeschooling</Link>
                <Link href="/program/english-course" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">English Course</Link>
                <Link href="/program/playteracy" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">Playteracy</Link>
                <Link href="/program/ipdc" className="block px-4 py-2.5 text-[#293C88] font-poppins text-sm hover:bg-[#FFF4BA] transition-colors">Indonesia Pedagogics Development Center</Link>
              </div>
            )}
          </div>

          <Link href="/kurikulum" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Curriculum
          </Link>
          <Link href="/kontak" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Contact
          </Link>
          <Link href="/artikel" className="text-[#293C88] font-poppins text-base font-medium hover:text-[#FED700] transition-colors">
            Articles
          </Link>

          {/* Search Icon */}
          <button className="text-[#293C88] hover:text-[#FED700] transition-colors ml-2">
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 22.5C14.7187 22.4995 16.8735 21.7568 18.6213 20.39L24.1162 25.885L25.8838 24.1175L20.3888 18.6225C21.7563 16.8746 22.4995 14.7193 22.5 12.5C22.5 6.98625 18.0138 2.5 12.5 2.5C6.98625 2.5 2.5 6.98625 2.5 12.5C2.5 18.0138 6.98625 22.5 12.5 22.5ZM12.5 5C16.6362 5 20 8.36375 20 12.5C20 16.6362 16.6362 20 12.5 20C8.36375 20 5 16.6362 5 12.5C5 8.36375 8.36375 5 12.5 5Z" fill="currentColor" />
            </svg>
          </button>
          
          <LanguageSwitcherUI />
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 flex flex-col gap-2 shadow-lg pb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50">
              Home
            </Link>

            {/* Mobile Tentang Kami Accordion */}
            <div>
              <button
                onClick={() => setMobileTentangKamiOpen(!mobileTentangKamiOpen)}
                className="w-full text-left px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50 flex justify-between items-center"
              >
                About Us
                <svg className={`w-4 h-4 transition-transform ${mobileTentangKamiOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileTentangKamiOpen && (
                <div className="pl-8 flex flex-col py-1 bg-gray-50/50">
                  <Link href="/visi-misi" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">Vision & Mission</Link>
                  <Link href="/foundation" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">Foundation</Link>
                </div>
              )}
            </div>

            {/* Mobile Program Accordion */}
            <div>
              <button
                onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
                className="w-full text-left px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50 flex justify-between items-center"
              >
                Programs
                <svg className={`w-4 h-4 transition-transform ${mobileProgramOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProgramOpen && (
                <div className="pl-8 flex flex-col py-1 bg-gray-50/50">
                  <Link href="/program/elite-academia" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">Elite Academia</Link>
                  <Link href="/program/english-course" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">English Course</Link>
                  <Link href="/program/playteracy" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">Playteracy</Link>
                  <Link href="/program/ipdc" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-[#293C88] font-poppins text-sm border-l-2 border-[#FED700] pl-4">IPDC</Link>
                </div>
              )}
            </div>

            <Link href="/kurikulum" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50">Curriculum</Link>
            <Link href="/kontak" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50">Contact</Link>
            <Link href="/artikel" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-[#293C88] font-poppins font-medium rounded hover:bg-gray-50">Articles</Link>
            <div className="px-4 py-2"><LanguageSwitcherUI /></div>
          </div>
        </div>
      )}
    </div>
  );
}
