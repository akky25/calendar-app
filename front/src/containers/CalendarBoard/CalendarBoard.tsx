import { FC } from "react";
// import dayjs from "dayjs";
import { useSelector } from "react-redux";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";
import { CalendarState } from "redux/calendar/calendar-slice";
import { rootType } from "redux/rootSlice";

import { createCalendar } from "services/calendar";

const EnhancedCalendarBoard: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const calendarArr = createCalendar(calendar);

  return <CalendarBoard calendar={calendarArr} month={calendar} />;
};

export default EnhancedCalendarBoard;
