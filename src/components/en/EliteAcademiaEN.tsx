export default function EliteAcademiaEN() {
  return (
    <div className="bg-white min-h-screen w-full font-poppins">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-20 overflow-hidden">
        {/* Decorative circle top right */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <img
          src="/logo-elite-academia.png"
          alt="Elite Academia"
          className="absolute right-16 top-12 hidden md:block w-72 lg:w-80 h-auto max-w-none object-contain"
        />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-10">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> Elite Academia
          </p>

          {/* Main Title Section */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#293C88] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FED700] inline-block" />
              <p className="text-white font-poppins text-xs font-semibold text-center">
                Elite Academia Homeschooling
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#293C88] leading-tight mb-6">
              World class Homeschooling
            </h1>
            <div className="w-24 h-1.5 bg-[#293C88] rounded-full mb-8" />
            <p className="text-[#1a1a1a] font-poppins text-base md:text-lg font-medium leading-relaxed">
              Elite Academia Homeschooling is an innovative program that provides flexible, structured, and personalized education. Elite Academia offers a hybrid learning model that supports students who are active in non-academic fields, with curriculum choices tailored to each student's needs. 
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Komitmen Kami */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF4BA] rounded-full opacity-40 blur-3xl -z-0" />
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] leading-snug mb-4">
            Our Commitment
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-12" />

          {/* 4 Commitment Boxes in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Box 1 - Top Left */}
            <div className="bg-white rounded-2xl p-7 min-h-[140px] flex items-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#444] font-poppins text-base font-medium leading-relaxed">
                Providing flexible and quality educational alternatives.
              </p>
            </div>

            {/* Box 3 - Top Right */}
            <div className="bg-white rounded-2xl p-7 min-h-[140px] flex items-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#444] font-poppins text-base font-medium leading-relaxed">
                Providing alternative choices of international, national, and integrated curricula according to student needs.
              </p>
            </div>

            {/* Box 2 - Bottom Left */}
            <div className="bg-white rounded-2xl p-7 min-h-[140px] flex items-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#444] font-poppins text-base font-medium leading-relaxed">
                Supporting students in maximizing their potential, both in academic and non-academic fields.
              </p>
            </div>

            {/* Box 4 - Bottom Right */}
            <div className="bg-white rounded-2xl p-7 min-h-[140px] flex items-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#444] font-poppins text-base font-medium leading-relaxed">
                Providing a personalized learning system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Why Choose Elite Academia */}
      <div className="w-full py-20 relative overflow-hidden bg-[#F8F8F8]">
        {/* Decorative shapes */}
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-70 blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="order-2 md:order-1">
              <img
                src="/Rectangle60.png"
                alt="Elite Academia"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

            {/* Content on Right */}
            <div className="order-1 md:order-2">
              <p className="text-[#293C88] font-poppins text-sm font-semibold uppercase tracking-widest mb-4">
                Our Excellence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] leading-snug mb-6">
                Why Choose<br />Elite Academia
              </h2>
              <div className="w-16 h-1 bg-[#FED700] rounded-full mb-6" />
              <p className="text-[#444] font-poppins text-base leading-relaxed">
                Elite Academia Homeschooling believes that every child has the right to the best education suited to their needs, interests, and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Our Strengths */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        {/* Decorative circle bottom right */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-50 blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
            Our Strengths
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-12" />

          {/* Strengths as horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#293C88] font-poppins text-base font-bold leading-relaxed">
                Personalized learning programs.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#293C88] font-poppins text-base font-bold leading-relaxed">
                Choice of national, international, or integrated curriculum.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#293C88] font-poppins text-base font-bold leading-relaxed">
                Experienced teachers &amp; intensive mentoring.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <p className="text-[#293C88] font-poppins text-base font-bold leading-relaxed">
                Flexible &amp; structured hybrid learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Learning Programs */}
      <div className="w-full py-20 relative bg-[#F8F8F8] overflow-hidden">
        {/* Decorative shape top left */}
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-60 blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
            Learning Programs
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-10" />

          <p className="text-[#444] font-poppins text-base mb-12 max-w-[600px] leading-relaxed">
            Elite Academia combines synchronous learning (face-to-face, both online and offline) and asynchronous learning (structured independent study) to create a flexible, interactive, and personalized learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GLC Program 1 */}
            <div className="bg-[#293C88] rounded-3xl p-8 relative overflow-hidden min-h-[200px] shadow-2xl">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-5 rounded-full" />
              <h3 className="text-[#FED700] text-2xl font-bold mb-4 relative z-10">
                Guided Learning Class (GLC)
              </h3>
              <p className="text-white/90 font-poppins text-base leading-relaxed relative z-10">
                Learning with direct guidance from teachers, either through interactive online classes or face-to-face meetings.
              </p>
            </div>

            {/* GLC Program 2 */}
            <div className="bg-[#293C88] rounded-3xl p-8 relative overflow-hidden min-h-[200px] shadow-2xl">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-5 rounded-full" />
              <h3 className="text-[#FED700] text-2xl font-bold mb-4 relative z-10">
                Guided Self Learning Class (GLSC) 
              </h3>
              <p className="text-white/90 font-poppins text-base leading-relaxed relative z-10">
                Independent yet guided learning using an LMS with weekly guides, achievement targets, and routine monitoring & feedback from teachers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Pilihan Jenjang & Kurikulum */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-[#FFF4BA] rounded-full opacity-40 blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-4">
            Level &amp; Curriculum Choices
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-8" />

          <p className="text-[#444] font-poppins text-base max-w-[800px] mb-12 leading-relaxed">
            Elite academia homeschooling gives students the flexibility to choose a curriculum according to their needs and goals. The following are the curriculum choices available based on the level : 
          </p>

          {/* Jenjang & Kurikulum Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {/* Row 1 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">Elementary</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">National Curriculum</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">International Curriculum</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">ELITS Curriculum</p>
            </div>

            {/* Row 2 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">Junior High</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">National Curriculum</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">International Curriculum</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">ELITS Curriculum</p>
            </div>

            {/* Row 3 */}
            <div className="rounded-[52px] bg-[#FED700] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#293C88]">Senior High</p>
            </div>
            <div className="rounded-[52px] bg-[#293C88] text-white text-center py-4 flex items-center justify-center min-h-[60px]">
              <p className="font-poppins text-base font-bold text-[#FED700]">National Curriculum</p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}
