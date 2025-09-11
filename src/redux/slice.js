import { createSlice } from "@reduxjs/toolkit";
import { getCarsList } from "./operations.js";

const initialState = {
  carsList: [],
  isLoading: false,
  errorMessage: null,
  car: null,
  totalCars: 0,
  page: 1,
  totalPages: 0,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsList.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getCarsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsList = [...state.carsList, ...action.payload.cars];
        state.totalCars = action.payload.totalCars;
       
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCarsList.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const { setPage } = carSlice.actions;
export default carSlice.reducer;
