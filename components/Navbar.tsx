'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'PRODUCTS', href: '/products' },
  { label: 'ABOUT', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    const target = href.replace(/\/$/, '') || '/';
    const current = pathname.replace(/\/$/, '') || '/';
    if (target === '/') return current === '/';
    return current === target || current.startsWith(target + '/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-md transition-all duration-300">
      <div id="main-navbar-container" className="max-w-7xl mx-auto px-6 md:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left: Two-Line Brand Lockup in Serif Display + Small Tracked Capitals */}
        <Link
          href="/"
          className="group flex flex-col justify-center focus:outline-none select-none py-1"
          aria-label="Shree Shiv Construction & Steel Home"
        >
          <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.12em] text-charcoal uppercase leading-none group-hover:text-camel transition-colors">
            SHREE SHIV
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-camel font-bold mt-1 leading-tight group-hover:text-charcoal transition-colors">
            CONSTRUCTION &amp; STEEL
          </span>
        </Link>

        {/* Center: Links in small caps with tiny hollow-circle markers */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center font-mono text-[11px] uppercase tracking-[0.25em] transition-colors py-2 ${
                  active ? 'text-charcoal font-bold' : 'text-charcoal-muted hover:text-charcoal'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full border mr-2 transition-colors ${
                    active ? 'border-camel bg-camel' : 'border-charcoal/40 group-hover:border-camel'
                  }`}
                />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Outlined Pill Button for "GET A QUOTE" & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918278643303"
            className="hidden sm:inline-flex rounded-full border border-camel text-charcoal px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-camel hover:text-charcoal transition-all active:scale-95"
            aria-label="Get a direct quote at +91 8278643303"
          >
            GET A QUOTE
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal border border-cream-border rounded-full hover:border-camel focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cream-border bg-cream/95 backdrop-blur-md px-6 py-5 space-y-3">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center font-mono text-xs uppercase tracking-[0.22em] py-2 transition-colors ${
                  active ? 'text-charcoal font-bold' : 'text-charcoal-muted hover:text-charcoal'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full border mr-2.5 ${
                    active ? 'border-camel bg-camel' : 'border-charcoal/40'
                  }`}
                />
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-cream-border">
            <a
              href="tel:+918278643303"
              className="block text-center rounded-full border border-camel text-charcoal py-2.5 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-camel hover:text-charcoal"
            >
              GET A QUOTE: +91 8278643303
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
