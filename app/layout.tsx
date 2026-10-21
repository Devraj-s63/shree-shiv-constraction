import type { Metadata } from 'next';
import './globals.css';
import { fraunces, rozhaOne, publicSans, bebasNeue } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';
import BlueprintBackground from '@/components/BlueprintBackground';
import LenisProvider from '@/components/LenisProvider';
import CurtainTransition from '@/components/CurtainTransition';

const siteUrl = 'https://shree-shiv-constraction.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TMT Sariya in Bhilwara | Shree Shiv Construction & Steel | Kay2 Xenox Dealer',
    template: '%s',
  },
  description:
    'Leading TMT sariya in Bhilwara and building material supplier. Authorized Kay2 Xenox dealer in Bhilwara stocking Fe 550D bars, binding wire & cover blocks. Call 8278643303.',
  keywords: [
    'TMT sariya in Bhilwara',
    'building material supplier Bhilwara',
    'Kay2 Xenox dealer Bhilwara',
    'TMT bar price Bhilwara',
    'Fe 550D sariya',
    'binding wire Bhilwara',
    'concrete cover blocks Bhilwara',
  ],
  authors: [{ name: 'Shree Shiv Construction & Steel' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'TMT Sariya in Bhilwara | Shree Shiv Construction & Steel | Kay2 Xenox Dealer',
    description:
      'Leading TMT sariya in Bhilwara and building material supplier. Authorized Kay2 Xenox dealer in Bhilwara stocking Fe 550D bars, binding wire & cover blocks. Call 8278643303.',
    siteName: 'Shree Shiv Construction & Steel',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-preview.webp',
        width: 1200,
        height: 630,
        alt: 'Shree Shiv Construction & Steel Bhilwara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TMT Sariya in Bhilwara | Shree Shiv Construction & Steel | Kay2 Xenox Dealer',
    description:
      'Leading TMT sariya in Bhilwara and building material supplier. Authorized Kay2 Xenox dealer in Bhilwara stocking Fe 550D bars, binding wire & cover blocks. Call 8278643303.',
    images: ['/images/og-preview.webp'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara',
  },
};

const hardwareStoreSchema = {
  '@context': 'https://schema.org',
  '@type': 'HardwareStore',
  '@id': 'https://shree-shiv-constraction.vercel.app/#store',
  name: 'Shree Shiv Construction & Steel',
  legalName: 'Shree Shiv Construction & Steel',
  description:
    'Authorized stockist of Kay2 Xenox TMT bars, Fe 550D reinforcement steel sariya, binding wire, and building materials in Bhilwara, Rajasthan.',
  url: 'https://shree-shiv-constraction.vercel.app',
  image: 'https://shree-shiv-constraction.vercel.app/images/og-preview.webp',
  logo: 'https://shree-shiv-constraction.vercel.app/favicon.svg',
  telephone: '+91-8278643303',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI, Cheque',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 Feet Road, Near Sharda Evergreen',
    addressLocality: 'Bhilwara',
    addressRegion: 'Rajasthan',
    postalCode: '311001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3622326,
    longitude: 74.602833,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8278643303',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9602812764',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  sameAs: ['https://instagram.com/shreeshivconstructionsteel'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable} ${rozhaOne.variable} ${publicSans.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hardwareStoreSchema) }}
        />
      </head>
      <body className="bg-cream text-charcoal font-body min-h-screen flex flex-col relative selection:bg-camel selection:text-charcoal">
        <LenisProvider>
          <CurtainTransition />
          <BlueprintBackground />
          <Navbar />
          <div className="flex-grow relative z-10 pt-16 sm:pt-20">{children}</div>
          <FloatingWhatsApp />
          <CookieConsent />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
