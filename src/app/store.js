import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice"
import productReducer from "../features/slices/productSlice"

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer
  },
});
