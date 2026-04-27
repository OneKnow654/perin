/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002d72",
          dark: "#001a42",
          light: "#003d99",
        },
        accent: {
          DEFAULT: "#005EB8",
          dark: "#004080",
          light: "#3385ff",
        },
        secondary: "#ffffff",
        dark: "#002d72",
        text: {
          DEFAULT: "#002d72",
          muted: "#888b8d",
          light: "#d1dddf",
        },
        surface: {
          light: "#f8f9fa",
          divider: "#d1dddf",
        }
      },
      fontFamily: {
        sans: ["'GT Eesti Pro Display'", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale using clamp(min, preferred, max)
        "step-0": ["clamp(0.9375rem, 0.9107rem + 0.1339vw, 1rem)", { lineHeight: "1.6", letterSpacing: "0.01em" }], // 15px - 16px
        "step-1": ["clamp(1.125rem, 1.0714rem + 0.2679vw, 1.25rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }], // 18px - 20px
        "step-2": ["clamp(1.35rem, 1.2536rem + 0.4821vw, 1.575rem)", { lineHeight: "1.3", letterSpacing: "-0.02em" }], // 21.6px - 25.2px
        "step-3": ["clamp(1.62rem, 1.4593rem + 0.8036vw, 1.995rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 25.9px - 31.9px
        "step-4": ["clamp(1.944rem, 1.6918rem + 1.2611vw, 2.5313rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }], // 31.1px - 40.5px
        // For very large hero headings
        "step-5": ["clamp(2.3328rem, 1.9515rem + 1.9067vw, 3.2219rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "step-6": ["clamp(2.7994rem, 2.2396rem + 2.7989vw, 4.1063rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
      },
      spacing: {
        "fluid-sm": "clamp(1rem, 0.8929rem + 0.5357vw, 1.25rem)",
        "fluid-md": "clamp(1.5rem, 1.2857rem + 1.0714vw, 2rem)",
        "fluid-lg": "clamp(2rem, 1.5714rem + 2.1429vw, 3rem)",
        "fluid-xl": "clamp(3rem, 2.1429rem + 4.2857vw, 5rem)",
      },
      maxWidth: {
        "layout": "min(100% - 2rem, 1400px)",
        "layout-wide": "min(100% - 2rem, 1800px)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
