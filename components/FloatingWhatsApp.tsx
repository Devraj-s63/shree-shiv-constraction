import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918278643303?text=Namaste%2C%20I%20am%20inquiring%20about%20TMT%20steel%20rates%20in%20Bhilwara"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 rounded-full bg-[#F5EBD0] border-2 border-[#7F011F] pl-3 pr-5 py-2.5 shadow-xl flex items-center gap-3 hover:bg-[#7F011F] hover:text-[#F5EBD0] text-[#7F011F] active:scale-95 transition-all duration-250 group cursor-pointer"
      aria-label="Chat directly on WhatsApp with Shree Shiv Construction & Steel sales desk"
      title="Direct WhatsApp Rate Desk"
    >
      {/* Counter Badge */}
      <span className="w-5 h-5 rounded-full bg-[#7F011F] text-[#F5EBD0] group-hover:bg-[#F5EBD0] group-hover:text-[#7F011F] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 transition-colors duration-250">
        1
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-250">
        WhatsApp Rates
      </span>
    </a>
  );
}
