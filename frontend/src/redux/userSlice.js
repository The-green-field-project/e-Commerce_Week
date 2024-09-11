// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user', // Required property
  initialState: {
    name: "user",
    isLoggedIn: false,
    username: ""
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.username = "";
    }
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
