// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtBU1EBGfq3qRKmfiITB2aZ_5h7mHYh3I",
  authDomain: "assirtk.firebaseapp.com",
  projectId: "assirtk",
  storageBucket: "assirtk.firebasestorage.app",
  messagingSenderId: "546942868877",
  appId: "1:546942868877:web:372697c5dfa54d52e4b1c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);