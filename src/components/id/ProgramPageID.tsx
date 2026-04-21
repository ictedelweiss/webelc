'use client';

import { useState } from 'react';
import Link from "next/link";

export default function ProgramPageID() {
  const [programDropdown, setProgramDropdown] = useState(false);
  const [kurikulumDropdown, setKurikulumDropdown] = useState(false);

  const programs = [
    {
      id: 'elite-academia',
      title: 'Elite Academia',
      description: 'Program homeschooling dengan kurikulum internasional yang mengembangkan potensi akademik siswa secara maksimal.',
      image: '/ElitePng112.png',
      color: '#293C88'
    },
    {
      id: 'english-course',
      title: 'English Course',
      description: 'Kursus bahasa Inggris profesional dengan metode pembelajaran yang interaktif dan menyenangkan untuk semua usia.',
      image: '/ElitePng121.png',
      color: '#293C88'
    },
    {
      id: 'playteracy',
      title: 'Playteracy',
      description: 'Program pembelajaran melalui bermain yang mengembangkan literasi dan keterampilan sosial anak sejak dini.',
      image: '/ElitePng123.png',
      color: '#293C88'
    },
    {
      id: 'ipdc',
      title: 'IPDC',
      description: 'Indonesia Pedagogic Development Center - pusat pengembangan kurikulum dan metodologi pendidikan Indonesia.',
      image: '/ElitePng127.png',
      color: '#293C88'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      <main className="relative">
        {/* Hero Section */}
        <div className="relative pb-20">
          <div className="absolute right-0 top-20 w-[150px] h-[280px] bg-[#FED700] -z-10" />

          <div className="max-w-screen-xl mx-auto px-6 pt-8">
            {/* Breadcrumb */}
            <p className="text-sm font-poppins text-[#FED700]">
              Homepage <span className="text-[#868686]">|</span> Program
            </p>

            {/* Title Section */}
            <div className="mt-12">
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#293C88] mb-4">
                Program Kami
              </h2>
              <p className="text-[#868686] font-poppins text-base md:text-lg max-w-[700px] leading-relaxed">
                Edelweiss Learning Center menawarkan berbagai program pendidikan inovatif yang dirancang untuk mengembangkan potensi siswa secara menyeluruh dengan metode pembelajaran terkini.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          {/* Dropdown Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Program Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setProgramDropdown(!programDropdown)}
                className="w-full md:w-auto px-6 py-3 rounded-[15px] bg-white border-2 border-[#E0E0E0] text-[#293C88] font-poppins font-semibold flex items-center justify-between md:justify-center gap-3 hover:border-[#FED700] transition-colors"
              >
                Program
                <svg
                  className={`w-5 h-5 transition-transform ${programDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Program Dropdown Menu */}
              {programDropdown && (
                <div className="absolute top-full left-0 md:left-0 w-full mt-2 bg-white rounded-[20px] border border-gray-200 shadow-lg z-10 overflow-hidden">
                  <Link href="/program/elite-academia">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      Elite Academia
                    </div>
                  </Link>
                  <Link href="/program/english-course">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      English Course
                    </div>
                  </Link>
                  <Link href="/program/playteracy">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      Playteracy
                    </div>
                  </Link>
                  <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-white font-poppins font-medium bg-[#C0C0C0] transition-colors">
                    IPDC
                  </div>
                </div>
              )}
            </div>

            {/* Kurikulum Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setKurikulumDropdown(!kurikulumDropdown)}
                className="w-full md:w-auto px-6 py-3 rounded-[15px] bg-white border-2 border-[#E0E0E0] text-[#293C88] font-poppins font-semibold flex items-center justify-between md:justify-center gap-3 hover:border-[#FED700] transition-colors"
              >
                Kurikulum
                <svg
                  className={`w-5 h-5 transition-transform ${kurikulumDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {/* Kurikulum Dropdown Menu */}
              {kurikulumDropdown && (
                <div className="absolute top-full right-0 w-full md:w-[250px] mt-2 bg-white rounded-[20px] border border-gray-200 shadow-lg z-10 overflow-hidden">
                  <Link href="/kurikulum">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      Kurikulum Nasional
                    </div>
                  </Link>
                  <Link href="/kurikulum">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      Kurikulum Internasional
                    </div>
                  </Link>
                  <Link href="/kurikulum">
                    <div className="px-6 py-4 hover:bg-[#F5F5F5] cursor-pointer text-[#293C88] font-poppins font-medium border-b border-gray-100 last:border-0 transition-colors">
                      Kurikulum Khusus
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programs.map((program) => (
              <Link href={`/program/${program.id}`} key={program.id}>
                <div className="h-full rounded-[20px] bg-gradient-to-b from-[#F5F5F5] to-[#FFFFFF] p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#FED700]">
                  {/* Image Container */}
                  <div className="h-[120px] flex items-center justify-center mb-6">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Yellow Accent Line */}
                  <div className="w-12 h-1 bg-[#FED700] mb-4 rounded-full" />

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-[#293C88] mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#868686] font-poppins text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#FED700] font-poppins font-semibold text-sm hover:gap-3 transition-all">
                    Pelajari Selengkapnya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Section - Why Choose Our Programs */}
          <div className="mt-20 bg-[#F5F5F5] rounded-[20px] p-12">
            <h2 className="text-[36px] font-bold text-[#293C88] mb-4 text-center">
              Mengapa Memilih Program Kami?
            </h2>
            <p className="text-[#868686] font-poppins text-base text-center max-w-[700px] mx-auto mb-12">
              Semua program dirancang dengan standar internasional dan disesuaikan dengan kebutuhan lokal Indonesia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-8">
                <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#293C88] mb-3">
                  Kurikulum Berkualitas
                </h3>
                <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                  Menggunakan standar internasional yang telah terbukti efektif dalam meningkatkan prestasi siswa.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-8">
                <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#293C88] mb-3">
                  Pengajar Berpengalaman
                </h3>
                <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                  Tim pendidik profesional dengan sertifikasi internasional dan pengalaman bertahun-tahun.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-8">
                <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#293C88] mb-3">
                  Fleksibel &amp; Adaptif
                </h3>
                <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                  Program dapat disesuaikan dengan kebutuhan individual dan gaya belajar setiap siswa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
