import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "Spending Habits",
  summary: "Breakdown of where the money is spent",
  habits: [
    { habit: "Essentials (Rent, Groceries, Utilities)", percentage: 60 },
    { habit: "Leisure (Entertainment, Dining Out)", percentage: 27 },
    { habit: "Savings & Investments", percentage: 13 },
  ],
};

const spendingHabitsSlice = createSlice({
  name: "spendingHabits",
  initialState,
  reducers: {
    updateHabit: (state, action) => {
      const { index, percentage } = action.payload;
      if (state.habits[index]) {
        state.habits[index].percentage = percentage;
      }
    },
  },
});

export const { updateHabit } = spendingHabitsSlice.actions;

export default spendingHabitsSlice.reducer;
