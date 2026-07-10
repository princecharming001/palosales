import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0b0b0f",
        panel: "#131318",
        elevated: "#1b1b22",
        hairline: "#26262f",
        ink: "#ededf2",
        muted: "#9a9aa8",
        faint: "#6b6b78",
        brand: {
          DEFAULT: "#7c5cff",
          soft: "#9d84ff",
          glow: "#5b3df0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.25s ease-out",
        blink: "blink 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
