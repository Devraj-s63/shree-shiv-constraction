import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918278643303?text=Namaste%2C%20I%20am%20inquiring%20about%20TMT%20steel%20rates%20in%20Bhilwara"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 rounded-full bg-cream-card/95 backdrop-blur-md border border-cream-border pl-2.5 pr-4 py-2 shadow-lg flex items-center gap-2.5 hover:border-camel hover:scale-105 active:scale-95 transition-all group"
      aria-label="Chat directly on WhatsApp with Shree Shiv Construction & Steel sales desk"
      title="Direct WhatsApp Rate Desk"
    >
      {/* Unread Counter Badge */}
      <span className="w-5 h-5 rounded-full bg-camel text-charcoal text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
        1
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-charcoal group-hover:text-camel transition-colors">
        WhatsApp Rates
      </span>
    </a>
  );
}
