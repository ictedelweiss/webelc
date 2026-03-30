"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    img: "/Rectangle48.png",
    titleLeft: "Seven Values",
    subtitle: "Respect, Independent, Religious, Accomplished, Knowledgeable, Integrity, Socially Responsible",
    titleRight: null,
  },
  {
    img: "/Rectangle48(6).png", // using the high-res image
    titleLeft: "Designed for You",
    subtitle: null,
    titleRight: "Elite Academia",
  },
  {
    img: "/Rectangle48(2).png",
    titleLeft: "Own your English",
    subtitle: null,
    titleRight: "English Course",
  },
  {
    img: "/Rectangle48(3).png",
    titleLeft: "Find your words",
    subtitle: null,
    titleRight: "Playteracy",
  },
  {
    img: "/Rectangle48(4).png",
    titleLeft: "Teach with impact",
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
    <div className="w-full relative overflow-hidden bg-black rounded-b-[40px] shadow-lg rounded-t-3xl min-h-[500px] md:min-h-[678px] group">
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
            alt={s.titleLeft}
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Text Content overlaying the image */}
          <div className="absolute bottom-12 md:bottom-20 left-0 w-full px-6 md:px-16 lg:px-24 flex flex-col">
            {/* Dividing Yellow Line */}
            <div className="w-full h-[3px] bg-[#FFF4BA] mb-6 md:mb-8 rounded-full" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
              <div className="flex flex-col flex-1 max-w-3xl">
                <h2 className="text-[#FFF4BA] font-poppins text-4xl md:text-5xl lg:text-[64px] font-semibold leading-tight tracking-wide drop-shadow-md capitalize">
                  {s.titleLeft}
                </h2>
                {s.subtitle && (
                  <p className="text-white font-poppins text-sm md:text-lg lg:text-xl font-medium mt-3 md:mt-4 leading-relaxed tracking-wide opacity-90">
                    {s.subtitle}
                  </p>
                )}
              </div>
              
              {s.titleRight && (
                <div className="flex-shrink-0 mt-2 md:mt-0">
                  <h2 className="text-[#FFF4BA] font-poppins text-3xl md:text-5xl lg:text-[52px] font-semibold text-left md:text-right drop-shadow-md capitalize">
                    {s.titleRight}
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (visible on hover or larger screens) */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 text-white opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 4L7 12L15 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 text-white opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              i === current ? "bg-[#FFF4BA] w-8 md:w-10 opacity-100 shadow-[0_0_8px_rgba(255,244,186,0.8)]" : "bg-white/50 w-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
