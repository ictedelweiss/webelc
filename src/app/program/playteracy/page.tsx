'use client';

export default function Playteracy() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-8">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> Playteracy
          </p>

          {/* White Container for Title - Rounded pill shape */}
          <div className="w-[280px] h-[70px] rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
            <p className="text-[#293C88] font-poppins text-3xl font-bold text-center">
              Playteracy
            </p>
          </div>

          {/* Main Title and Description Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
              Play &amp; Literacy
            </h1>
            <p className="text-[#000] font-poppins text-sm md:text-base font-medium leading-relaxed">
              Playteracy adalah program unggulan Edelweiss Learning Course untuk anak usia 2–8 tahun yang membantu mengenal huruf, bunyi, dan membaca Bahasa Inggris melalui metode Phonics Letterland. Menggabungkan konsep play + literacy, setiap sesi dikemas dengan cerita, lagu, permainan, dan aktivitas kreatif.
            </p>
          </div>
        </div>

        {/* Decorative image */}
        <img
          src="/ElitePng1217.png"
          className="w-32 h-32 absolute left-0 bottom-0 max-w-none opacity-80 hidden md:block"
          alt="Decoration"
        />
      </div>

      {/* SECTION 2: Why Choose Playteracy */}
      <div className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#293C88] font-poppins text-sm font-semibold mb-2">
              Keunggulan Kami
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#293C88] mb-8">
              Why Choose Playteracy
            </h2>
            <div className="border-l-4 border-l-[#FED700] pl-6">
              <p className="text-[#000] font-poppins text-sm md:text-base leading-relaxed">
                Playteracy menghadirkan pembelajaran yang personal dan mendukung perkembangan kemampuan serta kepercayaan diri siswa dengan metode inovatif yang terbukti efektif.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#293C88] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Metode Letterland
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Metode Letterland yang berasal dari Inggris dan sudah digunakan di 110 negara
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#FED700] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Belajar lewat cerita dan karakter
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Setiap huruf diperkenalkan melalui karakter unik dan cerita yang mudah diingat
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#FED700] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Metode pembelajaran multisensory
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Anak belajar melalui musik, gerakan, permainan, seni, lagu, dan role play
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#293C88] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Guru tersertifikasi letterland
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Pengajar telah mengikuti training resmi dan bersertifikat Letterland
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: 5-Step Process */}
      <div className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#293C88] mb-8 text-center">
            Bagaimana cara mengenalkan membaca melalui Playteracy?
          </h2>

          {/* Yellow underline */}
          <div className="flex justify-center mb-12">
            <div className="w-40 h-1 bg-[#FED700]"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#293C88] flex items-center justify-center shadow-md">
                  <p className="text-white text-3xl font-bold">1</p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-5 pt-10">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Berkenalan dengan karakter bunyi
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Setiap huruf memiliki tokoh dan cerita yang unik
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#293C88] flex items-center justify-center shadow-md">
                  <p className="text-white text-3xl font-bold">2</p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-5 pt-10">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Belajar bunyi huruf melalui lagu dan cerita
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Lagu dan cerita membuat anak cepat mengenal hubungan antara huruf dan bunyinya
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#293C88] flex items-center justify-center shadow-md">
                  <p className="text-white text-3xl font-bold">3</p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-5 pt-10">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Mengenal bentuk huruf
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Anak belajar menulis dengan kegiatan motorik halus
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Steps 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Empty space */}
            <div className="hidden md:block"></div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#293C88] flex items-center justify-center shadow-md">
                  <p className="text-white text-3xl font-bold">4</p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-5 pt-10">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Mulai membaca kata sederhana
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Anak mulai membaca kata dan kalimat pendek dengan percaya diri
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#293C88] flex items-center justify-center shadow-md">
                  <p className="text-white text-3xl font-bold">5</p>
                </div>
              </div>
              <div className="bg-[#FFF4BA] rounded-xl p-5 pt-10">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Aktivitas pendukung
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Permainan, kerajinan, dan aktivitas berbasis proyek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Level Program */}
      <div className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#293C88] mb-10">
            Level Program
          </h2>

          {/* 2x2 Grid of Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level 1 */}
            <div className="bg-[#F5F5F5] rounded-lg p-6 text-center">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 1
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Fun Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Anak diperkenalkan huruf dan bunyi melalui karakter-karakter Letterland menggunakan lagu, cerita, dan permainan.
              </p>
            </div>

            {/* Level 2 */}
            <div className="bg-[#F5F5F5] rounded-lg p-6 text-center">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 2
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Explorer Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Anak belajar menggabungkan dan memisahkan bunyi untuk membaca serta menulis kata sederhana.
              </p>
            </div>

            {/* Level 3 */}
            <div className="bg-[#F5F5F5] rounded-lg p-6 text-center">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 3
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Beyond Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Anak mengenal digraf dan membaca kalimat pendek melalui lagu, kerajinan, dan permainan interaktif.
              </p>
            </div>

            {/* Level 4 */}
            <div className="bg-[#F5F5F5] rounded-lg p-6 text-center">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 4
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Far Beyond Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Anak mengenal pola ejaan lanjutan, membaca teks lebih panjang, dan menjadi pembaca yang mandiri.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
