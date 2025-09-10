import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global/";

export const getCarsList = createAsyncThunk(
  "get/getCarsList",
  async (query,thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}cars/`);
      return  response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
}

);
