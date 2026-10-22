import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'The requested page could not be found. Return to Shree Shiv Construction & Steel homepage or explore our TMT steel products catalog.',
};

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 md:px-8 bg-[#F5EBD0] text-[#7F011F] overflow-hidden">
      {/* Giant Hero Ghost Word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <span className="font-condensed font-black uppercase text-[clamp(8rem,32vw,28rem)] leading-[0.76] tracking-tighter text-[#7F011F] whitespace-nowrap">
          404
        </span>
      </div>

      <div className="max-w-2xl w-full border-2 border-[#7F011F] bg-[#F5EBD0] p-8 sm:p-12 md:p-14 text-center relative z-10 shadow-[6px_6px_0_0_#7F011F]">
        {/* Micro-Label Kicker */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F]" />
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
            ERROR 404 &bull; BHILWARA YARD
          </span>
        </div>

        <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] font-black uppercase tracking-tight text-[#7F011F] leading-[0.9] mb-4">
          404
        </h1>

        <h2 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-[#7F011F] mb-4">
          Specification Not Found
        </h2>

        <p className="font-body text-sm sm:text-base text-[#2A080C] leading-relaxed max-w-md mx-auto mb-8">
          The link or specification page you were looking for does not exist or may have been relocated in our inventory catalog.
        </p>

        {/* Navigation Backlinks */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-[#7F011F]/20 pt-8">
          <Button variant="primary" href="/" ariaLabel="Return to Shree Shiv Construction & Steel homepage">
            Return to Home
          </Button>
          <Button variant="outline" href="/products" ariaLabel="Explore products catalog">
            Explore Products Catalog
          </Button>
        </div>

        {/* Quick Yard Assistance */}
        <div className="mt-8 pt-4 border-t border-[#7F011F]/20 text-xs font-mono text-[#7F011F]/80 uppercase tracking-wider">
          Need assistance? Call our Bhilwara yard directly:{' '}
          <a
            href="tel:+918278643303"
            className="text-[#7F011F] font-bold underline hover:no-underline ml-1"
            aria-label="Call Bhilwara yard directly at +91 8278643303"
          >
            +91 8278643303
          </a>
        </div>
      </div>
    </main>
  );
}
