// // import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../config/firebase";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const logout = async () => {
//     await signOut(auth);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// // };

// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};