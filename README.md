# Treelink++

Treelink++ is a fork of [Treelink](https://github.com/trevortylerlee/treelink) that adds new features and improvements.

- Improved blog preview cards
- New default colour scheme
- More improvements on the way including featured links

## 🚀 Getting started

Run this in your terminal:
```bash
git clone github.com/mitchell-wallace/treelinkplusplus
cd treelinkplusplus
pnpm install
pnpm run dev
```

To use the contact form, you will need to get an access key from [Web3Forms](https://web3forms.com). Add the access key to the `siteConfig.json` file.

Then read Treelink's [Quick start guide](https://docs.treelink.app/guides/quick-start/) to get started with customisation. Most content from Treelink's docs is still aplicable to Treelink++.

## ✨ Features

- Customizable, with premade themes for light and dark mode
- Custom OpenGraph images per post, with a fallback image
- Icon support for hundreds of sites
- RSS and sitemap generation
- Optional blog
- Optional contact form using [Web3Forms](https://web3forms.com)
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

TreeLink++ uses [astro-icon](https://www.npmjs.com/package/astro-icon) for icons, integrating with the [Iconify](https://icon-sets.iconify.design/) collection and supporting local SVGs.

### 🚀 Default Icons from Lucide

A broad set of Lucide icons is always available, covering common social, contact, and utility icons for link-in-bio pages. Examples include:

`chevron-right`, `chevron-left`, `link`, `external-link`, `mail`, `phone`, `globe`, `user`, `users`, `calendar`, `star`, `heart`, `bookmark`, `map-pin`, `github`, `twitter`, `facebook`, `instagram`, `linkedin`, `youtube`, `twitch`, `discord`, `reddit`, `x`, `dribbble`, `slack`, `whatsapp`, `telegram`, `snapchat`, `pinterest`, `tumblr`, `medium`, `gitlab`, `bitbucket`, `stack-overflow`, `figma`, `cloud`, `settings`, `home`, `award`, `gift`, and many more.

Use any Lucide icon by referencing its name (no prefix) in your config:

```json
{
  // ...
  "icon": "github"
  // ...
}
```

### ℹ️ Adding Additional Icons from Iconify

You can install additional icons from [Iconify](https://icon-sets.iconify.design/) by running `pnpm install @iconify-json/[icon-set-name]`. For example, to install the Fluent Emoji icons, run `pnpm install @iconify-json/fluent-emoji-flat`.

To use them in your config, use the icon set name and icon name, like `fluent-emoji-flat:smile`.

Whenever you add new icons to `src/siteConfig.json`, restart the Astro dev server for icon to be available.

For example, if you want to use the A|B icon from Tabler icons, you would need to do the following:

```bash
pnpm install @iconify-json/tabler
```

Then use it like this:

```json
{
  // ...
  "icon": "tabler:ab"
  // ...
}
```

### 🖼️ Local SVG Icons (`local:`)

You can use any SVGs as icons for your site. To do so, simply place custom SVGs in `src/icons/`. SVGs in this folder are available as icons using the `local:` prefix and the filename (without `.svg`).

For example, if you have `src/icons/mylogo.svg`, use it like this:

```json
{
  // ...
  "icon": "local:mylogo"
  // ...
}
```

These icons will be automatically detected by the code and available when you restart the Astro dev server.

### 📝 Example: Using icons from different sources together

```json
{
  "iconLinks": [
    { "icon": "github", "url": "https://github.com" },
    { "icon": "local:mylogo", "url": "https://my.site" }
  ]
}
```
