/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
    "./*/*/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        18: "72px",
      },
      fontSize: {
        h1: ["72px","98px"],
        h2: ["48px","64px"],
        lead1: ["18px","32px"]
    },
  },
  plugins: [],
}
}