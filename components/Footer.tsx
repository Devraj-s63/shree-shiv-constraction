import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t-2 border-[#7F011F] bg-[#7F011F] py-16 md:py-24 text-[#F5EBD0] mt-24 overflow-hidden">
      {/* Background Ghost Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]" aria-hidden="true">
        <span className="font-condensed font-black uppercase text-[clamp(5rem,22vw,22rem)] leading-none text-[#F5EBD0] whitespace-nowrap">
          SHREE SHIV
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Oversized Full Business Name Header */}
        <div className="border-b border-[#F5EBD0]/20 pb-10 mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5EBD0] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] font-bold text-[#F5EBD0] opacity-90">
              EST. BHILWARA &bull; AUTHORIZED KAY2 XENOX DEALER
            </span>
          </div>
          <h2 className="font-serif font-black text-[clamp(2.4rem,6vw,5.5rem)] uppercase tracking-tight text-[#F5EBD0] leading-[0.95] select-none">
            SHREE SHIV CONSTRUCTION &amp; STEEL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand & Origin (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <p className="font-mono text-xs text-[#F5EBD0]/80 tracking-widest uppercase">
              YARD NO. 01 &bull; 200 FEET ROAD &bull; BHILWARA 311001
            </p>
            <p className="font-body text-sm text-[#F5EBD0]/80 max-w-sm leading-relaxed">
              Authorized Kay2 Xenox TMT Fe 550D distributor. Computerized weighbridge dispatch, factory test certificates, and immediate site logistics across Rajasthan.
            </p>
            <div className="font-mono text-xs text-[#F5EBD0] space-y-1.5 pt-2">
              <div>
                GSTIN: <strong className="font-bold underline tracking-wide">08FFXPB0515IZ5</strong>
              </div>
              <div>
                DIRECT DESK:{' '}
                <a href="tel:+918278643303" className="font-bold hover:underline transition-all">
                  +91 8278643303
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation in Small Caps (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#F5EBD0] font-bold block mb-3">
              INDEX
            </span>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#F5EBD0]/80">
              <li>
                <Link href="/" className="hover:text-[#F5EBD0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5EBD0]" />
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F5EBD0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5EBD0]" />
                  <span>SELECTED STOCK &bull; PRODUCTS</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F5EBD0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5EBD0]" />
                  <span>ABOUT YARD OPERATIONS</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F5EBD0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5EBD0]" />
                  <span>FAQS &bull; TECHNICAL SPECIFICATIONS</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5EBD0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5EBD0]" />
                  <span>CONTACT &bull; DEPOT LOCATION</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Status (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-xs uppercase tracking-[0.26em] text-[#F5EBD0] font-bold block mb-3">
              DEPOT SCHEDULE
            </span>
            <div className="border-l-2 border-[#F5EBD0] pl-3.5 space-y-1">
              <span className="text-[#F5EBD0] font-bold block">MON &ndash; SAT</span>
              <span className="text-[#F5EBD0]/80">8:00 AM &ndash; 8:00 PM</span>
            </div>
            <p className="text-xs text-[#F5EBD0]/80 pt-2 leading-relaxed">
              Crane loading for trailers, pickups, and tractors. Verified weighbridge receipt with every dispatch.
            </p>
          </div>

        </div>

        {/* Hairline Bottom Legal Row */}
        <div className="border-t border-[#F5EBD0]/20 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-[#F5EBD0]/70">
          <p>&copy; {currentYear} SHREE SHIV CONSTRUCTION &amp; STEEL.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#F5EBD0] transition-colors">
              PRIVACY
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#F5EBD0] transition-colors">
              TERMS
            </Link>
            <span>&bull;</span>
            <span>BHILWARA, RAJASTHAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
