import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, CalendarState } from "redux/calendar/calendar-slice";
import { ScheduleState } from "redux/stateType";
import { scheduleSlice } from "redux/addSchedule/add-schedule-slice";

export type rootType = {
  calendar: CalendarState;
  schedule: ScheduleState;
};

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    schedule: scheduleSlice.reducer,
  },
});

export default store;
