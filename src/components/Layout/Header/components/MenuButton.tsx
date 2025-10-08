import { BurgerMenuIcon, CloseIcon } from '@/assets/icons/controls';
import clsx from 'clsx';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const MenuButton: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="bg-none text-[#4640DE] p-1"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={clsx(
          'h-6 w-6 transform transition-transform duration-150',
          isOpen ? 'rotate-180' : 'rotate-0',
        )}
      >
        {isOpen ? (
          <CloseIcon className="h-full w-full" />
        ) : (
          <BurgerMenuIcon className="h-full w-full" />
        )}
      </div>
    </button>
  );
};
