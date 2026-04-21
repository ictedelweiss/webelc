export default function EliteAcademiaEN() {
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
              Elite Academia Homeschooling is an innovative program that provides flexible, structured, and personalized education. Elite Academia offers a hybrid learning model that supports students who are active in non-academic fields, with curriculum choices tailored to each student's needs. 
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Komitmen Kami */}
      <div className="w-full py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#293C88] mb-12">
            Our Commitment
          </h2>

          {/* 4 Commitment Boxes in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Box 1 - Top Left */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F5F5F5] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Providing flexible and quality educational alternatives.
              </p>
            </div>

            {/* Box 3 - Top Right */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F6F6F6] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Providing alternative choices of international, national, and integrated curricula according to student needs.
              </p>
            </div>

            {/* Box 2 - Bottom Left */}
            <div className="border-l-4 border-l-[#293C88] bg-[#F1F1F1] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Supporting students in maximizing their potential, both in academic and non-academic fields.
              </p>
            </div>

            {/* Box 4 - Bottom Right */}
            <div className="border-l-4 border-l-[#293C88] bg-[rgba(244,244,244,0.83)] p-8 min-h-[120px] flex items-center">
              <p className="text-black font-poppins text-base font-medium">
                Providing a personalized learning system.
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
                Our Excellence
              </p>
              <h2 className="text-[40px] font-bold text-[#293C88] mb-6">
                Why Choose<br />Elite Academia
              </h2>
              <p className="text-[#868686] font-poppins text-base leading-relaxed">
                Elite Academia Homeschooling believes that every child has the right to the best education suited to their needs, interests, and aspirations.
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
                Personalized learning programs.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Choice of national, international, or integrated curriculum.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Experienced teachers &amp; intensive mentoring.
              </p>
            </div>
            <div className="bg-[#F1F1F1] p-6 rounded-lg">
              <p className="text-[#293C88] font-poppins text-base font-medium">
                Flexible &amp; structured hybrid learning.
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
            Elite Academia combines synchronous learning (face-to-face, both online and offline) and asynchronous learning (structured independent study) to create a flexible, interactive, and personalized learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GLC Program 1 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 relative overflow-hidden min-h-[200px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Guided Learning Class (GLC)
              </h3>
              <p className="text-black font-poppins text-base">
                Learning with direct guidance from teachers, either through interactive online classes or face-to-face meetings.
              </p>
            </div>

            {/* GLC Program 2 */}
            <div className="bg-[#FFF4BA] rounded-[20px] p-8 relative overflow-hidden min-h-[200px]">
              <h3 className="text-[#293C88] text-2xl font-bold mb-4">
                Guided Self Learning Class (GLSC) 
              </h3>
              <p className="text-black font-poppins text-base">
                Independent yet guided learning using an LMS with weekly guides, achievement targets, and routine monitoring & feedback from teachers.
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
            Level &amp; Curriculum Choices
          </h2>

          <p className="text-black font-poppins text-base max-w-[800px] mb-12">
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
