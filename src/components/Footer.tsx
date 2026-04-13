import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#293C88] w-full relative overflow-hidden">
      {/* Decorative images top-right */}
      <div className="absolute right-[50px] top-[30px] hidden md:flex gap-2">
        <img src="/ElitePng151.png" className="w-[60px] h-[60px] object-contain" alt="" />
        <img src="/ElitePng141.png" className="w-[65px] h-[75px] object-contain" alt="" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 md:gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <img src="/ElitePng131.png" className="w-[180px] h-[160px] object-contain" alt="Edelweiss Logo" />
            <div>
              <p className="text-white font-poppins text-xl font-semibold leading-tight">
                Empowering Education<br />For a Better Future
              </p>
              <p className="text-white font-poppins text-sm font-medium mt-2">
                Learn. Grow. Lead
              </p>
            </div>
            <div>
              <p className="text-white font-poppins text-lg font-semibold">Lokasi Kami</p>
              <p className="text-white font-poppins text-sm mt-2 leading-relaxed">
                Jatibening Estate, Jl. Ratna Jatibening,<br />
                Kec. Pondok Gede, Kota Bekasi, Jawa<br />
                Barat, 17142
              </p>
            </div>
          </div>

          {/* Seputar Edelweiss */}
          <div className="flex flex-col gap-4">
            <p className="text-white font-poppins text-lg font-semibold leading-tight">
              Seputar<br />Edelweiss Learning<br />Center
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/visi-misi" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Visi dan Misi
              </Link>
              <Link href="/foundation" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Yayasan
              </Link>
              <Link href="/kurikulum" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Kurikulum Kami
              </Link>
              <Link href="/kontak" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Kontak Kami
              </Link>
            </div>
          </div>

          {/* Program */}
          <div className="flex flex-col gap-4">
            <p className="text-white font-poppins text-lg font-semibold leading-tight">
              Program<br />Edelweiss Learning<br />Center
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/program/elite-academia" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Elite Academia
              </Link>
              <Link href="/program/english-course" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                English Course
              </Link>
              <Link href="/program/playteracy" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                Playteracy
              </Link>
              <Link href="/program/ipdc" className="text-white font-poppins text-base hover:text-[#FED700] transition-colors">
                IPDC
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col justify-end gap-4">
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FED700] transition-colors">
                <svg width="28" height="28" viewBox="0 0 31 31" fill="currentColor">
                  <path d="M29.2183 5.17667C28.8325 4.1803 28.2429 3.27547 27.4872 2.5201C26.7316 1.76472 25.8265 1.17545 24.83 0.79C23.6639 0.352262 22.432 0.115569 21.1867 0.0899998C19.5817 0.0199998 19.0733 0 15.0033 0C10.9333 0 10.4117 0 8.82 0.0899998C7.57565 0.114261 6.34459 0.351002 5.18 0.79C4.18323 1.175 3.27794 1.76412 2.52222 2.51955C1.76651 3.27498 1.17705 4.18004 0.791667 5.17667C0.353841 6.34269 0.117691 7.57473 0.0933333 8.82C0.0216667 10.4233 0 10.9317 0 15.0033C0 19.0733 0 19.5917 0.0933333 21.1867C0.118333 22.4333 0.353333 23.6633 0.791667 24.8317C1.17813 25.8279 1.76816 26.7326 2.52406 27.488C3.27996 28.2433 4.18511 28.8326 5.18167 29.2183C6.34406 29.6737 7.57562 29.9273 8.82333 29.9683C10.4283 30.0383 10.9367 30.06 15.0067 30.06C19.0767 30.06 19.5983 30.06 21.19 29.9683C22.4352 29.943 23.667 29.7069 24.8333 29.27C25.8296 28.8836 26.7344 28.2939 27.49 27.5383C28.2455 26.7827 28.8353 25.8779 29.2217 24.8817C29.66 23.715 29.895 22.485 29.92 21.2383C29.9917 19.635 30.0133 19.1267 30.0133 15.055C30.0133 10.9833 30.0133 10.4667 29.92 8.87167C29.9006 7.60879 29.6632 6.35875 29.2183 5.17667ZM27.1883 21.0633C27.1776 22.0238 27.0023 22.9754 26.67 23.8767C26.4197 24.5248 26.0365 25.1133 25.5451 25.6045C25.0537 26.0956 24.4649 26.4784 23.8167 26.7283C22.9254 27.0591 21.9839 27.2344 21.0333 27.2467C19.45 27.32 19.0033 27.3383 14.9433 27.3383C10.88 27.3383 10.465 27.3383 8.85167 27.2467C7.90155 27.235 6.96054 27.0597 6.07 26.7283C5.41948 26.48 4.82834 26.0978 4.33482 25.6066C3.8413 25.1154 3.45639 24.526 3.205 23.8767C2.87741 22.9851 2.70219 22.0447 2.68667 21.095C2.615 19.5117 2.59833 19.065 2.59833 15.005C2.59833 10.9433 2.59833 10.5283 2.68667 8.91333C2.69744 7.95337 2.87276 7.00237 3.205 6.10167C3.71333 4.78667 4.755 3.75167 6.07 3.24833C6.96098 2.91857 7.90171 2.74327 8.85167 2.73C10.4367 2.65833 10.8817 2.63833 14.9433 2.63833C19.005 2.63833 19.4217 2.63833 21.0333 2.73C21.984 2.74144 22.9256 2.91679 23.8167 3.24833C24.4649 3.49879 25.0536 3.882 25.545 4.37338C26.0363 4.86476 26.4195 5.45345 26.67 6.10167C26.9976 6.99325 27.1728 7.9336 27.1883 8.88333C27.26 10.4683 27.2783 10.9133 27.2783 14.975C27.2783 19.035 27.2783 19.4717 27.2067 21.065H27.1883V21.0633Z" />
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:info@edelweiss.com" className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FED700] transition-colors">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M35.0502 10.4836L20.0002 1.06689L4.95016 10.4836C3.9835 11.0669 3.3335 12.1169 3.3335 13.3336V30.0002C3.3335 31.8336 4.8335 33.3336 6.66683 33.3336H33.3335C35.1668 33.3336 36.6668 31.8336 36.6668 30.0002V13.3336C36.6668 12.1169 36.0168 11.0669 35.0502 10.4836ZM33.3335 30.0002H6.66683V16.6669L20.0002 25.0002L33.3335 16.6669V30.0002ZM20.0002 21.6669L6.66683 13.3336L20.0002 5.00023L33.3335 13.3336L20.0002 21.6669Z" />
                </svg>
              </a>
              {/* Phone */}
              <a href="tel:+62" className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FED700] transition-colors">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.2826 6.27393C14.8757 6.27393 15.4221 6.59557 15.7101 7.11414L17.7071 10.7115C17.9686 11.1826 17.9809 11.7523 17.7399 12.2341L15.816 16.0821C15.816 16.0821 16.3736 18.9485 18.707 21.2819C21.0404 23.6153 23.8972 24.1632 23.8972 24.1632L27.7445 22.2396C28.2267 21.9985 28.7968 22.011 29.268 22.2729L32.8756 24.2786C33.3937 24.5667 33.715 25.1128 33.715 25.7056V29.8472C33.715 31.9564 31.7559 33.4797 29.7575 32.8053C25.653 31.4204 19.2818 28.7835 15.2436 24.7452C11.2054 20.707 8.56845 14.3359 7.18352 10.2315C6.50922 8.233 8.03256 6.27393 10.1417 6.27393H14.2826Z" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
          <p className="text-white font-poppins text-sm text-center md:text-left">
            Edelweiss Learning Center - Excellence in Education since 2005 Copyright © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
