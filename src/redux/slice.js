import { createSlice } from "@reduxjs/toolkit";
import { getCarsList } from "./operations.js";

const initialState = {
  carsList: [],
  isLoading: false,
  errorMessage: null,
  car: null,
  totalCars:0,
  page:1,
  totalPages:0,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarsList.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getCarsList.fulfilled, (state, action) => {
         
        state.isLoading = false;
        state.carsList = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCarsList.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default carSlice.reducer;
