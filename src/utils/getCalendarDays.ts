import type { Day } from '@/types';

export function getCalendarDays(year: number, month: number): Day[] {
  const days: Day[] = [];

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const startWeekDay = firstDayOfMonth.getDay();

  // prev month
  for (let i = startWeekDay - 1; i >= 0; i--) {
    days.push({
      date: prevMonthLastDay - i,
      isCurrentMonth: false,
    });
  }

  // current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
    });
  }

  // next month
  while (days.length % 7 !== 0) {
    days.push({
      date: days.length % 7,
      isCurrentMonth: false,
    });
  }

  return days;
}
