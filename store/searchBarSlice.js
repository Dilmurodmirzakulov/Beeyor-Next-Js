import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    searchedText: '',
    restorantsSearchResult: [],
    resultsStatus: true,
},
  reducers: {
    nothing(state){
      state.resultsStatus = false
    },
    showResult(state){
      state.resultsStatus = true
    },
    setRestorantsResult(state, action){
      state.restorantsSearchResult = action.payload
    },
    showResults(state, action){
      state.searchedText = action.payload.toLowerCase()
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