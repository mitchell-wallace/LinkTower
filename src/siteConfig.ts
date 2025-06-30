import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  contactFormEnabled: boolean;
  web3FormsAccessKey: string;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

type ColorVariant = 'base' | 'primary' | 'secondary' | 'accent' | 'neutral';

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
