import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, CalendarState } from "redux/calendar/calendar-slice";
import {
  addScheduleSlice,
  AddScheduleState,
} from "redux/addSchedule/add-schedule-slice";
import {
  SchedulesState,
  schedulesSlice,
} from "redux/schedules/schedules-slice";

export type rootType = {
  calendar: CalendarState;
  addSchedule: AddScheduleState;
  schedules: SchedulesState;
};

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    addSchedule: addScheduleSlice.reducer,
    schedules: schedulesSlice.reducer,
  },
});

export default store;
