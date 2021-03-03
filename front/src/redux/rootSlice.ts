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
import {
  CurrentScheduleState,
  currentScheduleSlice,
} from "redux/currentSchedule/currentSchedule-slice";

export type rootType = {
  calendar: CalendarState;
  addSchedule: AddScheduleState;
  schedules: SchedulesState;
  currentSchedule: CurrentScheduleState;
};

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    addSchedule: addScheduleSlice.reducer,
    schedules: schedulesSlice.reducer,
    currentSchedule: currentScheduleSlice.reducer,
  },
});

export default store;
