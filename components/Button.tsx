import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  variant?: 'primary' | 'whatsapp' | 'call-outline' | 'camel-outline' | 'outline' | 'secondary' | 'eucalyptus';
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
    'inline-flex items-center justify-center rounded-full font-mono text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3 transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-camel focus:ring-offset-2';

  const variantStyles: Record<string, string> = {
    primary:
      'bg-camel text-charcoal border border-camel hover:bg-camel-dark hover:border-camel-dark active:bg-camel-dark font-black shadow-sm',
    'camel-outline':
      'bg-transparent text-charcoal border border-camel hover:bg-camel hover:text-charcoal active:bg-camel-dark',
    whatsapp:
      'bg-camel text-charcoal border border-camel hover:bg-camel-dark hover:border-camel-dark active:bg-camel-dark font-black',
    'call-outline':
      'bg-transparent text-charcoal border border-camel hover:bg-camel hover:text-charcoal active:bg-camel-dark',
    outline:
      'bg-transparent text-charcoal border border-charcoal/40 hover:border-camel hover:text-charcoal hover:bg-camel/10',
    secondary:
      'bg-cream-warm text-charcoal border border-cream-border hover:border-camel hover:text-charcoal',
    eucalyptus:
      'bg-eucalyptus text-cream border border-eucalyptus hover:bg-eucalyptus-dark',
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
