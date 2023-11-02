/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F19224",
        contrast: "#16132E",
        extra: "#2f5fb5" //almost dark green 
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
        mobile: { raw: "(max-width:500px)" },
        mobileX: {raw: "(max-height: 650px)"},
        HStretch: {raw: "(max-height: 500px)"},
        minimum: { max: "200px" },
        fullMobile: {raw: "(max-width:500px) or (max-height: 650px)"}
        
      },
    },
    plugins: [],
  },
};
