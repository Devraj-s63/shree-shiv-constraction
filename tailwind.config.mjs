/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep Charcoal-Black Canvas
        canvas: '#0B0D10',
        canvasMuted: '#12161C',
        canvasSubtle: '#181E26',
        
        // Steel Palettes adapted for deep luxury dark-mode
        'steel-blue': {
          DEFAULT: '#E2E8F0', // High-contrast crisp foreground heading color
          dark: '#080A0E',    // Absolute obsidian black
          light: '#F8FAFC',
          card: '#10141A',
        },
        'steel-gray': {
          DEFAULT: '#94A3B8', // High-contrast silver body copy
          light: '#CBD5E1',
          dark: '#475569',
          border: 'rgba(255, 255, 255, 0.08)', // Ultra-thin luxury divider
        },
        
        // Warm Amber-Gold Accents
        'safety-amber': {
          DEFAULT: '#D97706', // Rich warm amber-gold
          light: '#F59E0B',
          dark: '#B45309',
          brand: '#FBBF24',
          glow: 'rgba(217, 119, 6, 0.15)'
        },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
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
