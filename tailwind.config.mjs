/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F3EF',
        canvasMuted: '#EDECE8',
        steelBlue: {
          DEFAULT: '#1A242F',
          dark: '#16202B',
          light: '#253342',
        },
        steelGray: {
          DEFAULT: '#3E4A56',
          light: '#566270',
          dark: '#2D3640',
        },
        safetyAmber: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#F59E0B',
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
