import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { schedulesItem } from "redux/stateType";

export type SchedulesState = {
  items: schedulesItem[];
  isLoading: boolean;
  error: string | null;
};
const initialState: SchedulesState = {
  items: [],
  isLoading: false,
  error: null,
};

export const schedulesSlice = createSlice({
  name: "schedules",
  initialState,
  reducers: {
    addSchedulesItem: (state, action: PayloadAction<schedulesItem>) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    setLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchItem: (state, action: PayloadAction<schedulesItem[]>) => {
      const value: SchedulesState = {
        ...state,
        isLoading: true,
        items: action.payload,
      };

      return value;
    },
    deleteItem: (state, action: PayloadAction<schedulesItem[]>) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    asyncFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
  },
});
