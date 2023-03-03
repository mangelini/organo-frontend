import { createSlice } from "@reduxjs/toolkit";
import { IOrderItem } from "../orderItem/types";

interface ICartState {
  cartItems: IOrderItem[];
  totalQuantity: number;
  totalAmount: number;
}

// Store state in localStorage to persist cart items
// when user closes browser
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") || "")
  : [];

const totalQuantity = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity") || "")
  : 0;

const totalAmount = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount") || "")
  : 0;

const setItemsToStorage = (
  cartItems: IOrderItem[],
  totalQuantity: number,
  totalAmount: number
) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const initialState: ICartState = {
  cartItems,
  totalQuantity,
  totalAmount,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const food = action.payload;
      const modal: IOrderItem = {
        food,
        quantity: 1,
        unitPrice: food.price,
      };

      const itemExists = state.cartItems.find(
        (x) => x.food.id === modal.food.id
      );
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.cartItems.push(modal);
      }
      state.totalQuantity += 1;
      state.totalAmount += modal.food.price;

      setItemsToStorage(
        state.cartItems,
        state.totalQuantity,
        state.totalAmount
      );
    },
    removeFromCart: (state, action) => {
      const food = action.payload;
      const itemExists = state.cartItems.find((x) => x.food.id === food.id);
      if (itemExists) {
        if (itemExists.quantity > 1) {
          itemExists.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (x) => x.food.id !== food.id
          );
        }
        state.totalQuantity -= 1;
        state.totalAmount -= food.price;

        setItemsToStorage(
          state.cartItems,
          state.totalQuantity,
          state.totalAmount
        );
      }
    },
    deleteFromCart: (state, action) => {
      const item = action.payload;
      const itemExists = state.cartItems.find(
        (x) => x.food.id === item.food.id
      );
      if (itemExists) {
        state.totalQuantity -= itemExists.quantity;
        state.totalAmount -= itemExists.quantity * item.food.price;
        state.cartItems = state.cartItems.filter(
          (x) => x.food.id !== item.food.id
        );
      }

      setItemsToStorage(
        state.cartItems,
        state.totalQuantity,
        state.totalAmount
      );
    },
    deleteAllFromCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      setItemsToStorage(
        state.cartItems,
        state.totalQuantity,
        state.totalAmount
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, deleteAllFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
