import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import EditorialIntro from '@/components/EditorialIntro';
import EditorialYardGallery from '@/components/EditorialYardGallery';

export const metadata: Metadata = {
  title: 'TMT Sariya in Bhilwara | Shree Shiv Construction & Steel | Kay2 Xenox Dealer',
  description:
    'Authorized Kay2 Xenox dealer and leading TMT sariya supplier in Bhilwara. Fe 550D reinforcement steel, binding wire & cover blocks. Call 8278643303.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Single-Screen Statement Hero with Blueprint Line Art & Sneaker-Drop Product Stage */}
      <Hero />

      {/* 2. Two-Column Editorial Intro Block */}
      <EditorialIntro />

      {/* 3. Editorial Yard Gallery with Overlapping Photography */}
      <EditorialYardGallery />
    </main>
  );
}
