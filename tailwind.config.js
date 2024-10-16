/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      width: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
