/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceBlue: "#f0f8ff", // Add AliceBlue to Tailwind's color palette
        darkBlue: "#080F44", // for main text
      },
    },
  },
  plugins: [],
};
