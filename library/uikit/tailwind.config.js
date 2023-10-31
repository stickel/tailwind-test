/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('./tailwind-presets/core.js')],
  prefix: 'tw-',
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@headlessui/tailwindcss'),
  ],
  corePlugins: {
    preflight: false,
  },
};
