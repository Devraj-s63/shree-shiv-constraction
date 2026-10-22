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

interface StaticProductStackProps {
  isOnlyHero?: boolean;
  isSnap?: boolean;
  className?: string;
}

function StaticProductStack({ isOnlyHero, isSnap, className }: StaticProductStackProps) {
  return (
    <div className={className}>
      {products.map((item, idx) => (
        <section
          key={item.name}
          className={`w-full min-h-[100dvh] relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20 overflow-hidden select-none ${
            isSnap ? 'snap-start' : ''
          }`}
          style={{
            backgroundColor: item.bgHex,
            color: item.fgHex,
          }}
        >
          {/* Giant Background Word (~15% larger & stronger opacity ~0.24) */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="font-condensed font-black uppercase text-[clamp(5.2rem,20vw,18rem)] leading-[0.76] tracking-tighter text-center"
              style={{ color: item.fgHex, opacity: 0.24 }}
            >
              {item.word}
            </div>
          </div>

          {/* Grit Specks */}
          <div
            className="absolute inset-0 z-15 pointer-events-none select-none flex items-center justify-center opacity-25"
            aria-hidden="true"
          >
            <svg className="w-full h-full max-w-5xl max-h-[600px]" viewBox="0 0 1000 700" fill="currentColor">
              <circle cx="480" cy="220" r="1.5" /><circle cx="560" cy="190" r="1.2" /><circle cx="420" cy="380" r="1.8" /><circle cx="600" cy="340" r="1.4" />
            </svg>
          </div>

          {/* Content Grid in Balanced Editorial Grid */}
          <div className="relative z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] font-bold opacity-85">
                  STAGE 0{idx + 1} &bull; BHILWARA
                </span>
              </div>

              {idx === 0 && isOnlyHero ? (
                <h1
                  lang="hi"
                  className="font-hindi text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-[1.04] select-none"
                >
                  मजबूती की सही पहचान
                </h1>
              ) : (
                <h2
                  lang="hi"
                  className="font-hindi text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-[1.04] select-none"
                >
                  मजबूती की सही पहचान
                </h2>
              )}

              <p className="font-body text-lg sm:text-xl lg:text-[1.375rem] leading-relaxed max-w-xl font-medium">
                {item.shortLine}
              </p>

              <div className="pt-1 inline-flex items-center gap-2">
                <span
                  className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border"
                  style={{ borderColor: 'currentColor' }}
                >
                  {item.name}
                </span>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/918278643303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 sm:px-9 py-4 sm:py-4.5 rounded-full font-mono text-base sm:text-lg lg:text-[1.125rem] uppercase tracking-[0.16em] font-black text-center shadow-sm active:scale-95 transition-transform"
                  style={{ backgroundColor: item.fgHex, color: item.bgHex }}
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 sm:px-9 py-4 sm:py-4.5 rounded-full font-mono text-base sm:text-lg lg:text-[1.125rem] uppercase tracking-[0.16em] font-bold border-2 text-center active:scale-95 transition-transform"
                  style={{ borderColor: 'currentColor', color: 'inherit' }}
                >
                  See all products
                </Link>
              </div>

              <div
                className="pt-4 border-t font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-medium opacity-85 flex items-center gap-3"
                style={{ borderColor: 'currentColor' }}
              >
                <span>DIRECT MILL ALLOTMENT</span>
                <span>&bull;</span>
                <span>WEIGHBRIDGE PAKKA BILL</span>
              </div>
            </div>

            {/* Product Visual & Repositioned Diameter Chips */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-center justify-center">
                <div
                  className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-[50%] blur-xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                />
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={500}
                  height={500}
                  priority={idx === 0}
                  className="w-full h-full object-contain filter drop-shadow-2xl max-h-[340px]"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {item.variants.map((v) => (
                  <span
                    key={v}
                    className="font-mono text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full border tracking-wide select-none"
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
  const visualColRef = useRef<HTMLDivElement>(null);
  const gritRef = useRef<HTMLDivElement>(null);
  const ctaWhatsappRef = useRef<HTMLAnchorElement>(null);
  const ctaAllRef = useRef<HTMLAnchorElement>(null);

  // Passive bottom progress line ref
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // (8) Preload all three product cutout images before pin engages so swaps never pop in
    products.forEach((p) => {
      const img = new window.Image();
      img.src = p.imageSrc;
    });

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

    gsap.registerPlugin(ScrollTrigger);

    // Responsive ScrollTrigger: Automatically attaches on >= 1024px, reverts on < 1024px
    const mm = gsap.matchMedia();

    mm.add(
      '(min-width: 1024px)',
      () => {
        if (!heroContainerRef.current) return;

        // (5) Animate transform and opacity only (force3D on) - initialize starting states via GSAP
        // (6) Full-screen wipe layers animated by transform (scaleX) stacked above base background
        if (wipe1Ref.current) gsap.set(wipe1Ref.current, { scaleX: 0, transformOrigin: 'right center', force3D: true });
        if (wipe2Ref.current) gsap.set(wipe2Ref.current, { scaleX: 0, transformOrigin: 'right center', force3D: true });
        if (word1Ref.current) gsap.set(word1Ref.current, { x: 120, opacity: 0, force3D: true });
        if (word2Ref.current) gsap.set(word2Ref.current, { x: 120, opacity: 0, force3D: true });
        if (prod1Ref.current) gsap.set(prod1Ref.current, { x: 80, rotation: 8, scale: 0.9, opacity: 0, force3D: true });
        if (prod2Ref.current) gsap.set(prod2Ref.current, { x: 80, rotation: 8, scale: 0.9, opacity: 0, force3D: true });
        if (copy1Ref.current) gsap.set(copy1Ref.current, { y: 10, opacity: 0, force3D: true });
        if (copy2Ref.current) gsap.set(copy2Ref.current, { y: 10, opacity: 0, force3D: true });
        if (var1Ref.current) gsap.set(var1Ref.current, { y: 8, opacity: 0, force3D: true });
        if (var2Ref.current) gsap.set(var2Ref.current, { y: 8, opacity: 0, force3D: true });

        // (1) ONE master GSAP timeline scrubbed across full ~300vh
        // Total duration = 10.0.
        // 60% calm hold, 40% transition per segment
        const tl = gsap.timeline({
          defaults: { ease: 'none', force3D: true },
        });

        // Continuous passive progress line scrub (0% to 100%)
        if (progressLineRef.current) {
          tl.to(
            progressLineRef.current,
            {
              scaleX: 1,
              ease: 'none',
              duration: 10.0,
            },
            0
          );
        }

        // --- PRODUCT 0 (Kay2 Xenox TMT Sariya / STRONG) ---
        // Calm hold with subtle idle drift from t = 0.0 to t = 2.0 (duration 2.0 = 40% of Segment 1)
        if (prod0Ref.current) {
          tl.to(prod0Ref.current, { y: -6, duration: 2.0, ease: 'sine.inOut' }, 0);
        }

        // --- TRANSITION 1 (Product 0 -> Product 1, Binding Wire / BIND) ---
        // Transition window: t = 2.0 to t = 4.0 (duration 2.0 = 40% of Segment 1)
        // (4) Smooth eases: power2.inOut or sine.inOut everywhere
        // (6) Wipe layer 1 (Wine Red #7F011F) scales in via transform scaleX from right
        if (wipe1Ref.current) {
          tl.to(wipe1Ref.current, { scaleX: 1, duration: 1.8, ease: 'sine.inOut' }, 2.1);
        }

        // Color swap to Light Sand text on Wine Red
        const colorTargets = [leftColRef.current, visualColRef.current, gritRef.current].filter(Boolean);
        if (colorTargets.length > 0) {
          tl.to(colorTargets, { color: '#F5EBD0', duration: 1.2, ease: 'sine.inOut' }, 2.4);
        }
        if (ctaWhatsappRef.current) {
          tl.to(ctaWhatsappRef.current, { backgroundColor: '#F5EBD0', color: '#7F011F', duration: 1.2, ease: 'sine.inOut' }, 2.4);
        }
        if (ctaAllRef.current) {
          tl.to(ctaAllRef.current, { borderColor: '#F5EBD0', color: '#F5EBD0', duration: 1.2, ease: 'sine.inOut' }, 2.4);
        }

        // Giant Word 0 -> 1 (sine.inOut)
        if (word0Ref.current) {
          tl.to(word0Ref.current, { x: -140, opacity: 0, duration: 1.4, ease: 'sine.inOut' }, 2.0);
        }
        if (word1Ref.current) {
          tl.to(word1Ref.current, { x: 0, opacity: 0.24, duration: 1.5, ease: 'sine.inOut' }, 2.5);
        }

        // Product Cutout 0 -> 1 (power2.inOut)
        if (prod0Ref.current) {
          tl.to(
            prod0Ref.current,
            { x: -90, rotation: -8, scale: 0.9, opacity: 0, duration: 1.4, ease: 'power2.inOut' },
            2.0
          );
        }
        if (prod1Ref.current) {
          tl.to(
            prod1Ref.current,
            { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.5, ease: 'power2.inOut' },
            2.5
          );
        }

        // Copy & Badges 0 -> 1 (power2.inOut)
        if (copy0Ref.current) {
          tl.to(copy0Ref.current, { y: -10, opacity: 0, duration: 1.3, ease: 'power2.inOut' }, 2.1);
        }
        if (copy1Ref.current) {
          tl.to(copy1Ref.current, { y: 0, opacity: 1, duration: 1.4, ease: 'power2.inOut' }, 2.6);
        }

        // Static Variant chips 0 -> 1 (power2.inOut)
        if (var0Ref.current) {
          tl.to(var0Ref.current, { opacity: 0, y: -8, duration: 1.3, ease: 'power2.inOut' }, 2.1);
        }
        if (var1Ref.current) {
          tl.to(var1Ref.current, { opacity: 1, y: 0, duration: 1.4, ease: 'power2.inOut' }, 2.6);
        }

        // --- PRODUCT 1 (Binding Wire / BIND) ---
        // Product 1 arrives FULLY SETTLED by t = 4.0.
        // Calm hold with subtle idle drift from t = 4.0 to t = 7.0 (duration 3.0 = 60% calm hold!)
        // Perfectly centered at t = 5.0 (the 0.5 snap point!)
        if (prod1Ref.current) {
          tl.to(prod1Ref.current, { y: -6, duration: 3.0, ease: 'sine.inOut' }, 4.0);
        }

        // --- TRANSITION 2 (Product 1 -> Product 2, Cover Blocks / SOLID) ---
        // Transition window: t = 7.0 to t = 9.0 (duration 2.0 = 40% of Segment 2)
        // (6) Wipe layer 2 (Light Sand #F5EBD0) scales in via transform scaleX stacked above Wipe layer 1
        if (wipe2Ref.current) {
          tl.to(wipe2Ref.current, { scaleX: 1, duration: 1.8, ease: 'sine.inOut' }, 7.1);
        }

        // Color swap back to Wine Red text on Light Sand
        if (colorTargets.length > 0) {
          tl.to(colorTargets, { color: '#7F011F', duration: 1.2, ease: 'sine.inOut' }, 7.4);
        }
        if (ctaWhatsappRef.current) {
          tl.to(ctaWhatsappRef.current, { backgroundColor: '#7F011F', color: '#F5EBD0', duration: 1.2, ease: 'sine.inOut' }, 7.4);
        }
        if (ctaAllRef.current) {
          tl.to(ctaAllRef.current, { borderColor: '#7F011F', color: '#7F011F', duration: 1.2, ease: 'sine.inOut' }, 7.4);
        }

        // Giant Word 1 -> 2 (sine.inOut)
        if (word1Ref.current) {
          tl.to(word1Ref.current, { x: -140, opacity: 0, duration: 1.4, ease: 'sine.inOut' }, 7.0);
        }
        if (word2Ref.current) {
          tl.to(word2Ref.current, { x: 0, opacity: 0.24, duration: 1.5, ease: 'sine.inOut' }, 7.5);
        }

        // Product Cutout 1 -> 2 (power2.inOut)
        if (prod1Ref.current) {
          tl.to(
            prod1Ref.current,
            { x: -90, rotation: -8, scale: 0.9, opacity: 0, duration: 1.4, ease: 'power2.inOut' },
            7.0
          );
        }
        if (prod2Ref.current) {
          tl.to(
            prod2Ref.current,
            { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.5, ease: 'power2.inOut' },
            7.5
          );
        }

        // Copy & Badges 1 -> 2 (power2.inOut)
        if (copy1Ref.current) {
          tl.to(copy1Ref.current, { y: -10, opacity: 0, duration: 1.3, ease: 'power2.inOut' }, 7.1);
        }
        if (copy2Ref.current) {
          tl.to(copy2Ref.current, { y: 0, opacity: 1, duration: 1.4, ease: 'power2.inOut' }, 7.6);
        }

        // Static Variant chips 1 -> 2 (power2.inOut)
        if (var1Ref.current) {
          tl.to(var1Ref.current, { opacity: 0, y: -8, duration: 1.3, ease: 'power2.inOut' }, 7.1);
        }
        if (var2Ref.current) {
          tl.to(var2Ref.current, { opacity: 1, y: 0, duration: 1.4, ease: 'power2.inOut' }, 7.6);
        }

        // --- PRODUCT 2 (Cover Blocks / SOLID) ---
        // Product 2 arrives FULLY SETTLED by t = 9.0.
        // Calm hold with subtle idle drift from t = 9.0 to t = 10.0 (and releases into next section at t = 10.0 / snap 1.0)
        if (prod2Ref.current) {
          tl.to(prod2Ref.current, { y: -4, duration: 1.0, ease: 'sine.inOut' }, 9.0);
        }

        // (2) Numeric catch-up scrub: 1.2
        // (3) Soft snap to resting points [0, 0.5, 1], duration between 0.25s and 0.6s, ease power3.inOut, delay 0.1
        // (7) anticipatePin: 1
        ScrollTrigger.create({
          trigger: heroContainerRef.current,
          start: 'top top',
          end: '+=200%', // 100vh trigger + 200vh pinned scroll travel = 300vh total
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.2,
          animation: tl,
          snap: {
            snapTo: [0, 0.5, 1],
            duration: { min: 0.25, max: 0.6 },
            delay: 0.1,
            ease: 'power3.inOut',
          },
        });
      },
      heroContainerRef
    );

    return () => mm.revert();
  }, [reducedMotion]);

  // Reduced Motion: 3 Full-height Stacked Static Panels (No Pin, No Snap)
  if (reducedMotion) {
    return <StaticProductStack isOnlyHero={true} isSnap={false} className="w-full flex flex-col" />;
  }

  return (
    <>
      {/* MOBILE EXPERIENCE (< 1024px): 3 Full-Height Scroll-Snap Panels */}
      <StaticProductStack
        isOnlyHero={false}
        isSnap={true}
        className="lg:hidden w-full flex flex-col snap-y snap-mandatory"
      />

      {/* DESKTOP EXPERIENCE (>= 1024px): Pinned GSAP ScrollTrigger Stage wrapped in static container */}
      <div className="hidden lg:block w-full">
        <section
          ref={heroContainerRef}
          id="hero-section"
          className="relative w-full h-screen overflow-hidden select-none transition-none"
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
            className="pointer-events-none absolute inset-0 z-[5] bg-[#7F011F] will-change-transform"
            aria-hidden="true"
          />

          {/* Fast Wipe Layer 2: Light Sand #F5EBD0 */}
          <div
            ref={wipe2Ref}
            id="hero-wipe-2"
            className="pointer-events-none absolute inset-0 z-[6] bg-[#F5EBD0] will-change-transform"
            aria-hidden="true"
          />

          {/* Giant Background Word (Layer z-10) — ~15% larger & stronger opacity ~0.24 */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Word 0: STRONG (Light Sand phase) */}
            <div
              ref={word0Ref}
              className="absolute font-condensed font-black uppercase text-[clamp(5.5rem,21vw,20.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
              style={{
                color: '#7F011F',
                opacity: 0.24,
              }}
            >
              STRONG
            </div>

            {/* Word 1: BIND (Wine Red phase) */}
            <div
              ref={word1Ref}
              className="absolute font-condensed font-black uppercase text-[clamp(5.5rem,21vw,20.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
              style={{
                color: '#F5EBD0',
                opacity: 0,
              }}
            >
              BIND
            </div>

            {/* Word 2: SOLID (Light Sand phase) */}
            <div
              ref={word2Ref}
              className="absolute font-condensed font-black uppercase text-[clamp(5.5rem,21vw,20.5rem)] leading-[0.76] tracking-tighter text-center will-change-transform"
              style={{
                color: '#7F011F',
                opacity: 0,
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

          {/* Main Stage Grid (Layer z-30): Clean 2-Column Editorial Composition without Right Selector Panel */}
          <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* LEFT COLUMN (7 cols): Scaled-Up Typography, Headline, Dynamic Copy & CTAs */}
              <div
                ref={leftColRef}
                className="lg:col-span-7 text-left flex flex-col justify-center space-y-4"
                style={{ color: '#7F011F' }}
              >
                {/* Kicker up one size step */}
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] font-bold opacity-85">
                    PRODUCT STAGE &bull; BHILWARA
                  </span>
                </div>

                {/* Hindi Headline scaled up to clamp(2.75rem, 5.5vw, 5rem) with tight leading */}
                <h1
                  lang="hi"
                  className="font-hindi text-[clamp(2.75rem,5.5vw,5rem)] font-bold leading-[1.04] select-none"
                  style={{ color: 'inherit' }}
                  aria-label="मजबूती की सही पहचान"
                >
                  मजबूती की सही पहचान
                </h1>

                {/* Per-product dynamic text blocks scaled to ~1.375rem */}
                <div className="relative min-h-[105px] pt-1">
                  {/* Copy 0: TMT Sariya */}
                  <div ref={copy0Ref} className="absolute inset-0">
                    <p className="font-body text-lg sm:text-xl lg:text-[1.375rem] leading-relaxed max-w-xl font-medium" style={{ color: 'inherit' }}>
                      {products[0].shortLine}
                    </p>
                    <div className="mt-3.5 inline-flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                        {products[0].name}
                      </span>
                    </div>
                  </div>

                  {/* Copy 1: Binding Wire */}
                  <div ref={copy1Ref} className="absolute inset-0 opacity-0">
                    <p className="font-body text-lg sm:text-xl lg:text-[1.375rem] leading-relaxed max-w-xl font-medium" style={{ color: 'inherit' }}>
                      {products[1].shortLine}
                    </p>
                    <div className="mt-3.5 inline-flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                        {products[1].name}
                      </span>
                    </div>
                  </div>

                  {/* Copy 2: Cover Blocks */}
                  <div ref={copy2Ref} className="absolute inset-0 opacity-0">
                    <p className="font-body text-lg sm:text-xl lg:text-[1.375rem] leading-relaxed max-w-xl font-medium" style={{ color: 'inherit' }}>
                      {products[2].shortLine}
                    </p>
                    <div className="mt-3.5 inline-flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border" style={{ borderColor: 'currentColor', color: 'inherit' }}>
                        {products[2].name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dual CTAs with button text to ~1.125rem and larger padding */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 pt-2">
                  <a
                    ref={ctaWhatsappRef}
                    id="hero-cta-whatsapp"
                    href="https://wa.me/918278643303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-pill-cta inline-flex items-center justify-center px-8 sm:px-9 py-4 sm:py-4.5 rounded-full font-mono text-base sm:text-lg lg:text-[1.125rem] uppercase tracking-[0.16em] font-black transition-transform duration-200 active:scale-95 text-center shadow-sm"
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
                    className="hero-pill-outline inline-flex items-center justify-center px-8 sm:px-9 py-4 sm:py-4.5 rounded-full font-mono text-base sm:text-lg lg:text-[1.125rem] uppercase tracking-[0.16em] font-bold border-2 transition-transform duration-200 active:scale-95 text-center"
                    style={{
                      borderColor: '#7F011F',
                      color: '#7F011F',
                    }}
                    aria-label="See all products catalog"
                  >
                    See all products
                  </Link>
                </div>

                {/* Bottom trust line up one size step */}
                <div
                  className="pt-4 border-t font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-medium opacity-85 flex items-center gap-3"
                  style={{ borderColor: 'currentColor', color: 'inherit' }}
                >
                  <span>DIRECT MILL ALLOTMENT</span>
                  <span>&bull;</span>
                  <span>WEIGHBRIDGE PAKKA BILL</span>
                </div>
              </div>

              {/* RIGHT COLUMN (5 cols): Product Visual + Diameter Pills Repositioned Underneath */}
              <div
                ref={visualColRef}
                className="lg:col-span-5 relative flex flex-col items-center justify-center"
                style={{ color: '#7F011F' }}
              >
                <div className="relative w-full max-w-[420px] lg:max-w-[480px] flex flex-col items-center">
                  
                  {/* Product Visual Frame */}
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    {/* Soft Contact Shadow Beneath Floating Product */}
                    <div
                      id="hero-contact-shadow"
                      className="absolute bottom-[6%] sm:bottom-[8%] left-1/2 -translate-x-1/2 w-[68%] sm:w-[72%] h-7 sm:h-10 rounded-[50%] blur-xl pointer-events-none transition-opacity"
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
                        width={650}
                        height={650}
                        priority
                        className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[440px]"
                      />
                    </div>

                    {/* Cutout 1: Binding Wire (Slides/flips in on scroll) */}
                    <div
                      ref={prod1Ref}
                      id="hero-product-cutout-1"
                      className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 will-change-transform"
                    >
                      <Image
                        src={products[1].imageSrc}
                        alt={products[1].imageAlt}
                        width={650}
                        height={650}
                        priority
                        className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[440px]"
                      />
                    </div>

                    {/* Cutout 2: Cover Blocks (Slides/flips in on scroll) */}
                    <div
                      ref={prod2Ref}
                      id="hero-product-cutout-2"
                      className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 will-change-transform"
                    >
                      <Image
                        src={products[2].imageSrc}
                        alt={products[2].imageAlt}
                        width={650}
                        height={650}
                        priority
                        className="w-full h-full object-contain filter drop-shadow-2xl max-h-[380px] lg:max-h-[440px]"
                      />
                    </div>
                  </div>

                  {/* Repositioned under the product visual: static, non-interactive diameter/size info chips */}
                  <div className="relative min-h-[48px] w-full mt-4 flex items-center justify-center">
                    {/* Variants 0: TMT Diameters (Static chips) */}
                    <div
                      ref={var0Ref}
                      className="absolute inset-0 flex flex-wrap gap-2 justify-center items-center pointer-events-none"
                      aria-label="Available TMT Bar Diameters"
                    >
                      {products[0].variants.map((v) => (
                        <span
                          key={v}
                          className="font-mono text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full border tracking-wide select-none"
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
                      className="absolute inset-0 flex flex-wrap gap-2 justify-center items-center pointer-events-none opacity-0"
                      aria-label="Available Wire Gauges"
                    >
                      {products[1].variants.map((v) => (
                        <span
                          key={v}
                          className="font-mono text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full border tracking-wide select-none"
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
                      className="absolute inset-0 flex flex-wrap gap-2 justify-center items-center pointer-events-none opacity-0"
                      aria-label="Available Cover Block Sizes"
                    >
                      {products[2].variants.map((v) => (
                        <span
                          key={v}
                          className="font-mono text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full border tracking-wide select-none"
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
              </div>
            </div>
          </div>

          {/* Thin passive progress line at the hero's bottom edge (fills as user scrolls through the 3 products, non-interactive) */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-current/15 pointer-events-none z-40 overflow-hidden"
            aria-hidden="true"
          >
            <div
              ref={progressLineRef}
              className="h-full bg-current origin-left will-change-transform"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
