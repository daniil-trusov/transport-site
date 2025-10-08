import { EmailIcon, FooterLogo, PhoneIcon } from '@/assets/icons/footer';
import { ButtonStyled, ContentContainer } from '@/components/shared';
import { FOOTER_SOCIAL_LINKS, LINKS_FOR_CLIENT, LINKS_FOR_DRIVER } from '@/constants';
import { LinksList } from './components';

export const Footer = () => {
  return (
    <footer aria-label="Footer" className="bg-[#202430] text-[#D6DDEB]">
      <ContentContainer>
        <div className="mt-16 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col gap-6 xl:gap-10 text-[20px]">
            <a href="#" aria-label="Go to homepage">
              <FooterLogo />
            </a>

            <p className="font-[rubik] text-[#D6DDEB]">
              Платформа пошуку перевізників та бронювання поїздок
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-[50px] flex-1">
            <LinksList title="Клієнтам" links={LINKS_FOR_CLIENT} ariaLabel="Links for clients" />

            <LinksList
              title="Перевізникам"
              links={LINKS_FOR_DRIVER}
              ariaLabel="Links for drivers"
            />

            <section className="flex flex-col gap-4 flex-1" aria-label="Feedback form">
              <p className="text-white font-[rubik] text-[18px] font-semibold">Зворотній зв’язок</p>

              <p>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>

              <form
                className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0 lg:max-w-[364px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="flex-1 h-[50px] min-w-0 max-w-[364px] bg-white border border-[#D6DDEB] placeholder:text-[#A8ADB7] py-3 px-4"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <ButtonStyled type="submit">Надіслати</ButtonStyled>
              </form>

              <div className="flex flex-col gap-2 mt-5">
                <a
                  href="tel:+380735555555"
                  className="flex gap-3 items-center text-[#A8ADB7] text-sm hover:text-white transition-colors duration-150"
                >
                  <PhoneIcon className="h-6 w-6 flex-shrink-0" />
                  <span>+38 (073) 555 55 55</span>
                </a>

                <a
                  href="mailto:gmail@gmail.com"
                  className="flex gap-3 items-center text-[#A8ADB7] text-sm hover:text-white transition-colors duration-150"
                >
                  <EmailIcon className="h-6 w-6 flex-shrink-0" />
                  <span>gmail@gmail.com</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        <hr className="w-full bg-[#363944] h-[2px] border-0 mt-16" />

        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-11 md:gap-0 text-[#888A90] py-11">
          <p className="font-[rubik] font-medium">2024 @ Sprinters. All rights reserved.</p>

          <ul className="flex gap-6">
            {FOOTER_SOCIAL_LINKS.map(({ name, icon: Icon, url, target }) => (
              <li
                key={url}
                className="h-8 w-8 rounded-full bg-[#363944] hover:bg-[#4c505c] transition-colors duration-150 flex items-center justify-center overflow-hidden"
              >
                <a href={url} target={target} rel="noopener noreferrer">
                  {Icon ? <Icon className="h-3 w-3" /> : <span>{name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    </footer>
  );
};
