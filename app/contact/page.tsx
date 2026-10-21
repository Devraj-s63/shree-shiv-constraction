import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'Contact Shree Shiv Construction & Steel on 200 Feet Road, Bhilwara. Leading building material supplier and authorized Kay2 Xenox dealer. Request a callback or call 8278643303.',
  alternates: {
    canonical: '/contact',
  },
};

const openingHours = [
  { days: 'Monday – Saturday', hours: '8:00 AM – 8:00 PM', status: 'Regular Yard & Dispatch Hours' },
  { days: 'Sunday', hours: 'Emergency Dispatch / By Prior Appointment', status: 'On-Call Truck Loading' },
];

const contactLines = [
  {
    type: 'Primary Sales & Rates',
    phone: '+91 8278643303',
    href: 'tel:+918278643303',
    label: '+91 8278643303',
    subtext: 'Daily TMT rates, truckload orders, invoice inquiries',
  },
  {
    type: 'Alternate & Yard Support',
    phone: '+91 9602812764',
    href: 'tel:+919602812764',
    label: '+91 9602812764',
    subtext: 'Logistics tracking, driver coordination, yard loading',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Single H1 Page Header in Warm Cream */}
      <header className="bg-cream-warm text-charcoal border-b border-cream-border py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 bg-eucalyptus text-cream micro-label font-bold border border-eucalyptus">
                Yard Inquiries &bull; Direct Desk
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-charcoal leading-tight mb-4">
              Contact Kay2 Xenox Dealer in Bhilwara
            </h1>
            <p className="font-body text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Get in touch with our sales and dispatch team for live steel rates, bundle quotations, computerized weighbridge slips, and site delivery scheduling.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {contactLines.map((line, idx) => (
            <div
              key={line.phone}
              className="md:col-span-6 border border-cream-border bg-cream-card p-6 md:p-8 flex flex-col justify-between hover:border-camel transition-colors"
            >
              <div>
                <div className="flex justify-between items-center border-b border-cream-border pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-camel tracking-widest">
                    LINE 0{idx + 1}
                  </span>
                  <Badge variant="eucalyptus">{line.type}</Badge>
                </div>
                <a
                  href={line.href}
                  className="font-serif text-2xl md:text-3xl font-black text-charcoal hover:text-camel transition-colors block mb-2"
                  aria-label={`Call ${line.type} directly at ${line.label}`}
                >
                  {line.label}
                </a>
                <p className="font-body text-xs text-charcoal-muted leading-relaxed mb-6">
                  {line.subtext}
                </p>
              </div>
              <div>
                <Button
                  variant="call-outline"
                  href={line.href}
                  className="w-full text-xs"
                  ariaLabel={`Call ${line.type} at ${line.label}`}
                >
                  Call {line.phone}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Request a Callback Form Section (Asymmetric Grid) */}
        <section className="border border-cream-border bg-cream-card p-8 md:p-12 mb-16 relative" id="callback-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Header & Guidance (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="eucalyptus">Instant Yard Dispatch Response</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-charcoal">
                Request a Callback
              </h2>
              <p className="font-body text-sm text-charcoal-muted leading-relaxed">
                Fill out your details below to start a verified WhatsApp callback request directly with our Bhilwara sales desk (<strong className="text-charcoal">+91 8278643303</strong>).
              </p>
              <div className="border-t border-cream-border pt-4 space-y-2 text-xs font-mono text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-camel inline-block" />
                  <span>10-digit Indian mobile verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-camel inline-block" />
                  <span>Direct prefilled WhatsApp format</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-camel inline-block" />
                  <span>Zero third-party telemetry data sharing</span>
                </div>
              </div>

              {/* Note on Rate Limiting & Spam Protection */}
              <div className="mt-6 p-4 bg-cream-warm border border-cream-border text-[11px] font-mono text-charcoal-muted leading-normal">
                <span className="text-charcoal font-bold uppercase block mb-1">Notice on Fair Use:</span>
                Submissions are verified and rate-limited to 1 request every 30 seconds per browser session to prevent automated spam abuse.
              </div>
            </div>

            {/* Form Fields & Validation (7 cols) via Client Component */}
            <div className="lg:col-span-7 bg-cream-warm/50 border border-cream-border p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Location & Timings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-cream-border bg-cream-card p-6 md:p-8">
              {/* Real Shop Front Photo */}
              <div className="mb-6 overflow-hidden border border-cream-border bg-white p-2 shadow-sm group">
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-warm">
                  <Image
                    src="/images/shop-front.webp"
                    alt="Shree Shiv Construction & Steel shop front, 200 Feet Road, Bhilwara"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-2 left-2 bg-charcoal text-cream px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase font-bold z-10">
                    200 Feet Road Storefront
                  </div>
                </div>
              </div>

              <SectionHeading
                eyebrow="Physical Location"
                title="Yard &amp; Depot"
                subtitle="Strategically located on 200 Feet Road with wide trailer access and convenient approach from all parts of Bhilwara."
              />

              <address className="not-italic font-body text-charcoal-muted text-sm md:text-base leading-relaxed space-y-1 mb-6">
                <p className="font-bold text-charcoal">Shree Shiv Construction &amp; Steel</p>
                <p>200 Feet Road, Near Sharda Evergreen,</p>
                <p>Bhilwara &ndash; 311001, Rajasthan, India</p>
              </address>

              <div className="space-y-2 font-mono text-xs text-charcoal-muted border-t border-cream-border pt-4">
                <div className="flex justify-between">
                  <span>GSTIN:</span>
                  <strong className="text-charcoal">08FFXPB0515IZ5</strong>
                </div>
                <div className="flex justify-between">
                  <span>Instagram:</span>
                  <a
                    href="https://instagram.com/shreeshivconstructionsteel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-camel font-semibold hover:underline"
                  >
                    @shreeshivconstructionsteel
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-cream-border bg-cream-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-eucalyptus inline-block" />
                <h3 className="font-serif text-xs font-bold uppercase tracking-widest text-charcoal">
                  Depot & Yard Operating Hours
                </h3>
              </div>

              <div className="space-y-4">
                {openingHours.map((schedule) => (
                  <div key={schedule.days} className="border-b border-cream-border pb-3">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-serif text-sm font-bold uppercase text-charcoal">
                        {schedule.days}
                      </span>
                      <span className="font-mono text-xs font-semibold text-camel">
                        {schedule.hours}
                      </span>
                    </div>
                    <span className="font-body text-xs text-charcoal-muted">
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-body text-[11px] text-charcoal-muted mt-4">
                * Note: For bulk site shipments, tractor-trolley loading can be pre-scheduled outside standard yard hours by speaking to our dispatcher.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-cream-border bg-cream-card flex flex-col min-h-[500px]">
            <div className="bg-cream-warm text-charcoal px-4 py-2.5 text-xs font-mono flex items-center justify-between border-b border-cream-border">
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-camel fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                SHREE SHIV CONSTRUCTION &amp; STEEL &bull; 25.3622326, 74.602833
              </span>
              <a
                href="https://maps.app.goo.gl/2RhqprUiib4YRsQ77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-camel hover:underline uppercase text-[10px] tracking-wider font-bold"
              >
                Google Maps &rarr;
              </a>
            </div>

            <iframe
              title="SHREE SHIV CONSTRUCTION &amp; STEEL Location Map"
              className="w-full flex-grow border-0 transition-opacity duration-200 min-h-[460px]"
              src="https://maps.google.com/maps?q=25.3622326,74.602833&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </>
  );
}
