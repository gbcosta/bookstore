import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface drawerState {
  value: boolean;
}

const initialState: drawerState = {
  value: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { set } = drawerSlice.actions;

export default drawerSlice.reducer;
