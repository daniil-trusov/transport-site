import { BuildingIcon, FireIcon, PeopleIcon, PlaceIcon, TrainIcon } from '@/assets/icons/header';
import {
  ArmchairIcon,
  FanIcon,
  HandsIcon,
  TvIcon,
  WcIcon,
  WifiIcon,
} from '@/assets/icons/services';
import { StripeImg1, StripeImg2, StripeImg3 } from '@/assets/images';
import { DriverAvatar1, DriverAvatar2, DriverAvatar3 } from '@/assets/images/driverCard';
import {
  FranceFlagImg,
  GermanyFlagImg,
  ItalyFlagImg,
  NetherlandsFlagImg,
  SpainFlagImg,
} from '@/assets/images/flags';
import { TestimonialsAvatar1, TestimonialsAvatar2 } from '@/assets/images/testimonials';
import type { DriverInfo, LinkInfo, TestimonialInfo } from '@/types';

export const BREADCRUMBS: LinkInfo[] = [
  { name: 'Головна', url: '#' },
  { name: 'Профіль перевізника', url: '#' },
  { name: 'Stripe', url: '#' },
];

export const PROFILE_ABOUT = [
  { label: 'На ринку від', icon: FireIcon, description: 'Травень 31, 2011' },
  { label: 'Перевезених пасажирів', icon: PeopleIcon, description: '4000+' },
  { label: 'Автопарк', icon: TrainIcon, description: '8 бусів' },
  { label: 'Обслуговуємо', icon: PlaceIcon, description: '8 країн' },
  { label: 'Місто', icon: BuildingIcon, description: 'Львів' },
];

export const GALLERY_IMAGES = [StripeImg1, StripeImg2, StripeImg3];

export const COUNTRY_FLAGS = [
  { img: FranceFlagImg, name: 'Франція' },
  { img: ItalyFlagImg, name: 'Італія' },
  { img: GermanyFlagImg, name: 'Німеччина' },
  { img: NetherlandsFlagImg, name: 'Нідерланди' },
  { img: SpainFlagImg, name: 'Іспанія' },
];

export const DRIVERS_INFO: DriverInfo[] = [
  {
    avatarUrl: DriverAvatar1,
    name: 'Олександр',
    experience: '5 років',
    instagram: '#',
    linkedIn: '#',
  },
  {
    avatarUrl: DriverAvatar2,
    name: 'Володимир',
    experience: '7 років',
    instagram: '#',
    linkedIn: '#',
  },
  {
    avatarUrl: DriverAvatar1,
    name: 'Ірина',
    experience: '1 рік',
    instagram: '#',
    linkedIn: '#',
  },
  {
    avatarUrl: DriverAvatar2,
    name: 'Михайло',
    experience: '1 рік',
    instagram: '#',
    linkedIn: '#',
  },
  {
    avatarUrl: DriverAvatar3,
    name: 'Юлія',
    experience: '2 роки',
    instagram: '#',
    linkedIn: '#',
  },
];

export const SERVICES = [
  {
    icon: FanIcon,
    name: 'Кондиціонер',
  },
  {
    icon: WifiIcon,
    name: 'Wi\u2011Fi',
  },
  {
    icon: TvIcon,
    name: 'TV',
  },
  {
    icon: WcIcon,
    name: 'Туалет',
  },
  {
    icon: ArmchairIcon,
    name: 'Зручні сидіння',
  },
  {
    icon: HandsIcon,
    name: 'Перевозимо тварин',
  },
];

export const TESTIMONIALS: TestimonialInfo[] = [
  {
    name: 'Ben Yardley',
    avatarUrl: TestimonialsAvatar1,
    route: 'Київ - Кишинів',
    date: '1 May 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 5,
  },
  {
    name: 'Craig Martin',
    avatarUrl: TestimonialsAvatar2,
    route: 'Львів - Париж',
    date: '1 May 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    rating: 5,
  },
];
