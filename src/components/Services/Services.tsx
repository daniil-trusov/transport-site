import { SERVICES } from '@/constants';
import { ContentContainer } from '../shared';

export const Services = () => {
  return (
    <section className=" py-[72px]">
      <ContentContainer className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-extrabold font-[lato] text-[32px] text-[#25324B]">Сервіс</h2>

          <p className="text-[#515B6F]">Найкращі умови для вашого комфорту</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex gap-8">
          {SERVICES.map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center gap-3 font-[lato] text-[24px] text-[#25324B]"
            >
              <div className="flex-shrink-0 flex items-center">
                <Icon />
              </div>

              <span className="font-extrabold font-[lato] text-[24px] text-[#25324B] break-normal whitespace-normal">
                {name}
              </span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};
