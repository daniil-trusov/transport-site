import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/controls';
import { getCalendarDays } from '@/utils/getCalendarDays';
import clsx from 'clsx';
import { useMemo } from 'react';

type Props = {};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

export const Calendar: React.FC<Props> = ({}) => {
  const calendarDays = useMemo(() => getCalendarDays(2021, 10), []);
  const activeDays = [2, 4, 20, 24];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-3 justify-between">
        <p className="font-[rubik] font-bold">NOVEMBER 2021</p>

        <div className="flex gap-2">
          <button className="hover:bg-[#4640DE]/10 transition-colors duration-150">
            <ArrowLeftIcon />
          </button>

          <button className="hover:bg-[#4640DE]/10 transition-colors duration-150">
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0">
        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="w-[42px] h-[36px] flex items-center justify-center text-[#7C8493]"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0">
        {calendarDays.map((day, ind) => {
          const isActive = day.isCurrentMonth && activeDays.includes(day.date);

          return day.isCurrentMonth ? (
            <div key={ind} className="w-[42px] h-[36px] flex items-center justify-center">
              <button
                className={clsx(
                  'w-[32px] h-[32px] flex items-center justify-center rounded-full font-[rubik] font-medium transition-colors duration-150',
                  isActive
                    ? 'bg-[#4640DE] text-white hover:bg-[#4640DE]/70'
                    : 'bg-transparent text-[#25324B] hover:bg-[#4640DE]/30',
                )}
              >
                {day.date}
              </button>
            </div>
          ) : (
            <div
              key={ind}
              className="w-[42px] h-[36px] flex items-center justify-center rounded font-[rubik] font-medium text-[#D6DDEB]"
            >
              {day.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
