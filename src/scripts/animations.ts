import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Theatrical Motion System (truestaging.co.uk editorial inspiration)
 * Smooth, theatrical, cinematic drift with quiet confidence:
 * - Letter/line serif headline reveal on load
 * - Slow parallax drift of blueprint layers
 * - Gentle scroll reveals
 * - Respects prefers-reduced-motion
 */
export function initAnimations() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // 1. Theatrical Hero Reveal
  initHeroTheatrical();

  // 2. Slow Parallax Drift of Blueprint Layers
  initBlueprintParallax();

  // 3. Gentle Editorial Scroll Reveals
  initScrollTheatrical();
}

/**
 * 1. Theatrical Hero Reveal
 * Smooth line-by-line serif headline reveal on load
 */
function initHeroTheatrical() {
  const kicker = document.querySelector('.hero-theatrical-kicker');
  const lines = document.querySelectorAll('.hero-theatrical-line');
  const sub = document.querySelector('.hero-theatrical-sub');
  const cta = document.querySelector('.hero-theatrical-cta');
  const meta = document.querySelector('.hero-theatrical-meta');

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
  });

  if (kicker) {
    tl.from(kicker, {
      y: 15,
      opacity: 0,
      duration: 0.7,
      clearProps: 'transform,opacity',
    });
  }

  if (lines.length) {
    tl.from(
      lines,
      {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      },
      '-=0.4'
    );
  }

  if (sub) {
    tl.from(
      sub,
      {
        y: 20,
        opacity: 0,
        duration: 0.75,
        clearProps: 'transform,opacity',
      },
      '-=0.45'
    );
  }

  if (cta) {
    tl.from(
      cta,
      {
        y: 18,
        opacity: 0,
        duration: 0.7,
        clearProps: 'transform,opacity',
      },
      '-=0.4'
    );
  }

  if (meta) {
    tl.from(
      meta,
      {
        opacity: 0,
        duration: 0.6,
        clearProps: 'opacity',
      },
      '-=0.3'
    );
  }
}

/**
 * 2. Slow Parallax Drift of Blueprint Layers
 */
function initBlueprintParallax() {
  const driftLeft = document.querySelector('.blueprint-drift-left');
  const driftRight = document.querySelector('.blueprint-drift-right');

  if (driftLeft) {
    gsap.to(driftLeft, {
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

  if (driftRight) {
    gsap.to(driftRight, {
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
}

/**
 * 3. Gentle Editorial Scroll Reveals
 */
function initScrollTheatrical() {
  const introLeft = document.querySelector('.editorial-intro-left');
  const introRight = document.querySelector('.editorial-intro-right');
  const yardGallery = document.getElementById('yard-gallery');

  if (introLeft && introRight) {
    ScrollTrigger.create({
      trigger: '#intro-statement',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(introLeft, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
        gsap.from(introRight, {
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

  if (yardGallery) {
    ScrollTrigger.create({
      trigger: yardGallery,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.from(yardGallery.querySelectorAll('.border'), {
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
}
