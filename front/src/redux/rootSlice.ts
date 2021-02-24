import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, CalendarState } from "redux/calendar/calendar-slice";

export type rootType = {
  calendar: CalendarState;
};

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
  },
});

export default store;
