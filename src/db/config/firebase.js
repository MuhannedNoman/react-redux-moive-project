import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3VJIKfEaVJ8Cmp5uhfmAZNsXHVeNkf9w",
  authDomain: "movie-webapp-8aad0.firebaseapp.com",
  projectId: "movie-webapp-8aad0",
  storageBucket: "movie-webapp-8aad0.appspot.com",
  messagingSenderId: "136473988740",
  appId: "1:136473988740:web:e472fbda8ed78e85da3cd1",
  measurementId: "G-43QMMTZLLB"
};

const fire = initializeApp(firebaseConfig);

export default fire;