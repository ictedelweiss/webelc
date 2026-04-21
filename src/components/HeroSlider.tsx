"use client";

import PageClientSwitcher from "./PageClientSwitcher";
import HeroSliderID from "./id/HeroSliderID";
import HeroSliderEN from "./en/HeroSliderEN";

export default function HeroSlider() {
  return (
    <PageClientSwitcher 
      idComponent={<HeroSliderID />} 
      enComponent={<HeroSliderEN />} 
    />
  );
}
