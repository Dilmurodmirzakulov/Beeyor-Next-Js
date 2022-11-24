import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouritesList: [],
    heartImg: 'img/empty-heart.svg'
  },
  reducers: {
    toggleFavourite(state, action){
      const newId = action.payload;
      const existingId = state.favouritesList.find(id => id === newId);
      if(existingId){
        state.favouritesList = state.favouritesList.filter(id => id !== newId);
      }else{
        state.favouritesList.push(newId);
      }
    },
  }
})

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;