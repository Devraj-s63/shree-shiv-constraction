import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'Terms and conditions for material inquiries, yard weighment, pricing, and site delivery with Shree Shiv Construction & Steel in Bhilwara, Rajasthan.',
  alternates: {
    canonical: '/terms',
  },
};

const businessMeta = {
  name: 'Shree Shiv Construction & Steel',
  proprietor: 'Chandraprakash Bairwa',
  address: '200 Feet Road, Near Sharda Evergreen, Bhilwara 311001, Rajasthan, India',
  phone1: '+91 8278643303',
  phone2: '+91 9602812764',
  gstin: '08FFXPB0515IZ5',
  lastUpdated: 'October 2026',
};

export default function TermsPage() {
  return (
    <>
      {/* Mini-Hero Band in Light Sand with Ghost Word TERMS */}
      <header className="relative bg-[#F5EBD0] text-[#7F011F] border-b border-[#7F011F]/20 py-16 sm:py-20 md:py-24 px-6 md:px-12 overflow-hidden">
        {/* Giant Hero Ghost Word */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0 opacity-[0.05]"
          aria-hidden="true"
        >
          <span className="font-condensed font-black uppercase text-[clamp(6rem,25vw,22rem)] leading-[0.76] tracking-tighter text-[#7F011F] whitespace-nowrap">
            TERMS
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F]" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#7F011F] font-bold">
              COMMERCIAL TERMS &bull; BHILWARA
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase tracking-tight text-[#7F011F] leading-[0.95] mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="font-mono text-xs uppercase tracking-widest text-[#7F011F]/80">
            Last Updated: {businessMeta.lastUpdated} &bull; Jurisdiction: Bhilwara Courts Only
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-14 sm:py-20">
        <div className="border-2 border-[#7F011F] bg-[#F5EBD0] p-8 md:p-12 space-y-10 font-body text-sm md:text-base text-[#2A080C] leading-relaxed shadow-[6px_6px_0_0_#7F011F]">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              1. Informational Catalog Purpose
            </h2>
            <p>
              This website serves as an informational digital catalog for <strong className="text-[#7F011F] font-bold">{businessMeta.name}</strong>. Material specifications, brand descriptions (e.g. Kay2 Xenox TMT), standard gauge dimensions (8mm to 32mm), and service overviews are presented to assist homeowners, engineers, and civil contractors in evaluating structural supply options.
            </p>
            <p className="mt-2">
              No commercial binding contract is finalized solely by viewing this website. Final sales agreements are concluded through formal quotation, offline confirmation, and authorized yard invoicing.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              2. Rate Quotes &amp; Market Price Fluctuation
            </h2>
            <p>
              Steel prices (TMT Sariya) are subject to continuous daily fluctuation based on raw ingot indices, factory mill rolling revisions, and regional freight costs. Quotations provided over phone calls or WhatsApp messages are valid strictly for the day or specific agreed time window indicated by our sales desk.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              3. Weighment, Inspection &amp; Billing
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-2 pl-2 text-[#2A080C]">
              <li>
                <strong className="text-[#7F011F]">Computerized Weighbridge:</strong> All full truckloads and bulk consignments are weighed on verified electronic weighbridges. Billing is derived directly from verified tare and gross weighment slips.
              </li>
              <li>
                <strong className="text-[#7F011F]">Yard Material Inspection:</strong> Buyers or their assigned site representatives are encouraged to inspect bar markings, physical condition, bundle tags, and diameter gauges at our 200 Feet Road yard prior to transit loading.
              </li>
              <li>
                <strong className="text-[#7F011F]">Invoicing:</strong> Every transaction is accompanied by an official GST tax invoice reflecting GSTIN: {businessMeta.gstin}.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              4. Transportation &amp; Jobsite Delivery
            </h2>
            <p>
              Where jobsite delivery is requested across Bhilwara or neighboring areas, buyers must ensure safe and accessible road clearance for transport vehicles (tractor-trolley or flatbed trucks). Offloading arrangements at the destination plot remain the responsibility of the purchaser unless explicitly negotiated otherwise with our dispatch coordinator.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              5. Payment Terms (No Online Gateway)
            </h2>
            <p>
              <strong className="text-[#7F011F] font-bold">We do not accept payments directly through this website.</strong> Permitted payment channels include direct RTGS, NEFT, IMPS bank transfers to our designated business current account, standard verified UPI, certified cheques, or cash payments settled at our yard counter upon material loading.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-black uppercase tracking-tight text-[#7F011F] mb-3 pb-2 border-b border-[#7F011F]/25">
              6. Jurisdiction &amp; Dispute Resolution
            </h2>
            <p>
              Any disputes, legal inquiries, or contractual claims arising out of material supply or commercial transactions with Shree Shiv Construction &amp; Steel shall be subject exclusively to the competent judicial courts situated in <strong className="text-[#7F011F] font-bold">Bhilwara, Rajasthan, India</strong>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
