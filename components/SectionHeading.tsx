import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleLang?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  titleLang,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const titleFont = titleLang === 'hi' ? 'font-hindi font-normal' : 'font-serif font-normal';

  return (
    <div className={`mb-12 md:mb-16 max-w-5xl flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-camel inline-block"></span>
          <span className="inline-block px-3 py-1 bg-eucalyptus text-cream font-mono text-[10px] tracking-[0.25em] uppercase font-bold rounded-full">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        lang={titleLang}
        className={`${titleFont} text-[clamp(2.4rem,5.5vw,4.8rem)] text-charcoal leading-[0.96] tracking-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm md:text-base text-charcoal-muted mt-5 leading-relaxed max-w-2xl border-l-2 border-camel pl-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
