import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://example.treelink.com",
  integrations: [
    tailwind(), 
    sitemap(), 
    icon({
      include: {
        // Default icons used in the project - don't remove these
        lucide: ['chevron-right', 'link'],
        // Icons used in the site config - add any new icons here
        logos: ['youtube-icon', 'x'],
        'material-symbols': ['stylus-note-outline-rounded'],
        'material-symbols-light': [],
        'fluent-emoji-flat': [],
        'fluent-emoji-high-contrast': ['briefcase', 'books'],
      }
    })
  ],
});
