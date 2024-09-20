import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleActive } = toggleSlice.actions;
export default toggleSlice.reducer;
