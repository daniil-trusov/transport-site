export type LinkInfo = {
  name: string;
  url: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  target?: React.HTMLAttributeAnchorTarget;
};

export type DriverInfo = {
  avatarUrl: string;
  name: string;
  experience: string;
  instagram: string;
  linkedIn: string;
};

export type TestimonialInfo = {
  name: string;
  avatarUrl: string;
  route: string;
  date: string;
  text: string;
  rating: number;
};

export type Day = {
  date: number;
  isCurrentMonth: boolean;
};
