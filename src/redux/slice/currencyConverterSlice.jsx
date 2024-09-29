import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyData: {},
};

const currencyConverterSlice = createSlice({
  name: "currencyConverter",
  initialState,
  reducers: {
    setCurrencyData(state, action) {
      state.currencyData = action.payload;
    },
  },
});

export const { setCurrencyData } = currencyConverterSlice.actions;

export default currencyConverterSlice.reducer;
