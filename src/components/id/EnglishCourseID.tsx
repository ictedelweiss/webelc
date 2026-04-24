export default function EnglishCourseID() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] pt-[120px] pb-[80px] overflow-hidden">
        {/* Decorative shape bottom right */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#293C88] rounded-full opacity-5 -z-10" />

        <div className="max-w-screen-xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-16">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> English Course
          </p>

          {/* White Container for Title Only */}
          <div className="w-[298px] h-[75px] rounded-[68px] bg-white shadow-lg flex items-center justify-center mx-auto mb-12">
            <p className="text-[#293C88] font-poppins text-2xl font-bold text-center">
              English Course
            </p>
          </div>

          {/* Main Title Section */}
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="text-[40px] font-bold text-[#293C88] mb-6">
              Achieve English Excellence
            </h1>
            <p className="text-[#000] font-poppins text-base font-medium leading-relaxed">
              Program kursus bahasa inggris di Edelweiss Learning Center yang sudah berdiri sejak 2005 dan menjadi salah satu program
              unggulan dalam pengajaran bahasa inggris bagi anak dan remaja usia 7–17 tahun. Program ini menggunakan standar Common European
              Framework of Reference (CEFR) melalui kurikulum Pearson Edexcel. Program ini dirancang untuk membantu siswa menguasai kemampuan bahasa inggris secara
              komprehensif dengan pendekatan yang menyenangkan, komunikatif, dan sesuai kebutuhan setiap jenjang usia.
            </p>
          </div>
        </div>

        {/* Decorative icon top right - hidden on mobile */}
        <div className="hidden md:flex absolute right-20 top-32 w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="#293C88" />
          </svg>
        </div>
      </div>

      {/* SECTION 2: Why Choose English Course */}
      <div className="w-full py-20 relative overflow-hidden bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left side: Title and description */}
            <div>
              <p className="text-[#293C88] font-poppins text-base font-semibold mb-4">
                Keunggulan Kami
              </p>
              <h2 className="text-[40px] font-bold text-[#293C88] mb-8 leading-tight">
                Why Choose<br />English Course
              </h2>

              <p className="text-[#000] font-poppins text-base leading-relaxed">
                English Course menghadirkan pembelajaran bahasa Inggris yang terarah dan personal, mendukung perkembangan kemampuan serta kepercayaan diri siswa
              </p>
            </div>

            {/* Right side: Decorative shape - hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#5B7FB8] to-[#293C88] rounded-full opacity-80 absolute right-12"></div>
            </div>
          </div>

          {/* 4 Feature Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 min-h-[180px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Berstandar Internasional
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                Menggunakan acuan CEFR dan kurikulum Pearson Edexcel yang diakui secara global.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 min-h-[180px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Fokus pada Penggunaan Bahasa Sehari-hari
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                Materi dan kegiatan belajar disusun agar siswa mampu menggunakan Bahasa Inggris secara alami dalam konteks kehidupan nyata.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 min-h-[180px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Tenaga Pengajar Profesional
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                Guru-guru berpengalaman menerapkan metode pembelajaran yang interaktif dan partisipatif, sehingga siswa aktif berkomunikasi dan berani menggunakan Bahasa Inggris dalam setiap sesi.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 min-h-[180px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Belajar dengan Cara yang Menyenangkan
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                Pembelajaran diintegrasikan dengan permainan, lagu, diskusi, proyek, dan teknologi agar kegiatan belajar menjadi lebih bermakna, interaktif, dan menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Level Program */}
      <div className="w-full py-20 bg-[#FFF4BA] relative overflow-hidden">
        {/* Decorative shape bottom left */}
        <div className="absolute left-0 -bottom-10 w-40 h-40 bg-[#293C88] rounded-full opacity-10 -z-10" />
        {/* Decorative shape top left */}
        <div className="absolute left-20 top-20 w-32 h-32 bg-[#293C88] rounded-full opacity-5 -z-10" />

        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] text-center mb-20">
            Level Program
          </h2>

          {/* 4 Level Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pre-Elementary (Classic Basic) */}
            <div className="bg-[#F5F5F5] rounded-[14px] p-8 min-h-[300px] flex flex-col items-center text-center">
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
            <div className="bg-[#F5F5F5] rounded-[14px] p-8 min-h-[300px] flex flex-col items-center text-center">
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
            <div className="bg-[#F5F5F5] rounded-[14px] p-8 min-h-[300px] flex flex-col items-center text-center">
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
            <div className="bg-[#F5F5F5] rounded-[14px] p-8 min-h-[300px] flex flex-col items-center text-center">
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

    </div>
  );
}
