import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Editorial Motion System
 * Clean, subtle interactions that serve the story:
 * 1. Animated stat counters
 * 2. Sticky navbar subtle elevation on scroll
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

  // 1. Stat Counters
  initStatCounters();

  // 2. Navbar elevation on scroll
  initNavbarShrink();
}

/**
 * 1. Animated Stat Counters
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
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toString();
          },
          onComplete: () => {
            el.textContent = targetValue.toString();
          }
        });
      }
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
 * 2. Navbar elevation
 */
function initNavbarShrink() {
  const navContainer = document.getElementById('main-navbar-container');
  if (!navContainer) return;

  ScrollTrigger.create({
    start: 'top -50',
    onUpdate: (self) => {
      if (self.progress > 0) {
        navContainer.classList.add('h-16');
        navContainer.classList.remove('h-20');
      } else {
        navContainer.classList.add('h-20');
        navContainer.classList.remove('h-16');
      }
    }
  });
}
