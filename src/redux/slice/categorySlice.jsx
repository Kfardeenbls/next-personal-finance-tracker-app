import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    clearCategory(state) {
      state.selectedCategory = null;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export default categorySlice.reducer;
