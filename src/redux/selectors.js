export const selectCarsList = (state) => state.cars.carsList || [];
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.errorMessage;