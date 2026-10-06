/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F3EF',
        canvasMuted: '#EDECE8',
        'steel-blue': {
          DEFAULT: '#0F2A43',
          dark: '#0A1C2D',
          light: '#1B3D5E',
        },
        'steel-gray': {
          DEFAULT: '#4A5568',
          light: '#718096',
          dark: '#2D3748',
          border: '#CBD5E1',
        },
        'safety-amber': {
          DEFAULT: '#B45309', // WCAG AA compliant on #F4F3EF (4.52:1)
          light: '#D97706',
          dark: '#92400E', // High contrast (6.39:1)
          brand: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
