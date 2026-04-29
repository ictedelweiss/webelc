export default function EnglishCourseEN() {
  return (
    <div className="bg-white min-h-screen w-full font-poppins">

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-20 overflow-hidden">
        {/* Decorative shape bottom right */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-10">
            Homepage <span className="text-[#868686]">|</span> Programs <span className="text-[#868686]">|</span> English Course
          </p>

          {/* White Container for Title Only */}
          <div className="inline-flex items-center gap-2 bg-[#293C88] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FED700] inline-block" />
            <p className="text-white font-poppins text-xs font-semibold text-center">
              English Course
            </p>
          </div>

          {/* Main Title Section */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#293C88] leading-tight mb-6">
              Achieve English Excellence
            </h1>
            <div className="w-24 h-1.5 bg-[#293C88] rounded-full mb-8" />
            <p className="text-[#1a1a1a] font-poppins text-base md:text-lg font-medium leading-relaxed">
              The English language course program at Edelweiss Learning Center has been established since 2005 and is one of the leading programs in teaching English for children and teenagers aged 7–17 years. This program uses the Common European Framework of Reference (CEFR) standard through the Pearson Edexcel curriculum. This program is designed to help students master English comprehensively with a fun, communicative approach that meets the needs of each age level. 
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Why Choose English Course */}
      <div className="w-full py-20 relative overflow-hidden bg-white">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF4BA] rounded-full opacity-40 blur-3xl -z-0" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left side: Title and description */}
            <div>
              <p className="text-[#293C88] font-poppins text-sm font-semibold uppercase tracking-widest mb-4">
                Our Excellence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] mb-6 leading-snug">
                Why Choose<br />English Course
              </h2>
              <div className="w-16 h-1 bg-[#FED700] rounded-full mb-6" />
              
              <p className="text-[#444] font-poppins text-base leading-relaxed">
                The English Course provides focused and personalized English learning, supporting the development of students' skills and confidence.
              </p>
            </div>

            {/* Right side: Decorative shape - hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-[#293C88] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden w-full max-w-md min-h-[230px]">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-5 rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FED700] opacity-10 rounded-full blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FED700] flex items-center justify-center text-[#293C88]">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                International Standard
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Uses the CEFR framework and Pearson Edexcel curriculum which are globally recognized. 
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Focus on Everyday Language Use  
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Learning materials and activities are designed so that students can use English naturally in real-life contexts.  
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Professional Teachers
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Experienced teachers apply interactive and participatory learning methods, so that students actively communicate and are bold enough to use English in every session. 
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <h3 className="text-[#293C88] text-xl font-bold mb-4 leading-snug">
                Learning in a Fun Way 
              </h3>
              <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                Learning is integrated with games, songs, discussions, projects, and technology so that learning activities become more meaningful, interactive, and fun. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Level Program */}
      <div className="w-full py-20 bg-[#F8F8F8] relative overflow-hidden">
        {/* Decorative shape bottom left */}
        <div className="absolute left-0 -bottom-10 w-80 h-80 bg-[#FFF4BA] rounded-full opacity-70 blur-3xl" />
        {/* Decorative shape top left */}
        <div className="absolute left-20 top-20 w-72 h-72 bg-[#293C88] rounded-full opacity-5 blur-3xl" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] text-center mb-4">
            Program Levels
          </h2>
          <div className="w-16 h-1 bg-[#FED700] rounded-full mb-16 mx-auto" />

          {/* 4 Level Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pre-Elementary (Classic Basic) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Classic Basic
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Pre-Elementary
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Basic introduction to English, focusing on general vocabulary, simple expressions, and speaking confidence."
              </p>
            </div>

            {/* Elementary (Grade 1-6) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 1-6
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Elementary
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Strengthening listening, speaking, reading, and writing skills through contextual and engaging communicative activities."
              </p>
            </div>

            {/* Intermediate (Grade 7-9) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 7-9
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Intermediate
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Development of intermediate language skills, including writing paragraphs, understanding narrative texts, and expressing opinions in a more structured way."
              </p>
            </div>

            {/* Advanced (Grade 1-6) */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="rounded-[64px] bg-[#293C88] px-8 py-3 mb-8 inline-block">
                <p className="text-[#FED700] font-poppins text-lg font-bold">
                  Grade 10-12
                </p>
              </div>
              <h3 className="text-[#293C88] text-2xl font-bold mb-6">
                Advanced
              </h3>
              <p className="text-[#000] font-poppins text-base leading-relaxed">
                "Enhancement of academic skills and complex communication, such as debates, presentations, and writing formal texts and essays in preparation for further studies."
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
