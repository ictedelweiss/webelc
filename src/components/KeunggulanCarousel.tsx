"use client";
import React, { useRef, useEffect } from "react";

const cards = [
  {
    title: "Pengajar Profesional",
    desc: "Didukung oleh tim pengajar yang berdedikasi tinggi, kompeten, dan memahami psikologi perkembangan anak",
    img: "/ElitePng162.png",
    alt: "ELITE PNG (16) 2",
  },
  {
    title: "Bersertifikasi ISO 21001",
    desc: "Sistem manajemen pendidikan berstandar internasional yang menjamin kualitas, konsistensi, dan kepuasan layanan",
    img: "/ElitePng161.png",
    alt: "ELITE PNG (16) 1",
  },
  {
    title: "Kurikulum Fleksibel & Personal",
    desc: "Metode pembelajaran yang disesuaikan dengan kebutuhan setiap siswa untuk memaksimalkan potensi mereka",
    img: "/ElitePng163.png",
    alt: "ELITE PNG (16) 3",
  },
];

export default function KeunggulanCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrame: number;
    let scrollAmount = 0;
    let direction = 1;
    const speed = 0.5; // px per frame

    function animate() {
      if (!scrollContainer) return;
      scrollAmount += speed * direction;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate cards for infinite effect
  const displayCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-x-hidden py-2">
      <div
        ref={scrollRef}
        className="flex gap-6 w-[200%] transition-all duration-700 ease-linear overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {displayCards.map((card, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[370px] md:w-[420px] lg:w-[480px] h-[165px] relative bg-[#F6F6F6] rounded-[14px] flex items-center px-6 shadow-md"
          >
            <img
              src={card.img}
              alt={card.alt}
              className="w-[70px] h-[90px] md:w-[87px] md:h-[97px] object-contain mr-6"
            />
            <div>
              <p className="text-[#293C88] font-poppins text-lg md:text-2xl font-bold mb-2">
                {card.title}
              </p>
              <p className="text-[#868686] font-poppins text-sm md:text-base">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
