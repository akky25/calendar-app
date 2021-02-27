import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, CalendarState } from "redux/calendar/calendar-slice";
import { ScheduleState } from "redux/stateType";
import { scheduleSlice } from "redux/addSchedule/add-schedule-slice";
import {
  SchedulesState,
  schedulesSlice,
} from "redux/schedules/schedules-slice";

export type rootType = {
  calendar: CalendarState;
  schedule: ScheduleState;
  schedules: SchedulesState;
};

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    schedule: scheduleSlice.reducer,
    schedules: schedulesSlice.reducer,
  },
});

export default store;
