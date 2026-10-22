import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'About Shree Shiv Construction & Steel | Leading Building Material Supplier Bhilwara',
  description:
    'Discover Shree Shiv Construction & Steel in Bhilwara, led by Chandraprakash Bairwa. Authorized Kay2 Xenox dealer and trusted building material supplier stocking Fe 550D TMT sariya.',
  alternates: {
    canonical: '/about',
  },
};

const values = [
  {
    title: 'Certified Sourcing Only',
    description:
      'We only partner with established steel mills like Kay2 Xenox. Every bar delivered to a customer carries authentic BIS roll marks and mill test certificates.',
  },
  {
    title: 'Computerized Weighment',
    description:
      'Zero guesswork or estimated weights. Consignments undergo precise electronic weighbridge verification so builders pay strictly for what they receive.',
  },
  {
    title: 'Dedicated Jobsite Dispatch',
    description:
      'Located right on 200 Feet Road, our yard provides rapid truck loading and organized tractor-trailer deliveries across Bhilwara and nearby districts.',
  },
  {
    title: 'Official GST Transparency',
    description:
      'Operating with full regulatory compliance under GSTIN: 08FFXPB0515IZ5, protecting individual homeowners and commercial contractors alike.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mini-Hero Band in Light Sand with Ghost Word ABOUT */}
      <header className="relative bg-[#F5EBD0] text-[#7F011F] border-b-2 border-[#7F011F]/20 py-16 md:py-24 overflow-hidden">
        {/* Hero's Giant Ghost Word */}
        <div
          className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
          aria-hidden="true"
        >
          <span className="font-condensed font-black uppercase text-[clamp(5rem,24vw,22rem)] leading-[0.76] tracking-tighter text-[#7F011F] whitespace-nowrap pl-6 md:pl-8">
            ABOUT
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 max-w-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F] inline-block" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
                  YARD DEPOT &bull; BHILWARA, RAJASTHAN
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-[#7F011F] leading-[1.04] tracking-tight mb-4 select-none">
                Building Material Supplier in Bhilwara
              </h1>
              <p className="font-body text-base sm:text-lg text-[#2A080C] leading-relaxed font-normal">
                The story and foundational principles behind Shree Shiv Construction &amp; Steel. Authorized Kay2 Xenox dealer supplying Fe 550D TMT bars directly from our 200 Feet Road depot.
              </p>
            </div>
            <div className="lg:col-span-5 border-2 border-[#7F011F] bg-[#F5EBD0] p-3 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE0C3]">
                <Image
                  src="/images/shop-front.webp"
                  alt="Shree Shiv Construction & Steel shop front, 200 Feet Road, Bhilwara"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#F5EBD0] border border-[#7F011F] px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-[#7F011F] font-bold z-10">
                  200 Feet Road Depot
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Story & Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="OUR STORY &bull; BHILWARA"
              title="मजबूती की सही पहचान"
              titleLang="hi"
              ghostWord="TRUST"
              subtitle="Built on trust, honest weighbridge billing, and genuine factory-tested steel for home builders and contractors in Bhilwara."
            />

            <div className="font-body text-base text-[#2A080C] leading-relaxed space-y-4">
              <p>
                Shree Shiv Construction &amp; Steel was started with one clear goal: give local builders, contractors, and families in Bhilwara direct access to 100% genuine, mill-certified steel at fair daily mandi rates without middleman markups or weight shortages.
              </p>
              <p>
                In a market where sub-standard rerolled sariya is often passed off as branded steel, we stock only authorized{' '}
                <strong className="text-[#7F011F] font-bold">Kay2 Xenox Fe 550D TMT bars</strong> with authentic manufacturer roll marks, alongside high-tensile binding wire and precast concrete cover blocks.
              </p>
              <p>
                Operating directly from our depot on{' '}
                <strong className="text-[#7F011F] font-bold">200 Feet Road, Near Sharda Evergreen</strong>, we verify every single bundle on our computerized weighbridge and provide proper GST tax invoices for every order.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#7F011F]/20 flex flex-wrap gap-4">
              <Button
                variant="whatsapp"
                href="https://wa.me/918278643303"
                target="_blank"
                ariaLabel="Connect with our founders on WhatsApp"
              >
                Connect on WhatsApp
              </Button>
              <Button
                variant="call-outline"
                href="tel:+918278643303"
                ariaLabel="Call primary depot desk at +91 8278643303"
              >
                Call Primary Desk
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 border-2 border-[#7F011F] bg-[#F5EBD0] p-8 relative shadow-lg">
            <div className="border-b-2 border-[#7F011F]/20 pb-4 mb-6">
              <span className="inline-block px-3 py-1 bg-[#7F011F] text-[#F5EBD0] font-mono text-[10px] tracking-[0.25em] uppercase font-bold rounded-full mb-3">
                Proprietorship &amp; Management
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#7F011F]">
                Chandraprakash Bairwa
              </h2>
              <span className="font-mono text-xs text-[#7F011F]/80 block mt-1 font-bold">
                Founder &bull; Shree Shiv Construction &amp; Steel
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs text-[#2A080C]">
              <div className="flex justify-between border-b border-[#7F011F]/20 pb-2">
                <span>Direct Desk:</span>
                <span className="text-[#7F011F] font-bold">+91 8278643303</span>
              </div>
              <div className="flex justify-between border-b border-[#7F011F]/20 pb-2">
                <span>Alternate Line:</span>
                <span className="text-[#7F011F] font-bold">+91 9602812764</span>
              </div>
              <div className="flex justify-between border-b border-[#7F011F]/20 pb-2">
                <span>Yard Depot:</span>
                <span className="text-[#7F011F] text-right font-bold">200 Feet Rd, Bhilwara</span>
              </div>
              <div className="flex justify-between border-b border-[#7F011F]/20 pb-2">
                <span>GST Registration:</span>
                <span className="text-[#7F011F] font-bold">08FFXPB0515IZ5</span>
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

            <div className="mt-8 pt-4 border-t-2 border-[#7F011F]/20 bg-[#ECE0C3] -mx-8 -mb-8 p-6 text-xs font-body text-[#2A080C]">
              <p className="italic">
                &ldquo;Our commitment is simple: what we quote is what we weigh, and what we dispatch is genuine mill-tested grade. Every building deserves an unshakeable foundation.&rdquo;
              </p>
              <span className="font-mono text-[11px] uppercase font-bold text-[#7F011F] mt-2 block tracking-wider">
                &mdash; Chandraprakash Bairwa
              </span>
            </div>
          </div>
        </div>

        {/* Operating Standards (Full-bleed Wine Red Inverted Section Rhythm) */}
        <section className="relative -mx-6 md:-mx-8 px-6 md:px-8 py-20 md:py-28 bg-[#7F011F] text-[#F5EBD0] overflow-hidden">
          {/* Ghost Word behind section */}
          <div
            className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden -z-0 opacity-[0.06]"
            aria-hidden="true"
          >
            <span className="font-condensed font-black uppercase text-[clamp(5rem,24vw,22rem)] leading-[0.76] tracking-tighter whitespace-nowrap text-[#F5EBD0] pr-6 md:pr-10">
              VALUES
            </span>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeading
              eyebrow="OPERATING STANDARDS &bull; BHILWARA"
              title="Principles That Define Our Yard"
              ghostWord="STANDARDS"
              theme="wine"
              subtitle="How we maintain trust with civil contractors, developers, and individual homeowners every day."
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
              {values.map((val, idx) => (
                <div
                  key={val.title}
                  className="md:col-span-6 border-2 border-[#F5EBD0] bg-transparent p-8 flex flex-col justify-between hover:bg-[#F5EBD0]/10 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#F5EBD0] font-bold block mb-3">
                      STANDARD 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-[#F5EBD0] mb-3">
                      {val.title}
                    </h3>
                    <p className="font-body text-base text-[#F5EBD0]/85 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#F5EBD0]/20 flex items-center gap-2.5 text-xs font-mono text-[#F5EBD0]/80">
                    <span className="w-2 h-2 rounded-full bg-[#F5EBD0] inline-block" />
                    <span className="tracking-widest uppercase font-semibold">
                      Shree Shiv Construction &amp; Steel Verified Quality
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
