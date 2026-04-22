import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", md: "2rem", lg: "2rem" },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: {
          950: "#0A0F1E",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        blue: {
          600: "#0B5ED7",
          500: "#2563EB",
          400: "#60A5FA",
          100: "#DBEAFE",
        },
        teal: {
          500: "#14B8A6",
          400: "#2DD4BF",
          300: "#5EEAD4",
        },
        amber: {
          500: "#F59E0B",
          400: "#FBBF24",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        h1: ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        metric: ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        "glow-blue": "0 0 40px rgba(11,94,215,0.3)",
        "glow-teal": "0 0 40px rgba(20,184,166,0.3)",
      },
      maxWidth: {
        "7xl": "1280px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(45, 212, 191, 0.4))" },
          "50%": { filter: "drop-shadow(0 0 16px rgba(45, 212, 191, 0.8))" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "subtle-pulse": "subtle-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-in-right": "slide-in-right 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0A0F1E 0%, #1E293B 50%, #0F172A 100%)",
        "gradient-cta": "linear-gradient(135deg, #0B5ED7, #2563EB)",
        "gradient-card-glow":
          "linear-gradient(135deg, rgba(20,184,166,0.1), rgba(11,94,215,0.1))",
        "gradient-mesh":
          "radial-gradient(at 27% 37%, rgba(20,184,166,0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(11,94,215,0.12) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(245,158,11,0.08) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
