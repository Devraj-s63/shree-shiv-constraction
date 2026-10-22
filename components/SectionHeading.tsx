import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleLang?: string;
  subtitle?: string;
  ghostWord?: string;
  theme?: 'sand' | 'wine';
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleLang,
  subtitle,
  ghostWord,
  theme = 'sand',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isWine = theme === 'wine';
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const titleFont = titleLang === 'hi' ? 'font-hindi font-bold' : 'font-serif font-bold';

  return (
    <div className={`relative mb-12 md:mb-16 max-w-5xl flex flex-col ${alignClass} ${className}`}>
      {/* Hero's Giant Ghost Word Behind Title */}
      {ghostWord && (
        <div
          className={`absolute -top-10 sm:-top-14 ${
            align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'
          } pointer-events-none select-none overflow-hidden -z-10 w-full`}
          aria-hidden="true"
        >
          <span
            className={`font-condensed font-black uppercase text-[clamp(4.5rem,18vw,16rem)] leading-[0.76] tracking-tighter whitespace-nowrap block ${
              isWine ? 'text-[#F5EBD0] opacity-[0.08]' : 'text-[#7F011F] opacity-[0.07]'
            }`}
          >
            {ghostWord}
          </span>
        </div>
      )}

      {/* Hero-Style Micro-Label Kicker with Dot Separator */}
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className={`w-2.5 h-2.5 rounded-full inline-block shrink-0 ${
              isWine ? 'bg-[#F5EBD0]' : 'bg-[#7F011F]'
            }`}
          />
          <span
            className={`font-mono text-xs sm:text-sm uppercase tracking-[0.26em] font-bold ${
              isWine ? 'text-[#F5EBD0] opacity-90' : 'text-[#7F011F]'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title at Hero Scale (clamp 2.5rem to 4.5rem) */}
      <h2
        lang={titleLang}
        className={`${titleFont} text-[clamp(2.5rem,5.5vw,4.5rem)] ${
          isWine ? 'text-[#F5EBD0]' : 'text-[#7F011F]'
        } leading-[1.04] tracking-tight`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-body text-base md:text-lg mt-5 leading-relaxed max-w-2xl border-l-2 ${
            isWine
              ? 'border-[#F5EBD0] text-[#F5EBD0]/85'
              : 'border-[#7F011F] text-[#2A080C]'
          } pl-4 font-medium`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
