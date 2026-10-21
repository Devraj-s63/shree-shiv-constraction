'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EditorialYardGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from(sectionRef.current!.querySelectorAll('.gallery-card'), {
              y: 40,
              opacity: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yard-gallery"
      className="py-24 sm:py-32 md:py-40 relative z-10 border-t border-cream-border/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-camel" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-charcoal font-bold">
              SELECTED STOCK &bull; YARD NO. 01 &mdash; BHILWARA
            </span>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.22em] text-charcoal-muted">
            EX-YARD DISPATCH &bull; 200 FEET ROAD
          </div>
        </div>

        {/* Oversized Serif Title Overlapping Photography */}
        <div className="relative">
          <div className="relative z-20 pointer-events-none mb-[-2rem] sm:mb-[-3.5rem] md:mb-[-4.5rem]">
            <h2 className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-normal text-charcoal leading-[0.88] tracking-tight">
              Bhilwara Depot &amp; <br className="hidden sm:inline" />
              <span className="italic font-light text-charcoal-muted">Heavy Stock</span>
            </h2>
          </div>

          {/* Photographic Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch relative z-10 pt-4 sm:pt-6">
            
            {/* Primary Photo Plane: TMT Bundles (8 cols) */}
            <div className="gallery-card lg:col-span-8 border border-cream-border bg-white p-3 sm:p-4 shadow-sm group">
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-warm">
                <Image
                  src="/images/yard-tmt-stock.webp"
                  alt="TMT sariya stock bundles at Shree Shiv yard, Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                
                <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm border border-cream-border px-3.5 py-1.5 font-mono text-[10px] tracking-widest uppercase text-charcoal font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-eucalyptus inline-block mr-1.5" />
                  Fe 550D Billet Stock &bull; Crane Loading
                </div>

                <div className="absolute bottom-3 right-3 bg-charcoal text-cream px-3 py-1 font-mono text-[10px] tracking-widest uppercase font-bold">
                  YARD CAP: 50T
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-camel uppercase tracking-wider font-bold block mb-1">
                    KAY2 XENOX AUTHORIZED STOCKIST
                  </span>
                  <p className="font-body text-xs sm:text-sm text-charcoal-muted max-w-md">
                    Genuine factory-tested rebar sorted by diameter on elevated concrete sleepers to prevent ground moisture exposure.
                  </p>
                </div>
                <span className="font-mono text-xs text-charcoal font-bold uppercase tracking-widest whitespace-nowrap bg-cream-warm px-3.5 py-2 border border-cream-border rounded-full">
                  PAKKA GST BILL
                </span>
              </div>
            </div>

            {/* Companion Photo Plane: 200 Feet Road Storefront (4 cols) */}
            <div className="gallery-card lg:col-span-4 border border-cream-border bg-white p-3 sm:p-4 shadow-sm flex flex-col justify-between group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-warm">
                <Image
                  src="/images/shop-front.webp"
                  alt="Shree Shiv Construction & Steel shop front, 200 Feet Road, Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm border border-cream-border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-charcoal font-bold">
                  Retail Order Counter
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-charcoal-muted font-bold block">
                    LOCATION ANCHOR
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-snug">
                    200 Feet Road, Near Sharda Evergreen
                  </h3>
                  <p className="font-body text-xs text-charcoal-muted leading-relaxed">
                    Centrally located for rapid trailer dispatches and quick customer pickup with ample parking space.
                  </p>
                </div>

                <div className="pt-6 border-t border-cream-border space-y-2 font-mono text-xs">
                  <a
                    href="https://www.google.com/maps/place/SHREE+SHIV+CONSTRUCTION+%26+STEEL/@25.3622326,74.602833,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-charcoal font-bold hover:text-camel transition-colors py-1"
                    aria-label="Open Google Maps pin for Shree Shiv Construction & Steel"
                  >
                    <span>GET LOCATION PIN</span>
                    <span>&rarr;</span>
                  </a>
                  <a
                    href="tel:+918278643303"
                    className="flex items-center justify-between text-charcoal font-bold hover:text-camel transition-colors py-1"
                    aria-label="Call yard desk directly at +91 8278643303"
                  >
                    <span>DIRECT DISPATCH DESK</span>
                    <span>+91 8278643303</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
