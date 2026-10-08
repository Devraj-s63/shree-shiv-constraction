import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Snappy Motion System
 * Decisive entrances, tight staggers, zero floaty delays:
 * - 0.5–0.6s reveals with sharp power3.out ease
 * - 0.06s tight staggers on grouped elements
 * - Hard, confident state changes
 */
export function initAnimations() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    initSimpleCounters();
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Snappy Entrance
  initHeroEntrance();

  // 2. Section Opener Decisive Cuts
  initSectionOpeners();

  // 3. Stat Counters (Snappy 0.9s duration)
  initStatCounters();

  // 4. Navbar Sticky Elevation
  initNavbarShrink();
}

/**
 * 1. Hero Snappy Entrance
 * Headlines land like a hard cut (0.5s, power3.out), CTAs follow tight (0.06s)
 */
function initHeroEntrance() {
  const heroLines = document.querySelectorAll('.hero-snap-line');
  const heroSupport = document.querySelectorAll('.hero-snap-support');
  const heroVisual = document.querySelector('.hero-snap-visual');

  if (heroLines.length) {
    gsap.from(heroLines, {
      y: 35,
      opacity: 0,
      duration: 0.52,
      stagger: 0.07,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    });
  }

  if (heroVisual) {
    gsap.from(heroVisual, {
      y: 30,
      opacity: 0,
      duration: 0.55,
      delay: 0.12,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    });
  }

  if (heroSupport.length) {
    gsap.from(heroSupport, {
      y: 20,
      opacity: 0,
      duration: 0.48,
      stagger: 0.06,
      delay: 0.18,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    });
  }
}

/**
 * 2. Section Openers
 * Every section title lands decisively as user reaches it
 */
function initSectionOpeners() {
  const sections = document.querySelectorAll<HTMLElement>('.snap-section-opener');
  if (!sections.length) return;

  sections.forEach((section) => {
    const title = section.querySelector('.snap-title');
    const label = section.querySelector('.snap-label');
    const items = section.querySelectorAll('.snap-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true,
      },
    });

    if (label) {
      tl.from(label, {
        y: 12,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }

    if (title) {
      tl.from(
        title,
        {
          y: 28,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
        '-=0.25'
      );
    }

    if (items.length) {
      tl.from(
        items,
        {
          y: 22,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
        '-=0.2'
      );
    }
  });
}

/**
 * 3. Animated Stat Counters
 */
function initStatCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>('.motion-counter');
  if (!counterElements.length) return;

  counterElements.forEach((el) => {
    const targetValue = parseInt(el.getAttribute('data-target') || '0', 10);
    if (!targetValue) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: targetValue,
          duration: 0.9,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toString();
          },
          onComplete: () => {
            el.textContent = targetValue.toString();
          },
        });
      },
    });
  });
}

function initSimpleCounters() {
  const counterElements = document.querySelectorAll<HTMLElement>('.motion-counter');
  counterElements.forEach((el) => {
    const targetValue = el.getAttribute('data-target') || '0';
    el.textContent = targetValue;
  });
}

/**
 * 4. Navbar shrink on scroll
 */
function initNavbarShrink() {
  const navContainer = document.getElementById('main-navbar-container');
  if (!navContainer) return;

  ScrollTrigger.create({
    start: 'top -40',
    onUpdate: (self) => {
      if (self.progress > 0) {
        navContainer.classList.add('h-16');
        navContainer.classList.remove('h-20');
      } else {
        navContainer.classList.add('h-20');
        navContainer.classList.remove('h-16');
      }
    },
  });
}
