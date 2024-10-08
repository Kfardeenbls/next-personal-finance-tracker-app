import { configureStore } from "@reduxjs/toolkit";
import financialReducer from "../redux/slice/financialSlice";
import toggleReducer from "../redux/slice/toggleSlice";
import categoryReducer from "../redux/slice/categorySlice";
import incomeReducer from "../redux/slice/incomeSlice";
import expensesReducer from "../redux/slice/expenseSlice";
import incomeSourcesReducer from "../redux/slice/incomeSourcesSlice";
import spendingHabitsReducer from "../redux/slice/spendingHabitsSlice";
import currencyConverterReducer from "../redux/slice/currencyConverterSlice";

const store = configureStore({
  reducer: {
    financial: financialReducer,
    toggle: toggleReducer,
    category: categoryReducer,
    income: incomeReducer,
    expenses: expensesReducer,
    incomeSources: incomeSourcesReducer,
    spendingHabits: spendingHabitsReducer,
    currencyConverter: currencyConverterReducer,
  },
});

export default store;
