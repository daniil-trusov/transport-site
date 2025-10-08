import { NAV_LINKS } from '@/constants';
import clsx from 'clsx';

type Props = {
  activeIndex: number;
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
};

export const NavLinks: React.FC<Props> = ({ activeIndex, className, linkClassName, onClick }) => {
  return (
    <ul className={clsx('flex font-[rubik] font-semibold', className)}>
      {NAV_LINKS.map(({ name, url }, index) => (
        <li key={`${name}-${index}`}>
          <a
            href={url}
            className={clsx(
              'border-b-4 transition-colors duration-150',
              index === activeIndex
                ? 'text-[#4640DE] border-[#4640DE] pointer-events-none'
                : 'text-[#515B6F] border-transparent hover:text-[#4640DE] transition-colors duration-150',
              linkClassName,
            )}
            onClick={onClick}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
