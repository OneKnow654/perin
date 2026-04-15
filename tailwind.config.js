/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#023274",
        secondary:  "#F2F1ED",
        accent:     "#58b66a",
        dark:       "#0F3D3E",
        text:       "#454040",
        "text-light": "#8F8F8F",
        divider:    "#DFE1DE",
        "footer-bg": "#123134",
        "cta-bg":   "#4e9695",
      },
      fontFamily: {
        sans: ["'Segoe UI Variable'", "'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
