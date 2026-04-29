export default function PlayteracyID() {
  return (
    <div className="bg-white min-h-screen w-full font-poppins">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-20 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-10">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> Playteracy
          </p>

          {/* White Container for Title - Rounded pill shape */}
          <div className="inline-flex items-center gap-2 bg-[#293C88] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FED700] inline-block" />
            <p className="text-white font-poppins text-xs font-semibold text-center">
              Playteracy
            </p>
          </div>

          {/* Main Title and Description Section */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#293C88] leading-tight mb-6">
              Play &amp; Literacy
            </h1>
            <div className="w-24 h-1.5 bg-[#293C88] rounded-full mb-8" />
            <p className="text-[#1a1a1a] font-poppins text-base md:text-lg font-medium leading-relaxed">
              Playteracy merupakan program unggulan Edelweiss Learning Center yang dirancang khusus untuk anak usia 2–8 tahun. Program ini membantu anak mengenal huruf, bunyi, dan membaca dalam Bahasa Inggris melalui metode Phonics Letterland yang merupakan sebuah pendekatan belajar yang menyenangkan, kontekstual, dan terbukti efektif digunakan di lebih dari 110 negara di dunia.
            </p>
          </div>
        </div>

        {/* Decorative image */}
        <img
          src="/ElitePng1217.png"
          className="w-32 h-32 absolute left-0 bottom-0 max-w-none opacity-80 hidden md:block z-10"
          alt="Decoration"
        />
      </div>

      {/* SECTION 2: Why Choose Playteracy */}
      <div className="w-full py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF4BA] rounded-full opacity-40 blur-3xl -z-0" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-[#293C88] font-poppins text-sm font-semibold uppercase tracking-widest mb-4">
              Keunggulan Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-6 leading-snug">
              Why Choose Playteracy
            </h2>
            <div className="w-16 h-1 bg-[#FED700] rounded-full mb-6" />
            <div>
              <p className="text-[#444] font-poppins text-base leading-relaxed">
                Playteracy menghadirkan pengalaman belajar yang menyatukan bermain dan literasi (play + literacy). Setiap sesi pembelajaran dikemas dengan cerita menarik, lagu, permainan, dan kegiatan kreatif yang membuat anak-anak belajar tanpa merasa sedang belajar.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3 leading-snug">
                Metode Letterland
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Playteracy merupakan metode Letterland yang berasal dari Inggris dan sudah digunakan di 110 negara
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3 leading-snug">
                Mengajarkan menggunakan cerita dan karakter
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Setiap huruf diperkenalkan lewat tokoh karakter unik dan kisah yang mudah diingat, sehingga anak dapat mengenal bunyi huruf secara alami. Dengan metode phonics ini anak akan mengingat bunyi baru hanya dengan ceritanya
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3 leading-snug">
                Metode pembelajaran multisensory
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Metode pembelajaran multisensory melalui music, Gerakan, permainan, seni, lagu, dan peran. Anak-anak belajar dengan melibatkan seluruh indera—melalui musik, gerakan, permainan, seni, lagu, dan role play, membuat proses belajar lebih bermakna dan menyenangkan.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3 leading-snug">
                Guru tersertifikasi letterland
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Guru tersertifikasi letterland, semua pengajar Playteracy di Edelweiss Learning Center telah mengikuti training resmi dan bersertifikat Letterland, menjamin kualitas pengajaran yang profesional dan sesuai standar internasional. Semua pengajar Playteracy di Edelweiss Learning Course telah mengikuti training resmi dan bersertifikat Letterland, menjamin kualitas pengajaran yang profesional dan sesuai standar internasional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: 5-Step Process */}
      <div className="w-full py-16 md:py-20 bg-[#F8F8F8] relative overflow-hidden">
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-60 blur-3xl" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-8 text-center">
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
              <div className="bg-white rounded-2xl p-5 pt-10 shadow-sm border border-gray-100">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Bertemu dan berkenalan dengan karakter – karakter bunyi.
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Setiap huruf memiliki tokoh dan cerita yang unik, membantu anak mengingat bunyi dengan mudah.
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
              <div className="bg-white rounded-2xl p-5 pt-10 shadow-sm border border-gray-100">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Belajar bunyi dari huruf dalam Bahasa inggris dengan metode bernyanyi dan bercerita.
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Lagu dan cerita membuat anak cepat mengenal hubungan antara huruf dan bunyinya.
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
              <div className="bg-white rounded-2xl p-5 pt-10 shadow-sm border border-gray-100">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Mengenal bentuk huruf.
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Anak belajar menulis dan mengenali bentuk huruf dengan kegiatan motorik halus yang menyenangkan.
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
              <div className="bg-white rounded-2xl p-5 pt-10 shadow-sm border border-gray-100">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Mulai membaca kata sederhana
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Setelah mengenal bunyi dan bentuk huruf, anak mulai membaca kata dan kalimat pendek dengan percaya diri.
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
              <div className="bg-white rounded-2xl p-5 pt-10 shadow-sm border border-gray-100">
                <h3 className="text-[#293C88] font-poppins text-sm font-bold mb-2 text-center">
                  Aktivitas pendukung
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Melalui permainan, kerajinan, dan aktivitas berbasis proyek, anak menguatkan pemahaman dan rasa ingin tahu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Level Program */}
      <div className="w-full py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-50 blur-3xl" />
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
            Level Program
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-10" />

          {/* 2x2 Grid of Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level 1 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 1
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Fun Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Pada tahap ini, anak diperkenalkan huruf dan bunyi melalui karakter-karakter Letterland menggunakan lagu, cerita, dan permainan. Anak mulai mengenal bentuk huruf, bunyi huruf awal, dan mengembangkan rasa percaya diri terhadap aktivitas membaca.
              </p>
            </div>

            {/* Level 2 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 2
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Explorer Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Pada tahap explorer anak mulai menggabungkan (blending) dan memisahkan (segmenting) bunyi untuk membaca dan menulis kata sederhana. Anak juga belajar mengenal huruf besar dan kecil, memahami pola bunyi rangkap, serta mulai membaca kata dengan konsonan gabung (bl, cl, tr, dst.). Kegiatan dirancang tetap menyenangkan melalui lagu, permainan, dan aktivitas multisensori.
              </p>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 3
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Beyond Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Pada tahap Beyond, anak memperluas kemampuan membaca melalui pengenalan berbagai digraf (seperti sh, ch, th, ph, wh) dan kombinasi huruf yang menghasilkan bunyi baru. Anak juga berlatih membaca kalimat pendek serta memperkuat pemahaman bunyi melalui lagu, kerajinan, dan permainan interaktif.
              </p>
            </div>

            {/* Level 4 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="bg-[#293C88] rounded-full py-2 px-6 inline-block mb-6">
                <p className="text-[#FED700] font-poppins text-sm font-bold">
                  Level 4
                </p>
              </div>
              <h3 className="text-[#293C88] font-poppins text-xl font-bold mb-4">
                Far Beyond Class
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Pada tahap Far Beyond, anak belajar mengenali pola ejaan lanjutan seperti “magic e” dan bunyi kompleks seperti ar, or ir, oy, dan oi. Anak mulai membaca teks yang lebih panjang, memahami isi bacaan, serta berlatih mengeja dan mendengarkan (dictation & listening). Program ini mempersiapkan anak menjadi pembaca mandiri dan percaya diri dalam Bahasa Inggris.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
