/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyPink: '#FDE2E4',
        pastelBlue: '#CDE7F0',
        pastelYellow: '#FFF6BD',
        pastelGreen: '#D0F4DE',
        pastelLilac: '#E4C1F9',
      },
    },
  },
  plugins: [],
}