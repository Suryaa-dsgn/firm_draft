import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        /* Brand surface */
        canvas:       "var(--canvas)",
        surface:      "var(--surface)",
        "surface-sunk": "var(--surface-sunk)",

        /* Brand text */
        ink: {
          DEFAULT: "var(--ink)",
          muted:   "var(--ink-muted)",
          faint:   "var(--ink-faint)",
        },

        /* Brand borders */
        hairline: {
          DEFAULT: "var(--hairline)",
          strong:  "var(--hairline-strong)",
        },

        /* Accent */
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          tint:    "var(--accent-tint)",
        },

        /* Navy */
        navy: {
          DEFAULT: "var(--navy)",
          2:       "var(--navy-2)",
        },
        "on-navy": {
          DEFAULT: "var(--on-navy)",
          muted:   "var(--on-navy-muted)",
        },

        /* Data */
        data: {
          base:   "var(--data-base)",
          signal: "var(--data-signal)",
        },

        /* shadcn compat */
        background:  "var(--background)",
        foreground:  "var(--foreground)",
        border:      "var(--border)",
        input:       "var(--input)",
        ring:        "var(--ring)",
      },

      fontSize: {
        "display-xl": ["var(--display-xl)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-l":  ["var(--display-l)",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-m":  ["var(--display-m)",  { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        title:        ["var(--title)",       { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-lg":    ["var(--body-lg)",     { lineHeight: "1.5",  letterSpacing: "0" }],
        body:         ["var(--body)",        { lineHeight: "1.6",  letterSpacing: "0" }],
        small:        ["var(--small)",       { lineHeight: "1.5",  letterSpacing: "0" }],
        "mono-label": ["var(--mono-label)", { lineHeight: "1",    letterSpacing: "0.08em" }],
      },

      maxWidth: {
        content: "1240px",
      },

      borderRadius: {
        card:  "var(--radius-card)",
        input: "var(--radius-input)",
      },

      boxShadow: {
        card:       "0 1px 2px rgba(14,14,15,0.04)",
        "card-hover": "0 4px 12px rgba(14,14,15,0.08)",
      },

      spacing: {
        "section": "clamp(80px, 12vh, 160px)",
      },
    },
  },
  plugins: [],
};

export default config;
