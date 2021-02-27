import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Form } from "redux/stateType";

export type SchedulesState = {
  items: Form[];
  isLoading: boolean;
};
const initialState: SchedulesState = {
  items: [],
  isLoading: false,
};

export const schedulesSlice = createSlice({
  name: "schedules",
  initialState,
  reducers: {
    addSchedulesItem: (state, action: PayloadAction<Form>) => ({
      ...state,
      items: [
        ...state.items,
        { ...action.payload, id: state.items.length + 1 },
      ],
    }),
  },
});
