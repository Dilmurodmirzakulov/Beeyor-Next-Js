import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { productData } from "../components/productData";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";

// CommonJS
const MySwal = require('sweetalert2')
// const MySwal = withReactContent(Swal)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity++;
      }
      else {
        state.itemsList.push(newItem);
        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
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
    removeItem(state, action) {
      const newItem = action.payload;
      state.itemsList = state.itemsList.filter(item => item.id !== newItem.id)
    },
    clearCart(state) {
      state.itemsList = []
      console.log("cleared");
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