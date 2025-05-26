/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6edf7',
          100: '#ccdcef',
          200: '#99b8df',
          300: '#6695cf',
          400: '#3371bf',
          500: '#004aad',
          600: '#003b8a',
          700: '#002c68',
          800: '#001e45',
          900: '#000f23',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e4e5e1',
          200: '#c9cac3',
          300: '#afb0a5',
          400: '#949587',
          500: '#797b69',
          600: '#616254',
          700: '#49493f',
          800: '#31312a',
          900: '#181815',
        },
        accent: {
          50: '#f8f1e7',
          100: '#f1e3cf',
          200: '#e3c79f',
          300: '#d5ab6f',
          400: '#c78f3f',
          500: '#be935f',
          600: '#98764c',
          700: '#725839',
          800: '#4c3b26',
          900: '#261d13',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};