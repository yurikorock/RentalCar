import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
 
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
      state.page = 1;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
      state.page = 1;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
      state.page = 1;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
      state.page = 1;
    },
  
  },
});

export const {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  setPage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
