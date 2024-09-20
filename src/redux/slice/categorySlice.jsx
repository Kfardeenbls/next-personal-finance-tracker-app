import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  selectedCategory: null,
};

// Create a slice of the Redux store
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
