import { StarIcon } from '@/assets/icons';
import type { TestimonialInfo } from '@/types';

type Props = {
  info: TestimonialInfo;
};

export const TestimonialCard: React.FC<Props> = ({ info }) => {
  const { name, avatarUrl, route, date, text, rating } = info;

  return (
    <article className="px-5 pb-5 pt-[30px] flex flex-col gap-[22px] shadow-[0_4px_16px_0_#25324B26] max-w-[353px] rounded-[10px] bg-white">
      <div className="flex gap-[22px]">
        <img
          src={avatarUrl}
          alt={`${name}'s testimonial`}
          className="rounded-full h-[72px] w-[72px]"
        />

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[#25324B] text-2xl leading-[1]">{name}</p>
          <p className="text-[#4640DE] font-medium text-sm leading-[16px]">{route}</p>
          <p className="text-[#7C8493] text-sm leading-[16px]">{date}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full gap-[42px]">
        <p className="text-[#25324B]">{text}</p>

        <div className="flex gap-[3px]">
          {Array.from({ length: rating }, (_, index) => {
            return <StarIcon key={index} />;
          })}
        </div>
      </div>
    </article>
  );
};
