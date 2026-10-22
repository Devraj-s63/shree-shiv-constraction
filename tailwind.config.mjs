/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Unified Design System: Wine Red & Light Sand
        wine: {
          DEFAULT: '#7F011F',
          dark: '#5C0116',
          light: '#9B0126',
        },
        sand: {
          DEFAULT: '#F5EBD0',
          dark: '#ECE0C3',
          light: '#FAF4E4',
          card: '#F5EBD0',
          border: '#7F011F',
        },
        charcoalWine: '#2A080C',

        // Legacy alias harmonization to prevent any rogue hues
        camel: {
          DEFAULT: '#7F011F',
          dark: '#5C0116',
          light: '#9B0126',
        },
        cream: {
          DEFAULT: '#F5EBD0',
          card: '#F5EBD0',
          warm: '#F5EBD0',
          border: 'rgba(127, 1, 31, 0.25)',
        },
        charcoal: {
          DEFAULT: '#7F011F',
          muted: '#2A080C',
          dark: '#2A080C',
        },
        eucalyptus: {
          DEFAULT: '#7F011F',
          dark: '#5C0116',
          light: '#9B0126',
        },

        // Theme Token Aliases
        canvas: '#F5EBD0',
        canvasMuted: '#ECE0C3',
        canvasSubtle: '#F5EBD0',
      },
      fontFamily: {
        // English display: Fraunces (high-contrast Didone serif, huge, tight leading)
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Hindi display: Rozha One (fashion-editorial Devanagari serif)
        hindi: ['var(--font-rozha)', 'serif'],
        // Body / UI: Public Sans
        body: ['var(--font-public-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['var(--font-public-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        // Technical blueprint notation
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        // Sneaker stage massive condensed uppercase display
        condensed: ['var(--font-bebas)', 'Impact', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
