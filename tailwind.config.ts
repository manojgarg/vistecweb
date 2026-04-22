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
        // Vistec Partners brand navy (maps from site CSS #031D76 / #09005E / #1F1F77)
        navy: {
          950: "#050622",
          900: "#09005E",
          800: "#1F1F77",
          700: "#2A2A8A",
        },
        // Semantic "primary" = Vistec brand orange #F55800 (logo color)
        // Kept as `blue` token names to avoid rewriting every component class
        blue: {
          50: "#FFF8F2",
          100: "#FEF3E7",
          200: "#FFD4B0",
          300: "#FFBF8B",
          400: "#FFAA6E",
          500: "#FF7A2E",
          600: "#F55800",
        },
        // Vistec supporting teal family (#00697F, #42C3CA, #92D4D2)
        teal: {
          500: "#00697F",
          400: "#42C3CA",
          300: "#92D4D2",
        },
        // Brand-native aliases (use these in new code for clarity)
        brand: {
          orange: "#F55800",
          "orange-light": "#FF7A2E",
          "orange-soft": "#FFAA6E",
          "orange-tint": "#FEF3E7",
          navy: "#031D76",
          "navy-deep": "#09005E",
          "navy-light": "#1F1F77",
          teal: "#00697F",
          "teal-mid": "#42C3CA",
          "teal-light": "#92D4D2",
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
        // brand orange glow (was blue)
        "glow-blue": "0 0 40px rgba(245,88,0,0.35)",
        "glow-orange": "0 0 40px rgba(245,88,0,0.35)",
        "glow-teal": "0 0 40px rgba(66,195,202,0.3)",
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
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(245, 88, 0, 0.45))" },
          "50%": { filter: "drop-shadow(0 0 16px rgba(245, 88, 0, 0.8))" },
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
        "gradient-hero":
          "linear-gradient(135deg, #050622 0%, #09005E 55%, #1F1F77 100%)",
        "gradient-cta": "linear-gradient(135deg, #F55800 0%, #FF7A2E 100%)",
        "gradient-card-glow":
          "linear-gradient(135deg, rgba(245,88,0,0.10), rgba(255,122,46,0.10))",
        "gradient-mesh":
          "radial-gradient(at 27% 37%, rgba(245,88,0,0.12) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(255,122,46,0.10) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(255,170,110,0.07) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
