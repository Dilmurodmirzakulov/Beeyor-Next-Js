import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryName: "all",
    restorantName: "all",
  },
  reducers: {
    categorySelect(state, action){
      state.categoryName = action.payload
    },
    restorantSelect(state, action){
      state.restorantName = action.payload
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.category,
        };
      },
    },
  }
})

export const categoryActions = categorySlice.actions;

export default categorySlice;