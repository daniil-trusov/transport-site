import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/assets/icons/footer';
import type { LinkInfo } from '@/types';

export const FOOTER_SOCIAL_LINKS: LinkInfo[] = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    url: 'https://facebook.com',
    target: '_blank',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://instagram.com',
    target: '_blank',
  },
  {
    name: 'Dribble',
    icon: DribbbleIcon,
    url: 'https://dribbble.com',
    target: '_blank',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://linkedin.com',
    target: '_blank',
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com',
    target: '_blank',
  },
];

export const LINKS_FOR_CLIENT = [
  { name: 'Головна', url: '#' },
  { name: 'Про нас', url: '#' },
  { name: 'Ціни', url: '#' },
  { name: 'Маршрути', url: '#' },
  { name: 'Політика приватності', url: '#' },
];

export const LINKS_FOR_DRIVER = [
  { name: 'Help Docs', url: '#' },
  { name: 'Особистий кабінет', url: '#' },
  { name: 'Оновлення', url: '#' },
  { name: 'Контакти', url: '#' },
];
