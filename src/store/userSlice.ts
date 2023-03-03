import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./user/types";

interface IUserState {
  user: IUser | null;
}

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "")
  : null;

const setUserToStorage = (user: IUser | null) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const initialState: IUserState = {
  user: userFromStorage,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      setUserToStorage(null);
      state.user = null;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      setUserToStorage(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
