const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('./node_modules/@privateLib/uikit/tailwind-presets/core.js'),
    require('./tailwind/theme.js'),
  ],
  prefix: 'tw-',
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xs': '320px',
      xs: '420px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      display: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
  corePlugins: {
    preflight: false,
  },
};
