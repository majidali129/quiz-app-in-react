/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#313131',
        bgLighter: '#5a5a5a',
        bgDark: '#0b0b0b',
        medium: '#c3c3c3',
        light: '#e6e6e6',
        success: '#8ac926',
        danger: '#6f1d1b'
      },
      fontFamily: {
        codystar: ['Codystar', 'Lato', 'Monoton' ],
        lato: ['Lato', 'Monoton'],
      }
    },
  },
  plugins: [],
}