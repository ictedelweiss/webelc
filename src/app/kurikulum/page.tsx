'use client';

import Link from "next/link";

export default function Kurikulum() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-8">
            Homepage <span className="text-[#868686]">|</span> Kurikulum
          </p>

          {/* White Container for Title - Rounded pill shape */}
          <div className="w-80 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
            <p className="text-[#293C88] font-poppins text-2xl font-bold text-center">
              Kurikulum Kami
            </p>
          </div>

          {/* Main Title and Description Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
              Curriculum &amp; Metode Belajar
            </h1>
            <p className="text-[#000] font-poppins text-sm md:text-base font-medium leading-relaxed">
              Program pengembangan kurikulum yang mengintegrasikan standar internasional dengan nilai-nilai lokal, menciptakan pengalaman belajar yang holistik dan relevan.
            </p>
          </div>
        </div>

        {/* Decorative image */}
        <img
          src="/ElitePng1215.png"
          className="w-40 h-32 absolute right-20 top-16 max-w-none hidden md:block"
          alt="Decoration"
        />
      </div>

      {/* SECTION 2: Curriculum Menu */}
      <div className="w-full py-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Elits Curriculum Menu Items */}
          <div className="space-y-4">
            {/* Elits Curriculum - Active */}
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg border-l-[5px] border-l-[#293C88]">
              <p className="text-[#000] font-poppins text-2xl font-semibold">
                Elits Curriculum
              </p>
            </div>

            {/* International Curriculum */}
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg border-l-[5px] border-l-[#293C88]">
              <p className="text-[#000] font-poppins text-2xl font-semibold">
                International Curriculum
              </p>
            </div>

            {/* National Curriculum */}
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg border-l-[5px] border-l-[#293C88]">
              <p className="text-[#000] font-poppins text-2xl font-semibold">
                National Curriculum
              </p>
            </div>

            {/* Letterland */}
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-lg border-l-[5px] border-l-[#293C88]">
              <p className="text-[#000] font-poppins text-2xl font-semibold">
                Letterland
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ELITS Curriculum Feature Section */}
      <div className="w-full py-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="/LogoElits1.png"
                className="max-w-full h-auto rounded-[20px] shadow-lg"
                alt="ELITS Curriculum Logo"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="border-l-8 border-l-[#FED700] pl-6">
                <p className="text-[#293C88] font-poppins text-base font-semibold mb-2">
                  Integrasi Kurikulum
                </p>
                <h2 className="text-[40px] font-bold text-[#293C88]">
                  ELITS Curriculum
                </h2>
              </div>

              <p className="text-[#000] font-poppins text-base leading-relaxed">
                ELITS Curriculum merupakan integrasi antara kurikulum internasional dan kurikulum nasional. Pendekatan ini dirancang untuk memberikan pengalaman belajar yang seimbang antara standar akademik global dan penguatan karakter serta wawasan kebangsaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Curriculum Comparison */}
      <div className="w-full py-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* National Curriculum */}
            <div className="space-y-6">
              <div className="rounded-[60px] bg-[#293C88] w-fit px-8 py-3">
                <p className="text-[#FFF] font-poppins text-xl font-bold">
                  National Curriculum
                </p>
              </div>

              <div className="bg-[#FFF4BA] rounded-lg p-8 min-h-[220px]">
                <p className="text-[#000] font-poppins text-base leading-relaxed">
                  Kurikulum Nasional dengan pendekatan Deep Learning yang menekankan pemahaman mendalam, keterkaitan konsep, dan penerapan nyata
                </p>
              </div>
            </div>

            {/* International Curriculum */}
            <div className="space-y-6">
              <div className="rounded-[60px] bg-[#293C88] w-fit px-8 py-3 ml-auto md:ml-0">
                <p className="text-[#FFF] font-poppins text-xl font-bold">
                  International Curriculum
                </p>
              </div>

              <div className="bg-[#FFF4BA] rounded-lg p-8 min-h-[220px]">
                <p className="text-[#293C88] font-poppins text-base font-bold leading-relaxed text-right md:text-left">
                  Menggunakan kurikulum Pearson Edexcel yaitu kurikulum internasional berbasis standar Inggris yang menekankan pada penguasaan konsep, kemampuan berpikir kritis, analitis, serta keterampilan pemecahan masalah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Letterland Feature */}
      <div className="w-full py-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex justify-center">
              <div className="rounded-[60px] bg-[#293C88] px-8 py-3">
                <p className="text-[#FFF] font-poppins text-xl font-bold">
                  Letterland
                </p>
              </div>
            </div>

            <div className="bg-[#FFF4BA] rounded-lg p-8">
              <p className="text-[#000] font-poppins text-base text-center leading-relaxed">
                Letterland adalah metode pembelajaran phonics dari Inggris yang mengenalkan huruf dan bunyi melalui karakter visual dan cerita, membuat anak mudah memahami hubungan huruf suara secara menyenangkan
              </p>
            </div>

            {/* Logo Section */}
            <div className="flex justify-center gap-8 py-8">
              <img
                src="/Image2.png"
                className="h-20 object-contain"
                alt="Brand Logo 1"
              />
              <img
                src="/Image1.png"
                className="h-20 object-contain"
                alt="Brand Logo 2"
              />
              <img
                src="/Image3.png"
                className="h-20 object-contain"
                alt="Brand Logo 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Side Gallery */}
      <div className="w-full py-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <img
              src="/Rectangle108.png"
              className="w-52 h-auto rounded-[15px] shadow-lg"
              alt="Curriculum Gallery 1"
            />
            <img
              src="/Rectangle109.png"
              className="w-52 h-auto rounded-[15px] shadow-lg"
              alt="Curriculum Gallery 2"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
