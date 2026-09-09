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
      paper: "#F5F3F0",
      mint: "#6FE3C4",
      "mint-deep": "#2E9B7D",
      divider: "#DAD5CB",
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
