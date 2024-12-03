import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-roboto-mono)"],
        sourceCodePro: ["var(--font-source-code-pro)"],
      },
      colors: {
        "cyber-blue": "#00F0FF",
        "dark-navy": "#0A0F1C",
        "card-dark": "#0D1425",
        "teal-dark": "#1A3038",
        green: {
          400: "#4ade80",
          600: "#16a34a",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "border-travel": "border-travel 4s linear infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        floating: "float 3s ease-in-out infinite",
      },
      keyframes: {
        "border-travel": {
          "0%, 100%": { backgroundPosition: "10% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.8",
            backgroundPosition: "center",
          },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#4ade80",
            a: {
              color: "#4ade80",
              "&:hover": {
                color: "#16a34a",
              },
            },
          },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
