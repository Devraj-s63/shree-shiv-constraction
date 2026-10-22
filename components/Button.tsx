import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  variant?:
    | 'primary'
    | 'whatsapp'
    | 'call-outline'
    | 'camel-outline'
    | 'outline'
    | 'secondary'
    | 'eucalyptus'
    | 'inverted-primary'
    | 'inverted-outline';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
  rel?: string;
  id?: string;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  target,
  rel,
  id,
  ariaLabel,
  onClick,
  children,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-mono text-xs sm:text-sm uppercase tracking-[0.18em] font-bold px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-250 cursor-pointer select-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7F011F]';

  const variantStyles: Record<string, string> = {
    primary:
      'bg-[#7F011F] text-[#F5EBD0] border-2 border-[#7F011F] hover:bg-[#F5EBD0] hover:text-[#7F011F] font-black shadow-sm',
    secondary:
      'bg-transparent text-[#7F011F] border-2 border-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] font-bold',
    outline:
      'bg-transparent text-[#7F011F] border-2 border-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] font-bold',
    'camel-outline':
      'bg-transparent text-[#7F011F] border-2 border-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] font-bold',
    'call-outline':
      'bg-transparent text-[#7F011F] border-2 border-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] font-bold',
    whatsapp:
      'bg-[#7F011F] text-[#F5EBD0] border-2 border-[#7F011F] hover:bg-[#F5EBD0] hover:text-[#7F011F] font-black shadow-sm',
    eucalyptus:
      'bg-[#7F011F] text-[#F5EBD0] border-2 border-[#7F011F] hover:bg-[#F5EBD0] hover:text-[#7F011F] font-black shadow-sm',
    'inverted-primary':
      'bg-[#F5EBD0] text-[#7F011F] border-2 border-[#F5EBD0] hover:bg-transparent hover:text-[#F5EBD0] font-black shadow-sm',
    'inverted-outline':
      'bg-transparent text-[#F5EBD0] border-2 border-[#F5EBD0] hover:bg-[#F5EBD0] hover:text-[#7F011F] font-bold',
  };

  const computedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={computedClass}
          target={target}
          rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
          id={id}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={computedClass}
        target={target}
        rel={rel}
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={computedClass}
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
