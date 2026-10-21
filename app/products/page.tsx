import type { Metadata } from 'next';
import ProductsGallery3D from '@/components/ProductsGallery3D';

export const metadata: Metadata = {
  title: 'Selected Stock & Products | Shree Shiv Construction & Steel, Bhilwara',
  description:
    'Bespoke yard gallery of certified Kay2 Xenox Fe 550D TMT bars, annealed binding wire, and concrete cover blocks at Shree Shiv Construction & Steel, Bhilwara. 200 Feet Road depot.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsGallery3D />
    </main>
  );
}
