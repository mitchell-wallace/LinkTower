# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Treelink++ is a fork of [Treelink](https://github.com/trevortylerlee/treelink) built with Astro. It's a personal website and link collection platform with an optional blog, featuring improved blog preview cards and a new default color scheme.

## Essential Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start development server at localhost:3030 |
| `pnpm run build` | Build production site to ./dist/ |
| `pnpm run preview` | Preview build locally |
| `pnpm run astro` | Run Astro CLI commands |

## Core Architecture

### Configuration System
- **Primary config**: `src/siteConfig.json` - Contains all site data (name, bio, links, etc.)
- **Type definitions**: `src/siteConfig.ts` - TypeScript interfaces for configuration
- **Site URL**: Set in `astro.config.mjs` for sitemap generation

### Icon Management
- **Dynamic icon loading**: `src/lib/getRequiredIcons.ts` analyzes siteConfig.json and only loads icons that are actually used
- **Local icons**: Place custom SVGs in `src/icons/` directory (restart dev server after adding)
- **Iconify integration**: Install icon packs with `pnpm install @iconify-json/[icon-set-name]`
- **Icon format**: Use namespace:name format (e.g., `lucide:link`, `logos:youtube-icon`)

### Content Management
- **Blog content**: Markdown files in `src/content/blog/[post-name]/index.md`
- **Content schema**: Defined in `src/content/config.ts` with image validation (1200x630px)
- **Blog routing**: Dynamic routes in `src/pages/blog/[...slug].astro`

### Theme System
- **DaisyUI integration**: Uses DaisyUI's semantic color system with custom "treelink-light" and "treelink-dark" themes
- **Automatic theme switching**: JavaScript automatically switches themes based on system preferences (prefers-color-scheme)
- **Semantic colors**: Uses DaisyUI semantic classes like `bg-base-100`, `text-base-content`, `ring-base-300`
- **Custom themes**: Defined in `tailwind.config.mjs` with colors matching the original design
- **Gradient backgrounds**: Handled in `src/styles/global.css` with theme-specific gradients

### Component Structure
- **Layout**: `src/layouts/BaseLayout.astro` - Main page wrapper
- **Components**: Modular components in `src/components/` including:
  - `IconLink.astro` - Social media icons
  - `CustomLink.astro` - Custom link cards
  - `Post.astro` - Blog post preview cards
  - `Contact.astro` - Contact form (requires Web3Forms API key)

## Development Workflow

### Adding New Icons
1. For local icons: Place SVG in `src/icons/` and restart dev server
2. For Iconify icons: Install package and reference with namespace:name format
3. Icons are automatically optimized based on usage in siteConfig.json

### Customizing Appearance
- **Colors**: Modify DaisyUI theme definitions in `tailwind.config.mjs` 
- **Typography**: Uses Tailwind Typography plugin for blog content
- **Layout**: Components use semantic DaisyUI classes for consistent theming
- **Custom themes**: Add new themes to the daisyui.themes array in Tailwind config

### Blog Management
- **New posts**: Create folder in `src/content/blog/` with `index.md`
- **Images**: Must be 1200x630px for OpenGraph (validated by schema)
- **Frontmatter**: Required fields include title, description, publicationDate, optional image and tags

### Contact Form Setup
- Requires Web3Forms access key in `siteConfig.json`
- Form component at `src/components/Contact.astro`
- Enable/disable with `contactFormEnabled` flag in config

## Key Files to Modify

- `src/siteConfig.json` - All site content and configuration
- `src/assets/profile-picture.jpg` - Profile image
- `public/favicon.svg` - Favicon and related files
- `tailwind.config.mjs` - DaisyUI themes and color definitions
- `src/styles/global.css` - Base styles and theme-specific gradients
- `astro.config.mjs` - Site URL for production deployment

## DaisyUI Theme Colors Used

- `base-100` - Primary background color
- `base-200` - Secondary background (hover states)
- `base-300` - Borders and subtle backgrounds  
- `base-content` - Primary text color
- `base-content/70` - Muted text (70% opacity)
- `base-content/60` - Very muted text (60% opacity)
- `base-content/20` - Subtle hover borders (20% opacity)