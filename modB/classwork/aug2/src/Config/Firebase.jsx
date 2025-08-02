// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLD5yyi8UsKGFwBdwapsinzHkcT0T38To",
  authDomain: "jpsigninup.firebaseapp.com",
  projectId: "jpsigninup",
  storageBucket: "jpsigninup.firebasestorage.app",
  messagingSenderId: "988795493290",
  appId: "1:988795493290:web:1243a7d787fdd0ab3d69d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;