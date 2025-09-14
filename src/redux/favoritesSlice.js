import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("error localStorage", error);
    return [];
  }
};

const initialState = {
  favoriteCars: loadFromLocalStorage(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
    //   const exist = state.favoriteCars.find(
    //     (car) => car.id === action.payload.id
    //   );
    //   if (!exist) {
    //     state.favoriteCars.push(action.payload);
    //   }
    state.favoriteCars.push(action.payload);
    localStorage.setItem("favorites", JSON.stringify(state.favoriteCars));
    },
    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favoriteCars));
    },
  },
});
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
