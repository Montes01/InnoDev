/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#E6E6E6",
        secondary: "#c6c6c6",
        blue_parts: "#00ff00",
      },
      colors: {
        primary: "#3b56b5",
        contrast: "#3b56b5",
      },
      screens: {
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1300px": "1300px",
        "1500px": "1500px",
        "2000px": "2000px",
        mobile: { raw: "(max-height: 750px),(max-width:500px)" },
        minimum: { max: "200px" },
        
      },
    },
    plugins: [],
  },
};
