'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import Badge from './Badge';

export interface ProductItem {
  index: string;
  id: string;
  name: string;
  category: string;
  gauges: string;
  summary: string;
  image: string;
  imageAlt: string;
  badge: string;
  specs: string[];
  whatsappMsg: string;
}

export const productsData: ProductItem[] = [
  {
    index: '01',
    id: 'kay2-xenox',
    name: 'Kay2 Xenox TMT Fe 550D',
    category: 'PRIMARY REINFORCEMENT',
    gauges: '8mm to 32mm Stock',
    summary:
      'Original mill-certified Fe 550D sariya with specialized cross-rib pattern. Bends smoothly on site without cracking and offers superior earthquake resistance.',
    image: '/images/tmt-kay2xenox-closeup.webp',
    imageAlt: 'Kay2 Xenox Fe 550D TMT bars at Shree Shiv Construction & Steel, Bhilwara',
    badge: 'AUTHORIZED STOCKIST',
    specs: [
      'IS 1786 Manufacturing Compliance & Roll Mark',
      'High Uniform Elongation (>14.5%) for Seismic Safety',
      'Advanced Thermo-Mechanical Rib Bonding with Concrete',
      'Standard 12m Straight Lengths & Folded Factory Bundles',
      'Computerized Weighbridge Slip with Zero Shortage',
      'Official Mill Test Certificate & Pakka GST Bill',
    ],
    whatsappMsg: 'Hello Shree Shiv Construction & Steel, I would like to check today’s rate for Kay2 Xenox TMT Bars.',
  },
  {
    index: '02',
    id: 'tmt-sariya',
    name: 'Primary TMT Sariya',
    category: 'FULL YARD INVENTORY',
    gauges: 'Complete Size Range',
    summary:
      'Full inventory of 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, and 32mm bars for residential house slabs, multi-story columns, and heavy foundation rafts.',
    image: '/images/yard-tmt-stock.webp',
    imageAlt: 'TMT sariya stock bundles at Shree Shiv yard, Bhilwara',
    badge: 'YARD STOCK',
    specs: [
      'Strict Rolling Tolerance per Bureau of Indian Standards',
      'Consistent Linear Weight per Meter Verification',
      'Rust-Protected Elevated Sleeper Staging',
      'Custom Bundle Orders for Builders & Full Truckloads for Sites',
      'Immediate Loading via Crane or Manual Yard Crew',
      'Transparent Mandi Rates with Instant GST Invoicing',
    ],
    whatsappMsg: 'Hello Shree Shiv Construction & Steel, I would like to check today’s rate for TMT Sariya.',
  },
  {
    index: '03',
    id: 'binding-wire',
    name: 'Annealed Binding Wire',
    category: 'SITE TYING COILS',
    gauges: '18 & 20 Gauge Bundles',
    summary:
      'Soft, pliable black annealed tying wire that knots effortlessly around sariya cages without snapping under intense tension during rebar tying.',
    image: '/images/photo-coming-soon-binding-wire.webp',
    imageAlt: 'Annealed binding wire stock at Shree Shiv Construction & Steel, Bhilwara - Photo coming soon',
    badge: 'ANNEALED COILS',
    specs: [
      'Thermal Annealing Process for Maximum Flexibility',
      'Uniform Wire Diameter Across Entire Coil Length',
      'High Tensile Knot Strength with Zero Site Snapping',
      'Available in 18-Gauge and 20-Gauge Specifications',
      'Convenient 25kg and 50kg Protective Bundles',
      'Ready Yard Stock for Immediate Vehicle Loading',
    ],
    whatsappMsg: 'Hello Shree Shiv Construction & Steel, I would like to check today’s rate for Binding Wire.',
  },
  {
    index: '04',
    id: 'cover-blocks',
    name: 'Precast Concrete Cover Blocks',
    category: 'PRECAST SPACERS',
    gauges: '20mm / 25mm / 40mm / 50mm',
    summary:
      'Heavy-duty precast concrete spacers designed to keep sariya elevated inside roof slabs, beams, and columns, protecting steel from moisture and corrosion.',
    image: '/images/photo-coming-soon-cover-blocks.webp',
    imageAlt: 'Precast concrete cover blocks stock at Shree Shiv Construction & Steel, Bhilwara - Photo coming soon',
    badge: 'PRECAST SPACERS',
    specs: [
      'High-Density M-35 Grade Concrete Matrix',
      'Prevents Formwork Leaks & Reinforcement Displacement',
      'Dedicated Profiles: Roof Slab, Beam Bottom, Column Ring',
      'Integrated Galvanized Tie Wire for Positive Fixing',
      'Maintains Mandatory Structural Concrete Cover Depth',
      'Supplied in Bulk Bags for Direct Jobsite Delivery',
    ],
    whatsappMsg: 'Hello Shree Shiv Construction & Steel, I would like to check today’s rate for Cover Blocks.',
  },
  {
    index: '05',
    id: 'building-materials',
    name: 'Building & Structural Supplies',
    category: 'DEPOT SOURCING',
    gauges: 'Direct Yard Loading',
    summary:
      'Direct sourcing of UltraTech cement, wire mesh, dowel bars, and essential civil construction reinforcement supplies from our 200 Feet Road depot.',
    image: '/images/photo-coming-soon-materials.webp',
    imageAlt: 'Building materials and structural supplies at Shree Shiv Construction & Steel, Bhilwara - Photo coming soon',
    badge: 'DEPOT SOURCING',
    specs: [
      'Consolidated Order Dispatch for Complete Jobsite Foundation',
      'Single-Point Sourcing for Cement, Steel & Accessories',
      'Wide Road Access for Multi-Axle Trucks and Trolleys',
      'Mandi Wholesale Pricing with Official GST Compliance',
      'Prompt On-Call Dispatch Across Bhilwara District',
      'Direct Yard Inspection Before Payment & Delivery',
    ],
    whatsappMsg: 'Hello Shree Shiv Construction & Steel, I would like to check today’s rate for Building Materials.',
  },
];

