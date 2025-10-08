import { ButtonStyled, CardsContainer, ContentContainer } from '@/components/shared';
import { TESTIMONIALS } from '@/constants';
import clsx from 'clsx';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const activeCardIndex = 0;
  const cardsTotal = 9;

  return (
    <section className="space-y-4 pt-[72px] pb-[45px]  bg-[#F8F8FD]">
      <ContentContainer className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-1 flex-col xl:max-w-[422px]">
          <h2 className="font-extrabold font-[lato] text-[48px] text-[#25324B]">
            Що <span className="text-[#26A4FF]">кажуть люди?</span>
          </h2>

          <p className="text-[#25324B] mt-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <ButtonStyled className="mt-[42px] rounded-md md:max-w-50">Залишити відгук</ButtonStyled>
        </div>

        <div className="flex flex-[1.5] flex-col gap-[42px] items-center">
          <CardsContainer cardsInfo={TESTIMONIALS} cardComponent={TestimonialCard} gapPx={32} />

          <div className="flex gap-3">
            {Array.from({ length: cardsTotal }, (_, i) => (
              <a
                key={i}
                href="#"
                className={clsx(
                  'rounded-full h-3 w-3',
                  i === activeCardIndex ? 'bg-[#4640DE]' : 'bg-[#D6DDEB]',
                )}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};
