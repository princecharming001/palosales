import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palo's neutral dark surfaces (from palo.ai)
        canvas: "#1c1c1c",
        panel: "#141414",
        elevated: "#222222",
        raised: "#2a2a2a",
        deep: "#0a0a0a",
        hairline: "rgba(217,217,217,0.10)",
        ink: "#ffffff",
        muted: "#959595",
        faint: "#6a6a6a",
        // Primary accent — Palo's iOS blue
        brand: {
          DEFAULT: "#007aff",
          soft: "#3897ff",
          glow: "#0a84ff",
        },
        // Secondary accent — Palo's signal green
        signal: {
          DEFAULT: "#3eec58",
          soft: "#4dff67",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
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
