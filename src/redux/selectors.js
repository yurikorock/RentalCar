export const selectCarsList = (state) => state.cars.carsList || [];
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.errorMessage;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectFavoriteCars = (state)=> state.favorites.favoriteCars;