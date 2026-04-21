"use client";

import PageClientSwitcher from "./PageClientSwitcher";
import FooterID from "./id/FooterID";
import FooterEN from "./en/FooterEN";

export default function Footer() {
  return (
    <PageClientSwitcher 
      idComponent={<FooterID />} 
      enComponent={<FooterEN />} 
    />
  );
}
