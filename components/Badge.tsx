import React from 'react';

export interface BadgeProps {
  variant?: 'wine' | 'eucalyptus' | 'camel' | 'neutral' | 'outline' | 'inverted';
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = 'outline',
  className = '',
  children,
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center text-xs sm:text-[13px] font-mono uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full select-none';

  const variantStyles: Record<string, string> = {
    outline: 'bg-transparent text-[#7F011F] border border-[#7F011F]',
    wine: 'bg-[#7F011F] text-[#F5EBD0] border border-[#7F011F]',
    eucalyptus: 'bg-[#7F011F] text-[#F5EBD0] border border-[#7F011F]',
    camel: 'bg-transparent text-[#7F011F] border border-[#7F011F]',
    neutral: 'bg-transparent text-[#7F011F] border border-[#7F011F]/50',
    inverted: 'bg-transparent text-[#F5EBD0] border border-[#F5EBD0]',
  };

  const computedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.eucalyptus} ${className}`;

  return <span className={computedClass}>{children}</span>;
}
