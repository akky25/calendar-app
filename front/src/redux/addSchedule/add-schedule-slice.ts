import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { Form, ScheduleState } from "redux/stateType";

const initialState: ScheduleState = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  isDialogOpen: false,
};

// eslint-disable-next-line import/prefer-default-export
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
