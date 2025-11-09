import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    // IconLink color variants - explicit inclusion for production builds
    // Primary colors
    'bg-primary-100', 'bg-primary-200', 'ring-primary-300', 'hover:bg-primary-200', 'hover:ring-primary', 'text-primary', 'group-hover:text-primary-content',
    // Secondary colors
    'bg-secondary-100', 'bg-secondary-200', 'ring-secondary-300', 'hover:bg-secondary-200', 'hover:ring-secondary', 'text-secondary', 'group-hover:text-secondary-content',
    // Tertiary colors
    'bg-tertiary-100', 'bg-tertiary-200', 'ring-tertiary-300', 'hover:bg-tertiary-200', 'hover:ring-tertiary', 'text-tertiary', 'group-hover:text-tertiary-content',
    // Accent colors
    'bg-accent-100', 'bg-accent-200', 'ring-accent-300', 'hover:bg-accent-200', 'hover:ring-accent', 'text-accent', 'group-hover:text-accent-content',
    // Neutral colors
    'bg-neutral-100', 'bg-neutral-200', 'ring-neutral-300', 'hover:bg-neutral-200', 'hover:ring-neutral', 'text-neutral', 'group-hover:text-neutral-content',

    // CustomLink color variants - explicit inclusion for production builds
    // Base colors
    'bg-base-100', 'bg-base-200', 'ring-base-300', 'hover:bg-base-200', 'hover:ring-base-content/20', 'text-base-content', 'text-base-content/60', 'text-base-content/70',
    // Primary colors for CustomLink
    'hover:ring-primary-content/20', 'text-primary-content', 'text-primary-content/60', 'text-primary-content/70',
    // Secondary colors for CustomLink
    'hover:ring-secondary-content/20', 'text-secondary-content', 'text-secondary-content/60', 'text-secondary-content/70',
    // Tertiary colors for CustomLink
    'hover:ring-tertiary-content/20', 'text-tertiary-content', 'text-tertiary-content/60', 'text-tertiary-content/70',
    // Accent colors for CustomLink
    'hover:ring-accent-content/20', 'text-accent-content', 'text-accent-content/60', 'text-accent-content/70',
    // Neutral colors for CustomLink
    'hover:ring-neutral-content/20', 'text-neutral-content', 'text-neutral-content/60', 'text-neutral-content/70',

    // Gradient variants for CustomLink
    'from-primary-100-gradient-start', 'to-primary-100-gradient-end', 'from-primary-200-gradient-start', 'to-primary-200-gradient-end', 'from-primary-300-gradient-start', 'to-primary-300-gradient-end',
    'from-secondary-100-gradient-start', 'to-secondary-100-gradient-end', 'from-secondary-200-gradient-start', 'to-secondary-200-gradient-end', 'from-secondary-300-gradient-start', 'to-secondary-300-gradient-end',
    'from-tertiary-100-gradient-start', 'to-tertiary-100-gradient-end', 'from-tertiary-200-gradient-start', 'to-tertiary-200-gradient-end', 'from-tertiary-300-gradient-start', 'to-tertiary-300-gradient-end',
    'from-accent-100-gradient-start', 'to-accent-100-gradient-end', 'from-accent-200-gradient-start', 'to-accent-200-gradient-end', 'from-accent-300-gradient-start', 'to-accent-300-gradient-end',
    'from-neutral-100-gradient-start', 'to-neutral-100-gradient-end', 'from-neutral-200-gradient-start', 'to-neutral-200-gradient-end', 'from-neutral-300-gradient-start', 'to-neutral-300-gradient-end',
    'from-base-100-gradient-start', 'to-base-100-gradient-end', 'from-base-200-gradient-start', 'to-base-200-gradient-end', 'from-base-300-gradient-start', 'to-base-300-gradient-end',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'inherit',
            maxWidth: '65ch',
            h1: {
              fontWeight: '300',
              fontSize: '2.25em',
              marginTop: '2.1em',
              marginBottom: '0.75em',
              lineHeight: 1.1,
              color: 'var(--accent-200)',
            },
            p: {
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              fontSize: '1.35em',
              lineHeight: 1.5,
              paddingBottom: '1em',
            },
            figcaption: {
              fontSize: '1.1em',
            }
          },
        },
      },
      colors: {
          "primary-100": "oklch(from var(--primary-100) l c h / <alpha-value>)",
          "primary-200": "oklch(from var(--primary-200) l c h / <alpha-value>)",
          "primary-300": "oklch(from var(--primary-300) l c h / <alpha-value>)",
          "primary-content": "oklch(from var(--primary-content) l c h / <alpha-value>)",
          "primary-100-gradient-start": "oklch(from var(--primary-100-gradient-start) l c h / <alpha-value>)",
          "primary-100-gradient-end": "oklch(from var(--primary-100-gradient-end) l c h / <alpha-value>)",
          "primary-200-gradient-start": "oklch(from var(--primary-200-gradient-start) l c h / <alpha-value>)",
          "primary-200-gradient-end": "oklch(from var(--primary-200-gradient-end) l c h / <alpha-value>)",
          "primary-300-gradient-start": "oklch(from var(--primary-300-gradient-start) l c h / <alpha-value>)",
          "primary-300-gradient-end": "oklch(from var(--primary-300-gradient-end) l c h / <alpha-value>)",

          "secondary-100": "oklch(from var(--secondary-100) l c h / <alpha-value>)",
          "secondary-200": "oklch(from var(--secondary-200) l c h / <alpha-value>)",
          "secondary-300": "oklch(from var(--secondary-300) l c h / <alpha-value>)",
          "secondary-content": "oklch(from var(--secondary-content) l c h / <alpha-value>)",
          "secondary-100-gradient-start": "oklch(from var(--secondary-100-gradient-start) l c h / <alpha-value>)",
          "secondary-100-gradient-end": "oklch(from var(--secondary-100-gradient-end) l c h / <alpha-value>)",
          "secondary-200-gradient-start": "oklch(from var(--secondary-200-gradient-start) l c h / <alpha-value>)",
          "secondary-200-gradient-end": "oklch(from var(--secondary-200-gradient-end) l c h / <alpha-value>)",
          "secondary-300-gradient-start": "oklch(from var(--secondary-300-gradient-start) l c h / <alpha-value>)",
          "secondary-300-gradient-end": "oklch(from var(--secondary-300-gradient-end) l c h / <alpha-value>)",

          "tertiary-100": "oklch(from var(--tertiary-100) l c h / <alpha-value>)",
          "tertiary-200": "oklch(from var(--tertiary-200) l c h / <alpha-value>)",
          "tertiary-300": "oklch(from var(--tertiary-300) l c h / <alpha-value>)",
          "tertiary-content": "oklch(from var(--tertiary-content) l c h / <alpha-value>)",
          "tertiary-100-gradient-start": "oklch(from var(--tertiary-100-gradient-start) l c h / <alpha-value>)",
          "tertiary-100-gradient-end": "oklch(from var(--tertiary-100-gradient-end) l c h / <alpha-value>)",
          "tertiary-200-gradient-start": "oklch(from var(--tertiary-200-gradient-start) l c h / <alpha-value>)",
          "tertiary-200-gradient-end": "oklch(from var(--tertiary-200-gradient-end) l c h / <alpha-value>)",
          "tertiary-300-gradient-start": "oklch(from var(--tertiary-300-gradient-start) l c h / <alpha-value>)",
          "tertiary-300-gradient-end": "oklch(from var(--tertiary-300-gradient-end) l c h / <alpha-value>)",

          "accent-100": "oklch(from var(--accent-100) l c h / <alpha-value>)",
          "accent-200": "oklch(from var(--accent-200) l c h / <alpha-value>)",
          "accent-300": "oklch(from var(--accent-300) l c h / <alpha-value>)",
          "accent-content": "oklch(from var(--accent-content) l c h / <alpha-value>)",
          "accent-100-gradient-start": "oklch(from var(--accent-100-gradient-start) l c h / <alpha-value>)",
          "accent-100-gradient-end": "oklch(from var(--accent-100-gradient-end) l c h / <alpha-value>)",
          "accent-200-gradient-start": "oklch(from var(--accent-200-gradient-start) l c h / <alpha-value>)",
          "accent-200-gradient-end": "oklch(from var(--accent-200-gradient-end) l c h / <alpha-value>)",
          "accent-300-gradient-start": "oklch(from var(--accent-300-gradient-start) l c h / <alpha-value>)",
          "accent-300-gradient-end": "oklch(from var(--accent-300-gradient-end) l c h / <alpha-value>)",

          "neutral-100": "oklch(from var(--neutral-100) l c h / <alpha-value>)",
          "neutral-200": "oklch(from var(--neutral-200) l c h / <alpha-value>)",
          "neutral-300": "oklch(from var(--neutral-300) l c h / <alpha-value>)",
          "neutral-content": "oklch(from var(--neutral-content) l c h / <alpha-value>)",
          "neutral-100-gradient-start": "oklch(from var(--neutral-100-gradient-start) l c h / <alpha-value>)",
          "neutral-100-gradient-end": "oklch(from var(--neutral-100-gradient-end) l c h / <alpha-value>)",
          "neutral-200-gradient-start": "oklch(from var(--neutral-200-gradient-start) l c h / <alpha-value>)",
          "neutral-200-gradient-end": "oklch(from var(--neutral-200-gradient-end) l c h / <alpha-value>)",
          "neutral-300-gradient-start": "oklch(from var(--neutral-300-gradient-start) l c h / <alpha-value>)",
          "neutral-300-gradient-end": "oklch(from var(--neutral-300-gradient-end) l c h / <alpha-value>)",

          "base-100": "oklch(from var(--base-100) l c h / <alpha-value>)",
          "base-200": "oklch(from var(--base-200) l c h / <alpha-value>)",
          "base-300": "oklch(from var(--base-300) l c h / <alpha-value>)",
          "base-content": "oklch(from var(--base-content) l c h / <alpha-value>)",
          "base-100-gradient-start": "oklch(from var(--base-100-gradient-start) l c h / <alpha-value>)",
          "base-100-gradient-end": "oklch(from var(--base-100-gradient-end) l c h / <alpha-value>)",
          "base-200-gradient-start": "oklch(from var(--base-200-gradient-start) l c h / <alpha-value>)",
          "base-200-gradient-end": "oklch(from var(--base-200-gradient-end) l c h / <alpha-value>)",
          "base-300-gradient-start": "oklch(from var(--base-300-gradient-start) l c h / <alpha-value>)",
          "base-300-gradient-end": "oklch(from var(--base-300-gradient-end) l c h / <alpha-value>)",

          "bg-top": "oklch(from var(--bg-top) l c h / <alpha-value>)",
          "bg-bottom": "oklch(from var(--bg-bottom) l c h / <alpha-value>)",
      }
    }
  },
  plugins: [typography],
};
