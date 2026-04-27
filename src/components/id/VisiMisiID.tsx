export default function VisiMisiID() {
  return (
    <div className="bg-[#FFF] min-w-screen min-h-screen">

      {/* Hero Section with yellow accent */}
      <div className="relative pt-[70px]">
        {/* Yellow decorative block on right - hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-[70px] w-[120px] h-[280px] bg-[#FED700]"></div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-8 pt-8">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm">
            <span className="text-[#868686]">Homepage</span>
            <span className="text-[#868686]"> | </span>
            <span className="text-[#868686]">About Us</span>
            <span className="text-[#868686]"> | </span>
            <span className="text-[#FED700] font-medium">Mission And Vision</span>
          </p>

          {/* Title */}
          <h1 className="text-[#293C88] font-poppins text-2xl sm:text-3xl md:text-[42px] font-bold mt-6">
            Mission & Vision
          </h1>

          {/* Subtitle */}
          <p className="text-[#868686] font-poppins text-base max-w-[450px] mt-3 leading-relaxed">
            Menjadi landasan dalam setiap langkah kami untuk menciptakan
            pendidikan berkualitas dan membentuk generasi unggul
          </p>
        </div>
      </div>

      {/* Visi Section */}
      <section className="relative mt-20 pb-16">
        {/* Blue decorative curve on left - hidden on mobile */}
        <div className="absolute left-0 top-0 hidden md:block">
          <img
            src="/ElitePng121.png"
            className="w-[200px] h-[180px] object-contain -ml-8"
            alt=""
          />
        </div>

        <div className="max-w-[800px] mx-auto text-center px-4 md:px-8">
          <h2 className="text-[#293C88] font-poppins text-2xl md:text-[42px] font-bold">
            Visi
          </h2>
          <div className="w-[80px] h-[3px] bg-[#FED700] mx-auto mt-2"></div>

          <p className="text-[#333] font-poppins text-base mt-8 leading-relaxed">
            &ldquo;Menjadi lembaga pendidikan yang berkontribusi dalam mencerdaskan
            bangsa dan melahirkan generasi unggul yang siap berperan dalam
            kehidupannya berlandaskan pada Ketuhanan Yang Maha Esa dan Nilai-Nilai universal  &rdquo;
          </p>
        </div>
      </section>

      {/* Misi Section */}
      <section className="relative py-16">
        {/* Blue decorative shape on right - hidden on mobile */}
        <div className="absolute right-[80px] top-0 hidden md:block">
          <img
            src="/ElitePng127.png"
            className="w-[80px] h-[100px] object-contain"
            alt=""
          />
        </div>

        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-[#293C88] font-poppins text-2xl md:text-[42px] font-bold">
              Misi
            </h2>
            <div className="w-[80px] h-[3px] bg-[#FED700] mx-auto mt-2"></div>
          </div>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Mengembangkan sistem pendidikan yang berkualitas
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Mengembangkan peserta didik yang sehat, berintelektual tinggi, berakhlak mulia, dan memiliki wawasan lokal dan global
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Mengembangkan pendidik dan tenaga kependidikan yang kompeten dalam melaksanakan tugas profesinya
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Mengembangkan proses pembelajaran yang inspiratif, inovatif dan adaptif pada perubahan dan lingkungan
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Menyiapkan lingkungan pendidikan yang menyenangkan dan menantang guna mendukung proses pembelajaran yang bermutu.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#293C88] font-bold mt-1">•</span>
              <p className="text-[#333] font-poppins text-base">
                Menjalin kemitraan strategis untuk mencapai tujuan pendidikan
              </p>
            </li>
          </ul>
        </div>

        {/* Blue decorative curve at bottom */}
        <div className="absolute left-4 md:left-[100px] bottom-[-50px]">
          <img
            src="/ElitePng123.png"
            className="w-[120px] h-[100px] object-contain"
            alt=""
          />
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="h-24"></div>

    </div>
  );
}
