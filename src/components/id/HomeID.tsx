import HeroSlider from "@/components/HeroSlider";
import type { Metadata } from "next";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Edelweiss Learning Center",
  "url": "https://www.edelweisslearningcenter.com",
  "logo": "https://www.edelweisslearningcenter.com/ElitePng112.png",
  "description": "Lembaga pendidikan berkualitas bersertifikasi ISO 21001 di Bekasi dengan program Elite Academia, English Course, Playteracy, dan IPDC sejak 2005.",
  "foundingDate": "2005",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Ratna Jatibening, Jatibening Estate",
    "addressLocality": "Pondok Gede",
    "addressRegion": "Jawa Barat",
    "postalCode": "17142",
    "addressCountry": "ID"
  },
  "telephone": "+628118817757",
  "email": "cs@edelweiss.sch.id",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Program Pendidikan",
    "itemListElement": [
      { "@type": "Course", "name": "Elite Academia", "url": "https://www.edelweisslearningcenter.com/program/elite-academia" },
      { "@type": "Course", "name": "English Course", "url": "https://www.edelweisslearningcenter.com/program/english-course" },
      { "@type": "Course", "name": "Playteracy", "url": "https://www.edelweisslearningcenter.com/program/playteracy" },
      { "@type": "Course", "name": "IPDC", "url": "https://www.edelweisslearningcenter.com/program/ipdc" }
    ]
  }
};

