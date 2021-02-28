import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { schedulesItem } from "redux/stateType";

export type currentScheduleState = {
  item: schedulesItem | null;
  isDialogOpen: boolean;
};

const initialState: currentScheduleState = {
  item: null,
  isDialogOpen: false,
};

export const currentScheduleSlice = createSlice({
  name: "currentSchedule",
  initialState,
  reducers: {
    currentScheduleSetItem: (state, action: PayloadAction<schedulesItem>) => ({
      ...state,
      item: action.payload,
    }),
    currentScheduleOpenDialog: (state) => ({
      ...state,
      isDialogOpen: true,
    }),
    currentScheduleCloseDialog: (state) => ({
      ...state,
      isDialogOpen: false,
    }),
  },
});
