import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slice.js";
import filtersReducer from "./filtersSlice.js"
import favoritesReducer from "./favoritesSlice.js"

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});