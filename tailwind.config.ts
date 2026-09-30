import type { Config } from "tailwindcss";

/**
 * Design system. Every colour is a CSS variable (RGB channels) defined in
 * src/app/globals.css, so opacity modifiers like `bg-brand/10` still work and
 * the palette lives in one place.
 */
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        sunken: token("sunken"),
        line: { DEFAULT: token("line"), strong: token("line-strong") },
        control: token("control"),
        ink: { DEFAULT: token("ink"), 2: token("ink-2"), 3: token("ink-3") },
        brand: {
          DEFAULT: token("brand"),
          strong: token("brand-strong"),
          deep: token("brand-deep"),
          soft: token("brand-soft"),
          tint: token("brand-tint"),
          bright: token("brand-bright"),
        },
        accent: { DEFAULT: token("accent"), strong: token("accent-strong") },
        sky: { DEFAULT: token("sky"), soft: token("sky-soft"), ink: token("sky-ink") },
        note: { DEFAULT: token("note"), ink: token("note-ink"), line: token("note-line") },
        focus: token("focus"),
      },
      fontFamily: {
        sans: [
          "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
          "Helvetica Neue", "Arial", "sans-serif",
        ],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale: [mobile → desktop]
        display: ["clamp(2.5rem, 1.9rem + 3vw, 4rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 1.6rem + 1.9vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.4rem, 1.25rem + 0.7vw, 1.8rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["1.1875rem", { lineHeight: "1.35" }],
        lead: ["clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)", { lineHeight: "1.65" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.9375rem", { lineHeight: "1.55" }],
        xs: ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        measure: "68ch",
        page: "80rem",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "10px",
        lg: "16px",
        xl: "22px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(20 33 61 / 0.05), 0 2px 8px rgb(20 33 61 / 0.04)",
        lift: "0 2px 4px rgb(20 33 61 / 0.06), 0 12px 32px rgb(20 33 61 / 0.09)",
      },
      spacing: {
        // Minimum tap target (WCAG 2.5.5 / Apple HIG)
        tap: "2.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
