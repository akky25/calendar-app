import { FC } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";
import { CalendarState } from "redux/calendar/calendar-slice";
import { rootType } from "redux/rootSlice";

const getMonth = (param: CalendarState): dayjs.Dayjs =>
  dayjs(`${param.year}-${param.month}`);

const createCalendar = (calendar: CalendarState) => {
  const firstDay = getMonth(calendar);
  const firstDayIndex = firstDay.day();

  return Array.from(new Array(35)).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });
};

const EnhancedCalendarBoard: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const calendarArr = createCalendar(calendar);

  return <CalendarBoard calendar={calendarArr} />;
};

export default EnhancedCalendarBoard;
