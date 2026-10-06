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
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
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
