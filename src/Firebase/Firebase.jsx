import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

import "firebase/auth";
const app = initializeApp({
  apiKey: "AIzaSyBd70qCyQ3kTs8X3no5F4i1oP7Vii6MPbI",

  authDomain: "movies-project-dabf5.firebaseapp.com",

  projectId: "movies-project-dabf5",

  storageBucket: "movies-project-dabf5.appspot.com",

  messagingSenderId: "419037731459",

  appId: "1:419037731459:web:5567394769b6620b5459b6",
});
export const auth = getAuth();
export const db = getFirestore();
export default app;
