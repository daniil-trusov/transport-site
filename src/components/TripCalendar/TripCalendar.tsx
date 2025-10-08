import { PlusIcon } from '@/assets/icons/controls';
import { ButtonStyled } from '../shared';
import { Calendar } from './Calendar';

export const TripCalendar = () => {
  return (
    <section className="space-y-6 max-w-[315px]">
      <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Календар поїздок</h2>

      <div className="flex flex-col gap-[15px] py-6 px-8 border border-[#D6DDEB] shadow-[0_4px_4px_0_#00000040]">
        <ButtonStyled
          variant="secondary"
          className="flex gap-[10px] items-center justify-center border border-[#CCCCF5] hover:border-[#4640DE]"
        >
          <PlusIcon />
          <span className="text-[#4640DE]">Купити квиток</span>
        </ButtonStyled>

        <Calendar />
      </div>
    </section>
  );
};
