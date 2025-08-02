/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // index.html di root
    "./src/**/*.{js,ts,jsx,tsx}" // semua file JS/TS di folder src
  ],
  theme: {
    extend: {}, // kamu bisa custom nanti di sini
  },
  plugins: [], // tambahkan plugin Tailwind di sini jika dibutuhkan
}
