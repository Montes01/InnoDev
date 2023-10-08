/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#eaeaea",
        secondary: "#c6c6c6",
        blue_parts: "#3b56b5",
        contrasr: "#3b56b5",
      },
      colors: {
        primary: "#3b56b5",
        contrast: "#3b56b5",
      },
      screens: {
        '500px': '500px',
        '800px': '800px', 
        '1500px': '1500px',
        '2000px': '2000px',
      }
    },
  },
  plugins: [],
};
