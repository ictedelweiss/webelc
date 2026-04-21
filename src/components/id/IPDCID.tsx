export default function IPDCID() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-8">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> IPDC
          </p>

          {/* White Container for Title - Rounded pill shape */}
          <div className="w-56 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
            <p className="text-[#293C88] font-poppins text-2xl font-bold text-center">
              IPDC
            </p>
          </div>

          {/* Main Title and Description Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
              Indonesia Pedagogics Development Center
            </h1>
            <p className="text-[#000] font-poppins text-sm md:text-base font-medium leading-relaxed">
              Program pengembangan kepemimpinan dan profesional guru kualitas global yang memperkuat strategi mengajar inovatif, melalui pelatihan intensif pada kurikulum internasional.
            </p>
          </div>
        </div>

        {/* Decorative image */}
        <img
          src="/ElitePng142.png"
          className="w-40 h-32 absolute right-20 top-16 max-w-none hidden md:block"
          alt="Decoration"
        />
      </div>

      {/* SECTION 2: Image Gallery */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] text-center mb-16">
            Galeri Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[15px] overflow-hidden shadow-md">
              <img 
                src="/Rectangle112.png" 
                alt="Program Gallery 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-md">
              <img 
                src="/Rectangle113.png" 
                alt="Program Gallery 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-md">
              <img 
                src="/Rectangle114.png" 
                alt="Program Gallery 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Core Programs */}
      <div className="w-full py-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] mb-12">
            Program Kami
          </h2>

          {/* 4 Program Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Pengembangan Kurikulum
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Penelitian dan pengembangan kurikulum yang disesuaikan dengan kebutuhan pendidikan Indonesia dan standar internasional
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Pelatihan Pendidik
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Program pelatihan komprehensif untuk meningkatkan kompetensi dan kapasitas guru dan tenaga pendidik
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Konsultasi Pendidikan
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Layanan konsultasi profesional untuk institusi pendidikan yang ingin meningkatkan kualitas pembelajaran
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Penelitian & Evaluasi
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Riset mendalam tentang efektivitas metodologi pembelajaran dan evaluasi program pendidikan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Focus Areas */}
      <div className="w-full py-20 bg-[#FFF4BA] relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-40 h-40 bg-[#293C88] rounded-full opacity-10 -z-10" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] text-center mb-16">
            Area Fokus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Focus 1 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Literasi Dasar & Numerasi
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Pengembangan metodologi pembelajaran membaca, menulis, dan berhitung yang efektif dan menyenangkan
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Kurikulum literasi terintegrasi</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Strategi pembelajaran aktif</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Penilaian formatif</p>
              </div>
            </div>

            {/* Focus 2 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Pendidikan Karakter
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Integrasi nilai-nilai karakter dan keterampilan hidup dalam setiap aspek pembelajaran
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Program karakter holistik</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Pembelajaran keterampilan sosial</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Kepemimpinan siswa</p>
              </div>
            </div>

            {/* Focus 3 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Teknologi dalam Pendidikan
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Pemanfaatan teknologi untuk meningkatkan efektivitas dan aksesibilitas pembelajaran
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Platform pembelajaran digital</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Blended learning</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Literasi digital</p>
              </div>
            </div>

            {/* Focus 4 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Inklusi & Keberagaman
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Memastikan semua peserta didik memiliki akses pendidikan berkualitas tanpa diskriminasi
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Pembelajaran inklusif</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Pendidikan khusus</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Kesetaraan pendidikan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Our Achievements */}
      <div className="w-full py-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] text-center mb-16">
            Pencapaian Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Achievement 1 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                100+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Institusi Pendidikan
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Telah mendapat konsultasi
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                500+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Pendidik Terlatih
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Melalui program pelatihan
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                20+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Tahun Pengalaman
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Dalam pengembangan pendidikan
              </p>
            </div>

            {/* Achievement 4 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                15+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Kurikulum Inovatif
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Dikembangkan dan diimplementasikan
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
