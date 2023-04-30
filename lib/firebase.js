import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALS3r-MWY7G2lzv8eEpSY_O0WWNGFt5-8",
  authDomain: "next-js-13-tut-yt.firebaseapp.com",
  projectId: "next-js-13-tut-yt",
  storageBucket: "next-js-13-tut-yt.appspot.com",
  messagingSenderId: "752152462452",
  appId: "1:752152462452:web:678592a4d1616d9d0cbd21",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);
