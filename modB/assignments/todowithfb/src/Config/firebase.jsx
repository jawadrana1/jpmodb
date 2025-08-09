// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcYPe2yzMTYLIAT5f_xjWekFGwtsDQ-pU",
  authDomain: "todowithfb-7e1a5.firebaseapp.com",
  projectId: "todowithfb-7e1a5",
  storageBucket: "todowithfb-7e1a5.firebasestorage.app",
  messagingSenderId: "502415200008",
  appId: "1:502415200008:web:8c689e14a0b656475da6bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };