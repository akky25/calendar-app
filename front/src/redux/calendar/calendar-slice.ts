import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export type CalendarState = {
  year: number;
  month: number;
};
const day = dayjs();
const initialState: CalendarState = {
  year: day.year(),
  month: day.month() + 1,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setMonth: (state, action: PayloadAction<CalendarState>) => ({
      ...state,
      year: action.payload.year,
      month: action.payload.month,
    }),
  },
});
