import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";
import searchBarSlice from "./searchBarSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favourite: favouriteSlice.reducer,
    searchBar: searchBarSlice.reducer,
  }
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
