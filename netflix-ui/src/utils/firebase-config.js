// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX2YcYGolgbpaTrPkY9pHbkNjXSo-keJA",
  authDomain: "reactjs-netflix-63c2d.firebaseapp.com",
  projectId: "reactjs-netflix-63c2d",
  storageBucket: "reactjs-netflix-63c2d.appspot.com",
  messagingSenderId: "796418686245",
  appId: "1:796418686245:web:6d2d0ef856de0c43266ecc",
  measurementId: "G-SHNQVHR0M9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
