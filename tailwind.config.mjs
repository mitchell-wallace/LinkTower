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
          "primary": "#3b82f6",
          "secondary": "#64748b", 
          "accent": "#06b6d4",
          "neutral": "#475569",
          "base-100": "#ffffff",
          "base-200": "#e2e8f0",
          "base-300": "#cbd5e1",
          "base-content": "#1e293b",
          "info": "#0ea5e9",
          "success": "#22c55e", 
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      {
        "treelink-dark": {
          "primary": "#3b82f6",
          "secondary": "#64748b",
          "accent": "#06b6d4", 
          "neutral": "#475569",
          "base-100": "#1e293b",
          "base-200": "#334155",
          "base-300": "#475569", 
          "base-content": "#f1f5f9",
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#f59e0b", 
          "error": "#ef4444",
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
