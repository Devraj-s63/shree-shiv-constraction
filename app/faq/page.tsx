import type { Metadata } from 'next';
import Button from '@/components/Button';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'TMT Sariya FAQs | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'Answers to top questions regarding TMT sariya at Shree Shiv Construction & Steel in Bhilwara, daily per-quintal rates, site delivery, authorized Kay2 Xenox dealership, and bulk order discounts.',
  alternates: {
    canonical: '/faq',
  },
};

const faqs = [
  {
    id: 'tmt-price',
    category: 'Price of TMT Sariya',
    question: 'What is the current price of TMT sariya per ton or quintal in Bhilwara?',
    answer:
      'TMT sariya prices in Bhilwara fluctuate daily based on raw material ingot indices and factory rolling rates. Call us directly at 8278643303 or WhatsApp your required bar diameters to receive today’s live, transparent per-quintal and per-ton quotation with computerized weighbridge billing and GST invoice.',
  },
  {
    id: 'delivery-areas',
    category: 'Delivery & Logistics',
    question: 'Do you deliver TMT bars and building materials directly to construction sites in Bhilwara?',
    answer:
      'Yes, we provide site delivery across Bhilwara city and surrounding areas including Suwana, Mandal, Sanganer, and Hamirgarh. We arrange prompt mini-truck or tractor-trolley transport straight from our 200 Feet Road yard to your construction plot, ensuring safe offloading right at your site.',
  },
  {
    id: 'delivery-timing',
    category: 'Delivery & Logistics',
    question: 'How quickly can an order of TMT sariya be delivered after placing it?',
    answer:
      'Same-day delivery is available for standard in-stock bar diameters and regular quantities placed before noon. For full commercial truckloads or specialized rebar schedules, dispatch typically completes within 24 hours from our Bhilwara yard, backed by real-time driver coordination and computerized weighbridge slips.',
  },
  {
    id: 'brands-stocked',
    category: 'Brands & Quality',
    question: 'Which brands and grades of TMT sariya do you sell at your Bhilwara yard?',
    answer:
      'We are an authorized stockist of genuine Kay2 Xenox TMT bars along with primary structural steel sariya in Fe 550D and Fe 500 grades. Every bar comes with authentic manufacturer roll marks and test certificates, guaranteeing high ductility, earthquake safety, and superior corrosion resistance.',
  },
  {
    id: 'genuine-brand-check',
    category: 'Brands & Quality',
    question: 'How can I verify that the TMT steel supplied is 100% genuine and not secondary rerolled?',
    answer:
      'Every genuine TMT bar features embossed manufacturer roll marks, grade stamps (Fe 550D), and heat numbers directly on the steel surface. Along with delivery, Shree Shiv Construction & Steel provides manufacturer mill test certificates and an official GST invoice from our Bhilwara yard, proving verified mill origin and tensile strength.',
  },
  {
    id: 'bulk-orders',
    category: 'Bulk Orders & Commercial',
    question: 'Do you offer discounted pricing on bulk orders for commercial projects or apartments?',
    answer:
      'Yes, discounted wholesale rates are provided for multi-ton bulk orders, civil contractors, apartment builders, and factory foundations. We handle bulk logistics with dedicated flatbed trailers and transparent per-metric-ton billing directly from our Bhilwara yard. Contact our desk at 8278643303 to negotiate project-specific volume schedules.',
  },
  {
    id: 'small-orders',
    category: 'Retail & Residential',
    question: 'Can I purchase small bundle quantities for an individual residential house?',
    answer:
      'Yes, individual home builders can buy custom retail quantities starting from single bundles or specific quintal weights. We regularly fulfill residential home orders across 8mm, 10mm, 12mm, and 16mm sizes, providing annealed binding wire and precision concrete cover blocks together in a convenient consolidated delivery.',
  },
  {
    id: 'payment-modes',
    category: 'Commercial & Billing',
    question: 'What payment modes are accepted and do you provide legitimate GST tax invoices?',
    answer:
      'We accept RTGS, NEFT, IMPS bank transfers, UPI payments, and cheque clearance alongside direct bank deposit. All sales are documented through legitimate computerized weighment slips and standard GST tax invoices under our registered entity GSTIN: 08FFXPB0515IZ5, ensuring complete commercial and accounting transparency.',
  },
  {
    id: 'accessories-bundle',
    category: 'Accessories & Supplies',
    question: 'Can I purchase binding wire and cover blocks along with my TMT sariya order?',
    answer:
      'Yes, we stock high-tensile annealed binding wire (18 and 20 gauge) and precast high-density concrete cover blocks (20mm to 75mm) at our yard. You can bundle all reinforcement accessories together with your steel order into a single delivery truck, saving transport costs and site delays.',
  },
];

// Google Rich Results Compliant FAQPage Schema JSON-LD
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Mini-Hero Band in Light Sand with Ghost Word FAQS */}
      <header className="relative bg-[#F5EBD0] text-[#7F011F] border-b border-[#7F011F]/20 py-16 sm:py-20 md:py-24 px-6 md:px-12 overflow-hidden">
        {/* Giant Hero Ghost Word */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0 opacity-[0.05]"
          aria-hidden="true"
        >
          <span className="font-condensed font-black uppercase text-[clamp(6rem,25vw,22rem)] leading-[0.76] tracking-tighter text-[#7F011F] whitespace-nowrap">
            FAQS
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F]" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
              BUYER KNOWLEDGE BASE &bull; BHILWARA
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase tracking-tight text-[#7F011F] leading-[0.95] mb-5">
            TMT Sariya FAQs in Bhilwara
          </h1>

          <p className="font-body text-base sm:text-lg text-[#2A080C] max-w-3xl leading-relaxed">
            Direct answers to the most common questions asked by homeowners, civil contractors, and commercial developers purchasing reinforcement steel in Bhilwara.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-8 py-14 sm:py-20">
        {/* Accordions */}
        <FaqAccordion faqs={faqs} />

        {/* Bottom Contact Callout */}
        <div className="mt-16 border-2 border-[#7F011F] bg-[#F5EBD0] text-[#7F011F] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0_0_#7F011F]">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7F011F] block mb-2">
              PROJECT REINFORCEMENT &bull; DIRECT ASSISTANCE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-[#7F011F]">
              Have a project schedule or specific estimate?
            </h3>
            <p className="font-body text-sm text-[#2A080C] mt-1 max-w-xl">
              Call or WhatsApp us your bar bending schedule (BBS) or material requirements for a custom rate quote.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              variant="whatsapp"
              href="https://wa.me/918278643303"
              target="_blank"
              ariaLabel="Send project requirements to sales on WhatsApp"
            >
              WhatsApp: +91 8278643303
            </Button>
            <Button
              variant="outline"
              href="tel:+918278643303"
              ariaLabel="Call sales desk at +91 8278643303 for a custom estimate"
            >
              Call: +91 8278643303
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
