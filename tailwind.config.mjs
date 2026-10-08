/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Camel Brown Palette
        camel: {
          DEFAULT: '#C19A6B',
          dark: '#A98053',
          light: '#D2AF84',
        },
        // Background Off-White Cream Palette
        cream: {
          DEFAULT: '#FDFBF7',
          card: '#FFFFFF',
          warm: '#F6F1E7',
          border: '#E7DDCB',
        },
        // Deep Charcoal Text Palette
        charcoal: {
          DEFAULT: '#2C2A29',
          muted: '#6E665C',
          dark: '#1E1D1C',
        },
        // Eucalyptus Green Accent Palette
        eucalyptus: {
          DEFAULT: '#2E5A44',
          dark: '#244735',
          light: '#3B7257',
        },

        // Theme Token Aliases for Seamless Component Integration
        canvas: '#FDFBF7',
        canvasMuted: '#F6F1E7',
        canvasSubtle: '#FFFFFF',

        'steel-blue': {
          DEFAULT: '#2C2A29',
          dark: '#2C2A29',
          light: '#3B3938',
          card: '#FFFFFF',
        },
        'steel-gray': {
          DEFAULT: '#6E665C',
          light: '#6E665C',
          dark: '#2C2A29',
          border: '#E7DDCB',
        },
        'safety-amber': {
          DEFAULT: '#C19A6B',
          light: '#D2AF84',
          dark: '#A98053',
          brand: '#C19A6B',
          glow: 'rgba(193, 154, 107, 0.15)',
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
