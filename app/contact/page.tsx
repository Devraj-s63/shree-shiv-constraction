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
      {/* Mini-Hero Band in Light Sand with Ghost Word CONTACT */}
      <header className="relative bg-[#F5EBD0] text-[#7F011F] border-b-2 border-[#7F011F]/20 py-16 md:py-24 overflow-hidden">
        {/* Hero's Giant Ghost Word */}
        <div
          className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
          aria-hidden="true"
        >
          <span className="font-condensed font-black uppercase text-[clamp(5rem,24vw,22rem)] leading-[0.76] tracking-tighter text-[#7F011F] whitespace-nowrap pl-6 md:pl-8">
            CONTACT
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
                YARD INQUIRIES &bull; DIRECT DESK
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-[#7F011F] leading-[1.04] tracking-tight mb-4 select-none">
              Contact Kay2 Xenox Dealer in Bhilwara
            </h1>
            <p className="font-body text-base sm:text-lg text-[#2A080C] leading-relaxed font-normal">
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
              className="md:col-span-6 border-2 border-[#7F011F] bg-[#F5EBD0] p-6 md:p-8 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#7F011F]/20 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#7F011F] tracking-widest">
                    LINE 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#7F011F] text-[#7F011F]">
                    {line.type}
                  </span>
                </div>
                <a
                  href={line.href}
                  className="font-serif text-2xl md:text-3xl font-black text-[#7F011F] hover:underline transition-all block mb-2"
                  aria-label={`Call ${line.type} directly at ${line.label}`}
                >
                  {line.label}
                </a>
                <p className="font-body text-sm text-[#2A080C] leading-relaxed mb-6">
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

        {/* Request a Callback Form Section (Wine Red Inverted Section Rhythm) */}
        <section className="relative -mx-6 md:-mx-8 px-6 md:px-8 py-16 md:py-24 bg-[#7F011F] text-[#F5EBD0] mb-16 overflow-hidden" id="callback-section">
          {/* Ghost Word behind section */}
          <div
            className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
            aria-hidden="true"
          >
            <span className="font-condensed font-black uppercase text-[clamp(5rem,24vw,22rem)] leading-[0.76] tracking-tighter whitespace-nowrap text-[#F5EBD0] pr-6 md:pr-10">
              CALLBACK
            </span>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Header & Guidance (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5EBD0]" />
                  <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#F5EBD0] font-bold">
                    INSTANT YARD DISPATCH RESPONSE
                  </span>
                </div>
                <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold uppercase tracking-tight text-[#F5EBD0] leading-[1.04]">
                  Request a Callback
                </h2>
                <p className="font-body text-base text-[#F5EBD0]/85 leading-relaxed">
                  Fill out your details below to start a verified WhatsApp callback request directly with our Bhilwara sales desk (<strong className="text-[#F5EBD0]">+91 8278643303</strong>).
                </p>
                <div className="border-t border-[#F5EBD0]/20 pt-4 space-y-2.5 text-xs font-mono text-[#F5EBD0]/80">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F5EBD0] rounded-full inline-block" />
                    <span>10-digit Indian mobile verification</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F5EBD0] rounded-full inline-block" />
                    <span>Direct prefilled WhatsApp format</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#F5EBD0] rounded-full inline-block" />
                    <span>Zero third-party telemetry data sharing</span>
                  </div>
                </div>

                {/* Note on Rate Limiting & Spam Protection */}
                <div className="mt-6 p-4 bg-[#F5EBD0]/10 border border-[#F5EBD0]/30 text-xs font-mono text-[#F5EBD0]/90 leading-normal">
                  <span className="text-[#F5EBD0] font-bold uppercase block mb-1">Notice on Fair Use:</span>
                  Submissions are verified and rate-limited to 1 request every 30 seconds per browser session to prevent automated spam abuse.
                </div>
              </div>

              {/* Form Fields & Validation (7 cols) with Sand Inputs & Wine Borders */}
              <div className="lg:col-span-7 bg-[#F5EBD0] border-2 border-[#7F011F] p-6 md:p-8 shadow-2xl text-[#7F011F]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Timings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="border-2 border-[#7F011F] bg-[#F5EBD0] p-6 md:p-8 shadow-md">
              {/* Real Shop Front Photo */}
              <div className="mb-6 overflow-hidden border-2 border-[#7F011F] bg-[#F5EBD0] p-2 shadow-sm group">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE0C3]">
                  <Image
                    src="/images/shop-front.webp"
                    alt="Shree Shiv Construction & Steel shop front, 200 Feet Road, Bhilwara"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-2 left-2 bg-[#7F011F] text-[#F5EBD0] px-3 py-1 font-mono text-[10px] tracking-widest uppercase font-bold z-10">
                    200 Feet Road Storefront
                  </div>
                </div>
              </div>

              <SectionHeading
                eyebrow="PHYSICAL LOCATION &bull; DEPOT"
                title="Yard &amp; Depot"
                subtitle="Strategically located on 200 Feet Road with wide trailer access and convenient approach from all parts of Bhilwara."
              />

              <address className="not-italic font-body text-[#2A080C] text-sm md:text-base leading-relaxed space-y-1 mb-6">
                <p className="font-bold text-[#7F011F]">Shree Shiv Construction &amp; Steel</p>
                <p>200 Feet Road, Near Sharda Evergreen,</p>
                <p>Bhilwara &ndash; 311001, Rajasthan, India</p>
              </address>

              <div className="space-y-2 font-mono text-xs text-[#2A080C] border-t border-[#7F011F]/20 pt-4">
                <div className="flex justify-between">
                  <span>GSTIN:</span>
                  <strong className="text-[#7F011F] font-bold">08FFXPB0515IZ5</strong>
                </div>
                <div className="flex justify-between">
                  <span>Instagram:</span>
                  <a
                    href="https://instagram.com/shreeshivconstructionsteel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7F011F] font-bold hover:underline"
                  >
                    @shreeshivconstructionsteel
                  </a>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#7F011F] bg-[#F5EBD0] p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 bg-[#7F011F] rounded-full inline-block" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#7F011F]">
                  Depot &amp; Yard Operating Hours
                </h3>
              </div>

              <div className="space-y-4">
                {openingHours.map((schedule) => (
                  <div key={schedule.days} className="border-b border-[#7F011F]/20 pb-3">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-serif text-sm font-bold uppercase text-[#7F011F]">
                        {schedule.days}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#7F011F]">
                        {schedule.hours}
                      </span>
                    </div>
                    <span className="font-body text-xs text-[#2A080C]">
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-body text-xs text-[#2A080C] mt-4">
                * Note: For bulk site shipments, tractor-trolley loading can be pre-scheduled outside standard yard hours by speaking to our dispatcher.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border-2 border-[#7F011F] bg-[#F5EBD0] flex flex-col min-h-[500px] shadow-md">
            <div className="bg-[#ECE0C3] text-[#7F011F] px-4 py-3 text-xs font-mono flex items-center justify-between border-b-2 border-[#7F011F]">
              <span className="flex items-center gap-2 font-bold">
                <svg className="w-4 h-4 text-[#7F011F] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                SHREE SHIV CONSTRUCTION &amp; STEEL &bull; 25.3622326, 74.602833
              </span>
              <a
                href="https://maps.app.goo.gl/2RhqprUiib4YRsQ77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7F011F] hover:underline uppercase text-xs tracking-wider font-bold"
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
