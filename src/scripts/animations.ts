import { animate, inView, scroll } from 'motion';

/**
 * Initializes performant industrial animations:
 * 1. Navbar shrink on scroll
 * 2. Hero entrance reveal
 * 3. Section fade-up scroll reveals
 * 4. Staggered product cards
 * 5. Mechanical count-up numbers
 */
export function initAnimations() {
  if (typeof window === 'undefined') return;

  // 1. Navbar shrink on scroll
  const navContainer = document.getElementById('main-navbar-container');
  if (navContainer) {
    scroll(({ y }) => {
      if (y.current > 40) {
        navContainer.classList.add('h-16');
        navContainer.classList.remove('h-20');
      } else {
        navContainer.classList.add('h-20');
        navContainer.classList.remove('h-16');
      }
    });
  }

  // 2. Hero Headline & Content Entrance
  const heroEntranceElements = document.querySelectorAll('.motion-hero-entrance');
  if (heroEntranceElements.length > 0) {
    animate(
      heroEntranceElements,
      { opacity: [0, 1], y: [20, 0] },
      { delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    );
  }

  // 3. Section Fade-Up Scroll Reveals
  const revealSections = document.querySelectorAll('.motion-reveal-section');
  revealSections.forEach((section) => {
    inView(
      section,
      () => {
        animate(
          section,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        );
      },
      { amount: 0.15 }
    );
  });

  // 4. Staggered Cards (Product cards, USP cards, etc.)
  const cardGrids = document.querySelectorAll('.motion-stagger-grid');
  cardGrids.forEach((grid) => {
    const cards = grid.querySelectorAll('.motion-stagger-item');
    if (cards.length > 0) {
      inView(
        grid,
        () => {
          cards.forEach((card, index) => {
            animate(
              card,
              { opacity: [0, 1], y: [20, 0] },
              { delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }
            );
          });
        },
        { amount: 0.1 }
      );
    }
  });

  // 5. Count-Up Stats with Motion
  const statsElements = document.querySelectorAll('.motion-counter');
  statsElements.forEach((el) => {
    inView(
      el,
      () => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        animate(0, target, {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => {
            el.textContent = Math.round(latest).toString();
          },
        });
      },
      { amount: 0.3 }
    );
  });
}
