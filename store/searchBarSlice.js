import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    message: ''
  },
  reducers: {
    showResults(state, action){
      state.message = action.payload
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.searchBar,
        };
      },
    },
  }
})

export const searchBarActions = searchBarSlice.actions;

export default searchBarSlice; 