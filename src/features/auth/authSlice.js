import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../firebase/firebase";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    email: "",
    password: "",
  },
  reducers: {
    signup: (state, action) => {
      // eslint-disable-next-line
      state.uid = action.payload.uid;
      // eslint-disable-next-line
      state.email = action.payload.email;
      // eslint-disable-next-line
      state.password = action.payload.password;
    },
    login: (state, action) => {
      // eslint-disable-next-line
      state.uid = action.payload.uid;
      // eslint-disable-next-line
      state.email = action.payload.email;
      // eslint-disable-next-line
      state.password = action.payload.password;
    },
    // logout: () => {
    //   auth.signOut();
    // },
    currentUser: (state) => {
      // eslint-disable-next-line
      state.uid = user.uid;
      // eslint-disable-next-line
      state.email = user.email;
      // eslint-disable-next-line
      state.password = user.password;
    },
  },
});

export const { signup, login, currentUser } = userSlice.actions;

export default userSlice.reducer;
