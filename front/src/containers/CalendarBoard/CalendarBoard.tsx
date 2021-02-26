import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";
import { CalendarState } from "redux/calendar/calendar-slice";
import { Form, scheduleSlice } from "redux/schedule/schedule-slice";
import { rootType } from "redux/rootSlice";
import { createCalendar } from "services/calendar";

const EnhancedCalendarBoard: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const calendarArr = createCalendar(calendar);

  const dispatch = useDispatch();
  const openAddScheduleDialog = (value: Form) => {
    dispatch(scheduleSlice.actions.addScheduleOpenDialog());
    dispatch(scheduleSlice.actions.addScheduleSetValue(value));
  };

  return (
    <CalendarBoard
      calendar={calendarArr}
      month={calendar}
      openAddScheduleDialog={openAddScheduleDialog}
    />
  );
};

export default EnhancedCalendarBoard;
