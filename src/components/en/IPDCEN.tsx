export default function IPDCEN() {
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
              A global-quality professional and leadership development program for teachers that strengthens innovative teaching strategies through intensive training on international curricula.
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
            Program Gallery
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
            Our Programs
          </h2>

          {/* 4 Program Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Curriculum Development
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Research and curriculum development tailored to the needs of Indonesian education and international standards
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Educator Training
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Comprehensive training programs to improve the competence and capacity of teachers and educators
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Educational Consulting
              </h3>
              <p className="text-[#000] font-poppins text-base">
                Professional consulting services for educational institutions looking to improve the quality of learning
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-3">
                Research & Evaluation
              </h3>
              <p className="text-[#000] font-poppins text-base">
                In-depth research on the effectiveness of learning methodologies and educational program evaluation
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
            Focus Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Focus 1 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Basic Literacy & Numeracy
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Development of effective and fun learning methodologies for reading, writing, and arithmetic
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Integrated literacy curriculum</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Active learning strategies</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Formative assessment</p>
              </div>
            </div>

            {/* Focus 2 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Character Education
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Integration of character values and life skills in every aspect of learning
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Holistic character program</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Social skills learning</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Student leadership</p>
              </div>
            </div>

            {/* Focus 3 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Technology in Education
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Utilization of technology to enhance the effectiveness and accessibility of learning
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Digital learning platforms</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Blended learning</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Digital literacy</p>
              </div>
            </div>

            {/* Focus 4 */}
            <div className="bg-white rounded-[15px] p-8">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Inclusion & Diversity
              </h3>
              <p className="text-[#000] font-poppins text-base mb-6">
                Ensuring all learners have access to quality education without discrimination
              </p>
              <div className="space-y-2">
                <p className="text-[#868686] font-poppins text-sm">✓ Inclusive learning</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Special education</p>
                <p className="text-[#868686] font-poppins text-sm">✓ Educational equality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Our Achievements */}
      <div className="w-full py-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[40px] font-bold text-[#293C88] text-center mb-16">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Achievement 1 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                100+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Educational Institutions
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Have received consultation
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                500+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Trained Educators
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Through training programs
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                20+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Years of Experience
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                In educational development
              </p>
            </div>

            {/* Achievement 4 */}
            <div className="bg-[#F5F5F5] rounded-[15px] p-8 text-center">
              <h3 className="text-[32px] font-bold text-[#FED700] mb-2">
                15+
              </h3>
              <p className="text-[#293C88] font-poppins font-semibold text-base">
                Innovative Curricula
              </p>
              <p className="text-[#868686] font-poppins text-sm mt-2">
                Developed and implemented
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
