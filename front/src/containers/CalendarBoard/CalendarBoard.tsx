import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";
import { CalendarState } from "redux/calendar/calendar-slice";
import { Form } from "redux/stateType";
import { scheduleSlice } from "redux/addSchedule/add-schedule-slice";
import { rootType } from "redux/rootSlice";
import { createCalendar } from "services/calendar";
import { setSchedules } from "services/schedule";

const EnhancedCalendarBoard: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const schedulesItems = useSelector<rootType, Form[]>(
    (state) => state.schedules.items
  );

  const calendarArr = setSchedules(createCalendar(calendar), schedulesItems);

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
