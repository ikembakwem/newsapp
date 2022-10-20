/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '500px',
      },
      colors: {
        line: '#f1f1f1',
      },
      fontSize: {
        'post-title': ['1.625rem', { lineHeight: '1.2' }],
        smx: ['.8125rem', { lineHeight: '1.23' }],
      },
      flexBasis: {
        'one-third': '29%',
        'two-third': '69%',
      },
    },
  },
  plugins: [],
};
