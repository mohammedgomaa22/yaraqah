/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e77824',
        secondary: '#313131',
        main_bg: '#e7782450',
      },

    },
  },
  plugins: [],
}