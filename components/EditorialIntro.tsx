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
      className="py-24 sm:py-32 md:py-40 relative z-10 border-t border-cream-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large High-Contrast Fraunces Serif Statement (7 cols) */}
          <div ref={leftRef} className="lg:col-span-7 editorial-intro-left">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-charcoal-muted font-bold block mb-4">
              STATEMENT // PRIMARY FOUNDATION
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.6vw,4.2rem)] font-normal text-charcoal leading-[1.04] tracking-tight">
              We supply the primary steel that anchors Bhilwara&apos;s homes, high-rises, and industrial structures.
            </h2>
          </div>

          {/* Right Column: Small-Caps Label + Support Paragraph + Pill Link (5 cols) */}
          <div
            ref={rightRef}
            className="lg:col-span-5 editorial-intro-right space-y-6 pt-2 lg:pt-8 lg:border-l lg:border-cream-border/80 lg:pl-10"
          >
            {/* Small-Caps Label with Very Wide Letter-Spacing */}
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-camel" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-charcoal font-bold">
                YARD NO. 01 &mdash; BHILWARA
              </span>
            </div>

            {/* Support Paragraph in Public Sans */}
            <p className="font-body text-base text-charcoal-muted leading-relaxed font-normal">
              Direct mill supply of certified Kay2 Xenox Fe 550D TMT sariya, annealed tying wire, and high-density concrete cover blocks. Every order is weighed on our computerized weighbridge with zero shortage, verified with factory test certificates, and billed with a pakka GST invoice.
            </p>

            {/* Technical Yard Fact Chips */}
            <div className="py-3 border-y border-cream-border/60 font-mono text-xs text-charcoal space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-charcoal-muted uppercase text-[10px] tracking-wider">Ready Gauges:</span>
                <strong className="font-bold">8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal-muted uppercase text-[10px] tracking-wider">Loading Facility:</span>
                <span className="text-charcoal-muted font-semibold">Tractor, Pickup &amp; Multi-Axle Trailer</span>
              </div>
            </div>

            {/* Pill Link to Products */}
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold px-7 py-3.5 bg-transparent text-charcoal border border-camel hover:bg-camel hover:text-charcoal active:bg-camel-dark transition-all duration-200"
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
