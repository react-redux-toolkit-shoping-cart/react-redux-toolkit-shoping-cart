import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    showCart: false,
    touched: false,
  },
  reducers: {
    loadCart: (state, action) => {
      state.touched = true;
      if(action.payload.items) {
        state.items = action.payload.items;
      }
      if(action.payload.totalQuantity) {
        state.totalQuantity = action.payload.totalQuantity;
      }
    },
    addToCart: (state, action) => {
      state.touched = true;
      const existingItem = state.items.find((item) => {
        if(item.id == action.payload.id) {
          return true;
        }
      });
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price
        });
        state.totalQuantity++
      }
    },
    removeFromCart: (state, action) => {
      state.touched = true;
      const id = action.payload
      const existsItem = state.items.find((item) => item.id == id);
      if(existsItem && existsItem.quantity ==1) {
        console.log('eto')
        state.items = state.items.filter((item)=> {
          return item.id != id;
        });
      } else {
        existsItem.quantity--;
        existsItem.totalPrice -= existsItem.price;
      }
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    }
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;