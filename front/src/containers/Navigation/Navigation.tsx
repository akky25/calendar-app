import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";

import Navigation from "components/Navigation/Navigation";
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "services/calendar";
import { calendarSlice, CalendarState } from "redux/calendar/calendar-slice";
import { rootType } from "redux/rootSlice";

const EnhancedNavigation: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const dispatch = useDispatch();

  const setNextMonth = () => {
    const nextMonth = getNextMonth(calendar);
    dispatch(calendarSlice.actions.setMonth(nextMonth));
  };

  const setPreviousMonth = () => {
    const nextMonth = getPreviousMonth(calendar);
    dispatch(calendarSlice.actions.setMonth(nextMonth));
  };

  const setMonth = (dayObj: dayjs.Dayjs | null) => {
    const month = formatMonth(dayObj as dayjs.Dayjs);
    dispatch(calendarSlice.actions.setMonth(month));
  };

  const month = getMonth(calendar);

  return (
    <Navigation
      setNextMonth={setNextMonth}
      setPreviousMonth={setPreviousMonth}
      setMonth={setMonth}
      month={month}
    />
  );
};

export default EnhancedNavigation;
