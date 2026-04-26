/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002d72",
        secondary: "#ffffff",
        accent: "#ff4d00",
        dark: "#002d72",
        text: "#002d72",
        "text-light": "#888b8d",
        divider: "#d1dddf",
        "footer-bg": "#002d72",
        "cta-bg": "#ff4d00"
      },
      fontFamily: {
        sans: ["'GT Eesti Pro Display Medium'", "'sans-serif'", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
