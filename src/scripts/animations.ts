import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Premium Motion System (GSAP + ScrollTrigger)
 * 1. Branded Preloader (Logo mark spin & shutter wipe curtain)
 * 2. Split-text character reveal on Hero Hindi headline
 * 3. Parallax at different scroll speeds (video background & images)
 * 4. Pinned Craft section with cross-fading imagery as text scrolls
 * 5. Horizontal product catalog exhibition
 * 6. Magnetic buttons with elastic spring return
 * 7. Animated stat counters
 * 8. Performance guards: 60fps, disabled on mobile/prefers-reduced-motion
 */
export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Check user motion preferences & device capability
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  // 1. BRANDED PRELOADER
  initPreloader(prefersReducedMotion);

  // If user prefers reduced motion, skip scroll triggers & heavy transforms
  if (prefersReducedMotion) {
    initSimpleCounters();
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // 2. HERO HINDI HEADLINE SPLIT-TEXT REVEAL
  initHeroSplitText();

  // 3. PARALLAX EFFECTS (Desktop only for 60fps)
  if (!isMobile) {
    initParallax();
  }

  // 4. PINNED CRAFT SECTION CROSS-FADE
  initCraftPinnedSection(isMobile);

  // 5. HORIZONTAL SCROLL PRODUCT GALLERY
  initHorizontalGallery(isMobile);

  // 6. MAGNETIC BUTTONS (Desktop pointer only)
  if (!isMobile) {
    initMagneticButtons();
  }

  // 7. ANIMATED STAT COUNTERS
  initStatCounters();

  // 8. NAVBAR SHRINK ON SCROLL
  initNavbarShrink();
}

/**
 * 1. Branded Preloader
 */
function initPreloader(reducedMotion: boolean) {
  const preloader = document.getElementById('brand-preloader');
  const bar = document.getElementById('preloader-bar');
  const curtainTop = document.getElementById('preloader-curtain-top');
  const curtainBottom = document.getElementById('preloader-curtain-bottom');
  const content = document.getElementById('preloader-content');

  if (!preloader) return;

  if (reducedMotion) {
    preloader.style.display = 'none';
    return;
  }

  // Fast, crisp animation so user never waits more than 500ms
  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = 'none';
    }
  });

  tl.to(bar, {
    width: '100%',
    duration: 0.35,
    ease: 'power2.inOut'
  })
  .to(content, {
    opacity: 0,
    duration: 0.15,
    ease: 'power2.in'
  })
  .to(curtainTop, {
    yPercent: -100,
    duration: 0.35,
    ease: 'power3.inOut'
  }, '-=0.05')
  .to(curtainBottom, {
    yPercent: 100,
    duration: 0.35,
    ease: 'power3.inOut'
  }, '<');
}

/**
 * 2. Split-Text Character Reveal on Hero Hindi Headline (Progressive Enhancement)
 */
function initHeroSplitText() {
  const headline = document.getElementById('hero-hindi-headline');
  if (!headline) return;

  const chars = headline.querySelectorAll('.split-char');
  if (chars.length === 0) return;

  // Progressive enhancement: chars are visible by default in HTML/CSS.
  // Animate with gsap.from so if interrupted or delayed, elements remain visible.
  gsap.from(chars, {
    y: 25,
    opacity: 0.2,
    stagger: 0.03,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out',
    clearProps: 'all' // Removes all inline opacity and transform styles when done!
  });
}

/**
 * 3. Parallax at different scroll speeds
 */
function initParallax() {
  // Video Background Parallax
  const heroVideo = document.querySelector('.hero-parallax-bg');
  if (heroVideo) {
    gsap.to(heroVideo, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Yard showcase parallax images
  const yardImages = document.querySelectorAll('.parallax-img');
  yardImages.forEach((img) => {
    gsap.to(img, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
}

/**
 * 4. Pinned Craft Section with Cross-Fading Imagery
 */
function initCraftPinnedSection(isMobile: boolean) {
  const section = document.getElementById('craft-pinned-section');
  if (!section) return;

  const slides = section.querySelectorAll('.craft-image-slide');
  const textSteps = section.querySelectorAll('.craft-text-step');

  if (slides.length === 0 || textSteps.length === 0) return;

  if (isMobile) {
    // Mobile fallback: simple inView active state without pinning
    textSteps.forEach((step, idx) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => activateSlide(idx),
        onEnterBack: () => activateSlide(idx)
      });
    });
    return;
  }

  // Desktop ScrollTrigger cross-fade
  textSteps.forEach((step, idx) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 55%',
      end: 'bottom 45%',
      onEnter: () => activateSlide(idx),
      onEnterBack: () => activateSlide(idx)
    });
  });

  function activateSlide(index: number) {
    slides.forEach((slide, sIdx) => {
      if (sIdx === index) {
        gsap.to(slide, { opacity: 1, zIndex: 10, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(slide, { opacity: 0, zIndex: 0, duration: 0.4, ease: 'power2.in' });
      }
    });
  }
}

/**
 * 5. Horizontal Product Catalog Gallery
 */
function initHorizontalGallery(isMobile: boolean) {
  const section = document.getElementById('horizontal-product-gallery');
  if (!section) return;

  const track = section.querySelector('.gallery-track') as HTMLElement;
  if (!track) return;

  // On mobile screens, let horizontal track scroll natively via touch/overflow-x
  if (isMobile) {
    const wrapper = section.querySelector('.gallery-pin-wrapper');
    if (wrapper) {
      wrapper.classList.add('overflow-x-auto');
    }
    return;
  }

  // On desktop, pin the container and slide horizontal track with scrub
  const scrollDistance = track.scrollWidth - window.innerWidth + 80;

  gsap.to(track, {
    x: () => -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  });
}

/**
 * 6. Magnetic Buttons with Elastic Return
 */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.magnetic-btn');

  magneticElements.forEach((btn) => {
    const el = btn as HTMLElement;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Elastic magnetic pull limited to 8px max to remain crisp and industrial
      gsap.to(el, {
        x: x * 0.28,
        y: y * 0.28,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1.1, 0.4)'
      });
    });
  });
}

/**
 * 7. Animated Stat Counters
 */
function initStatCounters() {
  const statsElements = document.querySelectorAll('.motion-counter');

  statsElements.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const counterObj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counterObj, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(counterObj.val).toString();
          }
        });
      }
    });
  });
}

function initSimpleCounters() {
  const statsElements = document.querySelectorAll('.motion-counter');
  statsElements.forEach((el) => {
    const target = el.getAttribute('data-target') || '0';
    el.textContent = target;
  });
}

/**
 * 8. Navbar Shrink on Scroll
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
    }
  });
}
