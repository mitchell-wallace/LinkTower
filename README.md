# Treelink++

Treelink++ is a fork of [Treelink](https://github.com/trevortylerlee/treelink) that adds new features and improvements.

- Improved blog preview cards
- New default colour scheme
- More improvements on the way including featured links

## 🚀 Getting started

Run this in your terminal:
```bash
git clone github.com/mitchell-wallace/treelinkplusplus
```

Then read Treelink's [Quick start guide](https://docs.treelink.app/guides/quick-start/) to get started with customisation. Most content from Treelink's docs is still aplicable to Treelink++.

## ✨ Features

- Customizable, with premade themes for light and dark mode
- Custom OpenGraph images per post, with a fallback image
- Icon support for hundreds of sites
- RSS and sitemap generation
- Optional blog
- Web vitals: 100 100 100 100

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3030`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).

## 🎨 Custom Icons

TreeLink++ uses [astro-icon](https://www.npmjs.com/package/astro-icon) for icons, which integrates with the [Iconify](https://icon-sets.iconify.design/) collection. By default, we only load specific icons to prevent memory issues during development.

### Adding New Icons

1. **First, install the icon collection**

   For example, to add icons from the Tabler collection:

   ```bash
   pnpm add -D @iconify-json/tabler
   ```

2. **Update the `astro.config.mjs` file to include only the specific icons you need**

   ```javascript
   // astro.config.mjs
   icon({
     include: {
       // Existing icons
       lucide: ['chevron-right', 'link'],
       // Add the new icons you want
       tabler: ['brand-github', 'brand-twitter'],
     }
   })
   ```

3. **Use the icons in your files**

   ```astro
   ---
   import { Icon } from "astro-icon/components";
   ---
   <Icon name="tabler:brand-github" class="size-6" />
   ```

### Custom SVG Icons

You can also add custom SVG icons to the `src/icons` folder and use them by their filename:

```astro
<Icon name="my-custom-icon" />