import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      colors: {
        ...colors,
        'purple-text': '#AB9EC7',
        'purple-background': '#F5F0FF'
      }
    },
    fontFamily: {
      sans: ['OpenSauceSans', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
};
