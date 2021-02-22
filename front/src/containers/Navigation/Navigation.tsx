import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import { getNextMonth, getPreviousMonth } from "services/calendar";
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

  return (
    <Navigation
      setNextMonth={setNextMonth}
      setPreviousMonth={setPreviousMonth}
    />
  );
};

export default EnhancedNavigation;
