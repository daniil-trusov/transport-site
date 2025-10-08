import { ArrowDownIcon } from '@/assets/icons/controls';
import { COUNTRY_FLAGS } from '@/constants';

export const CountryList = () => {
  return (
    <section className="space-y-6">
      <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Обслуговуємо країни</h2>

      <ul className="space-y-[14px]">
        {COUNTRY_FLAGS.map(({ name, img }) => (
          <li key={name} className="flex gap-4 items-center">
            <img src={img} className="w-[42px] h-[32px] img-pixelated" />

            <span className="text-[#25324B]">{name}</span>
          </li>
        ))}
      </ul>

      <button className="flex gap-4 items-center font-[rubik] font-semibold transition-colors duration-150 bg-none text-[#4640DE] hover:bg-[#4640DE]/10">
        <span>Усі країни</span>
        <ArrowDownIcon />
      </button>
    </section>
  );
};
