/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
    "./*/*/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary:"#8C30F5",
      },
      spacing: {
        18: "72px",
      },
      fontSize: {
        h1: ["72px","98px"]
        
    },
  },
  plugins: [],
}
}
