"use client";

import { usePathname } from "next/navigation";

export default function PageClientSwitcher({ 
  idComponent, 
  enComponent 
}: { 
  idComponent: React.ReactNode; 
  enComponent: React.ReactNode; 
}) {
  const pathname = usePathname();
  return pathname === "/en" || pathname.startsWith("/en/")
    ? enComponent
    : idComponent;
}
