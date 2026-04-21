export default function PlayteracyEN() {
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
              Playteracy is a flagship program of Edelweiss Learning Course specially designed for children aged 2–8 years. This program helps children recognize letters, sounds, and read in English through the Letterland Phonics method, which is a fun, contextual, and proven effective learning approach used in more than 110 countries worldwide. 
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
              Our Excellence
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#293C88] mb-8">
              Why Choose Playteracy
            </h2>
            <div className="border-l-4 border-l-[#FED700] pl-6">
              <p className="text-[#000] font-poppins text-sm md:text-base leading-relaxed">
                Playteracy provides a learning experience that unites play and literacy (play + literacy). Every learning session is packed with engaging stories, songs, games, and creative activities that make children learn without feeling like they are learning. 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#293C88] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Letterland Method
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Playteracy is a Letterland method originating from the UK and used in 110 countries. 
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#FED700] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Teaching using stories and characters
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Each letter is introduced through unique character figures and memorable stories, so children can recognize letter sounds naturally. With this phonics method, children will remember new sounds just by the story. 
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#FED700] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Multisensory learning method
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Multisensory learning method through music, movement, games, art, songs, and role play. Children learn by engaging all senses—through music, movement, games, art, songs, and role play, making the learning process more meaningful and fun. 
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F5F5F5] border-l-4 border-l-[#293C88] p-6 rounded-lg">
              <h3 className="text-[#293C88] font-poppins text-lg font-bold mb-3">
                Letterland certified teachers
              </h3>
              <p className="text-[#000] font-poppins text-sm leading-relaxed">
                Letterland certified teachers, all Playteracy educators at Edelweiss Learning Course have attended official training and are Letterland certified, ensuring professional teaching quality that meets international standards. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: 5-Step Process */}
      <div className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#293C88] mb-8 text-center">
            How to introduce reading through Playteracy?
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
                  Meet and get to know the sound characters. 
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Each letter has a unique character and story, helping children remember sounds easily. 
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
                  Learn the sounds of English letters using singing and storytelling methods. 
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Songs and stories help children quickly recognize the relationship between letters and their sounds. 
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
                  Recognize letter shapes.
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Children learn to write and recognize letter shapes with fun fine motor activities. 
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
                  Start reading simple words
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  After recognizing letter sounds and shapes, children start reading words and short sentences with confidence. 
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
                  Supporting activities
                </h3>
                <p className="text-[#000] font-poppins text-xs text-center leading-relaxed">
                  Through games, crafts, and project-based activities, children strengthen their understanding and curiosity. 
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
            Program Levels
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
                At this stage, children are introduced to letters and sounds through Letterland characters using songs, stories, and games. Children start recognizing letter shapes, initial letter sounds, and developing confidence in reading activities. 
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
                At the explorer stage, children begin blending and segmenting sounds to read and write simple words. Children also learn to recognize capital and lowercase letters, understand consonant patterns, and start reading words with consonant blends (bl, cl, tr, etc.). Activities are designed to remain fun through songs, games, and multisensory activities. 
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
                At the Beyond stage, children expand their reading skills through the introduction of various digraphs (such as sh, ch, th, ph, wh) and letter combinations that produce new sounds. Children also practice reading short sentences and strengthen sound comprehension through songs, crafts, and interactive games. 
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
                At the Far Beyond stage, children learn to recognize advanced spelling patterns such as "magic e" and complex sounds like ar, or, ir, oy, and oi. Children start reading longer texts, understanding reading content, and practicing spelling and listening (dictation & listening). This program prepares children to become independent and confident readers in English.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
