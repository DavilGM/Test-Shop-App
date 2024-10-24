/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgba(54, 152, 53, 1)',
        'custom-green-text': 'rgba(54, 152, 53, 1)',
        'custom-green-gray': 'rgba(222,236,226,255)',
        'custom-green-gray-gray': 'rgba(208,234,214,255)',
      },
    },
  },
  plugins: [require('daisyui')],
}

