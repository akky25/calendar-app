import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { schedulesItem } from "redux/stateType";

export type AddScheduleState = {
  form: schedulesItem;
  isDialogOpen: boolean;
};

const initialState: AddScheduleState = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  isDialogOpen: false,
};

// eslint-disable-next-line import/prefer-default-export
export const addScheduleSlice = createSlice({
  name: "addSchedule",
  initialState,
  reducers: {
    addScheduleSetValue: (state, action: PayloadAction<schedulesItem>) => ({
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
