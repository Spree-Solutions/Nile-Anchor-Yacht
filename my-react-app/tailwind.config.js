/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003950',
          dark: '#002841',
          light: '#004a5e',
        },
        secondary: {
          DEFAULT: '#a18c6d',
          dark: '#8a7659',
          light: '#b5a189',
        }
      },
      fontFamily: {
        'sans': ['Work Sans', 'system-ui', 'sans-serif'],
        'serif': ['Antic Didone', 'Georgia', 'serif'],
        'display': ['Marcellus', 'Georgia', 'serif'],
        'script': ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
}