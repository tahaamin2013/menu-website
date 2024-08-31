import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.8)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#0b7555",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      wave: {
        "0%, 100%": { d: 'path("M25,40 Q50,48 75,40")' },
        "50%": { d: 'path("M25,40 Q50,32 75,40")' },
      },
      steam: {
        "0%": { transform: "translateY(0)", opacity: 0 },
        "50%": { transform: "translateY(-10px)", opacity: 1 },
        "100%": { transform: "translateY(-20px)", opacity: 0 },
      },
      drip: {
        "0%": { transform: "translateY(-40px)", opacity: 0 },
        "50%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(40px)", opacity: 0 },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-1": "bounce 1s infinite 0.2s",
        "bounce-2": "bounce 1s infinite 0.4s",
        "bounce-3": "bounce 1s infinite 0.6s",
        draw: "draw 2s ease-in-out infinite",
        wave: "wave 2s ease-in-out infinite",
        steam: "steam 2s ease-in-out infinite",
        drip: "drip 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }:any) {
      const newUtilities = {
        ".animate-draw": {
          animation: "draw 2s ease-in-out infinite",
          strokeDasharray: "1000",
          strokeDashoffset: "1000",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