export default function ProductsGallery3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const total = productsData.length;
  const currentItem = productsData[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex !== null) {
        if (e.key === 'Escape') setActiveModalIndex(null);
        return;
      }
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + total) % total);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % total);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, total]);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6 md:py-10 px-6 md:px-12 overflow-hidden select-none">
      
      {/* Top Micro-Label Kicker & Category Count */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream-border/60 pb-4 relative z-20">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-camel" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-charcoal font-bold">
            SELECTED STOCK &bull; YARD GALLERY 3D
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal-muted hidden sm:inline-block">
            200 FEET ROAD DEPOT &bull; BHILWARA
          </span>
          <Badge variant="eucalyptus">05 CORE CATEGORIES</Badge>
        </div>
      </div>

      {/* Center Stage: 3D Perspective Floating Photo Plane Stage */}
      <div className="my-auto py-8 sm:py-12 relative z-20 flex flex-col items-center justify-center">
        <div className="perspective-stage w-full max-w-5xl mx-auto relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center">
          
          {productsData.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={item.id}
                id={`product-plane-${idx}`}
                className={`product-perspective-plane absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-30 pointer-events-auto translate-y-0'
                    : 'opacity-0 scale-95 pointer-events-none z-10 translate-y-8'
                }`}
              >
                {/* Giant Overlapping Fraunces Serif Title */}
                <div className="relative z-20 text-center mb-[-2rem] sm:mb-[-3rem] md:mb-[-4rem] pointer-events-none px-4">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-camel font-bold block mb-2">
                    {item.index} // {item.category}
                  </span>
                  <h1 className="font-serif text-[clamp(2.4rem,6.5vw,5.5rem)] font-normal text-charcoal leading-[0.9] tracking-tight">
                    {item.name}
                  </h1>
                </div>

                {/* Floating Photographic Plane with Sharp Framed Borders */}
                <div className="relative z-10 w-full max-w-2xl sm:max-w-3xl aspect-[16/10] sm:aspect-[16/9] border border-cream-border bg-white p-2.5 sm:p-3.5 shadow-2xl transition-transform duration-500 hover:rotate-[-0.5deg]">
                  <div className="relative w-full h-full overflow-hidden bg-cream-warm">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={idx === 0}
                      className="object-cover"
                    />

                    {/* Corner Badge */}
                    <div className="absolute top-3 left-3 bg-charcoal text-cream px-3 py-1 font-mono text-[10px] tracking-widest uppercase font-bold">
                      {item.badge}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-cream/95 backdrop-blur-sm border border-cream-border px-3 py-1 font-mono text-[10px] tracking-wider uppercase text-charcoal font-bold">
                      {item.gauges}
                    </div>
                  </div>
                </div>

                {/* Action Pills */}
                <div className="relative z-20 mt-6 sm:mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalIndex(idx)}
                    className="view-product-btn rounded-full bg-camel text-charcoal px-8 py-3.5 font-mono text-xs uppercase tracking-[0.22em] font-black hover:bg-camel-dark active:scale-95 transition-all shadow-md cursor-pointer"
                    aria-label={`View technical specifications for ${item.name}`}
                  >
                    VIEW PRODUCT
                  </button>

                  <a
                    href={`https://wa.me/918278643303?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-camel text-charcoal px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-camel hover:text-charcoal transition-all"
                    aria-label={`Request rate sheet for ${item.name} on WhatsApp`}
                  >
                    WHATSAPP RATES
                  </a>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Bottom Carousel Bar: PREV / COUNTER / NEXT */}
      <div className="border-t border-cream-border/60 pt-5 relative z-20 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em]">
        
        {/* Prev Button */}
        <button
          type="button"
          onClick={() => setCurrentIndex(prevIndex)}
          className="flex items-center gap-2 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer py-2 focus:outline-none"
          aria-label="Previous product"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-camel" />
          <span>&larr; PREV:</span>
          <span className="text-charcoal font-bold hidden sm:inline">
            {productsData[prevIndex].name}
          </span>
        </button>

        {/* Counter */}
        <div className="flex items-center gap-2 border border-cream-border px-4 py-1.5 rounded-full bg-cream-card font-bold">
          <span className="text-charcoal">{currentItem.index}</span>
          <span className="text-charcoal-muted">/</span>
          <span className="text-charcoal-muted">05</span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => setCurrentIndex(nextIndex)}
          className="flex items-center gap-2 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer py-2 focus:outline-none"
          aria-label="Next product"
        >
          <span className="text-charcoal font-bold hidden sm:inline">
            {productsData[nextIndex].name}
          </span>
          <span>NEXT: &rarr;</span>
          <span className="w-1.5 h-1.5 rounded-full bg-camel" />
        </button>

      </div>

      {/* Technical Drawers Modal */}
      {activeModalIndex !== null && (
        <div
          className="product-modal-drawer fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex justify-end transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={`${productsData[activeModalIndex].name} Technical Specifications`}
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="w-full max-w-xl bg-cream h-full overflow-y-auto p-8 sm:p-12 border-l border-cream-border flex flex-col justify-between transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-cream-border pb-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-camel" />
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal font-bold">
                    SPECIFICATION // {productsData[activeModalIndex].index}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="close-modal-btn rounded-full border border-cream-border p-2 text-charcoal hover:border-camel hover:text-camel transition-colors cursor-pointer"
                  aria-label="Close specifications"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>

              {/* Title & Badges */}
              <div className="space-y-3 mb-6">
                <Badge variant="eucalyptus">{productsData[activeModalIndex].badge}</Badge>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                  {productsData[activeModalIndex].name}
                </h2>
                <div className="font-mono text-xs text-camel uppercase tracking-wider font-bold">
                  {productsData[activeModalIndex].gauges}
                </div>
              </div>

              {/* Overview Copy */}
              <p className="font-body text-sm sm:text-base text-charcoal-muted leading-relaxed mb-8">
                {productsData[activeModalIndex].summary}
              </p>

              {/* Verified Specs Checklist */}
              <div className="border-t border-cream-border pt-6 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal font-bold block mb-4">
                  VERIFIED YARD TECHNICAL STANDARDS
                </span>
                <ul className="space-y-3">
                  {productsData[activeModalIndex].specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 font-body text-xs sm:text-sm text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-camel shrink-0 mt-1.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-cream-border space-y-3">
              <Button
                variant="primary"
                href={`https://wa.me/918278643303?text=${encodeURIComponent(productsData[activeModalIndex].whatsappMsg)}`}
                target="_blank"
                className="w-full text-xs font-mono uppercase tracking-[0.2em] font-bold py-3.5"
                ariaLabel={`Request instant price on WhatsApp for ${productsData[activeModalIndex].name}`}
              >
                REQUEST INSTANT QUOTE ON WHATSAPP
              </Button>

              <Button
                variant="call-outline"
                href="tel:+918278643303"
                className="w-full text-xs font-mono uppercase tracking-[0.2em] font-bold py-3"
                ariaLabel="Call yard desk directly at +91 8278643303"
              >
                CALL DESK: +91 8278643303
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
