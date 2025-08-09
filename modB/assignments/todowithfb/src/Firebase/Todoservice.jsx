// src/Firebase/Todoservice.jsx
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase"; // correct path to firebase.js

const todoCollection = collection(db, "todos");

export const fetchTodos = async () => {
  const snapshot = await getDocs(todoCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addTodoToFirebase = async (text) => {
  const newTodo = { text };
  const docRef = await addDoc(todoCollection, newTodo);
  return { id: docRef.id, ...newTodo };
};

export const deleteTodoFromFirebase = async (id) => {
  await deleteDoc(doc(db, "todos", id));
};

export const updateTodoInFirebase = async (id, newText) => {
  await updateDoc(doc(db, "todos", id), { text: newText });
};