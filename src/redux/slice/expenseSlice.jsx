import { createSlice } from "@reduxjs/toolkit";

const calculateTotalExpenses = (breakdown) => {
  return breakdown.reduce((total, item) => total + item.amount, 0);
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    totalExpenses: 4500,
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
  reducers: {
    addExpense: (state, action) => {
      const { type, amount } = action.payload;
      state.breakdown.push({ type, amount: Number(amount) });
      state.totalExpenses = calculateTotalExpenses(state.breakdown);
      console.log("breakdown 1", breakdown);
    },
    editExpense: (state, action) => {
      const { oldType, type, amount } = action.payload;
      const index = state.breakdown.findIndex(
        (expense) => expense.type === oldType
      );
      if (index !== -1) {
        state.breakdown[index] = { type, amount: Number(amount) };
      }
      state.totalExpenses = calculateTotalExpenses(state.breakdown);
    },
    deleteExpense: (state, action) => {
      const typeToDelete = action.payload;
      state.breakdown = state.breakdown.filter(
        (expense) => expense.type !== typeToDelete
      );
      state.totalExpenses = calculateTotalExpenses(state.breakdown);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
