/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        // Light mode
        lightModeBackgroundFrom:
          "rgb(var(--light-mode-background-from) / <alpha-value>)",
        lightModeBackgroundTo:
          "rgb(var(--light-mode-background-to) / <alpha-value>)",
        lightModeForeground:
          "rgb(var(--light-mode-foreground) / <alpha-value>)",
        lightModeForegroundMuted:
          "rgb(var(--light-mode-foreground-muted) / <alpha-value>)",
        lightModeIconLinkOutline:
          "rgb(var(--light-mode-icon-link-outline) / <alpha-value>)",
        lightModeIconLinkBackground:
          "rgb(var(--light-mode-icon-link-background) / <alpha-value>)",
        lightModeIconLinkText:
          "rgb(var(--light-mode-icon-link-text) / <alpha-value>)",
        lightModeIconLinkOutlineHover:
          "rgb(var(--light-mode-icon-link-outline-hover) / <alpha-value>)",
        lightModeIconLinkBackgroundHover:
          "rgb(var(--light-mode-icon-link-background-hover) / <alpha-value>)",
        lightModeIconLinkTextHover:
          "rgb(var(--light-mode-icon-link-text-hover) / <alpha-value>)",
        lightModeCustomLinkOutline:
          "rgb(var(--light-mode-custom-link-outline) / <alpha-value>)",
        lightModeCustomLinkBackground:
          "rgb(var(--light-mode-custom-link-background) / <alpha-value>)",
        lightModeCustomLinkText:
          "rgb(var(--light-mode-custom-link-text) / <alpha-value>)",
        lightModeCustomLinkOutlineHover:
          "rgb(var(--light-mode-custom-link-outline-hover) / <alpha-value>)",
        lightModeCustomLinkBackgroundHover:
          "rgb(var(--light-mode-custom-link-background-hover) / <alpha-value>)",
        lightModeCustomLinkTextHover:
          "rgb(var(--light-mode-custom-link-text-hover) / <alpha-value>)",
        lightModePostOutline: 
          "rgb(var(--light-mode-post-outline) / <alpha-value>)",
        lightModePostBackground: 
          "rgb(var(--light-mode-post-background) / <alpha-value>)",
        lightModePostText: 
          "rgb(var(--light-mode-post-text) / <alpha-value>)",
        lightModePostOutlineHover: 
          "rgb(var(--light-mode-post-outline-hover) / <alpha-value>)",
        lightModePostBackgroundHover: 
          "rgb(var(--light-mode-post-background-hover) / <alpha-value>)",
        lightModePostTextHover: 
          "rgb(var(--light-mode-post-text-hover) / <alpha-value>)",
        lightModePostFrom: 
          "rgb(var(--light-mode-post-gradient-from) / <alpha-value>)",
        lightModePostTo: 
          "rgb(var(--light-mode-post-gradient-to) / <alpha-value>)",

        darkModeBackgroundFrom: "rgb(var(--dark-mode-background-from) / <alpha-value>)",
        darkModeBackgroundTo: "rgb(var(--dark-mode-background-to) / <alpha-value>)",
        darkModeForeground: "rgb(var(--dark-mode-foreground) / <alpha-value>)",
        darkModeForegroundMuted:
          "rgb(var(--dark-mode-foreground-muted) / <alpha-value>)",
        darkModeIconLinkOutline:
          "rgb(var(--dark-mode-icon-link-outline) / <alpha-value>)",
        darkModeIconLinkBackground:
          "rgb(var(--dark-mode-icon-link-background) / <alpha-value>)",
        darkModeIconLinkText:
          "rgb(var(--dark-mode-icon-link-text) / <alpha-value>)",
        darkModeIconLinkOutlineHover:
          "rgb(var(--dark-mode-icon-link-outline-hover) / <alpha-value>)",
        darkModeIconLinkBackgroundHover:
          "rgb(var(--dark-mode-icon-link-background-hover) / <alpha-value>)",
        darkModeIconLinkTextHover:
          "rgb(var(--dark-mode-icon-link-text-hover) / <alpha-value>)",
        darkModeCustomLinkOutline:
          "rgb(var(--dark-mode-custom-link-outline) / <alpha-value>)",
        darkModeCustomLinkBackground:
          "rgb(var(--dark-mode-custom-link-background) / <alpha-value>)",
        darkModeCustomLinkText:
          "rgb(var(--dark-mode-custom-link-text) / <alpha-value>)",
        darkModeCustomLinkOutlineHover:
          "rgb(var(--dark-mode-custom-link-outline-hover) / <alpha-value>)",
        darkModeCustomLinkBackgroundHover:
          "rgb(var(--dark-mode-custom-link-background-hover) / <alpha-value>)",
        darkModeCustomLinkTextHover:
          "rgb(var(--dark-mode-custom-link-text-hover) / <alpha-value>)",
        darkModePostOutline: 
          "rgb(var(--dark-mode-post-outline) / <alpha-value>)",
        darkModePostBackground: 
          "rgb(var(--dark-mode-post-background) / <alpha-value>)",
        darkModePostText: 
          "rgb(var(--dark-mode-post-text) / <alpha-value>)",
        darkModePostOutlineHover: 
          "rgb(var(--dark-mode-post-outline-hover) / <alpha-value>)",
        darkModePostBackgroundHover: 
          "rgb(var(--dark-mode-post-background-hover) / <alpha-value>)",
        darkModePostTextHover: 
          "rgb(var(--dark-mode-post-text-hover) / <alpha-value>)",
        darkModePostFrom: 
          "rgb(var(--dark-mode-post-gradient-from) / <alpha-value>)",
        darkModePostTo: 
          "rgb(var(--dark-mode-post-gradient-to) / <alpha-value>)",
      },
    },
  },
};
