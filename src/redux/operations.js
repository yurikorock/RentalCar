import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global/";

export const getCarsList = createAsyncThunk(
  "get/getCarsList",
  async (page,thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}cars?page=${page}&limit=12`);
      return  response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
}

);
