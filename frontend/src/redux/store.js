
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer, // Key here should match your state slice
  },
});

export default store;
