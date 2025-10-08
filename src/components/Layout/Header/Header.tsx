import { HeaderLogo } from '@/assets/icons/header';
import { ButtonStyled, ContentContainer } from '@/components/shared';
import clsx from 'clsx';
import { useState } from 'react';
import { MenuButton, NavLinks } from './components';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeLinkIndex = 3; //page from mockup

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      <ContentContainer className="flex items-center justify-between h-[78px] ">
        <div className="flex items-center gap-12">
          <a href="#">
            <HeaderLogo />
          </a>

          <nav aria-label="Main navigation" className="hidden xl:block">
            <NavLinks
              activeIndex={activeLinkIndex}
              className="flex-row gap-6"
              linkClassName="block py-[24px]"
            />
          </nav>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <ButtonStyled variant={'secondary'}>Створити профіль</ButtonStyled>

          <div className="h-12 w-[1px] bg-[#D6DDEB]" />

          <ButtonStyled>Увійти</ButtonStyled>
        </div>

        <div className="xl:hidden">
          <MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </ContentContainer>

      <div
        id="mobile-menu"
        className={clsx(
          'xl:hidden border-t border-gray-200 bg-white transition-all duration-200 ease-in-out',
          {
            'max-h-96 opacity-100 pointer-events-auto': isMenuOpen,
            'max-h-0 opacity-0 pointer-events-none': !isMenuOpen,
          },
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col p-6 gap-6">
          <NavLinks
            activeIndex={activeLinkIndex}
            className="flex-col gap-4 text-right"
            linkClassName="pb-2"
            onClick={() => setIsMenuOpen(false)}
          />

          <hr className="border-gray-200 mt-6" />

          <div className="flex items-center gap-4">
            <ButtonStyled variant={'secondary'} className="flex-1">
              Створити профіль
            </ButtonStyled>

            <div className="h-12 w-[1px] bg-[#D6DDEB]" />

            <ButtonStyled>Увійти</ButtonStyled>
          </div>
        </nav>
      </div>
    </header>
  );
};
