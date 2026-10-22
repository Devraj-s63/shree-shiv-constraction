'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BlueprintBackground() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.to(leftRef.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        });
      }

      if (rightRef.current) {
        gsap.to(rightRef.current, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Left Edge Blueprint Schematic: Rebar Cross-Section & Yard Coordinates */}
      <div
        ref={leftRef}
        className="blueprint-drift-left absolute -left-12 sm:left-0 top-16 md:top-24 w-72 sm:w-96 md:w-[440px] opacity-[0.06] transition-transform text-[#7F011F]"
      >
        <svg viewBox="0 0 400 650" className="w-full h-auto text-[#7F011F] stroke-current fill-none stroke-[0.75]">
          <line x1="20" y1="20" x2="380" y2="20" strokeDasharray="4 4" />
          <line x1="20" y1="20" x2="20" y2="630" strokeDasharray="4 4" />
          <line x1="20" y1="630" x2="380" y2="630" strokeDasharray="4 4" />

          <g transform="translate(180, 220)">
            <circle cx="0" cy="0" r="110" strokeDasharray="6 3" />
            <circle cx="0" cy="0" r="95" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="68" strokeDasharray="2 2" />

            <line x1="-108" y1="-30" x2="-95" y2="-26" strokeWidth="1.5" />
            <line x1="-108" y1="0" x2="-95" y2="0" strokeWidth="1.5" />
            <line x1="-108" y1="30" x2="-95" y2="26" strokeWidth="1.5" />
            <line x1="108" y1="-30" x2="95" y2="-26" strokeWidth="1.5" />
            <line x1="108" y1="0" x2="95" y2="0" strokeWidth="1.5" />
            <line x1="108" y1="30" x2="95" y2="26" strokeWidth="1.5" />

            <line x1="-12" y1="0" x2="12" y2="0" strokeWidth="1" />
            <line x1="0" y1="-12" x2="0" y2="12" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="currentColor" />

            <polyline points="70,-70 120,-110 170,-110" strokeWidth="0.8" />
            <text x="125" y="-115" fontFamily="monospace" fontSize="9" fill="currentColor" letterSpacing="1">
              Ø 16mm Fe 550D
            </text>
          </g>

          <line x1="60" y1="370" x2="300" y2="370" strokeWidth="0.8" />
          <line x1="60" y1="362" x2="60" y2="378" strokeWidth="1" />
          <line x1="300" y1="362" x2="300" y2="378" strokeWidth="1" />
          <text x="135" y="365" fontFamily="monospace" fontSize="8" fill="currentColor" letterSpacing="1.5">
            NOMINAL BORE 16.0mm
          </text>

          <g transform="translate(35, 430)" fontFamily="monospace" fontSize="8.5" fill="currentColor" letterSpacing="1.2">
            <text y="0">REF: IS:1786 REBAR COMPLIANCE</text>
            <text y="18">GRADE: KAY2 XENOX Fe 550D</text>
            <text y="36">MIN ELONGATION: 14.5%</text>
            <text y="54">YIELD STRESS: 550 N/mm²</text>
            <text y="80">COORD: 25.3622° N, 74.6028° E</text>
            <text y="98">DEPOT: 200 FEET RD, BHILWARA</text>
            <text y="124">LAYOUT: BAY-01 // COMMERCIAL GANTRY</text>
          </g>

          <path d="M10,35 L10,10 L35,10" strokeWidth="1" />
          <path d="M10,615 L10,640 L35,640" strokeWidth="1" />
        </svg>
      </div>

      {/* Right Edge Blueprint Schematic: Structural Beam Elevation & Shear Stirrup Schematics */}
      <div
        ref={rightRef}
        className="blueprint-drift-right absolute -right-12 sm:right-0 top-36 md:top-48 w-72 sm:w-96 md:w-[460px] opacity-[0.06] transition-transform text-[#7F011F]"
      >
        <svg viewBox="0 0 420 700" className="w-full h-auto text-[#7F011F] stroke-current fill-none stroke-[0.75]">
          <line x1="40" y1="40" x2="390" y2="40" strokeDasharray="4 4" />
          <line x1="390" y1="40" x2="390" y2="660" strokeDasharray="4 4" />
          <line x1="40" y1="660" x2="390" y2="660" strokeDasharray="4 4" />

          <g transform="translate(60, 90)">
            <rect x="0" y="0" width="310" height="150" strokeWidth="1" />
            <polyline points="20,40 290,40 290,65" strokeWidth="1.2" />
            <polyline points="20,110 290,110 290,85" strokeWidth="1.5" />

            <rect x="50" y="25" width="30" height="100" strokeDasharray="3 3" />
            <rect x="110" y="25" width="30" height="100" strokeDasharray="3 3" />
            <rect x="170" y="25" width="30" height="100" strokeDasharray="3 3" />
            <rect x="230" y="25" width="30" height="100" strokeDasharray="3 3" />

            <line x1="50" y1="140" x2="260" y2="140" strokeWidth="0.8" />
            <text x="100" y="148" fontFamily="monospace" fontSize="8" fill="currentColor">
              STIRRUPS @ 100 c/c
            </text>
          </g>

          <g transform="translate(240, 340)">
            <circle cx="70" cy="70" r="60" strokeWidth="0.8" />
            <line x1="10" y1="70" x2="130" y2="70" strokeDasharray="2 2" />
            <line x1="70" y1="10" x2="70" y2="130" strokeDasharray="2 2" />
            <text x="75" y="65" fontFamily="monospace" fontSize="7.5" fill="currentColor">
              SEC B-B'
            </text>
          </g>

          <g transform="translate(50, 480)" fontFamily="monospace" fontSize="8.5" fill="currentColor" letterSpacing="1.2">
            <text y="0">ELEVATION: RC BEAM CONTINUITY</text>
            <text y="18">LAP LENGTH: 50d STAGGERED</text>
            <text y="36">CONCRETE COVER: 25mm PRECAST BLOCKS</text>
            <text y="54">DISPATCH DESK: +91 8278643303</text>
          </g>

          <path d="M410,35 L410,10 L385,10" strokeWidth="1" />
          <path d="M410,665 L410,690 L385,690" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
