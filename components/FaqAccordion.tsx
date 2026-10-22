'use client';

import React, { useState } from 'react';
import Badge from './Badge';

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  // Allow multiple or single open; default first open for immediate readability
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id || '']: true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div>
      {/* Category Filter Chips / Spec Badges */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <Badge key={cat} variant="wine">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = !!openIds[faq.id];
          const numStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

          return (
            <article
              key={faq.id}
              id={faq.id}
              className={`border-2 border-[#7F011F] bg-[#F5EBD0] transition-all duration-300 ${
                isOpen ? 'shadow-[4px_4px_0_0_#7F011F]' : 'hover:shadow-[2px_2px_0_0_#7F011F]'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7F011F]"
              >
                <div className="space-y-2 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#7F011F] font-bold">
                      QUESTION {numStr} &bull; {faq.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-[#7F011F] leading-snug">
                    {faq.question}
                  </h2>
                </div>

                {/* Pill Toggle Button (+ / -) */}
                <div
                  className={`shrink-0 w-9 h-9 rounded-full border-2 border-[#7F011F] flex items-center justify-center transition-all duration-250 ${
                    isOpen
                      ? 'bg-[#7F011F] text-[#F5EBD0] rotate-180'
                      : 'bg-[#F5EBD0] text-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0]'
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    )}
                  </svg>
                </div>
              </button>

              {/* Smooth Collapsible Answer Container */}
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={faq.id}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#7F011F]/20">
                    <div className="border-l-2 border-[#7F011F] pl-4 sm:pl-5 py-1 mb-5">
                      <p className="font-body text-sm sm:text-base text-[#2A080C] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#7F011F]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="font-mono text-[#7F011F]/80 text-[11px] uppercase tracking-wider">
                        Need more clarification on this?
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href={`https://wa.me/918278643303?text=${encodeURIComponent(`Inquiry regarding: ${faq.question}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#7F011F] hover:underline inline-flex items-center gap-1.5"
                          aria-label="Ask our desk on WhatsApp about this question"
                        >
                          <span>Ask on WhatsApp</span>
                          <span>&rarr;</span>
                        </a>
                        <span className="text-[#7F011F]/40">&bull;</span>
                        <a
                          href="tel:+918278643303"
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#7F011F] hover:underline"
                          aria-label="Call yard desk directly at +91 8278643303"
                        >
                          Call Desk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
