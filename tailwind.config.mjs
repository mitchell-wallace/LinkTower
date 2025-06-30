/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "treelink-light": {
          // Primary brand color - vibrant blue for main actions and highlights
          "primary": "oklch(0.62 0.16 264)",
          // Text color for primary backgrounds - high contrast white with subtle blue tint
          "primary-content": "oklch(0.98 0.02 264)",
          // Secondary color - muted slate for supporting elements and icons
          "secondary": "oklch(0.52 0.04 237)", 
          // Text color for secondary backgrounds - high contrast white with subtle slate tint
          "secondary-content": "oklch(0.98 0.02 237)",
          // Accent color - bright cyan for emphasis and interactive elements
          "accent": "oklch(0.70 0.14 195)",
          // Text color for accent backgrounds - high contrast dark with subtle cyan tint
          "accent-content": "oklch(0.12 0.02 195)",
          // Neutral color - balanced slate for form controls and borders
          "neutral": "oklch(0.38 0.03 237)",
          // Text color for neutral backgrounds - high contrast white with subtle slate tint
          "neutral-content": "oklch(0.98 0.02 237)",
          // Main background - pure white for maximum contrast and readability
          "base-100": "oklch(1.00 0.00 0)",
          // Secondary background - light gray for hover states and panels
          "base-200": "oklch(0.93 0.01 237)",
          // Tertiary background - medium gray for subtle borders and dividers
          "base-300": "oklch(0.86 0.02 237)",
          // Main text color - dark slate for high contrast readability
          "base-content": "oklch(0.20 0.02 237)",
          // Informational blue - for tips, notes, and informational content
          "info": "oklch(0.68 0.15 225)",
          // Text color for info backgrounds - high contrast dark with subtle blue tint
          "info-content": "oklch(0.12 0.02 225)",
          // Success green - for confirmations, completed states, and positive feedback
          "success": "oklch(0.73 0.15 142)", 
          // Text color for success backgrounds - high contrast dark with subtle green tint
          "success-content": "oklch(0.12 0.02 142)",
          // Warning amber - for cautions, pending states, and attention-grabbing elements
          "warning": "oklch(0.75 0.13 80)",
          // Text color for warning backgrounds - high contrast dark with subtle amber tint
          "warning-content": "oklch(0.12 0.02 80)",
          // Error red - for failures, destructive actions, and critical alerts
          "error": "oklch(0.63 0.20 27)",
          // Text color for error backgrounds - high contrast white with subtle red tint
          "error-content": "oklch(0.98 0.02 27)",
        },
      },
      {
        "treelink-dark": {
          // Primary brand color - darker blue for dark theme (100-62=38% lightness)
          "primary": "oklch(0.38 0.16 264)",
          // Text color for primary backgrounds - high contrast white with subtle blue tint
          "primary-content": "oklch(0.98 0.02 264)",
          // Secondary color - darker slate for dark theme (100-52=48% lightness)
          "secondary": "oklch(0.48 0.04 237)",
          // Text color for secondary backgrounds - high contrast white with subtle slate tint
          "secondary-content": "oklch(0.98 0.02 237)",
          // Accent color - darker cyan for dark theme (100-70=30% lightness)
          "accent": "oklch(0.30 0.14 195)", 
          // Text color for accent backgrounds - high contrast white with subtle cyan tint
          "accent-content": "oklch(0.98 0.02 195)",
          // Neutral color - same balanced slate for consistency
          "neutral": "oklch(0.38 0.03 237)",
          // Text color for neutral backgrounds - high contrast white with subtle slate tint
          "neutral-content": "oklch(0.98 0.02 237)",
          // Main background - dark slate creates comfortable dark mode foundation
          "base-100": "oklch(0.20 0.02 237)",
          // Secondary background - medium dark slate for hover states and elevated panels
          "base-200": "oklch(0.29 0.02 237)",
          // Tertiary background - lighter slate for borders and subtle separators
          "base-300": "oklch(0.38 0.03 237)", 
          // Main text color - light warm gray for comfortable dark mode reading
          "base-content": "oklch(0.97 0.00 237)",
          // Informational blue - darker blue for dark theme (100-68=32% lightness)
          "info": "oklch(0.32 0.15 225)",
          // Text color for info backgrounds - high contrast white with subtle blue tint
          "info-content": "oklch(0.98 0.02 225)",
          // Success green - darker green for dark theme (100-73=27% lightness)
          "success": "oklch(0.27 0.15 142)",
          // Text color for success backgrounds - high contrast white with subtle green tint
          "success-content": "oklch(0.98 0.02 142)",
          // Warning amber - darker amber for dark theme (100-75=25% lightness)
          "warning": "oklch(0.25 0.13 80)", 
          // Text color for warning backgrounds - high contrast white with subtle amber tint
          "warning-content": "oklch(0.98 0.02 80)",
          // Error red - darker red for dark theme (100-63=37% lightness)
          "error": "oklch(0.37 0.20 27)",
          // Text color for error backgrounds - high contrast white with subtle red tint
          "error-content": "oklch(0.98 0.02 27)",
        },
      },
    ],
    darkTheme: "treelink-dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
