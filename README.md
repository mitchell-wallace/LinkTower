# mitchellwallace.net

mitchellwallace.net is an instance of [LinkTower](https://github.com/mitchell-wallace/LinkTower).

LinkTower is a portfolio-focused personal link hub built with Astro, forked from [Treelink](https://github.com/trevortylerlee/treelink) with enhanced features for developers and creatives.

## ✨ Features

- **Rich Link Variants**: Multiple color themes including primary, secondary, tertiary, accent, neutral, and base
- **Gradient Backgrounds**: All color variants support gradient versions for eye-catching link cards
- **Video Support**: Embed looping videos (MP4/MOV) in custom links for portfolio showcases
- **Action Buttons**: Add call-to-action buttons to blog posts (e.g., "View on GitHub", "Live Demo")
- **External Links**: Mark links to open in new tabs with visual indicators
- **File Downloads**: Support for downloadable assets with custom styling
- **Optional Blog**: Full-featured blog with custom OpenGraph images per post
- **Contact Form**: Integrated contact form using [Web3Forms](https://web3forms.com)
- **Icon Support**: Hundreds of icons from Iconify plus custom local SVGs
- **Customizable Themes**: Premade themes for light and dark mode
- **RSS & Sitemap**: Automatic generation for SEO

## 🚀 Getting started

Run this in your terminal:
```bash
git clone github.com/mitchell-wallace/LinkTower
cd LinkTower
pnpm install
pnpm run dev
```

To use the contact form, you will need to get an access key from [Web3Forms](https://web3forms.com). Add the access key to the `siteConfig.json` file.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3030`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## 🎨 Customization

### Color Variants

LinkTower supports six color variants, each with solid and gradient versions:

- **base**: Default theme colors
- **primary**: Dark blue accent
- **secondary**: Peach/coral accent
- **tertiary**: Dark green accent
- **accent**: Light blue accent
- **neutral**: Neutral gray tones

#### Using Gradients

Add `-gradient` suffix to any color variant:

```json
{
  "color": "primary-gradient"
}
```

Gradient links use smooth color transitions from light to dark (or dark to light in dark mode).

### Custom Links

Custom links support several display modes:

#### Basic Link
```json
{
  "id": "unique-id",
  "title": "My Link",
  "description": "Optional description",
  "url": "https://example.com",
  "icon": "link",
  "color": "primary"
}
```

#### Link with Image
```json
{
  "id": "unique-id",
  "title": "My Project",
  "url": "https://example.com",
  "image": "project-screenshot.png",
  "imageAlt": "Screenshot of my project",
  "color": "secondary"
}
```

#### Link with Video
Videos autoplay silently on loop (like animated GIFs). **Only MP4 format is supported** for cross-browser compatibility.

```json
{
  "id": "unique-id",
  "title": "Demo Video",
  "url": "https://example.com",
  "video": "/demo.mp4",
  "icon": "play",
  "color": "tertiary-gradient"
}
```

**Note**: Videos should be optimized for web (keep file sizes small). They will display at 3:2 aspect ratio by default.

#### External Link (New Tab)
```json
{
  "id": "unique-id",
  "title": "External Resource",
  "url": "https://example.com",
  "newTab": true,
  "color": "accent"
}
```

Links with `newTab: true` display an external link icon instead of a chevron and open in a new tab.

#### Download Link
```json
{
  "id": "unique-id",
  "title": "Download Resume",
  "url": "/resume.pdf",
  "icon": "download",
  "color": "neutral-gradient"
}
```

Files in the `/public` directory can be linked directly for downloads.

### Icon Links

Icon links appear as circular buttons and support all color variants:

```json
{
  "id": "unique-id",
  "icon": "github",
  "url": "https://github.com/username",
  "color": "tertiary"
}
```

### Blog Post Action Buttons

Add interactive buttons at the top of blog posts for demos, repositories, etc. Define them in the post frontmatter:

```yaml
---
title: My Project Post
description: A cool project
publicationDate: 2025-01-01
actionButtons:
  - text: View on GitHub
    url: https://github.com/username/repo
    newTab: true
  - text: Live Demo
    url: https://demo.example.com
    newTab: true
---
```

Action buttons are:
- Half-width on large screens, full-width on mobile
- Styled with the secondary color theme
- Show external link or chevron icon based on `newTab` setting

## 👀 Custom Favicon

To set up favicons for different devices, you can use [RealFaviconGenerator](https://realfavicongenerator.net/). Download the generated files and place them in the `public` folder, and update the `Favicons.astro` file with the new file names using the snippet generated by the website.

## 🖼️ Custom Icons

LinkTower uses [astro-icon](https://www.npmjs.com/package/astro-icon) for icons, integrating with the [Iconify](https://icon-sets.iconify.design/) collection and supporting local SVGs.

### Local SVG Icons

You can use any SVGs as icons for your site. To do so, simply place custom SVGs in `src/icons/`. SVGs in this folder are available as icons using the filename (without `.svg`).

For example, if you have `src/icons/mylogo.svg`, use it like this:

```json
{
  "icon": "mylogo"
}
```

When adding new icons you will need to restart the Astro dev server for the icon to be available.

### Adding Additional Icons from Iconify

You can install additional icons from [Iconify](https://icon-sets.iconify.design/) by running `pnpm install @iconify-json/[icon-set-name]`. For example, to install Tabler icons, run the following:

```bash
pnpm install @iconify-json/tabler
```

Then use it like this:

```json
{
  "icon": "tabler:a-b"
}
```

Whenever you add new icons to `src/siteConfig.json`, restart the Astro dev server for icon to be available.

## 📝 License

This project is open source and available under the MIT License.
