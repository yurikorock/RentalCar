import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  page: 1,
  limit: 12,
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetFilters: (state, action) => {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
      state.page = 1;
      state.limit = 12;
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
