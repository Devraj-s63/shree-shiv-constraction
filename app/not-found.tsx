import type { Metadata } from 'next';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'The requested page could not be found. Return to Shree Shiv Construction & Steel homepage or explore our TMT steel products catalog.',
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20 px-6 md:px-8">
      <div className="max-w-2xl w-full border border-cream-border bg-cream-card p-8 md:p-14 text-center relative">
        {/* Badge & Error Code */}
        <div className="inline-flex items-center gap-2 mb-4">
          <Badge variant="eucalyptus">Error 404 &bull; Page Not Found</Badge>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-charcoal leading-none mb-4">
          404
        </h1>

        <h2 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-camel mb-4">
          Specification Not Found
        </h2>

        <p className="font-body text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-md mx-auto mb-8">
          The link or specification page you were looking for does not exist or may have been relocated in our inventory catalog.
        </p>

        {/* Navigation Backlinks (Home and Products) */}
        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-cream-border pt-8">
          <Button variant="primary" href="/" className="text-xs md:text-sm px-6 py-3.5">
            Return to Home
          </Button>
          <Button variant="call-outline" href="/products" className="text-xs md:text-sm px-6 py-3.5">
            Explore Products Catalog
          </Button>
        </div>

        {/* Quick Yard Assistance */}
        <div className="mt-8 pt-4 border-t border-cream-border text-xs font-mono text-charcoal-muted">
          Need assistance? Call our Bhilwara yard directly:{' '}
          <a
            href="tel:+918278643303"
            className="text-charcoal font-bold hover:text-camel"
            aria-label="Call Bhilwara yard directly at +91 8278643303"
          >
            +91 8278643303
          </a>
        </div>
      </div>
    </main>
  );
}
