export default function IPDCEN() {
  return (
    <div className="bg-white min-h-screen w-full font-poppins">

      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <div className="relative w-full bg-[#FFF4BA] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#293C88] opacity-5 rounded-full blur-3xl" />
        <img
          src="/ElitePng142.png"
          className="w-36 h-28 absolute right-16 top-12 max-w-none hidden md:block opacity-80"
          alt="Decoration"
        />

        <div className="max-w-screen-xl mx-auto px-6 py-20 relative z-10">
          {/* Breadcrumb */}
          <p className="text-[#293C88] text-sm mb-10">
            Homepage <span className="text-[#868686] mx-1">|</span> Programs <span className="text-[#868686] mx-1">|</span> IPDC
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#293C88] text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FED700] inline-block" />
            Professional Program
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#293C88] leading-tight mb-6 max-w-3xl">
            Indonesia Pedagogic<br />
            <span className="text-[#FED700] drop-shadow-sm">Development Centre</span>
          </h1>

          {/* Underline accent */}
          <div className="w-24 h-1.5 bg-[#293C88] rounded-full mb-8" />

          {/* Description */}
          <p className="text-[#1a1a1a] text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            A professional training academy focused on developing teachers to build a successful career in international school environments.
          </p>
        </div>
      </div>

      {/* ── ABOUT SECTION ──────────────────────────────────────────── */}
      <div className="w-full py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFF4BA] rounded-full opacity-40 blur-3xl -z-0" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="flex flex-col space-y-6">
              <p className="text-[#293C88] font-semibold text-sm uppercase tracking-widest">About IPDC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#293C88] leading-snug">
                Shaping World-Class Educators
              </h2>
              <div className="w-16 h-1 bg-[#FED700] rounded-full" />
              <p className="text-[#444] text-base leading-relaxed">
                Indonesia Pedagogic Development Centre (IPDC) is a professional training academy focused on developing teachers to build a successful career in international school environments.
              </p>
              <p className="text-[#444] text-base leading-relaxed">
                Its goal is to equip educators with the specialized knowledge and practical skills needed to achieve and sustain excellence in teaching within a global academic environment.
              </p>
            </div>

            {/* Right — quote card */}
            <div className="relative">
              <div className="bg-[#293C88] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-5 rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FED700] opacity-10 rounded-full blur-xl" />
                <span className="text-6xl font-serif text-[#FED700] leading-none block mb-4">"</span>
                <p className="text-white/90 text-lg leading-relaxed font-medium italic">
                  Equipping educators with the specialized knowledge and practical skills needed to achieve excellence in teaching within a global academic environment.
                </p>
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FED700] flex items-center justify-center text-[#293C88] font-bold text-sm">IP</div>
                  <div>
                    <p className="font-bold text-white text-sm">IPDC</p>
                    <p className="text-white/60 text-xs">Indonesia Pedagogic Development Centre</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TRAINING HIGHLIGHTS ────────────────────────────────────── */}
      <div className="w-full py-20 bg-[#F8F8F8] relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#293C88] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#293C88]">Intensive Global Education Training</h2>
            <p className="text-[#666] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We offer intensive training in the key elements of global education, covering a range of essential aspects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4BA] flex items-center justify-center mb-5 group-hover:bg-[#293C88] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#293C88] group-hover:text-[#FED700] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-[#293C88] text-lg font-bold mb-2 leading-snug">International Curriculum</h3>
              <p className="text-[#868686] text-sm leading-relaxed">
                Mastery of the structure and application of global curricula such as Pearson, Cambridge, and IB.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4BA] flex items-center justify-center mb-5 group-hover:bg-[#293C88] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#293C88] group-hover:text-[#FED700] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[#293C88] text-lg font-bold mb-2 leading-snug">Advanced Classroom Management</h3>
              <p className="text-[#868686] text-sm leading-relaxed">
                Cutting-edge classroom management strategies for an effective and conducive learning environment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4BA] flex items-center justify-center mb-5 group-hover:bg-[#293C88] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#293C88] group-hover:text-[#FED700] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-[#293C88] text-lg font-bold mb-2 leading-snug">Pedagogical & Psychological Strategies</h3>
              <p className="text-[#868686] text-sm leading-relaxed">
                Child development psychology-based approaches for more impactful and meaningful teaching.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4BA] flex items-center justify-center mb-5 group-hover:bg-[#293C88] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#293C88] group-hover:text-[#FED700] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[#293C88] text-lg font-bold mb-2 leading-snug">Student Safety</h3>
              <p className="text-[#868686] text-sm leading-relaxed">
                Best practices in maintaining student safety and well-being within the school environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA BANNER ──────────────────────────────────────── */}
      <div className="w-full bg-[#293C88] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FED700] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <p className="text-[#FED700] font-semibold text-sm uppercase tracking-widest mb-2">Join Us Today</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Ready to Elevate Your<br className="hidden md:block" /> Teaching Career?
            </h2>
          </div>
          <a
            href="/kontak"
            className="shrink-0 bg-[#FED700] text-[#293C88] font-bold text-base px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}