export default function HomeID() {
  return (
    <div className="bg-[#FFF] min-h-screen relative overflow-hidden font-poppins">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative w-full z-10 pt-4">
          <HeroSlider />
        </section>

        {/* ── A SAFE PLACE TO LEARN ─────────────────────────────────────────── */}
        <section className="relative w-full py-12 md:py-24 flex flex-col items-center text-center mt-6 md:mt-12 bg-white rounded-[43px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] z-20">
          {/* Decorative Leaf Blobs */}
          <img src="/ElitePng121.png" className="absolute -left-10 top-0 w-[317px] h-[276px] max-w-none opacity-90 hidden md:block" alt="Leaf Decoration 1" />
          <img src="/ElitePng129.png" className="absolute right-10 top-10 w-[87px] h-[76px] max-w-none hidden md:block" alt="Leaf Decoration 2" />


          <div className="max-w-2xl relative z-10 space-y-6">
            <h1 className="text-[#293C88] text-2xl md:text-3xl font-bold">
              A Safe Place to Learn, Grow, and Shine
            </h1>
            <div className="w-full h-0.5 bg-[#FED700] mx-auto rounded-full"></div>
            <p className="text-[#293C88] text-lg font-medium leading-relaxed px-4">
              We provide a supportive and inspiring environment<br className="hidden md:block" /> where every child feels valued, confident, and ready to succeed
            </p>
          </div>

          <img src="/ElitePng122.png" className="absolute right-0 -bottom-20 w-[316px] h-[275px] max-w-none opacity-90 hidden lg:block" alt="Leaf Decoration 4" />
        </section>

        {/* ── PROGRAM UNGGULAN SECTION ─────────────────────────────────── */}
        <section className="relative w-full pt-16 pb-24 flex flex-col items-center z-20">
          <h2 className="text-[#293C88] text-3xl font-bold text-center mb-10">
            Program Unggulan Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full max-w-screen-xl rounded-3xl lg:rounded-[69px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white overflow-hidden">

            {/* Elite Academia */}
            <div className="group relative w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[520px] overflow-hidden">
              <img src="/Rectangle123.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Elite Academia" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-start text-white">
                <h3 className="text-xl md:text-[25px] font-semibold mb-2 md:mb-4 leading-tight">Elite Academia Homeschooling</h3>
                <hr className="w-full border-white/50 mb-3" />
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">Program homeschooling yang fleksibel dan memberikan pengalaman belajar personal sesuai kebutuhan dan tujuan setiap individu.</p>
                <a href="/program/elite-academia" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* IPDC */}
            <div className="group relative w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[520px] overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img src="/Rectangle123(1).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-center" alt="IPDC" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-start text-white">
                <h3 className="text-xl md:text-[25px] font-semibold mb-2 md:mb-4 leading-tight">Indonesia Pedagogics Development Center</h3>
                <hr className="w-full border-white/50 mb-3" />
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">Program pengembangan profesional bagi guru untuk memperkuat strategi mengajar inovatif dan kemampuan kepemimpinan.</p>
                <a href="/program/ipdc" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Playteracy */}
            <div className="group relative w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[520px] overflow-hidden border-t md:border-t-0 md:border-l lg:border-t-0 border-white/20">
              <img src="/Rectangle123(3).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Playteracy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-start text-white">
                <h3 className="text-xl md:text-[25px] font-semibold mb-2 md:mb-4 leading-tight">Playteracy</h3>
                <hr className="w-full border-white/50 mb-3" />
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">Program literasi Bahasa Inggris berbasis metode Letterland Phonics yang membantu anak-anak mengembangkan kemampuan membaca dan menulis secara menyenangkan.</p>
                <a href="/program/playteracy" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* English Course */}
            <div className="group relative w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[520px] overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img src="/Rectangle123(2).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="English Course" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex flex-col items-start text-white">
                <h3 className="text-xl md:text-[25px] font-semibold mb-2 md:mb-4 leading-tight">English Course</h3>
                <hr className="w-full border-white/50 mb-3" />
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4">Program Bahasa Inggris komunikatif dan interaktif yang menekankan penguasaan keempat keterampilan berbahasa.</p>
                <a href="/program/english-course" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US SECTION ────────────────────────────────────── */}
        <section className="relative w-full bg-[#FFF4BA] mt-12 md:mt-32 overflow-hidden py-12 md:py-24">
          {/* Background Decorative Blob */}
          <img src="/ElitePng124.png" className="absolute right-[5%] top-[10%] w-[136px] h-[118px] opacity-70 hidden md:block" alt="Decoration" />
          <img src="/ElitePng123.png" className="absolute right-[10%] bottom-[10%] w-[115px] h-[100px] z-10 hidden md:block" alt="Decoration" />
          <img src="/ElitePng128.png" className="absolute left-[5%] top-[80%] w-[194px] h-[169px] z-10 hidden md:block" alt="Decoration" />

          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <div className="flex flex-col space-y-6 pt-10 lg:pt-0">
                <p className="text-[#293C88] text-base font-semibold">
                  Keunggulan Kami
                </p>
                <h3 className="text-[#293C88] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Why Choose Edelweiss Learning Center
                </h3>
                <p className="text-[#6B6B6B] text-sm md:text-base max-w-lg leading-relaxed">
                  Di Edelweiss Learning Center, kami percaya bahwa setiap peserta didik berhak mendapatkan pendidikan
                  yang mengembangkan kemampuan intelektual sekaligus membentuk karakter. Program kami dirancang untuk
                  menumbuhkan rasa ingin tahu, kreativitas,
                  dan semangat belajar sepanjang hayat melalui pendekatan yang personal dan penuh dukungan.
                </p>
              </div>

              {/* Right Photos - offset layout */}
              <div className="relative w-full flex items-start justify-center gap-4 md:gap-6 mt-8 lg:mt-0">
                {/* Photo 1: Left - taller, top-aligned */}
                <div className="flex-shrink-0 flex items-start">
                  <img src="/Rectangle76.png" className="w-[140px] sm:w-[180px] md:w-[240px] h-[280px] sm:h-[360px] md:h-[480px] object-cover shadow-xl rounded-2xl" alt="Student learning" />
                </div>

                {/* Photo 2: Right - shorter, positioned lower with white frame */}

                <div>
                  <img src="/Rectangle75.png" className="w-[130px] sm:w-[170px] md:w-[240px] h-[240px] sm:h-[290px] md:h-[380px] object-cover rounded-lg" alt="Student happy" />
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── KEUNGGULAN CARDS ─────────────────────────────────────────── */}
        <section className="relative w-full py-12 md:py-20 bg-[#FFF] z-30 lg:-mt-20 overflow-hidden">
          <div className="w-full relative">

            <div className="animate-marquee hover:[animation-play-state:paused]">

              {/* --- FIRST SET --- */}
              <div className="flex gap-6 pr-6">
                {/* Pengajar Profesional */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng162.png" className="w-[60px] md:w-[87px] h-auto object-contain drop-shadow-sm" alt="Pengajar Profesional" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Pengajar Profesional</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Didukung oleh tim pengajar yang berdedikasi tinggi, kompeten, dan memahami psikologi perkembangan anak
                    </p>
                  </div>
                </div>

                {/* Program Belajar yang Beragam */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng162.png" className="w-[60px] md:w-[87px] h-auto object-contain drop-shadow-sm" alt="Pengajar Profesional" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Program Belajar yang Beragam</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Kami menawarkan berbagai jalur pendidikan yang dapat diikuti oleh peserta didik.
                    </p>
                  </div>
                </div>

                {/* Rasio Siswa yang Ideal */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng162.png" className="w-[60px] md:w-[87px] h-auto object-contain drop-shadow-sm" alt="Pengajar Profesional" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Rasio Siswa yang Ideal</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Rasio siswa ideal demi memastikan proses pembelajaran yang personal dan efektif bagi setiap siswa.
                    </p>
                  </div>
                </div>

                {/* Fasilitas Moderen */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng162.png" className="w-[60px] md:w-[87px] h-auto object-contain drop-shadow-sm" alt="Pengajar Profesional" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Fasilitas Moderen</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Fasilitas modern yang dirancang untuk mendukung proses belajar yang nyaman, modern dan efektif.
                    </p>
                  </div>
                </div>

                {/* Bersertifikasi ISO 21001 */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng161.png" className="w-[60px] md:w-[92px] h-auto object-contain drop-shadow-sm" alt="ISO 21001" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Bersertifikasi ISO 21001</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Sistem manajemen pendidikan berstandar internasional yang menjamin kualitas, konsistensi, dan kepuasan layanan
                    </p>
                  </div>
                </div>

                {/* Kurikulum Fleksibel */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng163.png" className="w-[60px] md:w-[100px] h-auto object-contain drop-shadow-sm" alt="Kurikulum Fleksibel" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-[26px] leading-tight font-bold mb-3">Kurikulum Fleksibel & Personal</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Metode pembelajaran yang disesuaikan dengan kebutuhan setiap siswa untuk memaksimalkan potensi mereka
                    </p>
                  </div>
                </div>
              </div>

              {/* --- SECOND SET (Duplicate for seamless loop) --- */}
              <div className="flex gap-6 pr-6" aria-hidden="true">
                {/* Pengajar Profesional */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng162.png" className="w-[60px] md:w-[87px] h-auto object-contain drop-shadow-sm" alt="Pengajar Profesional" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Pembelajaran yang Menyenangkan</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      menciptakan pengalaman belajar yang menyenangkan dan berkesan, sehingga siswa tidak hanya memahami konsep, tetapi juga menikmati proses belajar itu sendiri.
                    </p>
                  </div>
                </div>

                {/* Bersertifikasi ISO 21001 */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng161.png" className="w-[60px] md:w-[92px] h-auto object-contain drop-shadow-sm" alt="ISO 21001" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Bersertifikasi ISO 21001</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Sistem manajemen pendidikan berstandar internasional yang menjamin kualitas, konsistensi, dan kepuasan layanan
                    </p>
                  </div>
                </div>

                {/* Kurikulum Fleksibel */}
                <div className="bg-[#F6F6F6] rounded-[24px] p-6 lg:p-8 flex flex-row items-start gap-6 w-[350px] md:w-[450px] lg:w-[500px] shrink-0 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="shrink-0 mt-1">
                    <img src="/ElitePng163.png" className="w-[60px] md:w-[100px] h-auto object-contain drop-shadow-sm" alt="Kurikulum Fleksibel" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[#293C88] text-xl md:text-[26px] leading-tight font-bold mb-3">Kurikulum Fleksibel & Personal</h3>
                    <p className="text-[#868686] text-sm leading-relaxed">
                      Metode pembelajaran yang disesuaikan dengan kebutuhan setiap siswa untuk memaksimalkan potensi mereka
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PARTNERS LOGOS ────────────────────────────────────────────── */}
        <section className="relative w-full py-16 lg:py-24 my-8">
          <img src="/ElitePng126.png" className="absolute left-[-43px] top-0 w-[136px] h-[118px] opacity-70 hidden lg:block" alt="Leaf Decoration" />

          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex flex-col items-center">

            {/* Baris 1: Kurikulum Nasional, Pearson Edexcel, Letterland */}
            <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-10 mb-12">
              <img src="/Image2.png" className="h-[50px] md:h-[66px] w-auto object-contain" alt="Kurikulum Nasional" />
              <img src="/Image1.png" className="h-[36px] md:h-[46px] w-auto object-contain" alt="Pearson Edexcel" />
              <img src="/Image3.png" className="h-[55px] md:h-[74px] w-auto object-contain" alt="Letterland" />
            </div>

            {/* Baris 2: Elite Academia, IPDC, Edelweiss LC, Edelweiss School */}
            <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-8 md:gap-x-14">
              <img src="/BkHorizontal14.png" className="h-[45px] md:h-[58px] w-auto object-contain" alt="Elite Academia" />
              <img src="/ElitePng142.png" className="h-[50px] md:h-[65px] w-auto object-contain" alt="IPDC" />
              <img src="/ElitePng112.png" className="h-[45px] md:h-[59px] w-auto object-contain" alt="Edelweiss Learning Center" />
              <img src="/EdelweissHorizontalBiru1.png" className="h-[40px] md:h-[50px] w-auto object-contain" alt="Edelweiss School" />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
