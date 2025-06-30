/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    // IconLink color variants - explicit inclusion for production builds
    // Primary colors
    'bg-primary-100', 'bg-primary-200', 'ring-primary-300', 'hover:bg-primary-200', 'hover:ring-primary', 'text-primary', 'group-hover:text-primary-content',
    // Secondary colors
    'bg-secondary-100', 'bg-secondary-200', 'ring-secondary-300', 'hover:bg-secondary-200', 'hover:ring-secondary', 'text-secondary', 'group-hover:text-secondary-content',
    // Accent colors
    'bg-accent-100', 'bg-accent-200', 'ring-accent-300', 'hover:bg-accent-200', 'hover:ring-accent', 'text-accent', 'group-hover:text-accent-content',
    // Neutral colors
    'bg-neutral-100', 'bg-neutral-200', 'ring-neutral-300', 'hover:bg-neutral-200', 'hover:ring-neutral', 'text-neutral', 'group-hover:text-neutral-content',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
          "primary-100": "var(--primary-100)",
          "primary-200": "var(--primary-200)",
          "primary-300": "var(--primary-300)",
          "primary-content": "var(--primary-content)",

          "secondary-100": "var(--secondary-100)",
          "secondary-200": "var(--secondary-200)",
          "secondary-300": "var(--secondary-300)",
          "secondary-content": "var(--secondary-content)",

          "accent-100": "var(--accent-100)",
          "accent-200": "var(--accent-200)",
          "accent-300": "var(--accent-300)",
          "accent-content": "var(--accent-content)",

          "neutral-100": "var(--neutral-100)",
          "neutral-200": "var(--neutral-200)",
          "neutral-300": "var(--neutral-300)",
          "neutral-content": "var(--neutral-content)",

          "base-100": "var(--base-100)",
          "base-200": "var(--base-200)",
          "base-300": "var(--base-300)",
          "base-content": "var(--base-content)",
      }
    }
  },
};
