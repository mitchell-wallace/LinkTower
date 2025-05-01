import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Always include these Lucide icons
const DEFAULT_LUCIDE_ICONS = [
  // Icons used as part of site
  'chevron-right', 'chevron-left', 'link', 'external-link', 
  
  // Icons available for site config
  'mail', 'phone', 'globe', 'user', 'users', 'calendar', 'star', 'heart', 'bookmark',
  'map-pin', 'location', 'rss', 'shopping-cart', 'credit-card', 'zap', 'music', 'video', 'camera', 'image', 'message-circle', 'message-square',
  'github', 'twitter', 'facebook', 'instagram', 'linkedin', 'youtube', 'twitch', 'discord', 'reddit', 'x', 'dribbble', 'slack', 'whatsapp',
  'telegram', 'snapchat', 'pinterest', 'tumblr', 'medium', 'gitlab', 'bitbucket', 'stack-overflow', 'codepen', 'codesandbox', 'figma', 'behance',
  'apple', 'android', 'windows', 'chrome', 'firefox', 'safari', 'opera', 'cloud', 'cloud-upload', 'cloud-download', 'download', 'upload',
  'play', 'pause', 'stop', 'skip-forward', 'skip-back', 'repeat', 'shuffle', 'volume', 'volume-2', 'volume-x', 'mic', 'headphones',
  'wallet', 'dollar-sign', 'bitcoin', 'activity', 'award', 'bar-chart', 'trending-up', 'trending-down', 'flag', 'shield', 'lock', 'unlock',
  'settings', 'sliders', 'tool', 'edit', 'edit-2', 'edit-3', 'trash', 'archive', 'file', 'file-text', 'folder', 'folder-open', 'clipboard',
  'sun', 'moon', 'star', 'bell', 'bell-off', 'eye', 'eye-off', 'alert-circle', 'info', 'help-circle', 'question', 'check', 'x', 'plus', 'minus',
  'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'log-in', 'log-out', 'share', 'share-2', 'bookmark', 'tag', 'tags', 'gift', 'home',
  'globe-2', 'globe-americas', 'globe-europe', 'globe-asia', 'globe-africa', 'globe-australia', 'globe-asia-australia',
];

// ESM-compatible __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.resolve(__dirname, '../siteConfig.json');

// Helper to extract icon names by namespace
function extractIcons(config: any) {
  const icons: Record<string, Set<string>> = {};

  function addIcon(icon: string) {
    if (!icon) return;
    // Support both namespace:icon and single name (assume lucide if no namespace)
    const match = icon.match(/^(?<ns>[^:]+):(?<name>.+)$/);
    if (match && match.groups) {
      const ns = match.groups.ns;
      const name = match.groups.name;
      if (!icons[ns]) icons[ns] = new Set();
      icons[ns].add(name);
    } else {
      // No namespace, treat as lucide
      if (!icons.lucide) icons.lucide = new Set();
      icons.lucide.add(icon);
    }
  }

  // iconLinks
  if (Array.isArray(config.iconLinks)) {
    for (const link of config.iconLinks) {
      addIcon(link.icon);
    }
  }
  // customLinks
  if (Array.isArray(config.customLinks)) {
    for (const link of config.customLinks) {
      addIcon(link.icon);
    }
  }

  // Always add default lucide icons
  if (!icons.lucide) icons.lucide = new Set();
  for (const icon of DEFAULT_LUCIDE_ICONS) {
    icons.lucide.add(icon);
  }

  // Convert sets to arrays
  const result: Record<string, string[]> = {};
  for (const ns in icons) {
    result[ns] = Array.from(icons[ns]);
  }
  return result;
}

// Helper to get all local SVG icons in src/icons as local:icon-name
function getLocalIcons() {
  const iconsDir = path.resolve(__dirname, '../icons');
  let localIcons: string[] = [];
  try {
    const files = fs.readdirSync(iconsDir);
    localIcons = files
      .filter(f => f.endsWith('.svg'))
      .map(f => f.replace(/\.svg$/, ''));
  } catch (e) {
    // icons dir may not exist yet
    localIcons = [];
  }
  return localIcons;
}

// Exported function to get icons
export function getRequiredIcons() {
  const configRaw = fs.readFileSync(CONFIG_PATH, 'utf-8');
  const config = JSON.parse(configRaw);
  const iconsByNs = extractIcons(config);

  // Always include all local icons found in src/icons
  const localIcons = getLocalIcons();
  if (localIcons.length > 0) {
    iconsByNs['local'] = Array.from(new Set([...(iconsByNs['local'] || []), ...localIcons]));
  }
  return iconsByNs;
}

