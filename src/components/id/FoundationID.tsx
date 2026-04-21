export default function FoundationID() {
  return (
    <div className="bg-white min-h-screen relative w-full">

      <div className="relative w-full">
        {/* Breadcrumb */}
        <p className="text-[#FED700] font-poppins text-sm pt-8 md:pt-[177px] px-4 md:pl-[139px] mb-8 md:mb-12">
          Homepage <span className="text-[#868686]">|</span> About Us <span className="text-[#868686]">|</span> foundation
        </p>

        {/* Gray background box with content */}
        <div className="rounded-[15px] bg-[rgba(244,244,244,0.83)] mx-auto w-[90%] h-auto p-8 md:p-12 mb-20 relative">
          {/* Main title */}
          <p className="text-[#293C88] font-poppins text-[28px] md:text-[34px] font-bold text-center mx-auto mb-6 md:mb-8">
            Yayasan Sinar Putih Edelweiss
          </p>

          {/* Description */}
          <p className="text-[#868686] font-poppins text-sm md:text-base mx-auto text-center max-w-[692px] leading-relaxed">
            Yayasan Sinar Putih Edelweiss didirikan pada tanggal 29 Maret 2005, dengan tujuan untuk menyelenggarakan layanan 
            pendidikan berkualitas bagi masyarakat melalui berbagai program yang berorientasi pada pengembangan potensi 
            individu secara menyeluruh. Yayasan Sinar Putih Edelweiss berkomitmen untuk menumbuhkembangkan generasi yang cerdas, 
            berkarakter, berjiwa nasionalis, dan memiliki wawasan global.
          </p>
        </div>

        {/* Decorative Image Top Right */}
        <img
          src="/ElitePng129.png"
          className="hidden lg:block w-[123px] h-[107px] absolute right-[200px] top-[320px] object-contain max-w-none"
          alt="Decorative element"
        />

        {/* Section Title and Subtitle */}
        <div className="max-w-screen-xl mx-auto px-6 mb-12">
          <p className="text-[#293C88] font-poppins text-[28px] md:text-[32px] font-bold mb-4">
            Yayasan Sinar Putih Edelweiss
          </p>
          <p className="text-[#293C88] font-poppins text-sm md:text-base">
            Dalam upaya mewujudkan tujuan tersebut, yayasan ini menyediakan layanan Pendidikan formal dan non formal: 
          </p>
        </div>

        {/* Two Service Cards Grid */}
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Edelweiss School Card */}
          <div className="rounded-[44px] bg-[rgba(244,244,244,0.83)] p-8 md:p-12 overflow-hidden">
            <p className="text-[#293C88] font-poppins text-[22px] md:text-[26px] font-bold mb-4">
              Edelweiss School
            </p>
            <div className="bg-[#FED700] w-full max-w-[227px] h-1 mb-6" />
            <p className="text-[#868686] font-poppins text-sm md:text-base leading-relaxed max-w-[437px]">
              Penyelenggara pendidikan formal yang berfokus 
              pada pembelajaran holistik melalui jenjang KB, TK, SD, dan SMP.
            </p>
          </div>

          {/* Edelweiss Learning Center Card */}
          <div className="rounded-[44px] bg-[rgba(244,244,244,0.83)] p-8 md:p-12 overflow-hidden">
            <p className="text-[#293C88] font-poppins text-[22px] md:text-[26px] font-bold mb-4">
              Edelweiss Learning Center
            </p>
            <div className="bg-[#FED700] w-full max-w-[355px] h-1 mb-6" />
            <p className="text-[#868686] font-poppins text-sm md:text-base leading-relaxed max-w-[437px]">
              Penyelenggara Pendidikan non formal yang menaungi beberapa program seperti Elite Academia Homeschooling, 
              Playteracy, English Course, dan Teacher Development Program.
            </p>
          </div>
        </div>

        {/* Decorative Bottom Images */}
        <div className="relative h-40 flex justify-between px-6 mb-20">
          <img
            src="/ElitePng1210.png"
            className="hidden lg:block w-[184px] h-40 object-contain max-w-none"
            alt="Decorative left element"
          />
          <img
            src="/ElitePng1211.png"
            className="hidden lg:block w-[163px] h-[142px] object-contain max-w-none"
            alt="Decorative right element"
          />
        </div>
      </div>
    </div>
  );
}
