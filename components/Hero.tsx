'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProductStage {
  name: string;
  word: string;
  bgHex: string;
  fgHex: string;
  theme: 'sand' | 'wine';
  shortLine: string;
  imageSrc: string;
  imageAlt: string;
  variants: string[];
}

const products: ProductStage[] = [
  {
    name: 'Kay2 Xenox TMT Sariya',
    word: 'STRONG',
    bgHex: '#F5EBD0', // Light Sand
    fgHex: '#7F011F', // Wine Red
    theme: 'sand',
    shortLine: 'Primary billet Fe 550D reinforcement bar engineered for seismic & structural endurance.',
    imageSrc: '/images/cutout-tmt.png',
    imageAlt: 'Kay2 Xenox Fe 550D TMT Sariya Bar Cutout',
    variants: ['8 mm', '10 mm', '12 mm', '16 mm', '20 mm', '25 mm', '32 mm'],
  },
  {
    name: 'Binding Wire',
    word: 'BIND',
    bgHex: '#7F011F', // Wine Red
    fgHex: '#F5EBD0', // Light Sand
    theme: 'wine',
    shortLine: 'Dead-soft annealed 18 & 20 gauge tie wire for rapid, zero-snap rebar tying.',
    imageSrc: '/images/cutout-wire.png',
    imageAlt: 'Annealed Steel Binding Wire Coil Cutout',
    variants: ['18 Gauge', '20 Gauge', '25 kg Bundle', '50 kg Bundle'],
  },
  {
    name: 'Cover Blocks',
    word: 'SOLID',
    bgHex: '#F5EBD0', // Light Sand
    fgHex: '#7F011F', // Wine Red
    theme: 'sand',
    shortLine: 'High-density concrete spacers ensuring 100% specified cover depth and fire rating.',
    imageSrc: '/images/cutout-blocks.png',
    imageAlt: 'High Density Concrete Cover Blocks Spacers Cutout',
    variants: ['20 mm', '25 mm', '40 mm', '50 mm', '75 mm'],
  },
];

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Desktop Scroll-driven Hero Refs
  const heroContainerRef = useRef<HTMLElement>(null);
  const wipe1Ref = useRef<HTMLDivElement>(null);
  const wipe2Ref = useRef<HTMLDivElement>(null);

  // Dynamic Content Refs
  const word0Ref = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);

  const prod0Ref = useRef<HTMLDivElement>(null);
  const prod1Ref = useRef<HTMLDivElement>(null);
  const prod2Ref = useRef<HTMLDivElement>(null);

  const copy0Ref = useRef<HTMLDivElement>(null);
  const copy1Ref = useRef<HTMLDivElement>(null);
  const copy2Ref = useRef<HTMLDivElement>(null);

  const var0Ref = useRef<HTMLDivElement>(null);
  const var1Ref = useRef<HTMLDivElement>(null);
  const var2Ref = useRef<HTMLDivElement>(null);

  // Color-swapped elements
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const gritRef = useRef<HTMLDivElement>(null);
  const ctaWhatsappRef = useRef<HTMLAnchorElement>(null);
  const ctaAllRef = useRef<HTMLAnchorElement>(null);

  // Passive indicator dot refs
  const dot0Ref = useRef<HTMLDivElement>(null);
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot0CircleRef = useRef<HTMLSpanElement>(null);
  const dot1CircleRef = useRef<HTMLSpanElement>(null);
  const dot2CircleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mq.addEventListener('change', handleMotionChange);

    return () => mq.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (reducedMotion) return;

    // Pinning enabled only on desktop (viewport >= 1024px)
    if (window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!heroContainerRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
      });

      // Segment 1 (Time 0.35 -> 0.65, middle at 0.5): Transition Product 0 -> Product 1
      // 1. Wipe layer 1 slides in with Wine Red #7F011F
      if (wipe1Ref.current) {
        tl.fromTo(
          wipe1Ref.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.3, ease: 'power2.inOut' },
          0.35
        );
      }

      // 2. Color swap to Light Sand text on Wine Red
      const colorTargets = [leftColRef.current, rightColRef.current, gritRef.current].filter(Boolean);
      if (colorTargets.length > 0) {
        tl.to(colorTargets, { color: '#F5EBD0', duration: 0.05 }, 0.5);
      }
      if (ctaWhatsappRef.current) {
        tl.to(ctaWhatsappRef.current, { backgroundColor: '#F5EBD0', color: '#7F011F', duration: 0.05 }, 0.5);
      }
      if (ctaAllRef.current) {
        tl.to(ctaAllRef.current, { borderColor: '#F5EBD0', color: '#F5EBD0', duration: 0.05 }, 0.5);
      }

      // 3. Giant Word 0 -> 1
      if (word0Ref.current) {
        tl.to(word0Ref.current, { x: -110, opacity: 0, duration: 0.15, ease: 'power2.in' }, 0.35);
      }
      if (word1Ref.current) {
        tl.fromTo(
          word1Ref.current,
          { x: 110, opacity: 0 },
          { x: 0, opacity: 0.18, duration: 0.15, ease: 'power3.out' },
          0.5
        );
      }

      // 4. Product Cutout 0 -> 1 (flips/slides out with rotation, new one flips in)
      if (prod0Ref.current) {
        tl.to(
          prod0Ref.current,
          { x: -75, rotation: -10, scale: 0.88, opacity: 0, duration: 0.15, ease: 'power2.in' },
          0.35
        );
      }
      if (prod1Ref.current) {
        tl.fromTo(
          prod1Ref.current,
          { x: 75, rotation: 10, scale: 0.9, opacity: 0 },
          { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.15, ease: 'power3.out' },
          0.5
        );
      }

      // 5. Copy & Badges 0 -> 1
      if (copy0Ref.current) {
        tl.to(copy0Ref.current, { y: -6, opacity: 0, duration: 0.13, ease: 'power2.in' }, 0.35);
      }
      if (copy1Ref.current) {
        tl.fromTo(
          copy1Ref.current,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.13, ease: 'power3.out' },
          0.52
        );
      }

      // 6. Variant chips 0 -> 1
      if (var0Ref.current) {
        tl.to(var0Ref.current, { opacity: 0, y: -4, duration: 0.13 }, 0.35);
      }
      if (var1Ref.current) {
        tl.fromTo(
          var1Ref.current,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.13 },
          0.52
        );
      }

      // 7. Passive indicator dots 0 -> 1
      if (dot0Ref.current) {
        tl.to(dot0Ref.current, { borderColor: 'transparent', opacity: 0.55, duration: 0.15 }, 0.35);
      }
      if (dot0CircleRef.current) {
        tl.to(dot0CircleRef.current, { scale: 1, duration: 0.15 }, 0.35);
      }
      if (dot1Ref.current) {
        tl.to(dot1Ref.current, { borderColor: '#F5EBD0', opacity: 1, duration: 0.15 }, 0.5);
      }
      if (dot1CircleRef.current) {
        tl.to(dot1CircleRef.current, { scale: 1.3, duration: 0.15 }, 0.5);
      }

      // Segment 2 (Time 1.35 -> 1.65, middle at 1.5): Transition Product 1 -> Product 2
      // 1. Wipe layer 2 slides in with Light Sand #F5EBD0
      if (wipe2Ref.current) {
        tl.fromTo(
          wipe2Ref.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.3, ease: 'power2.inOut' },
          1.35
        );
      }

      // 2. Color swap back to Wine Red text on Light Sand
      if (colorTargets.length > 0) {
        tl.to(colorTargets, { color: '#7F011F', duration: 0.05 }, 1.5);
      }
      if (ctaWhatsappRef.current) {
        tl.to(ctaWhatsappRef.current, { backgroundColor: '#7F011F', color: '#F5EBD0', duration: 0.05 }, 1.5);
      }
      if (ctaAllRef.current) {
        tl.to(ctaAllRef.current, { borderColor: '#7F011F', color: '#7F011F', duration: 0.05 }, 1.5);
      }

      // 3. Giant Word 1 -> 2
      if (word1Ref.current) {
        tl.to(word1Ref.current, { x: -110, opacity: 0, duration: 0.15, ease: 'power2.in' }, 1.35);
      }
      if (word2Ref.current) {
        tl.fromTo(
          word2Ref.current,
          { x: 110, opacity: 0 },
          { x: 0, opacity: 0.18, duration: 0.15, ease: 'power3.out' },
          1.5
        );
      }

      // 4. Product Cutout 1 -> 2
      if (prod1Ref.current) {
        tl.to(
          prod1Ref.current,
          { x: -75, rotation: -10, scale: 0.88, opacity: 0, duration: 0.15, ease: 'power2.in' },
          1.35
        );
      }
      if (prod2Ref.current) {
        tl.fromTo(
          prod2Ref.current,
          { x: 75, rotation: 10, scale: 0.9, opacity: 0 },
          { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.15, ease: 'power3.out' },
          1.5
        );
      }

      // 5. Copy & Badges 1 -> 2
      if (copy1Ref.current) {
        tl.to(copy1Ref.current, { y: -6, opacity: 0, duration: 0.13, ease: 'power2.in' }, 1.35);
      }
      if (copy2Ref.current) {
        tl.fromTo(
          copy2Ref.current,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.13, ease: 'power3.out' },
          1.52
        );
      }

      // 6. Variant chips 1 -> 2
      if (var1Ref.current) {
        tl.to(var1Ref.current, { opacity: 0, y: -4, duration: 0.13 }, 1.35);
      }
      if (var2Ref.current) {
        tl.fromTo(
          var2Ref.current,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.13 },
          1.52
        );
      }

      // 7. Passive indicator dots 1 -> 2
      if (dot1Ref.current) {
        tl.to(dot1Ref.current, { borderColor: 'transparent', opacity: 0.55, duration: 0.15 }, 1.35);
      }
      if (dot1CircleRef.current) {
        tl.to(dot1CircleRef.current, { scale: 1, duration: 0.15 }, 1.35);
      }
      if (dot2Ref.current) {
        tl.to(dot2Ref.current, { borderColor: '#7F011F', opacity: 1, duration: 0.15 }, 1.5);
      }
      if (dot2CircleRef.current) {
        tl.to(dot2CircleRef.current, { scale: 1.3, duration: 0.15 }, 1.5);
      }

      // Extend timeline to 2.0 total duration so Product 2 settles in its own resting plateau
      tl.to({}, { duration: 0.35 });

      // Create ScrollTrigger pin spanning ~300vh total scroll distance (~100vh per product)
      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: 'top top',
        end: '+=200%', // 100vh trigger + 200vh pinned scroll travel = 300vh total
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        animation: tl,
        snap: {
          snapTo: [0, 0.5, 1],
          duration: { min: 0.2, max: 0.45 },
          delay: 0.05,
          ease: 'power2.inOut',
        },
      });
    }, heroContainerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Reduced Motion or Mobile Viewport: 3 Full-height Stacked Panels
  if (reducedMotion) {
    return (
      <div id="hero-reduced-motion-stack" className="w-full flex flex-col">
        {products.map((item, idx) => (
          <section
            key={item.name}
            className="w-full min-h-[100dvh] relative flex flex-col justify-center px-5 sm:px-8 py-20 overflow-hidden select-none"
            style={{
              backgroundColor: item.bgHex,
              color: item.fgHex,
            }}
          >
            {/* Giant Background Word */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
              <div
                className="font-condensed font-black uppercase text-[clamp(4.2rem,16vw,14rem)] leading-[0.76] tracking-tighter text-center"
                style={{ color: item.fgHex, opacity: 0.18 }}
              >
                {item.word}
              </div>
            </div>

            {/* Grit Specks */}
            <div className="absolute inset-0 z-15 pointer-events-none select-none flex items-center justify-center opacity-25" aria-hidden="true">
              <svg className="w-full h-full max-w-5xl max-h-[600px]" viewBox="0 0 1000 700" fill="currentColor">
                <circle cx="480" cy="220" r="1.5" /><circle cx="560" cy="190" r="1.2" /><circle cx="420" cy="380" r="1.8" /><circle cx="600" cy="340" r="1.4" />
              </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
                  <span className="font-mono text-xs uppercase tracking-[0.24em] font-bold opacity-80">
                    STAGE 0{idx + 1} &bull; BHILWARA
                  </span>
                </div>

                <h1 lang="hi" className="font-hindi text-3xl sm:text-4xl font-bold leading-tight">
                  मजबूती की सही पहचान
                </h1>

                <p className="font-body text-sm sm:text-base leading-relaxed mt-3 max-w-md font-medium">
                  {item.shortLine}
                </p>

                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border" style={{ borderColor: 'currentColor' }}>
                    {item.name}
                  </span>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-5">
                  <a
                    href="https://wa.me/918278643303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-black text-center shadow-sm"
                    style={{ backgroundColor: item.fgHex, color: item.bgHex }}
                  >
                    Order on WhatsApp
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border text-center"
                    style={{ borderColor: 'currentColor', color: 'inherit' }}
                  >
                    See all products
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 relative flex items-center justify-center my-6 lg:my-0">
                <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                  <div
                    className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-[50%] blur-xl pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)', opacity: 0.6 }}
                    aria-hidden="true"
                  />
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain filter drop-shadow-2xl max-h-[300px]"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 text-left lg:text-right space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.24em] font-bold opacity-80">
                  AVAILABLE SIZES
                </div>
                <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
                  {item.variants.map((v) => (
                    <span
                      key={v}
                      className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border tracking-wide select-none"
                      style={{ borderColor: 'currentColor', color: 'inherit' }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* MOBILE EXPERIENCE (< 1024px): 3 Full-Height Scroll-Snap Panels */}
      <div id="hero-mobile-snap-stack" className="lg:hidden w-full flex flex-col snap-y snap-mandatory">
        {products.map((item, idx) => (
          <section
            key={item.name}
            className="w-full min-h-[100dvh] snap-start relative flex flex-col justify-center px-5 sm:px-8 py-20 overflow-hidden select-none"
            style={{
              backgroundColor: item.bgHex,
              color: item.fgHex,
            }}
          >
            {/* Giant Background Word */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
              <div
                className="font-condensed font-black uppercase text-[clamp(4.5rem,18vw,8rem)] leading-[0.76] tracking-tighter text-center"
                style={{ color: item.fgHex, opacity: 0.18 }}
              >
                {item.word}
              </div>
            </div>

            {/* Grit Specks */}
            <div className="absolute inset-0 z-15 pointer-events-none select-none flex items-center justify-center opacity-25" aria-hidden="true">
              <svg className="w-full h-full max-w-5xl max-h-[600px]" viewBox="0 0 1000 700" fill="currentColor">
                <circle cx="480" cy="220" r="1.5" /><circle cx="560" cy="190" r="1.2" /><circle cx="420" cy="380" r="1.8" /><circle cx="600" cy="340" r="1.4" />
              </svg>
            </div>

            <div className="relative z-30 w-full max-w-xl mx-auto flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80">
                    STAGE 0{idx + 1} &bull; BHILWARA
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-bold opacity-75">
                  0{idx + 1} / 03
                </span>
              </div>

              <h1 lang="hi" className="font-hindi text-3xl sm:text-4xl font-bold leading-tight">
                मजबूती की सही पहचान
              </h1>

              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto my-3 flex items-center justify-center">
                <div
                  className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[70%] h-6 rounded-[50%] blur-xl pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)', opacity: 0.6 }}
                  aria-hidden="true"
                />
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={400}
                  height={400}
                  priority={idx === 0}
                  className="w-full h-full object-contain filter drop-shadow-2xl max-h-[250px]"
                />
              </div>

              <div>
                <p className="font-body text-xs sm:text-sm leading-relaxed max-w-md font-medium">
                  {item.shortLine}
                </p>

                <div className="mt-2.5 inline-flex items-center gap-2">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border" style={{ borderColor: 'currentColor' }}>
                    {item.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 mt-4">
                <a
                  href="https://wa.me/918278643303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-black text-center shadow-sm"
                  style={{ backgroundColor: item.fgHex, color: item.bgHex }}
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border text-center"
                  style={{ borderColor: 'currentColor', color: 'inherit' }}
                >
                  See all products
                </Link>
              </div>

              {/* Static Variant Chips */}
              <div className="mt-4 pt-3 border-t" style={{ borderColor: 'currentColor' }}>
                <div className="font-mono text-[9px] uppercase tracking-[0.24em] font-bold opacity-80 mb-1.5">
                  AVAILABLE SPECIFICATIONS
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.variants.map((v) => (
                    <span
                      key={v}
                      className="font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide select-none"
                      style={{ borderColor: 'currentColor', color: 'inherit' }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* DESKTOP EXPERIENCE (>= 1024px): Pinned GSAP ScrollTrigger Stage */}
      <section
        ref={heroContainerRef}
        id="hero-section"
        className="hidden lg:flex relative w-full h-screen overflow-hidden select-none transition-none"
        style={{
          backgroundColor: '#F5EBD0',
          color: '#7F011F',
        }}
        aria-label="Scroll-driven Interactive Product Stage"
      >
        {/* Fast Wipe Layer 1: Wine Red #7F011F */}
        <div
          ref={wipe1Ref}
          id="hero-wipe-1"
          className="pointer-events-none absolute inset-0 z-0 bg-[#7F011F] will-change-transform"
          style={{ transform: 'translateX(100%)' }}
          aria-hidden="true"
        />

        {/* Fast Wipe Layer 2: Light Sand #F5EBD0 */}
        <div
          ref={wipe2Ref}
          id="hero-wipe-2"
          className="pointer-events-none absolute inset-0 z-0 bg-[#F5EBD0] will-change-transform"
          style={{ transform: 'translateX(100%)' }}
          aria-hidden="true"
        />

        {/* Giant Background Word (Layer z-10) — 3 Layered Words */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Word 0: STRONG (Light Sand phase) */}
          <div
            ref={word0Ref}
            className="absolute font-condensed font-black uppercase text-[clamp(4.2rem,18vw,17.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
            style={{
              color: '#7F011F',
              opacity: 0.18,
            }}
          >
            STRONG
          </div>

          {/* Word 1: BIND (Wine Red phase) */}
          <div
            ref={word1Ref}
            className="absolute font-condensed font-black uppercase text-[clamp(4.2rem,18vw,17.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
            style={{
              color: '#F5EBD0',
              opacity: 0,
              transform: 'translateX(110px)',
            }}
          >
            BIND
          </div>

          {/* Word 2: SOLID (Light Sand phase) */}
          <div
            ref={word2Ref}
            className="absolute font-condensed font-black uppercase text-[clamp(4.2rem,18vw,17.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
            style={{
              color: '#7F011F',
              opacity: 0,
              transform: 'translateX(110px)',
            }}
          >
            SOLID
          </div>
        </div>

        {/* Subtle Grit Specks Layer (Layer z-15) */}
        <div
          ref={gritRef}
          id="hero-grit-specks"
          className="absolute inset-0 z-15 pointer-events-none select-none flex items-center justify-center opacity-25"
          style={{ color: '#7F011F' }}
          aria-hidden="true"
        >
          <svg className="w-full h-full max-w-5xl max-h-[600px]" viewBox="0 0 1000 700" fill="currentColor">
            <circle cx="480" cy="220" r="1.5" /><circle cx="560" cy="190" r="1.2" /><circle cx="420" cy="380" r="1.8" />
            <circle cx="600" cy="340" r="1.4" /><circle cx="360" cy="310" r="1.1" /><circle cx="640" cy="270" r="1.6" />
            <circle cx="510" cy="150" r="1.3" /><circle cx="450" cy="450" r="1.4" /><circle cx="540" cy="470" r="1.5" />
            <circle cx="340" cy="240" r="1.2" /><circle cx="660" cy="410" r="1.7" /><circle cx="400" cy="170" r="1" />
            <circle cx="590" cy="160" r="1.4" /><circle cx="380" cy="410" r="1.3" /><circle cx="620" cy="210" r="1.2" />
            <circle cx="530" cy="290" r="1.6" /><circle cx="460" cy="260" r="1.1" /><circle cx="570" cy="390" r="1.4" />
            <circle cx="410" cy="490" r="1.5" /><circle cx="580" cy="480" r="1.2" />
          </svg>
        </div>

        {/* Main Stage Grid (Layer z-30) */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: Static Tagline, Animated Copy & Dual CTAs */}
            <div
              ref={leftColRef}
              className="lg:col-span-4 text-left flex flex-col justify-center order-1"
              style={{ color: '#7F011F' }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80">
                  PRODUCT STAGE &bull; BHILWARA
                </span>
              </div>

              {/* Tagline "मजबूती की सही पहचान" remains visible and bold */}
              <h1
                lang="hi"
                className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] select-none"
                style={{ color: 'inherit' }}
                aria-label="मजबूती की सही पहचान"
              >
                मजबूती की सही पहचान
              </h1>

              {/* Per-product dynamic text blocks */}
              <div className="relative min-h-[96px] mt-2.5 sm:mt-3">
                {/* Copy 0: TMT Sariya */}
                <div ref={copy0Ref} className="absolute inset-0">
                  <p className="font-body text-xs sm:text-sm leading-relaxed max-w-md font-medium" style={{ color: 'inherit' }}>
                    {products[0].shortLine}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                      {products[0].name}
                    </span>
                  </div>
                </div>

                {/* Copy 1: Binding Wire */}
                <div ref={copy1Ref} className="absolute inset-0 opacity-0" style={{ transform: 'translateY(8px)' }}>
                  <p className="font-body text-xs sm:text-sm leading-relaxed max-w-md font-medium" style={{ color: 'inherit' }}>
                    {products[1].shortLine}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                      {products[1].name}
                    </span>
                  </div>
                </div>

                {/* Copy 2: Cover Blocks */}
                <div ref={copy2Ref} className="absolute inset-0 opacity-0" style={{ transform: 'translateY(8px)' }}>
                  <p className="font-body text-xs sm:text-sm leading-relaxed max-w-md font-medium" style={{ color: 'inherit' }}>
                    {products[2].shortLine}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                      {products[2].name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dual CTAs strictly using the two colors */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-5">
                <a
                  ref={ctaWhatsappRef}
                  id="hero-cta-whatsapp"
                  href="https://wa.me/918278643303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-pill-cta inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-black transition-transform duration-200 active:scale-95 text-center shadow-sm"
                  style={{
                    backgroundColor: '#7F011F',
                    color: '#F5EBD0',
                  }}
                  aria-label="Order on WhatsApp at +91 8278643303"
                >
                  Order on WhatsApp
                </a>

                <Link
                  ref={ctaAllRef}
                  id="hero-cta-all"
                  href="/products"
                  className="hero-pill-outline inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border transition-transform duration-200 active:scale-95 text-center"
                  style={{
                    borderColor: '#7F011F',
                    color: '#7F011F',
                  }}
                  aria-label="See all products catalog"
                >
                  See all products
                </Link>
              </div>

              <div
                className="flex mt-5 pt-2.5 border-t font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-75 items-center gap-3"
                style={{ borderColor: 'currentColor', color: 'inherit' }}
              >
                <span>DIRECT MILL ALLOTMENT</span>
                <span>&bull;</span>
                <span>WEIGHBRIDGE PAKKA BILL</span>
              </div>
            </div>

            {/* CENTER STAGE: Giant Floating Product Cutouts + Contact Shadow */}
            <div className="lg:col-span-5 relative flex items-center justify-center order-2">
              <div className="relative w-full max-w-[380px] lg:max-w-[440px] aspect-square flex items-center justify-center">
                
                {/* Soft Contact Shadow Beneath Floating Product */}
                <div
                  id="hero-contact-shadow"
                  className="absolute bottom-[6%] sm:bottom-[8%] left-1/2 -translate-x-1/2 w-[65%] sm:w-[70%] h-7 sm:h-10 rounded-[50%] blur-xl pointer-events-none transition-opacity"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                />

                {/* Cutout 0: TMT Sariya (Visible on Load) */}
                <div
                  ref={prod0Ref}
                  id="hero-product-cutout-0"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
                >
                  <Image
                    src={products[0].imageSrc}
                    alt={products[0].imageAlt}
                    width={600}
                    height={600}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[410px]"
                  />
                </div>

                {/* Cutout 1: Binding Wire (Slides/flips in on scroll) */}
                <div
                  ref={prod1Ref}
                  id="hero-product-cutout-1"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 will-change-transform"
                  style={{ transform: 'translateX(75px) rotate(10deg) scale(0.9)' }}
                >
                  <Image
                    src={products[1].imageSrc}
                    alt={products[1].imageAlt}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[410px]"
                  />
                </div>

                {/* Cutout 2: Cover Blocks (Slides/flips in on scroll) */}
                <div
                  ref={prod2Ref}
                  id="hero-product-cutout-2"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 will-change-transform"
                  style={{ transform: 'translateX(75px) rotate(10deg) scale(0.9)' }}
                >
                  <Image
                    src={products[2].imageSrc}
                    alt={products[2].imageAlt}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[410px]"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Passive Indicator Dots & Static Variant Chips */}
            <div
              ref={rightColRef}
              className="lg:col-span-3 text-right flex flex-col justify-center order-3 space-y-5"
              style={{ color: '#7F011F' }}
            >
              {/* Passive Progress Indicator Dots (Non-clickable) */}
              <div>
                <div
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80 mb-2.5 text-right"
                  style={{ color: 'inherit' }}
                >
                  STAGE PROGRESSION
                </div>

                <div
                  id="hero-selector-group"
                  className="flex flex-col gap-2 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {/* Indicator 0: TMT Sariya */}
                  <div
                    ref={dot0Ref}
                    className="flex items-center gap-2.5 justify-end px-3 py-2 rounded-xl border text-right transition-all duration-200"
                    style={{
                      borderColor: 'currentColor',
                      backgroundColor: 'rgba(127, 1, 31, 0.08)',
                      opacity: 1,
                    }}
                  >
                    <span
                      ref={dot0CircleRef}
                      className="w-2.5 h-2.5 rounded-full transition-transform duration-200"
                      style={{
                        backgroundColor: 'currentColor',
                        transform: 'scale(1.3)',
                      }}
                    />
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                      01 &mdash; Kay2 Xenox TMT
                    </span>
                  </div>

                  {/* Indicator 1: Binding Wire */}
                  <div
                    ref={dot1Ref}
                    className="flex items-center gap-2.5 justify-end px-3 py-2 rounded-xl border text-right transition-all duration-200"
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: 'transparent',
                      opacity: 0.55,
                    }}
                  >
                    <span
                      ref={dot1CircleRef}
                      className="w-2.5 h-2.5 rounded-full transition-transform duration-200"
                      style={{
                        backgroundColor: 'currentColor',
                        transform: 'scale(1)',
                      }}
                    />
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                      02 &mdash; Binding Wire
                    </span>
                  </div>

                  {/* Indicator 2: Cover Blocks */}
                  <div
                    ref={dot2Ref}
                    className="flex items-center gap-2.5 justify-end px-3 py-2 rounded-xl border text-right transition-all duration-200"
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: 'transparent',
                      opacity: 0.55,
                    }}
                  >
                    <span
                      ref={dot2CircleRef}
                      className="w-2.5 h-2.5 rounded-full transition-transform duration-200"
                      style={{
                        backgroundColor: 'currentColor',
                        transform: 'scale(1)',
                      }}
                    />
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                      03 &mdash; Cover Blocks
                    </span>
                  </div>
                </div>
              </div>

              {/* Static Variant Info Chips */}
              <div className="pt-2.5 border-t" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                <div
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80 mb-2 text-right"
                  style={{ color: 'inherit' }}
                >
                  DIAMETERS &amp; SIZES
                </div>

                <div className="relative min-h-[58px]">
                  {/* Variants 0: TMT Diameters (Static chips) */}
                  <div
                    ref={var0Ref}
                    className="absolute inset-0 flex flex-wrap gap-1.5 justify-end pointer-events-none"
                    aria-label="Available TMT Bar Diameters"
                  >
                    {products[0].variants.map((v) => (
                      <span
                        key={v}
                        className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border tracking-wide select-none"
                        style={{
                          borderColor: 'currentColor',
                          color: 'inherit',
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  {/* Variants 1: Binding Wire Gauges */}
                  <div
                    ref={var1Ref}
                    className="absolute inset-0 flex flex-wrap gap-1.5 justify-end pointer-events-none opacity-0"
                    style={{ transform: 'translateY(6px)' }}
                    aria-label="Available Wire Gauges"
                  >
                    {products[1].variants.map((v) => (
                      <span
                        key={v}
                        className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border tracking-wide select-none"
                        style={{
                          borderColor: 'currentColor',
                          color: 'inherit',
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  {/* Variants 2: Cover Block Sizes */}
                  <div
                    ref={var2Ref}
                    className="absolute inset-0 flex flex-wrap gap-1.5 justify-end pointer-events-none opacity-0"
                    style={{ transform: 'translateY(6px)' }}
                    aria-label="Available Cover Block Sizes"
                  >
                    {products[2].variants.map((v) => (
                      <span
                        key={v}
                        className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border tracking-wide select-none"
                        style={{
                          borderColor: 'currentColor',
                          color: 'inherit',
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scroll Trigger Guidance Notice */}
              <div
                className="flex items-center gap-2 justify-end font-mono text-[9px] uppercase tracking-[0.2em] opacity-75"
                style={{ color: 'inherit' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'currentColor' }} />
                <span>SCROLL VERTICALLY TO CYCLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
