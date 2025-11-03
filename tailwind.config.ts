import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "text-tertiary": "#999999",
        accent: "#2563EB",
        "accent-light": "#3B82F6",
        "accent-dark": "#1E40AF",
        border: "#E5E5E5",
        "border-light": "#F0F0F0",
        "hover-tint": "#F5F5F5",
        // Keep existing for compatibility
        foreground: "#1A1A1A",
        muted: "#F5F5F5",
        // Newspaper colors
        "newspaper-bg": "#f8f7f2",
        "newspaper-text": "#2a2a2a",
        "newspaper-border": "#4a4a4a",
        "newspaper-accent": "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        "jetbrains-mono": ["var(--font-jetbrains-mono)", "monospace"],
        serif: ["Playfair Display", "Merriweather", "Georgia", "serif"],
        "playfair": ["Playfair Display", "serif"],
        "merriweather": ["Merriweather", "Georgia", "serif"],
        "old-standard": ["Old Standard TT", "serif"],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-sm': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-xl': ['1.3rem', { lineHeight: '1.65' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-blob": "radial-gradient(ellipse at center, rgba(155, 169, 251, 0.1) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "ticker": "ticker 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        "soft": "0 2px 16px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "glow": "0 0 24px rgba(37, 99, 235, 0.15)",
        "glow-lg": "0 0 32px rgba(37, 99, 235, 0.2)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.04)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

