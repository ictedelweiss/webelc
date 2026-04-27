'use client';

import React from 'react';

const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = '628118817757';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group flex flex-col items-end">
      {/* Tooltip Bubble */}
      <div className="mb-2 bg-[#293C88] text-[#FED700] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap font-bold text-sm border border-[#FED700]">
        Hubungi Kami
        {/* Little arrow at the bottom of the tooltip */}
        <div className="absolute -bottom-1 right-5 w-3 h-3 bg-[#293C88] rotate-45 border-r border-b border-[#FED700]"></div>
      </div>

      {/* WA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-14 h-14 object-contain"
        />
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;
