import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Academia — Homeschooling Berkualitas",
  description: "Elite Academia adalah program homeschooling berstandar internasional dari Edelweiss Learning Center. Pembelajaran hybrid, kurikulum fleksibel (Nasional, Internasional, ELITS) untuk SD, SMP, dan SMA.",
  openGraph: {
    title: "Elite Academia — World Class Homeschooling",
    description: "Program homeschooling berstandar internasional dengan pembelajaran hybrid dan pilihan kurikulum yang disesuaikan untuk SD, SMP, SMA.",
    url: "https://www.edelweisslearningcenter.com/program/elite-academia",
  },
};

export default function EliteAcademia() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] pt-[120px] pb-[80px] overflow-hidden">
        {/* Decorative circle top right */}
        <div className="absolute right-0 top-40 w-48 h-48 bg-[#293C88] rounded-full opacity-10 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-16">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> Elite Academia
          </p>

          {/* White Container for Title Only */}
          <div className="w-[298px] h-[75px] rounded-[68px] bg-white shadow-lg flex items-center justify-center mx-auto mb-12">
            <p className="text-[#293C88] font-poppins text-2xl font-bold text-center">
              Elite Academia
            </p>
          </div>

          {/* Main Title Section */}
          <div className="text-center max-w-[845px] mx-auto">
            <h1 className="text-[40px] font-bold text-[#293C88] mb-6">
              World class Homeschooling
            </h1>
            <p className="text-[#868686] font-poppins text-base font-medium leading-relaxed">
              Elite Academia Homeschooling adalah program inovatif yang menyediakan pendidikan fleksibel, terstruktur, dan terpersonalisasi. Elite Academia menawarkan model pembelajaran hybrid yang mendukung siswa yang memiliki kegiatan aktif di bidang non-akademik, 
              dengan pilihan kurikulum yang disesuaikan dengan kebutuhan masing-masing peserta didik. 
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Komitmen Kami */}
      <div className="w-full py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#293C88] mb-12">
            Komitmen Kami
          </h2>

          {/* 4 Commitment Boxes in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Box 1 - Top Left */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F5F5F5] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Memberikan alternatif pendidikan yang fleksibel dan berkualitas.
              </p>
            </div>

            {/* Box 3 - Top Right */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F6F6F6] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Memberikan alternatif pilihan kurikulum internasional, nasional dan integrasi keduanya sesuai dengan kebutuhan siswa.
              </p>
            </div>

            {/* Box 2 - Bottom Left */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F1F1F1] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Mendukung peserta didik dalam mengembangkan potensi diri secara maksimal, baik di bidang akademik maupun non-akademik.
              </p>
            </div>

            {/* Box 4 - Bottom Right */}
            <div className="border-l-4 border-l-[#293C88] bg-[rgba(244,244,244,0.83)] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Menyediakan sistem pembelajaran yang terpersonalisasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Why Choose Elite Academia */}
      <div className="w-full py-20 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute right-0 top-1/4 w-40 h-40 bg-[#293C88] rounded-full opacity-10 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="order-2 md:order-1">
              <img
                src="/Rectangle60.png"
                alt="Elite Academia"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content on Right */}
            <div className="order-1 md:order-2">
              <p className="text-[#293C88] font-poppins text-base font-semibold mb-4">
                Keunggulan Kami
              </p>
              <h2 className="text-[40px] font-bold text-[#293C88] mb-6">
                Why Choose<br />Elite Academia
              </h2>
              <p className="text-[#868686] font-poppins text-base leading-relaxed">
                Elite Academia Homeschooling percaya bahwa setiap anak berhak mendapatkan 
                pendidikan terbaik yang sesuai dengan kebutuhan, minat, dan cita-citanya. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Our Strengths */}
      <div className="w-full py-20 bg-white relative">
        {/* Decorative circle bottom right */}
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#FED700] rounded-full opacity-30 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] mb-12">
            Our Strengths
          </h2>

          {/* Strengths as horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Program belajar yang terpersonalisasi.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Pilihan kurikulum nasional, internasional atau integrasi keduanya.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Guru berpengalaman &amp; pendampingan intensif.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Hybrid learning yang lebih fleksibel &amp; terstruktur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Learning Programs */}
      <div className="w-full py-20 relative">
        {/* Decorative shape top left */}
        <div className="absolute left-0 top-1/3 w-32 h-32 bg-[#293C88] rounded-full opacity-10 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] mb-12">
            Learning Programs
          </h2>

          <p className="text-[#868686] font-poppins text-base mb-12 max-w-[600px]">
            Elite Academia menggabungkan pembelajaran sinkronus (tatap muka langsung, baik online maupun offline) dan asinkronus (belajar mandiri terstruktur) untuk 
            menciptakan pengalaman belajar yang fleksibel, interaktif, dan terpersonalisasi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GLC Program 1 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 relative overflow-hidden min-h-[200px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Guided Learning Class (GLC)
              </h3>
              <p className="text-black font-poppins text-base">
                Pembelajaran dengan bimbingan langsung dengan guru, baik melalui kelas daring interaktif maupun pertemuan tatap muka.
              </p>
            </div>

            {/* GLC Program 2 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 relative overflow-hidden min-h-[200px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Guided Self Learning Class (GLSC) 
              </h3>
              <p className="text-black font-poppins text-base">
                Belajar mandiri namun tetap terarah menggunakan LMS dengan panduan mingguan, target capaian, serta pemantauan & feedback rutin dari guru.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Pilihan Jenjang & Kurikulum */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute right-1/4 top-1/2 w-40 h-40 bg-[#293C88] rounded-full opacity-10 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] mb-8">
            Pilihan Jenjang &amp; Kurikulum
          </h2>

          <p className="text-black font-poppins text-base max-w-[800px] mb-12">
            Elite academia homeschooling memberi fleksibilitas pada siswa untuk memilih kurikulum sesuai dengan kebutuhan dan tujuannya. 
            Berikut ini pilihan kurikulum yang dapat dipilih oleh siswa berdasarkan jenjangnya : 
          </p>

          {/* Jenjang & Kurikulum Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {/* Row 1 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">SD</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum Nasional</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum Internasional</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum ELITS</p>
            </div>

            {/* Row 2 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">SMP</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum Nasional</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum Internasional</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum ELITS</p>
            </div>

            {/* Row 3 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">SMA</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">Kurikulum Nasional</p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}
