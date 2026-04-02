import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-[#FFF] min-h-screen relative overflow-hidden font-poppins">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative w-full z-10 pt-4">
          <HeroSlider />
        </section>

        {/* ── A SAFE PLACE TO LEARN ─────────────────────────────────────────── */}
        <section className="relative w-full py-24 flex flex-col items-center text-center mt-12 bg-white rounded-[43px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] z-20">
          {/* Decorative Leaf Blobs */}
          <img src="/ElitePng121.png" className="absolute -left-10 top-0 w-[317px] h-[276px] max-w-none opacity-90 hidden md:block" alt="Leaf Decoration 1" />
          <img src="/ElitePng129.png" className="absolute right-10 top-10 w-[87px] h-[76px] max-w-none hidden md:block" alt="Leaf Decoration 2" />

          
          <div className="max-w-2xl relative z-10 space-y-6">
            <h2 className="text-[#293C88] text-3xl font-bold">
              A Safe Place to Learn, Grow, and Shine
            </h2>
            <div className="w-full h-0.5 bg-[#FED700] mx-auto rounded-full"></div>
            <p className="text-[#293C88] text-lg font-medium leading-relaxed px-4">
              We provide a supportive and inspiring environment<br className="hidden md:block"/> where every child feels valued, confident, and ready to succeed
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
            <div className="group relative w-full h-[469px] overflow-hidden">
              <img src="/Rectangle123.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Elite Academia" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-white">
                <h3 className="text-[32px] font-semibold mb-4 leading-tight">Elite Academia</h3>
                <hr className="w-full border-white/50 mb-4" />
                <a href="#" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* IPDC */}
            <div className="group relative w-full h-[469px] overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img src="/Rectangle123(1).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-center" alt="IPDC" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-white">
                <h3 className="text-[32px] font-semibold mb-4 leading-tight">IPDC</h3>
                <hr className="w-full border-white/50 mb-4" />
                <a href="#" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* English Course */}
            <div className="group relative w-full h-[469px] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/20">
              <img src="/Rectangle123(2).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="English Course" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-white">
                <h3 className="text-[32px] font-semibold mb-4 leading-tight">English Course</h3>
                <hr className="w-full border-white/50 mb-4" />
                <a href="#" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Playteracy */}
            <div className="group relative w-full h-[469px] overflow-hidden border-t md:border-t-0 md:border-l lg:border-t-0 border-white/20">
              <img src="/Rectangle123(3).png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Playteracy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-white">
                <h3 className="text-[32px] font-semibold mb-4 leading-tight">Playteracy</h3>
                <hr className="w-full border-white/50 mb-4" />
                <a href="#" className="flex items-center gap-3 text-base hover:text-[#FFF4BA] transition-colors">
                  Pelajari Selengkapnya
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                    <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* ── WHY CHOOSE US SECTION ────────────────────────────────────── */}
      <section className="relative w-full bg-[#FFF4BA] mt-32 overflow-hidden py-24">
        {/* Background Decorative Blob */}
        <img src="/ElitePng124.png" className="absolute right-[5%] top-[10%] w-[136px] h-[118px] opacity-70 hidden md:block" alt="Decoration" />
        <img src="/ElitePng123.png" className="absolute right-[10%] bottom-[10%] w-[115px] h-[100px] z-10 hidden md:block" alt="Decoration" />
        <img src="/ElitePng128.png" className="absolute left-[5%] top-[80%] w-[194px] h-[169px] z-10 hidden md:block" alt="Decoration" />

        <div className="max-w-screen-xl mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col space-y-4 pt-10 lg:pt-0">
              <p className="text-[#293C88] text-xl font-semibold tracking-wide">
                Keunggulan Kami
              </p>
              <h2 className="text-[#293C88] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight uppercase font-poppins">
                <span className="block mb-2 md:text-6xl lg:text-7xl">why Choose</span>
                <span className="block font-semibold pb-1">edelweiss</span>
                <span className="block text-[#4357B6]">Learning Center</span>
              </h2>
              <p className="text-[#868686] text-sm md:text-base max-w-md pt-4 leading-relaxed font-medium">
                Kami berkomitmen menghadirkan lingkungan belajar yang inspiratif, aman, dan berstandar tinggi — karena setiap anak berhak tumbuh menjadi yang terbaik.
              </p>
            </div>

            {/* Right Photos (Mobile friendly, overlapping on md) */}
            <div className="relative h-auto md:h-[650px] w-full flex flex-col md:block items-center justify-center lg:justify-end mt-4 md:mt-0 pb-8 md:pb-0">
              {/* Photo 1: Higher / Left */}
              <div className="md:absolute top-0 right-[40%] md:right-1/2 z-10 hover:z-30 transition-all duration-300">
                <img src="/Rectangle76.png" className="w-[85%] max-w-[280px] md:max-w-none md:w-[229px] h-[340px] md:h-[462px] object-cover shadow-2xl rounded-lg mx-auto md:mx-0" alt="Student learning" />
              </div>
              
              {/* Photo 2: Lower / Right */}
              <div className="md:absolute top-24 right-0 md:right-12 z-20 hover:z-30 transition-all duration-300 -mt-20 md:mt-0">
                <img src="/Rectangle75.png" className="w-[85%] max-w-[280px] md:max-w-none md:w-[229px] h-[340px] md:h-[462px] object-cover shadow-2xl rounded-lg border-[6px] border-[#FFF4BA] mx-auto md:mx-0 md:border-[6px]" alt="Student happy" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN CARDS ─────────────────────────────────────────── */}
      <section className="relative w-full py-20 bg-[#FFF] z-30 lg:-mt-20 overflow-hidden">
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
                  <h3 className="text-[#293C88] text-xl md:text-2xl font-bold mb-3">Pengajar Profesional</h3>
                  <p className="text-[#868686] text-sm leading-relaxed">
                    Didukung oleh tim pengajar yang berdedikasi tinggi, kompeten, dan memahami psikologi perkembangan anak
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
          
          <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-10 mb-12">
            <img src="/Image2.png" className="h-[50px] md:h-[66px] w-auto object-contain" alt="Partner" />
            <img src="/Image1.png" className="h-[36px] md:h-[46px] w-auto object-contain" alt="Partner" />
            <img src="/Image3.png" className="h-[55px] md:h-[74px] w-auto object-contain" alt="Partner" />
            <img src="/BkHorizontal14.png" className="h-[40px] md:h-[48px] w-auto object-contain" alt="BK Horizontal" />
            <img src="/ElitePng142.png" className="h-[75px] md:h-[95px] w-auto object-contain" alt="Elite" />
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-14">
            <img src="/ElitePng112.png" className="h-[45px] md:h-[59px] w-auto object-contain" alt="Partner" />
            <img src="/EdelweissHorizontalBiru1.png" className="h-[45px] md:h-[59px] w-auto object-contain" alt="Edelweiss Logo" />
          </div>
          
        </div>
      </section>

    </div>
  );
}
