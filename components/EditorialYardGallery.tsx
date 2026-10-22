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
      className="py-24 sm:py-32 md:py-40 relative z-10 bg-[#F5EBD0] text-[#7F011F] border-t-2 border-[#7F011F]/20 overflow-hidden"
    >
      {/* Hero's Giant Ghost Word Behind Section */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <span className="font-condensed font-black uppercase text-[clamp(5rem,24vw,22rem)] leading-[0.76] tracking-tighter whitespace-nowrap text-[#7F011F] pr-6 md:pr-10">
          DEPOT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F]" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
              SELECTED STOCK &bull; YARD NO. 01 &mdash; BHILWARA
            </span>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#7F011F]/80">
            EX-YARD DISPATCH &bull; 200 FEET ROAD
          </div>
        </div>

        {/* Oversized Serif Title Overlapping Photography */}
        <div className="relative">
          <div className="relative z-20 pointer-events-none mb-[-2rem] sm:mb-[-3.5rem] md:mb-[-4.5rem]">
            <h2 className="font-serif text-[clamp(2.6rem,7vw,6.5rem)] font-bold text-[#7F011F] leading-[0.92] tracking-tight">
              Bhilwara Depot &amp; <br className="hidden sm:inline" />
              <span className="italic font-light text-[#7F011F]/80">Heavy Stock</span>
            </h2>
          </div>

          {/* Photographic Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch relative z-10 pt-4 sm:pt-6">
            
            {/* Primary Photo Plane: TMT Bundles (8 cols) */}
            <div className="gallery-card lg:col-span-8 border-2 border-[#7F011F] bg-[#F5EBD0] p-3 sm:p-4 shadow-md group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE0C3]">
                <Image
                  src="/images/yard-tmt-stock.webp"
                  alt="TMT sariya stock bundles at Shree Shiv yard, Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                
                <div className="absolute top-3 left-3 bg-[#F5EBD0] border border-[#7F011F] px-3.5 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#7F011F] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7F011F] inline-block mr-1.5" />
                  Fe 550D Billet Stock &bull; Crane Loading
                </div>

                <div className="absolute bottom-3 right-3 bg-[#7F011F] text-[#F5EBD0] px-3 py-1 font-mono text-[10px] tracking-widest uppercase font-bold">
                  YARD CAP: 50T
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[#7F011F] uppercase tracking-wider font-bold block mb-1">
                    KAY2 XENOX AUTHORIZED STOCKIST
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[#2A080C] max-w-md">
                    Genuine factory-tested rebar sorted by diameter on elevated concrete sleepers to prevent ground moisture exposure.
                  </p>
                </div>
                <span className="font-mono text-xs text-[#7F011F] font-bold uppercase tracking-widest whitespace-nowrap px-4 py-2 border-2 border-[#7F011F] rounded-full">
                  PAKKA GST BILL
                </span>
              </div>
            </div>

            {/* Companion Photo Plane: 200 Feet Road Storefront (4 cols) */}
            <div className="gallery-card lg:col-span-4 border-2 border-[#7F011F] bg-[#F5EBD0] p-3 sm:p-4 shadow-md flex flex-col justify-between group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE0C3]">
                <Image
                  src="/images/shop-front.webp"
                  alt="Shree Shiv Construction & Steel shop front, 200 Feet Road, Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 bg-[#F5EBD0] border border-[#7F011F] px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#7F011F] font-bold">
                  Retail Order Counter
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#7F011F]/80 font-bold block">
                    LOCATION ANCHOR
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#7F011F] leading-snug font-bold">
                    200 Feet Road, Near Sharda Evergreen
                  </h3>
                  <p className="font-body text-xs text-[#2A080C] leading-relaxed">
                    Centrally located for rapid trailer dispatches and quick customer pickup with ample parking space.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#7F011F]/20 space-y-2 font-mono text-xs">
                  <a
                    href="https://www.google.com/maps/place/SHREE+SHIV+CONSTRUCTION+%26+STEEL/@25.3622326,74.602833,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#7F011F] font-bold hover:underline transition-all py-1"
                    aria-label="Open Google Maps pin for Shree Shiv Construction & Steel"
                  >
                    <span>GET LOCATION PIN</span>
                    <span>&rarr;</span>
                  </a>
                  <a
                    href="tel:+918278643303"
                    className="flex items-center justify-between text-[#7F011F] font-bold hover:underline transition-all py-1"
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
