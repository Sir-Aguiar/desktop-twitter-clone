/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Ubuntu": ['Ubuntu', 'sans-serif']
      },
      colors: {
        "twitter-blue":"#15202b",
        "tweet-button":"#1A8CD8",
        "tweet-icons":"rgb(29,155,240)"
      }
    },
  },
  plugins: [],
}