import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
  page: 1,
  limit: 12,
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
      state.page = 1;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.page = 1;
    },
    setMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
      state.page = 1;
    },
    setMileageTo: (state, action) => {
      state.mileageTo = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetFilters: (state, action) => {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
      state.page = 1;
    },
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  setPage,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
