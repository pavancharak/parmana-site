import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      paper: "#FFFFFF",
      ink: "#1A1A1A",
      purple: "#6366F1",
      "purple-deep": "#4338CA",
      lavender: "#F5F3FF",
      border: "#E5E7EB",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      mono: ["var(--font-jetbrains-mono)", "monospace"],
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
