'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftRef.current && rightRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from(leftRef.current, {
              y: 35,
              opacity: 0,
              duration: 0.85,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
            });
            gsap.from(rightRef.current, {
              y: 35,
              opacity: 0,
              duration: 0.85,
              delay: 0.15,
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
      id="intro-statement"
      className="py-24 sm:py-32 md:py-40 relative z-10 bg-[#7F011F] text-[#F5EBD0] overflow-hidden"
    >
      {/* Hero's Giant Ghost Word Behind Section */}
      <div
        className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <span className="font-condensed font-black uppercase text-[clamp(5rem,22vw,20rem)] leading-[0.76] tracking-tighter whitespace-nowrap text-[#F5EBD0] pl-6 md:pl-10">
          FOUNDATION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Hero-Scale Statement (7 cols) */}
          <div ref={leftRef} className="lg:col-span-7 editorial-intro-left">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5EBD0] inline-block" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.26em] uppercase text-[#F5EBD0] font-bold opacity-90">
                STATEMENT &bull; PRIMARY FOUNDATION
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-[#F5EBD0] leading-[1.04] tracking-tight">
              We supply the primary steel that anchors Bhilwara&apos;s homes, high-rises, and industrial structures.
            </h2>
          </div>

          {/* Right Column: Small-Caps Label + Support Paragraph + Inverted Pill Link (5 cols) */}
          <div
            ref={rightRef}
            className="lg:col-span-5 editorial-intro-right space-y-6 pt-2 lg:pt-8 lg:border-l lg:border-[#F5EBD0]/20 lg:pl-10"
          >
            {/* Small-Caps Label with Very Wide Letter-Spacing */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5EBD0]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#F5EBD0] font-bold">
                YARD NO. 01 &bull; BHILWARA
              </span>
            </div>

            {/* Support Paragraph in Public Sans */}
            <p className="font-body text-base sm:text-lg text-[#F5EBD0]/85 leading-relaxed font-normal">
              Direct mill supply of certified Kay2 Xenox Fe 550D TMT sariya, annealed tying wire, and high-density concrete cover blocks. Every order is weighed on our computerized weighbridge with zero shortage, verified with factory test certificates, and billed with a pakka GST invoice.
            </p>

            {/* Technical Yard Fact Chips / Stats Band Treatment */}
            <div className="py-4 border-y border-[#F5EBD0]/20 font-mono text-xs text-[#F5EBD0] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[#F5EBD0]/70 uppercase text-[11px] tracking-wider">Ready Gauges:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm'].map((gauge) => (
                    <span
                      key={gauge}
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#F5EBD0] text-[#F5EBD0]"
                    >
                      {gauge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[#F5EBD0]/10">
                <span className="text-[#F5EBD0]/70 uppercase text-[11px] tracking-wider">Loading Facility:</span>
                <span className="text-[#F5EBD0] font-bold">Tractor, Pickup &amp; Multi-Axle Trailer</span>
              </div>
            </div>

            {/* Inverted Hero Pill Link to Products */}
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full font-mono text-xs sm:text-sm uppercase tracking-[0.18em] font-bold px-8 py-4 bg-transparent text-[#F5EBD0] border-2 border-[#F5EBD0] hover:bg-[#F5EBD0] hover:text-[#7F011F] active:scale-95 transition-all duration-250"
                aria-label="Explore our complete selected stock on products page"
              >
                EXPLORE SELECTED STOCK &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
