import dayjs from "dayjs";

import { CalendarState } from "redux/calendar/calendar-slice";

export const getMonth = (param: CalendarState): dayjs.Dayjs =>
  dayjs(`${param.year}-${param.month}`);

export const createCalendar = (calendar: CalendarState): dayjs.Dayjs[] => {
  const firstDay = getMonth(calendar);
  const firstDayIndex = firstDay.day();

  return Array.from(new Array(35)).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });
};

export const formatMonth = (day: dayjs.Dayjs): CalendarState => ({
  month: day.month() + 1,
  year: day.year(),
});

export const getNextMonth = (calendar: CalendarState): CalendarState => {
  const day = getMonth(calendar).add(1, "month");

  return formatMonth(day);
};

export const getPreviousMonth = (calendar: CalendarState): CalendarState => {
  const day = getMonth(calendar).add(-1, "month");

  return formatMonth(day);
};
