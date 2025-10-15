import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'primary': {
          DEFAULT: 'var(--color-primary)',
          'hover': 'var(--color-primary-hover)',
          'active': 'var(--color-primary-active)',
        },
        'secondary': {
          DEFAULT: 'var(--color-secondary)',
          'hover': 'var(--color-secondary-hover)',
        },
        'text-primary': 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-primary': 'var(--color-border)',
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
