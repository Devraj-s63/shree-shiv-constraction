'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const giantWordRef = useRef<HTMLDivElement>(null);
  const productWrapRef = useRef<HTMLDivElement>(null);
  const copyWrapRef = useRef<HTMLDivElement>(null);

  const currentTimeline = useRef<gsap.core.Timeline | null>(null);
  const isTransitioning = useRef(false);

  const activeProduct = products[currentIndex];

  const goToProduct = (nextIndex: number, direction: 'next' | 'prev' = 'next') => {
    if (nextIndex === currentIndex || isTransitioning.current) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrentIndex(nextIndex);
      setActiveVariant(0);
      return;
    }

    if (currentTimeline.current) {
      currentTimeline.current.kill();
      currentTimeline.current = null;
    }

    isTransitioning.current = true;
    const next = products[nextIndex];
    const dirMult = direction === 'next' ? 1 : -1;

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning.current = false;
        currentTimeline.current = null;
      },
    });
    currentTimeline.current = tl;

    // 1. Hardware-accelerated slide wipe
    if (wipeRef.current) {
      wipeRef.current.style.backgroundColor = next.bgHex;
      tl.fromTo(
        wipeRef.current,
        { xPercent: dirMult > 0 ? 100 : -100 },
        {
          xPercent: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            setCurrentIndex(nextIndex);
            setActiveVariant(0);
            gsap.set(wipeRef.current, { xPercent: 100 });
          },
        },
        0
      );
    } else {
      setCurrentIndex(nextIndex);
      setActiveVariant(0);
    }

    // 2. Old product flips/slides out with rotation
    if (productWrapRef.current) {
      tl.to(
        productWrapRef.current,
        {
          x: -75 * dirMult,
          rotation: -10 * dirMult,
          scale: 0.88,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
        },
        0
      );

      tl.fromTo(
        productWrapRef.current,
        {
          x: 75 * dirMult,
          rotation: 10 * dirMult,
          scale: 0.9,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.38,
          ease: 'power3.out',
        },
        0.22
      );
    }

    // 3. Giant word slides horizontally
    if (giantWordRef.current) {
      tl.to(
        giantWordRef.current,
        {
          x: -110 * dirMult,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        },
        0
      );

      tl.fromTo(
        giantWordRef.current,
        {
          x: 110 * dirMult,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 0.18,
          duration: 0.4,
          ease: 'power3.out',
        },
        0.2
      );
    }

    // 4. Copy transition
    if (copyWrapRef.current) {
      tl.to(
        copyWrapRef.current,
        {
          y: -6,
          opacity: 0,
          duration: 0.16,
          ease: 'power2.in',
        },
        0
      );

      tl.fromTo(
        copyWrapRef.current,
        {
          y: 8,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.34,
          ease: 'power3.out',
        },
        0.22
      );
    }
  };

  // Auto-advance every 5 seconds (paused on hover/touch and disabled in reduced motion)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = setInterval(() => {
      if (!isPaused && !isTransitioning.current) {
        goToProduct((currentIndex + 1) % products.length, 'next');
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      goToProduct((currentIndex + 1) % products.length, 'next');
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      goToProduct((currentIndex - 1 + products.length) % products.length, 'prev');
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative w-full lg:h-screen lg:min-h-[640px] lg:max-h-[900px] pt-20 pb-6 lg:py-0 flex flex-col justify-center overflow-hidden select-none transition-colors duration-200"
      data-current-index={currentIndex}
      data-theme={activeProduct.theme}
      style={{
        backgroundColor: activeProduct.bgHex,
        color: activeProduct.fgHex,
      }}
      aria-label="Interactive Product Stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Fast Wipe Overlay Layer */}
      <div
        ref={wipeRef}
        id="hero-wipe-layer"
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        style={{ transform: 'translateX(100%)' }}
        aria-hidden="true"
      />

      {/* Giant Background Word (Layer z-10) */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={giantWordRef}
          id="hero-giant-word"
          className="font-condensed font-black uppercase text-[clamp(4.2rem,18vw,17.5rem)] leading-[0.76] tracking-tighter text-center transition-colors duration-200"
          style={{
            color: activeProduct.fgHex,
            opacity: 0.18,
            willChange: 'transform, opacity',
          }}
        >
          {activeProduct.word}
        </div>
      </div>

      {/* Subtle Grit Specks Layer (Layer z-15) */}
      <div
        id="hero-grit-specks"
        className="absolute inset-0 z-15 pointer-events-none select-none flex items-center justify-center opacity-25"
        aria-hidden="true"
      >
        <svg className="w-full h-full max-w-5xl max-h-[600px]" viewBox="0 0 1000 700" fill="currentColor">
          <circle cx="480" cy="220" r="1.5" />
          <circle cx="560" cy="190" r="1.2" />
          <circle cx="420" cy="380" r="1.8" />
          <circle cx="600" cy="340" r="1.4" />
          <circle cx="360" cy="310" r="1.1" />
          <circle cx="640" cy="270" r="1.6" />
          <circle cx="510" cy="150" r="1.3" />
          <circle cx="450" cy="450" r="1.4" />
          <circle cx="540" cy="470" r="1.5" />
          <circle cx="340" cy="240" r="1.2" />
          <circle cx="660" cy="410" r="1.7" />
          <circle cx="400" cy="170" r="1" />
          <circle cx="590" cy="160" r="1.4" />
          <circle cx="380" cy="410" r="1.3" />
          <circle cx="620" cy="210" r="1.2" />
          <circle cx="530" cy="290" r="1.6" />
          <circle cx="460" cy="260" r="1.1" />
          <circle cx="570" cy="390" r="1.4" />
          <circle cx="410" cy="490" r="1.5" />
          <circle cx="580" cy="480" r="1.2" />
        </svg>
      </div>

      {/* Main Layout Grid (Layer z-30) */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Tagline, Dynamic Short Line & Dual CTAs */}
          <div className="lg:col-span-4 text-left flex flex-col justify-center order-1">
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'currentColor' }} />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80">
                PRODUCT STAGE &bull; BHILWARA
              </span>
            </div>

            <h1
              lang="hi"
              className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] select-none"
              style={{ color: 'inherit' }}
              aria-label="मजबूती की सही पहचान"
            >
              मजबूती की सही पहचान
            </h1>

            <div ref={copyWrapRef}>
              <p
                id="hero-product-desc"
                className="font-body text-xs sm:text-sm lg:text-sm leading-relaxed mt-2.5 sm:mt-3 max-w-md font-medium"
                style={{ color: 'inherit' }}
              >
                {activeProduct.shortLine}
              </p>

              <div className="mt-3 sm:mt-4 inline-flex items-center gap-2">
                <span
                  id="hero-product-name-badge"
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full border transition-colors duration-200"
                  style={{ borderColor: 'currentColor', color: 'inherit' }}
                >
                  {activeProduct.name}
                </span>
              </div>
            </div>

            {/* Dual CTAs strictly using the two theme colors */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mt-4 sm:mt-5">
              <a
                id="hero-cta-whatsapp"
                href="https://wa.me/918278643303"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill-cta inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-black transition-transform duration-200 active:scale-95 text-center shadow-sm"
                style={{
                  backgroundColor: activeProduct.fgHex,
                  color: activeProduct.bgHex,
                }}
                aria-label="Order on WhatsApp at +91 8278643303"
              >
                Order on WhatsApp
              </a>

              <Link
                id="hero-cta-all"
                href="/products"
                className="hero-pill-outline inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold border transition-transform duration-200 active:scale-95 text-center"
                style={{
                  borderColor: 'currentColor',
                  color: 'inherit',
                }}
                aria-label="See all products catalog"
              >
                See all products
              </Link>
            </div>

            <div
              className="hidden sm:flex mt-4 pt-2.5 border-t font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-75 items-center gap-3"
              style={{ borderColor: 'currentColor', color: 'inherit' }}
            >
              <span>DIRECT MILL ALLOTMENT</span>
              <span>&bull;</span>
              <span>WEIGHBRIDGE PAKKA BILL</span>
            </div>
          </div>

          {/* CENTER STAGE: Giant Floating Product Cutout + Contact Shadow */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-2 my-2 sm:my-3 lg:my-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] aspect-square flex items-center justify-center">
              
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

              {/* Product Cutout Image (Layer z-25, next/image with priority) */}
              <div
                ref={productWrapRef}
                id="hero-product-wrap"
                className="relative z-25 w-full h-full flex items-center justify-center pointer-events-none"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image
                  id="hero-product-img"
                  src={activeProduct.imageSrc}
                  alt={activeProduct.imageAlt}
                  width={600}
                  height={600}
                  priority
                  className="w-full h-full object-contain filter drop-shadow-2xl max-h-[280px] sm:max-h-[340px] lg:max-h-[410px]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Selector Dots & Variant Pills */}
          <div className="lg:col-span-3 text-left lg:text-right flex flex-col justify-center order-3 space-y-4 sm:space-y-5">
            <div>
              <div
                className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80 mb-2 text-left lg:text-right"
                style={{ color: 'inherit' }}
              >
                SELECT PRODUCT
              </div>

              <div
                id="hero-selector-group"
                className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0"
                role="tablist"
                aria-label="Product Switcher"
              >
                {products.map((item, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => goToProduct(idx, idx > currentIndex ? 'next' : 'prev')}
                      className="hero-selector-btn group flex items-center gap-2.5 lg:justify-end px-3 py-2 rounded-xl border text-left lg:text-right transition-all duration-200 cursor-pointer active:scale-98 whitespace-nowrap"
                      data-product-index={idx}
                      role="tab"
                      aria-selected={isSelected}
                      aria-label={`Select ${item.name}`}
                      style={{
                        color: 'inherit',
                        borderColor: isSelected ? 'currentColor' : 'transparent',
                        backgroundColor: isSelected
                          ? activeProduct.theme === 'wine'
                            ? 'rgba(245, 235, 208, 0.12)'
                            : 'rgba(127, 1, 31, 0.08)'
                          : 'transparent',
                        opacity: isSelected ? 1 : 0.65,
                      }}
                    >
                      <span
                        className="selector-dot w-2.5 h-2.5 rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: 'currentColor',
                          transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                        }}
                      />
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
                        0{idx + 1} &mdash; {item.name.replace(' Sariya', '')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Variant Pills */}
            <div className="pt-2.5 border-t" style={{ borderColor: 'currentColor', color: 'inherit' }}>
              <div
                className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold opacity-80 mb-2 text-left lg:text-right"
                style={{ color: 'inherit' }}
              >
                DIAMETERS &amp; SIZES
              </div>

              <div
                id="hero-variant-pills"
                className="flex flex-wrap gap-1.5 justify-start lg:justify-end"
                aria-label="Available product specifications"
              >
                {activeProduct.variants.map((v, idx) => {
                  const isPillActive = idx === activeVariant;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setActiveVariant(idx)}
                      className="variant-pill font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border tracking-wide transition-all select-none cursor-pointer"
                      style={{
                        borderColor: activeProduct.fgHex,
                        color: isPillActive ? activeProduct.bgHex : activeProduct.fgHex,
                        backgroundColor: isPillActive ? activeProduct.fgHex : 'transparent',
                      }}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Auto-cycle status */}
            <div
              className="flex items-center gap-2 justify-start lg:justify-end font-mono text-[9px] uppercase tracking-[0.2em] opacity-75"
              style={{ color: 'inherit' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'currentColor' }} />
              <span id="hero-timer-status">
                {isPaused ? 'AUTO-CYCLE: PAUSED' : 'AUTO-CYCLE: 5S ACTIVE'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
