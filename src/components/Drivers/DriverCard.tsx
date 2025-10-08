import { InstagramIcon, LinkedInIcon } from '@/assets/icons/driverCard';
import type { DriverInfo } from '@/types/types';

type Props = {
  info: DriverInfo;
};

export const DriverCard: React.FC<Props> = ({ info }) => {
  const { avatarUrl, name, experience, instagram, linkedIn } = info;

  return (
    <article className="bg-white border border-[#D6DDEB] rounded-sm py-6 items-center flex flex-col justify-center gap-4 w-[225px] hover:shadow-lg transition-shadow duration-150">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="rounded-full object-contain h-20 w-20"
      />

      <div className="flex flex-col gap-1 text-center">
        <p className="font-semibold text-[#25324B] text-[18px]">{name}</p>

        <p className="text-[#7C8493]">Досвід роботи: {experience}</p>
      </div>

      <div className="flex gap-3">
        <a
          href={instagram}
          target="_blank"
          rel="no openeer no referrer"
          className="h-6 w-6 hover:bg-[#515B6F]/10 transition-colors duration-150"
        >
          <InstagramIcon />
        </a>

        <a
          href={linkedIn}
          target="_blank"
          rel="no openeer no referrer"
          className="h-6 w-6 hover:bg-[#515B6F]/10 transition-colors duration-150"
        >
          <LinkedInIcon />
        </a>
      </div>
    </article>
  );
};
