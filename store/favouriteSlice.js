import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouritesList: [],
    heartImg: 'img/empty-heart.svg'
  },
  reducers: {
    toggleFavourite(state, action) {
      const newId = action.payload;
      const existingId = state.favouritesList.find(x => x === newId);
      if (existingId) {
        state.favouritesList = state.favouritesList.filter(x => x !== newId);
      } else {
        state.favouritesList.push(newId);
      }
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.favourite,
        };
      },
    },
  }
})

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;