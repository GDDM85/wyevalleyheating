import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Wye Valley Plumbing, Heating & Renewables brand palette
        navy: {
          50: '#eef1f6',
          100: '#d7deea',
          200: '#b0bdd4',
          300: '#8899b8',
          400: '#5c709a',
          500: '#3c5079',
          600: '#2c3c60',
          700: '#22304d',
          800: '#1b2540',
          900: '#141b30',
          950: '#0c111f',
        },
        flame: {
          50: '#fff4ec',
          100: '#ffe4cf',
          200: '#ffc79a',
          300: '#ffa15e',
          400: '#fa7f34',
          500: '#ea6a1f',
          600: '#cc5416',
          700: '#a34015',
          800: '#833618',
          900: '#6b2e17',
        },
        leaf: {
          50: '#f2f7ec',
          100: '#e0ecd2',
          200: '#c1d9a8',
          300: '#9dc079',
          400: '#7ba652',
          500: '#5e8a3a',
          600: '#486d2c',
          700: '#395424',
          800: '#2f4420',
          900: '#29391e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
