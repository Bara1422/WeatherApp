/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      oswald: ['Oswald', 'system-ui', 'sans']
    },
    extend: {
      screens: {
        xsm: '425px'
      }
    }
  },
  plugins: []
}
