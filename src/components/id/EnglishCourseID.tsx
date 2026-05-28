export default function EnglishCourseID() {
  return (
    <div className="bg-white min-h-screen w-full font-poppins">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-20 overflow-hidden">
        {/* Decorative shape bottom right */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#293C88] opacity-5 rounded-full blur-3xl" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-10">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> English Course
          </p>

          {/* White Container for Title Only */}
          <div className="inline-flex items-center gap-2 bg-[#293C88] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FED700] inline-block" />
            <p className="text-white font-poppins text-xs font-semibold text-center">
              English Course
            </p>
          </div>

          {/* Main Title Section */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#293C88] leading-tight mb-6">
              Achieve English Excellence
            </h1>
            <div className="w-24 h-1.5 bg-[#293C88] rounded-full mb-8" />
            <p className="text-[#1a1a1a] font-poppins text-base md:text-lg font-medium leading-relaxed">
              Program kursus bahasa inggris di Edelweiss Learning Center yang sudah berdiri sejak 2005 dan menjadi salah satu program
              unggulan dalam pengajaran bahasa inggris bagi anak dan remaja usia 7–17 tahun. Program ini menggunakan standar Common European
              Framework of Reference (CEFR) melalui kurikulum Pearson Edexcel. Program ini dirancang untuk membantu siswa menguasai kemampuan bahasa inggris secara
              komprehensif dengan pendekatan yang menyenangkan, komunikatif, dan sesuai kebutuhan setiap jenjang usia.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Why Choose English Course */}
      <div className="w-full py-20 relative overflow-hidden bg-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF4BA] rounded-full opacity-40 blur-3xl -z-0" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left side: Title and description */}
            <div>
              <p className="text-[#293C88] font-poppins text-sm font-semibold uppercase tracking-widest mb-4">
                Keunggulan Kami
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-6 leading-snug">
                Why Choose<br />English Course
              </h2>
              <div className="w-16 h-1 bg-[#FED700] rounded-full mb-6" />

              <p className="text-[#444] font-poppins text-base leading-relaxed">
                English Course menghadirkan pembelajaran bahasa Inggris yang terarah dan personal, mendukung perkembangan kemampuan serta kepercayaan diri siswa
              </p>
            </div>

            {/* Right side: Image */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <img src="/ec.png" alt="English Course" className="w-full max-w-md h-auto object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* 4 Feature Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Berstandar Internasional
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Menggunakan acuan CEFR dan kurikulum Pearson Edexcel yang diakui secara global.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Fokus pada Penggunaan Bahasa Sehari-hari
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Materi dan kegiatan belajar disusun agar siswa mampu menggunakan Bahasa Inggris secara alami dalam konteks kehidupan nyata.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Tenaga Pengajar Profesional
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Guru-guru berpengalaman menerapkan metode pembelajaran yang interaktif dan partisipatif, sehingga siswa aktif berkomunikasi dan berani menggunakan Bahasa Inggris dalam setiap sesi.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Belajar dengan Cara yang Menyenangkan
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Pembelajaran diintegrasikan dengan permainan, lagu, diskusi, proyek, dan teknologi agar kegiatan belajar menjadi lebih bermakna, interaktif, dan menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Level Program */}
      <div className="w-full py-20 bg-[#F8F8F8] relative overflow-hidden">
        {/* Decorative shape bottom left */}
        <div className="absolute left-0 -bottom-10 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-70 blur-3xl" />
        {/* Decorative shape top left */}
        <div className="absolute left-20 top-20 w-72 h-72 bg-[#293C88] rounded-full opacity-5 blur-3xl" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] text-center mb-4">
            Level Program
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-16 mx-auto" />

          {/* 4 Level Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pre-Elementary (Classic Basic) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Classic Basic
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Pre-Elementary
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Pengenalan dasar Bahasa Inggris, fokus pada kosakata umum, ekspresi sederhana, dan kepercayaan diri dalam berbicara."
              </p>
            </div>

            {/* Elementary (Grade 1-6) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 1-6
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Elementary
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Penguatan kemampuan mendengar, berbicara, membaca, dan menulis melalui aktivitas komunikatif yang kontekstual dan menarik. "
              </p>
            </div>

            {/* Intermediate (Grade 7-9) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 7-9
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Intermediate
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Pengembangan kemampuan berbahasa pada tingkat menengah, termasuk menulis paragraf, memahami teks naratif, serta mengungkapkan pendapat dengan lebih terstruktur."
              </p>
            </div>

            {/* Advanced (Grade 1-6) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 10-12
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Advanced
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Peningkatan kemampuan akademik dan komunikasi kompleks, seperti debat, presentasi, serta penulisan teks formal dan esai untuk persiapan studi lanjutan."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative image bottom left */}
        <div className="absolute left-0 bottom-0 w-24 h-24 -z-10">
          <img
            src="/ElitePng1218.png"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* BOTTOM CTA BANNER */}
      <div className="w-full bg-[#293C88] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FED700] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <p className="text-[#FED700] font-semibold text-sm uppercase tracking-widest mb-2">Wujudkan Mimpimu Bersama Kami</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Siap Melangkah ke Sekolah<br className="hidden md:block" /> Impianmu?
            </h2>
          </div>
          <a
            href="/kontak"
            className="shrink-0 bg-[#FED700] text-[#293C88] font-bold text-base px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

    </div>
  );
}
