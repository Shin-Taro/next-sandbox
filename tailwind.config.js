/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sp: { max: "767px" },
      pc: { min: "768px" },
    },
    extend: {
      fontSize: {
        first: "3.2rem",
        second: "2.4rem",
        third: "2rem",
        fourth: "1.6rem",
        fifth: "1.4rem",
        sixth: "1.2rem",
      },
    },
  },
  plugins: [],
}
