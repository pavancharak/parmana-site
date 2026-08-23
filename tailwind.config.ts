import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: "#D97706",
      "primary-dark": "#B45309",
      "text-primary": "#1A1A1A",
      "text-secondary": "#6B7280",
      "bg-light": "#F3F4F6",
      "border-light": "#E5E7EB",
      success: "#10B981",
    },
    extend: {
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
