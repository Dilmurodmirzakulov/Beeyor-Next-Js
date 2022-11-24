import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
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
        MySwal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your product has been added to the cart',
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
    clearCart(state){
      state.itemsList = []
    },
    increment(state, action){
      const increaseItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id == increaseItem);
      existingItem.quantity++;
    },
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;