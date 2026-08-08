/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1F2937', // dark gray
        accent: {
          blue: '#2563EB',
          green: '#10B981'
        }
      }
    },
  },
  plugins: [],
}
