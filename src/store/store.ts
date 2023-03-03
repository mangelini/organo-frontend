import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { foodAPI } from "./food/foodAPI";

import { sidebarSlice } from "../store/sidebarSlice";
import { menuAPI } from "./menu/menuAPI";
import { cartSlice } from "../store/cart/cartSlice";
import userSlice from "./userSlice";
import { authAPI } from "./user/authAPI";
import { orderAPI } from "./order/orderAPI";
import { orderItemAPI } from "./orderItem/orderItemAPI";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    [foodAPI.reducerPath]: foodAPI.reducer,
    [menuAPI.reducerPath]: menuAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [orderItemAPI.reducerPath]: orderItemAPI.reducer,
    cart: cartSlice.reducer,
    userState: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      foodAPI.middleware,
      menuAPI.middleware,
      authAPI.middleware,
      orderAPI.middleware,
      orderItemAPI.middleware,
    ]),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
