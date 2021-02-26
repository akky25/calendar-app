import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export type Form = {
  title?: string;
  description?: string;
  date?: dayjs.Dayjs | null;
  location?: string;
};
export type ScheduleState = {
  form: Form;
  isDialogOpen: boolean;
};
const initialState: ScheduleState = {
  form: {
    title: "",
    description: "",
    date: null,
    location: "",
  },
  isDialogOpen: false,
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addScheduleSetValue: (state, action: PayloadAction<Form>) => ({
      ...state,
      form: { ...state.form, ...action.payload },
    }),
    addScheduleOpenDialog: (state) => ({
      ...state,
      isDialogOpen: true,
    }),
    addScheduleCloseDialog: () => ({
      ...initialState,
    }),
  },
});
