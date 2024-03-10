/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        softBlue: "#3971ed",
        softViolet: "#e58cfd",
      },
    },
  },
  plugins: [],
};
