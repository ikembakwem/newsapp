/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        smd: '550px',
        container: '1180px',
      },
      colors: {
        line: '#f1f1f1',
      },
      fontSize: {
        'post-title': ['1.625rem', { lineHeight: '1.2' }],
        smx: ['.8125rem', { lineHeight: '1.23' }],
        xlm: ['1.375rem', { lineHeight: '1.09' }],
      },
      flexBasis: {
        'one-third': '29%',
        'two-third': '69%',
      },
      animation: {
        'slide-down': 'slideDown .3s cubic-bezier(0, 0.5, 0, 1) forwards',
      },
      keyframes: {
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-24rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
