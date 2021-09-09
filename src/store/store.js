import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/authSlice";
import bookmarkSlice from "../features/bookmarkSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    bookmark: bookmarkSlice,
  },
});
