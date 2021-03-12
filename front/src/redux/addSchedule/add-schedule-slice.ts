import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { schedulesItem, Form } from "redux/stateType";

export type AddScheduleState = {
  form: schedulesItem;
  isDialogOpen: boolean;
  isStartEdit: boolean;
};

const initialState: AddScheduleState = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  isDialogOpen: false,
  isStartEdit: false,
};

export const addScheduleSlice = createSlice({
  name: "addSchedule",
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
    addScheduleStartEdit: (state) => ({
      ...state,
      isStartEdit: true,
    }),
  },
});
