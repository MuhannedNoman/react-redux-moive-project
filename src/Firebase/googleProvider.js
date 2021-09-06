import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

import { loginHandler } from "../Redux/Slices/authSlice";
// import { loginHandler } from "../Redux/Slices/authSlice";
import { auth } from "./Firebase";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (dispatch) => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      res.user
        .getIdToken()
        .then((res) => dispatch(loginHandler(res)))
        .catch((err) => {
          err;
        });
    })
    .catch((error) => {
      error.message;
    });
};
