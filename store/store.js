import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";
import categorySlice from "./categorySlice";
import searchBarSlice from "./searchBarSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favourite: favouriteSlice.reducer,
    category: categorySlice.reducer,
    searchBar: searchBarSlice.reducer,
  }
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
