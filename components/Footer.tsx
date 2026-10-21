import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-cream-border bg-cream py-14 md:py-20 text-charcoal mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand & Origin (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif font-black text-xl sm:text-2xl uppercase tracking-[0.12em] block">
              SHREE SHIV CONSTRUCTION &amp; STEEL
            </span>
            <p className="font-mono text-xs text-charcoal-muted tracking-widest uppercase">
              YARD NO. 01 &bull; 200 FEET ROAD &bull; BHILWARA 311001
            </p>
            <p className="font-body text-xs text-charcoal-muted max-w-sm leading-relaxed">
              Authorized Kay2 Xenox TMT Fe 550D distributor. Computerized weighbridge dispatch, factory test certificates, and immediate site logistics across Rajasthan.
            </p>
            <div className="font-mono text-[11px] text-charcoal space-y-1 pt-1">
              <div>
                GSTIN: <strong className="font-bold">08FFXPB0515IZ5</strong>
              </div>
              <div>
                DIRECT DESK:{' '}
                <a href="tel:+918278643303" className="font-bold hover:text-camel transition-colors">
                  +91 8278643303
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation in Small Caps (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal font-bold block mb-2">
              INDEX
            </span>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-charcoal-muted">
              <li>
                <Link href="/" className="hover:text-camel transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-camel" />
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-camel transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-camel" />
                  <span>SELECTED STOCK &bull; PRODUCTS</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-camel transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-camel" />
                  <span>ABOUT YARD OPERATIONS</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-camel transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-camel" />
                  <span>FAQS &bull; TECHNICAL SPECIFICATIONS</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-camel transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-camel" />
                  <span>CONTACT &bull; DEPOT LOCATION</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Status (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal font-bold block mb-2">
              DEPOT SCHEDULE
            </span>
            <div className="border-l-2 border-camel pl-3 space-y-1">
              <span className="text-charcoal font-bold block">MON &ndash; SAT</span>
              <span className="text-charcoal-muted">8:00 AM &ndash; 8:00 PM</span>
            </div>
            <p className="text-[11px] text-charcoal-muted pt-2 leading-relaxed">
              Crane loading for trailers, pickups, and tractors. Verified weighbridge receipt with every dispatch.
            </p>
          </div>

        </div>

        {/* Hairline Bottom Legal Row */}
        <div className="border-t border-cream-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-charcoal-muted">
          <p>&copy; {currentYear} SHREE SHIV CONSTRUCTION &amp; STEEL.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-charcoal transition-colors">
              PRIVACY
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-charcoal transition-colors">
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
