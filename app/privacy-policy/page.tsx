import type { Metadata } from 'next';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'Privacy Policy for Shree Shiv Construction & Steel. Learn how customer inquiry data is handled for material orders in Bhilwara, Rajasthan.',
  alternates: {
    canonical: '/privacy-policy',
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="bg-cream-warm text-charcoal border-b border-cream-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <Badge variant="eucalyptus" className="mb-3">Legal &amp; Compliance</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-charcoal leading-tight mb-2">
              Privacy Policy
            </h1>
            <p className="font-mono text-xs text-charcoal-muted">
              Last Updated: {businessMeta.lastUpdated} &bull; Jurisdiction: Bhilwara, Rajasthan
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="border border-cream-border bg-cream-card p-8 md:p-12 space-y-10 font-body text-sm md:text-base text-charcoal-muted leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-charcoal mb-3 pb-2 border-b border-cream-border">
              1. Business Overview &amp; Scope
            </h2>
            <p>
              This Privacy Policy governs the manner in which <strong className="text-charcoal font-semibold">{businessMeta.name}</strong> collects, uses, and safeguards information collected from customers, contractors, and visitors communicating with our offline yard or through this informational website.
            </p>
            <p className="mt-2">
              We operate as a local building materials and TMT steel supply business based in Bhilwara, Rajasthan. This website is purely informational and catalog-oriented. <strong className="text-charcoal font-semibold">We do not collect online payments, process credit cards, or store banking credentials through this website.</strong>
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-charcoal mb-3 pb-2 border-b border-cream-border">
              2. Information We Collect
            </h2>
            <p>We only receive personal or business contact details that you voluntarily supply when inquiring about steel rates, delivery schedules, or product specifications:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 pl-2">
              <li><strong>Direct Contact Information:</strong> Name, phone number, and WhatsApp contact handle.</li>
              <li><strong>Project &amp; Logistics Details:</strong> Delivery site address or plot location in Bhilwara or neighboring tehsils.</li>
              <li><strong>Inquiry Content:</strong> Bar bending schedules, required TMT diameters, binding wire rolls, or cover block quantities.</li>
              <li><strong>Taxation Information:</strong> Business GSTIN and billing legal name (provided solely for issuing official GST tax invoices).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-charcoal mb-3 pb-2 border-b border-cream-border">
              3. How We Use Collected Information
            </h2>
            <p>Information shared via direct phone calls, SMS, WhatsApp messaging, or direct inquiry channels is utilized strictly to:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 pl-2">
              <li>Calculate and provide requested per-quintal or per-ton material rate estimates.</li>
              <li>Coordinate vehicle dispatch, tractor-trolley transport, and weighbridge verification receipts.</li>
              <li>Generate legitimate commercial tax invoices adhering to statutory GST guidelines.</li>
              <li>Communicate order status updates and driver arrival coordination.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, monetize, or trade customer contact details to third-party telemarketers or external advertising networks.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-charcoal mb-3 pb-2 border-b border-cream-border">
              4. WhatsApp &amp; Third-Party Communication
            </h2>
            <p>
              When you click WhatsApp inquiry buttons on our website, you connect directly to WhatsApp&apos;s external messaging service. Interactions across WhatsApp are additionally governed by WhatsApp’s own privacy terms and end-to-end encryption protocols.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-charcoal mb-3 pb-2 border-b border-cream-border">
              5. Data Storage &amp; Security
            </h2>
            <p>
              Inquiry details and transaction receipts are stored within local accounting software strictly for tax auditing and statutory bookkeeping purposes as mandated under Indian commercial laws.
            </p>
          </section>

          {/* Section 6: Contact Information */}
          <section className="bg-cream-warm border border-cream-border p-6">
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-charcoal mb-3">
              6. Privacy Inquiries &amp; Grievances
            </h2>
            <p className="mb-3 text-xs">
              For any questions concerning this Privacy Policy or to request removal of your contact details from our inquiry log, please contact our desk:
            </p>
            <address className="not-italic font-mono text-xs text-charcoal space-y-1">
              <p><strong>{businessMeta.name}</strong> (Proprietor: {businessMeta.proprietor})</p>
              <p>Address: {businessMeta.address}</p>
              <p>Phones: {businessMeta.phone1} / {businessMeta.phone2}</p>
              <p>GSTIN: {businessMeta.gstin}</p>
            </address>
          </section>
        </div>
      </main>
    </>
  );
}
