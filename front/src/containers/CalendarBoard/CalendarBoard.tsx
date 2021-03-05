import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import CalendarBoard from "components/CalendarBoard/CalendarBoard";
import { CalendarState } from "redux/calendar/calendar-slice";
import { schedulesItem } from "redux/stateType";
import { addScheduleSlice } from "redux/addSchedule/add-schedule-slice";
import { rootType } from "redux/rootSlice";
import { createCalendar } from "services/calendar";
import { setSchedules } from "services/schedule";
import useGetMembers from "hooks/use-get-schedules";

const EnhancedCalendarBoard: FC = () => {
  const calendar = useSelector<rootType, CalendarState>(
    (state) => state.calendar
  );
  const schedulesItems = useSelector<rootType, schedulesItem[]>(
    (state) => state.schedules.items
  );

  useGetMembers(calendar);

  const calendarArr = setSchedules(createCalendar(calendar), schedulesItems);

  const dispatch = useDispatch();
  const openAddScheduleDialog = (value: schedulesItem) => {
    dispatch(addScheduleSlice.actions.addScheduleOpenDialog());
    dispatch(addScheduleSlice.actions.addScheduleSetValue(value));
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
