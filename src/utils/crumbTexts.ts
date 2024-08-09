import { menuItems } from './constants';

export interface CrumbTexts {
  [key: string]: string;
}

export const crumbTexts: CrumbTexts = {
  '/': menuItems[0].name,
  news: menuItems[1].name,
  unionmembers: menuItems[2].name,
  projects: menuItems[3].name,
  scores: menuItems[4].name,
  media: menuItems[5].name,
  reports: menuItems[6].name,
  aboutus: menuItems[7].name,
  contacts: menuItems[8].name,
};
