import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      navy: "#0A0D10",
      paper: "#F6F9FC",
      mint: "#6FE3C4",
      "mint-deep": "#1E715B",
      divider: "#E3E8EE",
      gold: "#E8B34E",
    },
    fontFamily: {
      serif: ["var(--font-fraunces)", "Georgia", "serif"],
      sans: ["var(--font-public-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      mono: ["var(--font-plex-mono)", "monospace"],
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
