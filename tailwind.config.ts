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
        background: "#F8F8F8",
        surface: "#FFFFFF",
        "text-primary": "#222222",
        "text-secondary": "#666666",
        accent: "#2563EB",
        border: "#E5E5E5",
        "hover-tint": "#F5F5F5",
        // Keep existing for compatibility
        foreground: "#222222",
        muted: "#F5F5F5",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        "jetbrains-mono": ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        'hero': ['clamp(4rem, 8vw, 8rem)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'hero-sm': ['clamp(3rem, 6vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'display': ['clamp(2.5rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
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
        "soft": "0 4px 20px rgba(0, 0, 0, 0.1)",
        "glow": "0 0 20px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

