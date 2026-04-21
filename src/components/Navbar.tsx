"use client";

import PageClientSwitcher from "./PageClientSwitcher";
import NavbarID from "./id/NavbarID";
import NavbarEN from "./en/NavbarEN";

export default function Navbar() {
  return (
    <PageClientSwitcher 
      idComponent={<NavbarID />} 
      enComponent={<NavbarEN />} 
    />
  );
}
