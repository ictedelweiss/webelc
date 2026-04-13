"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    img: "/Rectangle48.png",
    titleLine1: "Seven Values",
    titleLine2: null,
    subtitle: "Respect, Independent, Religious, Accomplished, Knowledgeable, Integrity, Socially Responsible",
    titleRight: null,
  },
  {
    img: "/Rectangle48(6).png",
    titleLine1: "Designed",
    titleLine2: "for You",
    subtitle: null,
    titleRight: "Elite Academia",
  },
  {
    img: "/Rectangle48(2).png",
    titleLine1: "Own Your",
    titleLine2: "English",
    subtitle: null,
    titleRight: "English Course",
  },
  {
    img: "/Rectangle48(3).png",
    titleLine1: "Find Your",
    titleLine2: "Words",
    subtitle: null,
    titleRight: "Playteracy",
  },
  {
    img: "/Rectangle48(4).png",
    titleLine1: "Teach with",
    titleLine2: "Impact",
    subtitle: null,
    titleRight: "IPDC",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      startTimer();
      setTimeout(() => setAnimating(false), 500);
    },
    [animating, startTimer]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  return (
    <div className="w-full relative overflow-hidden bg-black rounded-b-[40px] shadow-lg rounded-t-3xl min-h-[280px] sm:min-h-[380px] md:min-h-[500px] lg:min-h-[678px] group">
      {/* Slides Container */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
            zIndex: i === current ? 10 : 0,
          }}
        >
          {/* Background Image */}
          <img
            src={s.img}
            className="w-full h-full object-cover object-center absolute inset-0"
            alt={s.titleLine1}
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text Content overlaying the image */}
          <div className="absolute bottom-8 md:bottom-20 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col">
            {/* Dividing Yellow Line */}
            <div className="w-full h-[3px] bg-[#FFF4BA] mb-3 md:mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-2 md:gap-4">
              <div className="flex flex-col flex-1 max-w-xl">
                <h2 className="text-[#FFF4BA] font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-wide drop-shadow-md capitalize">
                  {s.titleLine1}<br />
                  {s.titleLine2 && <span>{s.titleLine2}</span>}
                </h2>
                {s.subtitle && (
                  <p className="text-white font-poppins text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-2 md:mt-3 leading-relaxed tracking-wide opacity-90">
                    {s.subtitle}
                  </p>
                )}
              </div>
              
              {s.titleRight && (
                <div className="flex-shrink-0 mt-1 md:mt-0">
                  <h3 className="text-[#FFF4BA] font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-left md:text-right drop-shadow-md capitalize tracking-wide">
                    {s.titleRight}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows — tampil di semua ukuran layar */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 text-white opacity-70 md:opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
          <path d="M15 4L7 12L15 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 text-white opacity-70 md:opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
          <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full h-2 md:h-2.5 ${
              i === current ? "bg-[#FFF4BA] w-6 md:w-10 opacity-100 shadow-[0_0_8px_rgba(255,244,186,0.8)]" : "bg-white/50 w-2 md:w-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
