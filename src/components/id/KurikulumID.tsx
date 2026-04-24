import Link from "next/link";

export default function KurikulumID() {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* SECTION 1: Hero dengan breadcrumb dan menu */}
      <div className="relative w-full bg-white py-16 overflow-hidden">
        {/* Decoration - top right blue shape */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#293C88] opacity-20 rounded-full hidden lg:block"></div>

        {/* Decoration - bottom left blue shape */}
        <div className="absolute -left-32 bottom-40 w-64 h-64 bg-[#293C88] opacity-30 rounded-full hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-8">
            Homepage <span className="text-[#868686]">|</span> Kurikulum
          </p>

          {/* Main grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {/* Left: Title + Menu */}
            <div className="lg:col-span-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#293C88] mb-8 leading-tight">
                Curriculum &<br />Metode Belajar
              </h1>

              {/* Menu Items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 py-3 px-4 bg-[#F5F5F5] rounded border-l-4 border-l-[#293C88] hover:bg-gray-100 transition cursor-pointer">
                  <p className="text-[#000] font-poppins font-semibold">
                    Elits Curriculum
                  </p>
                </div>
                <div className="flex items-center gap-3 py-3 px-4 bg-[#F5F5F5] rounded border-l-4 border-l-[#293C88] hover:bg-gray-100 transition cursor-pointer">
                  <p className="text-[#000] font-poppins font-semibold">
                    International Curriculum
                  </p>
                </div>
                <div className="flex items-center gap-3 py-3 px-4 bg-[#F5F5F5] rounded border-l-4 border-l-[#293C88] hover:bg-gray-100 transition cursor-pointer">
                  <p className="text-[#000] font-poppins font-semibold">
                    National Curriculum
                  </p>
                </div>
                <div className="flex items-center gap-3 py-3 px-4 bg-[#F5F5F5] rounded border-l-4 border-l-[#293C88] hover:bg-gray-100 transition cursor-pointer">
                  <p className="text-[#000] font-poppins font-semibold">
                    Letterland
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Student Images - hanya tampil di lg+ */}
            <div className="hidden lg:flex lg:col-span-2 justify-end gap-6 items-start">
              <img
                src="/Rectangle108.png"
                className="w-40 lg:w-48 h-64 lg:h-80 rounded-lg shadow-lg object-cover"
                alt="Student 1"
              />
              <img
                src="/Rectangle109.png"
                className="w-40 lg:w-48 h-64 lg:h-80 rounded-lg shadow-lg object-cover"
                alt="Student 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ELITS Curriculum Feature */}
      <div className="w-full py-16 bg-[#F2F4F7] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Single white card wrapping both diagram and text */}
          <div className="relative bg-white rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[280px]">

              {/* Left: ELITS Circular Diagram */}
              <div className="flex justify-center items-center py-10 px-8 lg:px-12">
                <img
                  src="/ELITS FIX.png"
                  className="w-72 lg:w-80 xl:w-[340px] h-auto object-contain"
                  alt="ELITS Curriculum Logo"
                />
              </div>

              {/* Right: Text Content with yellow left border */}
              <div className="relative flex items-center py-10 px-8 lg:px-12 border-l-0 lg:border-l border-gray-100">
                {/* Yellow accent bar - left side of text block */}
                <div className="absolute left-0 top-10 bottom-10 w-[5px] bg-[#FED700] rounded-full hidden lg:block"></div>

                <div className="lg:pl-8">
                  <p className="text-[#FED700] font-poppins text-sm font-bold mb-2 tracking-wide uppercase">
                    Integrasi Kurikulum
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2a6c] mb-5 leading-tight">
                    ELITS CURRICULUM
                  </h2>
                  <p className="text-[#4a4a4a] font-poppins text-[15px] leading-relaxed max-w-[420px]">
                    ELITS Curriculum merupakan integrasi antara kurikulum internasional (Pearson Edexcel) dan kurikulum nasional.
                    Pendekatan ini dirancang untuk memberikan pengalaman belajar yang seimbang antara standar akademik global dan
                    penguatan karakter serta wawasan kebangsaan. Melalui ELITS Curriculum, siswa memperoleh kesempatan untuk mengembangkan
                    kemampuan akademik tingkat internasional sekaligus menumbuhkan identitas dan nilai-nilai kebangsaan yang kuat.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative navy blue leaf shape - bottom right, slightly overflowing */}
            <div
              className="absolute -bottom-10 -right-6 w-24 h-32 bg-[#1a2a6c] hidden md:block"
              style={{
                borderRadius: "60% 40% 70% 30% / 50% 50% 50% 50%",
                transform: "rotate(-20deg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Curriculum Provider Logos */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-16">
            <img
              src="/Image2.png"
              className="h-12 md:h-20 object-contain"
              alt="Kurikulum Nasional"
            />
            <img
              src="/Image1.png"
              className="h-12 md:h-20 object-contain"
              alt="Pearson Edexcel"
            />
            <img
              src="/Image3.png"
              className="h-12 md:h-20 object-contain"
              alt="Letterland"
            />
          </div>
        </div>
      </div>

      {/* SECTION 4: Curriculum Comparison */}
      <div className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top row: 2 boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* National Curriculum Box */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="rounded-full bg-[#293C88] px-6 py-2">
                  <p className="text-white font-poppins font-bold text-sm">
                    National Curriculum
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-8 min-h-[220px] flex items-center">
                <p className="text-[#000] font-poppins text-base leading-relaxed">
                  Kurikulum Nasional menggunakan pendekatan Deep Learning, yaitu pembelajaran yang berfokus pada pemahaman mendalam
                  terhadap konsep, keterkaitan antartopik, dan penerapan pengetahuan dalam situasi nyata.
                  Pendekatan ini mendorong siswa untuk berpikir reflektif, kolaboratif, dan kreatif, serta menumbuhkan karakter.
                </p>
              </div>
            </div>

            {/* International Curriculum Box */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="rounded-full bg-[#293C88] px-6 py-2">
                  <p className="text-white font-poppins font-bold text-sm">
                    International Curriculum
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-8 min-h-[220px] flex items-center">
                <p className="text-[#000] font-poppins text-base leading-relaxed">
                  Pearson Edexcel Curriculum adalah kurikulum internasional berbasis standar Inggris yang menekankan pada penguasaan konsep,
                  kemampuan berpikir kritis, analitis, serta keterampilan pemecahan masalah.
                  Kurikulum ini mendorong siswa untuk memahami konsep secara mendalam dan menerapkannya dalam berbagai konteks kehidupan nyata.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row: Letterland box centered */}
          <div className="flex justify-center">
            <div className="space-y-4 w-full lg:w-2/3">
              <div className="flex justify-center">
                <div className="rounded-full bg-[#293C88] px-6 py-2">
                  <p className="text-white font-poppins font-bold text-sm">
                    Letterland
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-8 min-h-[220px] flex items-center justify-center">
                <p className="text-[#000] font-poppins text-base leading-relaxed text-center">
                  Letterland adalah program phonics dari Inggris yang digunakan dalam pembelajaran literasi bahasa Inggris anak usia dini.
                  Melalui pendekatan visual, imajinatif, dan berbasis cerita, setiap huruf dan bunyi diwakili oleh karakter yang menarik,
                  membantu anak-anak mengenal hubungan antara huruf dan suara dengan cara yang menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
