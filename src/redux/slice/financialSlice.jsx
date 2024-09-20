import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  financialSummary: [
    {
      category: "Total Income",
      summary: "Total income from all sources",
      amount: 7500,
      sources: [
        { source: "Salary", amount: 5000 },
        { source: "Freelancing", amount: 1500 },
        { source: "Investments", amount: 1000 },
      ],
    },
    {
      category: "Total Expenses",
      summary: "Total monthly expenses",
      amount: 4500,
      breakdown: [
        { type: "Rent", amount: 1500 },
        { type: "Groceries", amount: 800 },
        { type: "Transport", amount: 300 },
        { type: "Entertainment", amount: 600 },
        { type: "Utilities", amount: 400 },
        { type: "Insurance", amount: 300 },
        { type: "Dining Out", amount: 600 },
      ],
    },
    {
      category: "Total Savings",
      summary: "Total savings after expenses",
      amount: 3000,
    },
    {
      category: "Spending Habits",
      summary: "Breakdown of where the money is spent",
      habits: [
        { habit: "Essentials (Rent, Groceries, Utilities)", percentage: 60 },
        { habit: "Leisure (Entertainment, Dining Out)", percentage: 27 },
        { habit: "Savings & Investments", percentage: 13 },
      ],
    },
    {
      category: "Income Sources",
      summary: "Breakdown of income sources",
      sources: [
        { source: "Primary Job (Salary)", percentage: 67 },
        { source: "Side Hustles (Freelancing)", percentage: 20 },
        { source: "Passive Income (Investments)", percentage: 13 },
      ],
    },
  ],
};

const financialSlice = createSlice({
  name: "financial",
  initialState,
  reducers: {
    updateFinancialData: (state, action) => {
      const { category, updatedData } = action.payload;
      const index = state.financialSummary.findIndex(
        (item) => item.category === category
      );
      if (index !== -1) {
        state.financialSummary[index] = updatedData;
      }
    },
  },
});

export const { updateFinancialData } = financialSlice.actions;

export default financialSlice.reducer;
