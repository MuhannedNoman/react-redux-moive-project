import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLoggedIn: false,

    userId: null,
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.userId = null;
    },

    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});
export const { logoutHandler, loginHandler, setUserId } = authSlice.actions;
export default authSlice.reducer;
