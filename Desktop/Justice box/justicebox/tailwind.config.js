/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f7f9fb",
        "secondary-container": "#fd761a",
        "outline": "#76777d",
        "on-surface-variant": "#45464d",
        "primary-fixed-dim": "#bec6e0",
        "outline-variant": "#c6c6cd",
        "surface-tint": "#565e74",
        "inverse-surface": "#2d3133",
        "tertiary": "#000000",
        "surface-container": "#eceef0",
        "on-primary-fixed-variant": "#3f465c",
        "on-secondary-fixed": "#341100",
        "secondary": "#9d4300",
        "tertiary-fixed-dim": "#b7c8e1",
        "inverse-on-surface": "#eff1f3",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "on-secondary-container": "#5c2400",
        "surface-container-low": "#f2f4f6",
        "on-primary-fixed": "#131b2e",
        "on-tertiary-container": "#75859d",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#783200",
        "surface": "#f7f9fb",
        "secondary-fixed-dim": "#ffb690",
        "on-tertiary": "#ffffff",
        "primary-container": "#131b2e",
        "error": "#ba1a1a",
        "surface-container-highest": "#e0e3e5",
        "surface-container-high": "#e6e8ea",
        "on-tertiary-fixed-variant": "#38485d",
        "primary": "#000000",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "inverse-primary": "#bec6e0",
        "surface-dim": "#d8dadc",
        "on-error": "#ffffff",
        "primary-fixed": "#dae2fd",
        "on-tertiary-fixed": "#0b1c30",
        "on-surface": "#191c1e",
        "on-primary-container": "#7c839b",
        "surface-bright": "#f7f9fb",
        "secondary-fixed": "#ffdbca",
        "on-background": "#191c1e",
        "tertiary-fixed": "#d3e4fe",
        "surface-variant": "#e0e3e5",
        "tertiary-container": "#0b1c30"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-padding": "32px",
        "gutter": "20px",
        "xs": "4px",
        "md": "16px",
        "unit": "4px",
        "lg": "24px",
        "sm": "8px",
        "xl": "48px"
      },
      fontFamily: {
        "cta": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "h3": ["Geist", "sans-serif"],
        "h2": ["Geist", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "mono-label": ["JetBrains Mono", "monospace"],
        "h1": ["Geist", "sans-serif"]
      },
      fontSize: {
        "cta": ["16px", { lineHeight: "1.0", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "h3": ["24px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "h2": ["30px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "mono-label": ["13px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
        "h1": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }]
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ],
}
