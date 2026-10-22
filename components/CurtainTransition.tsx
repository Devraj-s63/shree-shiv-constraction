'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export default function CurtainTransition() {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !curtainRef.current) return;

    const curtain = curtainRef.current;
    const tl = gsap.timeline();

    tl.set(curtain, { display: 'block', yPercent: -100 })
      .to(curtain, {
        yPercent: 0,
        duration: 0.28,
        ease: 'power3.in',
      })
      .to(curtain, {
        yPercent: 100,
        duration: 0.32,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(curtain, { display: 'none', yPercent: -100 });
        },
      });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[9999] bg-[#7F011F] pointer-events-none hidden will-change-transform"
      aria-hidden="true"
    />
  );
}
