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
        // Primary Camel Brown Palette (All pills, CTAs, and marker dots)
        camel: {
          DEFAULT: '#C19A6B',
          dark: '#A98053',
          light: '#D2AF84',
        },
        // Background Off-White Cream Palette (Warm blueprint paper base)
        cream: {
          DEFAULT: '#FDFBF7',
          card: '#FFFFFF',
          warm: '#F6F1E7',
          border: '#E7DDCB',
        },
        // Deep Charcoal Text Palette (High-contrast Didone serifs & technical line art)
        charcoal: {
          DEFAULT: '#2C2A29',
          muted: '#6E665C',
          dark: '#1E1D1C',
        },
        // Eucalyptus Green Accent Palette (Eyebrow badges)
        eucalyptus: {
          DEFAULT: '#2E5A44',
          dark: '#244735',
          light: '#3B7257',
        },

        // Theme Token Aliases
        canvas: '#FDFBF7',
        canvasMuted: '#F6F1E7',
        canvasSubtle: '#FFFFFF',
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
