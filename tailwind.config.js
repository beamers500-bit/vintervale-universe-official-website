/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      colors: {
        ink: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d5d9dd',
          300: '#b1b8bf',
          400: '#86909a',
          500: '#67727d',
          600: '#525b65',
          700: '#434a52',
          800: '#393f45',
          900: '#33373c',
          950: '#1d2024',
        },

        frost: {
          50: '#f0f6f9',
          100: '#dceaf2',
          200: '#bcd5e5',
          300: '#8bb8d3',
          400: '#5493bb',
          500: '#36779d',
          600: '#2a6082',
          700: '#254e6a',
          800: '#234259',
          900: '#213a4d',
          950: '#162533',
        },

        ember: {
          50: '#fdf6ef',
          100: '#fae9d3',
          200: '#f4d0a5',
          300: '#ecaf6c',
          400: '#e58e3f',
          500: '#df7523',
          600: '#cc5d1a',
          700: '#a94618',
          800: '#87391a',
          900: '#6e3018',
          950: '#3c170c',
        },

        vintervale: {
          50: '#edf8f5',
          100: '#d5efe8',
          200: '#addfd3',
          300: '#7bc8b8',
          400: '#4eaa98',
          500: '#2f7568',
          600: '#29675c',
          700: '#24534c',
          800: '#20433e',
          900: '#1d3835',
          950: '#0d211f',
        },

        gold: {
          50: '#fdf9ed',
          100: '#f9efcf',
          200: '#f2dc9d',
          300: '#e9c363',
          400: '#dca53c',
          500: '#c0882e',
          600: '#a26926',
          700: '#825023',
          800: '#6c4222',
          900: '#5c3821',
          950: '#351d0e',
        },
      },
    },
  },

  plugins: [],
};
