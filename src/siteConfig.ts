import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  /** How many blog posts to show on the homepage */
  blogHomePostLimit?: number;
  hideArchive?: boolean;
  contactFormEnabled: boolean;
  web3FormsAccessKey: string;
  /** Umami analytics website ID */
  umamiWebsiteId: string;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

type ColorVariant = "base" | "primary" | "secondary" | "accent" | "neutral";

interface IconLink {
  id: string;
  icon: string;
  url: string;
  color?: ColorVariant;
}

interface CustomLink {
  id: string;
  icon?: string;
  title: string;
  description?: string;
  url: string;
  image?: string;
  imageAlt?: string;
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
