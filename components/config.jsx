// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTHzT7tF5NqYrSxpAi_Ys5KlzuIMT6Nj4",
  authDomain: "tkp-auth.firebaseapp.com",
  projectId: "tkp-auth",
  storageBucket: "tkp-auth.appspot.com",
  messagingSenderId: "1573399935",
  appId: "1:1573399935:web:ecb61d62451600f591fe4a",
  measurementId: "G-PR5Y55M79M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();