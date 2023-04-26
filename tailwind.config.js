/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'orange-300': '#fbaf85',
      'orange-700': '#d87d4a',
      'neutral-50': '#fafafa',
      'neutral-300': '#f1f1f1',
      'neutral-900': '#101010',
      white: '#ffffff',
      black: '#000000',
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
