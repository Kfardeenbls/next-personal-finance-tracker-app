import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalIncome: 7500,
  sources: [
    { source: "Salary", amount: 5000 },
    { source: "Freelancing", amount: 1500 },
    { source: "Investments", amount: 1000 },
  ],
};

const calculateTotalIncome = (sources) => {
  return sources.reduce((total, source) => total + source.amount, 0);
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncomeSource: (state, action) => {
      const { source, amount } = action.payload;
      state.sources.push({ source, amount: Number(amount) });
      state.totalIncome = calculateTotalIncome(state.sources);
    },
    deleteIncomeSource: (state, action) => {
      const sourceToDelete = action.payload;
      state.sources = state.sources.filter(
        (src) => src.source !== sourceToDelete
      );
      state.totalIncome = calculateTotalIncome(state.sources);
    },
    updateIncomeSource: (state, action) => {
      const { oldSource, source, amount } = action.payload;
      const index = state.sources.findIndex((src) => src.source === oldSource);

      if (index !== -1) {
        state.sources[index] = { source, amount };
      }

      state.totalIncome = calculateTotalIncome(state.sources);
    },
  },
});

export const { addIncomeSource, deleteIncomeSource, updateIncomeSource } =
  incomeSlice.actions;
export default incomeSlice.reducer;
