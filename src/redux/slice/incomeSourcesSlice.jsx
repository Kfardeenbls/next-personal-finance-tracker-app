// src/slices/incomeSourcesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "Income Sources",
  summary: "Breakdown of income sources",
  sources: [
    { source: "Primary Job (Salary)", percentage: 67 },
    { source: "Side Hustles (Freelancing)", percentage: 20 },
    { source: "Passive Income (Investments)", percentage: 13 },
  ],
};

const incomeSourcesSlice = createSlice({
  name: "incomeSources",
  initialState,
  reducers: {
    addSource: (state, action) => {
      state.sources.push(action.payload);
    },
    updateSource: (state, action) => {
      const { index, newSource } = action.payload;
      state.sources[index] = newSource;
    },
    removeSource: (state, action) => {
      state.sources.splice(action.payload, 1);
    },
  },
});

export const { addSource, updateSource, removeSource } =
  incomeSourcesSlice.actions;

export default incomeSourcesSlice.reducer;
