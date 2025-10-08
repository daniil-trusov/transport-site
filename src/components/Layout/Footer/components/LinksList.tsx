import type { LinkInfo } from '@/types';

type Props = {
  title: string;
  links: LinkInfo[];
  ariaLabel?: string;
};

export const LinksList: React.FC<Props> = ({ title, links, ariaLabel = '' }) => {
  return (
    <nav aria-label={ariaLabel} className="flex flex-col gap-4">
      <p className="text-white font-[rubik] text-[18px] font-semibold">{title}</p>

      <ul className="space-y-2">
        {links.map(({ name, url }, index) => (
          <li key={`${name}-${index}`}>
            <a href={url} className="hover:text-white transition-colors duration-150">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
