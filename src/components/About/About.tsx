import { FacebookIcon, TwitterIcon } from '@/assets/icons';
import type { LinkInfo } from '@/types';

export const SOCIAL_LINKS: LinkInfo[] = [
  {
    name: 'twitter.com/stripe',
    url: 'https://twitter.com/stripe',
    icon: TwitterIcon,
    target: '_blank',
  },
  {
    name: 'facebook.com/StripeHQ',
    url: 'https://facebook.com/StripeHQ',
    icon: FacebookIcon,
    target: '_blank',
  },
];

export const About = () => {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Опис перевізника</h2>

        <p className="text-[#515B6F]">
          Stripe is a software platform for starting and running internet businesses. Millions of
          businesses rely on Stripe’s software tools to accept payments, expand globally, and manage
          their businesses online. Stripe has been at the forefront of expanding internet commerce,
          powering new business models, and supporting the latest platforms, from marketplaces to
          mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted
          in code and design, not finance. Stripe is built for developers, makers, and creators. We
          work on solving the hard technical problems necessary to build global economic
          infrastructure—from designing highly reliable systems to developing advanced machine
          learning algorithms to prevent fraud.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Ми у соц. мережах</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon, target }, index) => (
            <a
              key={`${name}-${index}`}
              className="border border-[#4640DE] flex gap-4 p-2 text-[#4640DE] text-medium  hover:bg-[#4640DE]/10 transition-colors duration-150 justify-center"
              href={url}
              target={target}
            >
              {Icon && <Icon />}
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
