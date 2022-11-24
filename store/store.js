import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
