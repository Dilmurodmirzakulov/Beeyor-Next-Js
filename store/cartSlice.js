import { createSlice } from "@reduxjs/toolkit";
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { HYDRATE } from 'next-redux-wrapper';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.itemsList.push(newItem);
      }
    },
    removeFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id === newItem.id)
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item.id !== newItem.id)
      } else {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      state.itemsList = []
    },
    increment(state, action) {
      const increaseItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id == increaseItem);
      existingItem.quantity++;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.cart,
        };
      },
    },
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;