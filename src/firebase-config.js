import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKEmz4bbkpJQNfjzIq2fz5Xt4hv1DCpPw",
    authDomain: "practice-b5e84.firebaseapp.com",
    projectId: "practice-b5e84",
    storageBucket: "practice-b5e84.appspot.com",
    messagingSenderId: "941113347567",
    appId: "1:941113347567:web:940ba6c2e4e243b4bdba1a",
    measurementId: "G-NL53G3YXBG"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);