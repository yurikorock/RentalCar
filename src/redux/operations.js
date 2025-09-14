import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global/";

export const getCarsList = createAsyncThunk(
  "get/getCarsList",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { page } = state.cars;
      const filters = state.filters; //brand,rentalPrice,minMileage,maxMileage,page,limit,
      const response = await axios.get(`${BASE_URL}cars`, {
        params: { page, limit: 12, ...filters },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
