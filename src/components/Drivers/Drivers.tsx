import { DRIVERS_INFO } from '@/constants';
import { CardsContainer, ContentContainer } from '../shared';
import { DriverCard } from './DriverCard';

export const Drivers = () => {
  const driversTotal = 7;

  return (
    <section className="py-[72px]">
      <ContentContainer className="space-y-[11px]">
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Наші водії</h2>

          <button className="h-[26px] flex gap-4 items-center font-[rubik] font-semibold transition-colors duration-150 bg-none text-[#4640DE] hover:bg-[#4640DE]/10">
            Усі водії ({driversTotal})
          </button>
        </div>

        <CardsContainer
          cardsInfo={DRIVERS_INFO}
          cardComponent={DriverCard}
          stackOnMobile={true}
          cardWidth={225}
          gapPx={16}
        />
      </ContentContainer>
    </section>
  );
};
