import { PhoneIcon, WebIcon } from '@/assets/icons/header';
import { StripeLogoImg } from '@/assets/images';
import { ContentContainer } from '@/components/shared';
import { PROFILE_ABOUT } from '@/constants';
import { Breadcrumbs } from './components';

export const ProfileHeader = () => {
  return (
    <section className="bg-[#F8F8FD] h-full w-full">
      <ContentContainer className="pt-10 pb-[73px]">
        <Breadcrumbs />

        <div className="mt-10 flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6 xl:items-stretch">
          <img
            src={StripeLogoImg}
            alt="Stripe Company Logo"
            className="max-h-[189px] max-w-[189px] object-contain mx-auto md:mx-0 xl:self-center"
          />

          <div className="flex flex-col flex-1 text-center md:text-left w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start items-center">
              <h1 className="font-[lato] text-[40px] lg:text-[48px] text-[#25324B] font-extrabold">
                Stripe
              </h1>

              <span className="text-[#4640DE] border border-[#4640DE] py-1 px-3 text-sm sm:text-base">
                43 поїздок
              </span>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-8 items-center">
              <a
                className="flex items-center gap-1 text-[#4640DE] font-semibold hover:bg-[#4640DE]/10 transition-colors duration-150"
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Вебсайт Stripe"
              >
                <WebIcon />
                <span>https://stripe.com</span>
              </a>

              <a
                className="flex items-center gap-1 text-[#4640DE] font-semibold hover:bg-[#4640DE]/10 transition-colors duration-150"
                href="tel:+380735555555"
                aria-label="Зателефонувати у Stripe"
              >
                <PhoneIcon />
                <span>+38 (073) 555 55 55</span>
              </a>
            </div>

            <div className="mt-6 xl:flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {PROFILE_ABOUT.map(({ label, description, icon: Icon }, index) => (
                <div key={`${label}-${index}`} className="flex gap-4 font-[rubik] items-center">
                  <div className="bg-white rounded-full h-11 w-11 p-[10px] shrink-0">
                    <Icon />
                  </div>

                  <div className="flex flex-col text-left flex-1 min-w-0">
                    <p className="text-[#515B6F] whitespace-nowrap lg:whitespace-normal">{label}</p>
                    <p className="text-[#25324B] font-semibold break-words">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};
