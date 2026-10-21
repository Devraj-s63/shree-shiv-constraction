import React from 'react';

export interface BadgeProps {
  variant?: 'eucalyptus' | 'camel' | 'neutral' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = 'eucalyptus',
  className = '',
  children,
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center text-[10px] font-mono uppercase tracking-[0.22em] font-bold px-3 py-1 rounded-full select-none';

  const variantStyles: Record<string, string> = {
    eucalyptus: 'bg-eucalyptus text-cream border border-eucalyptus',
    camel: 'bg-camel text-charcoal border border-camel',
    outline: 'bg-transparent text-charcoal-muted border border-cream-border',
    neutral: 'bg-cream-warm text-charcoal-muted border border-cream-border',
  };

  const computedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.eucalyptus} ${className}`;

  return <span className={computedClass}>{children}</span>;
}
