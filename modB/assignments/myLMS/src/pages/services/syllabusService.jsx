// src/services/syllabusService.js
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

const collectionRef = collection(db, "syllabus") // Firestore collection "syllabus"

export const syllabusService = {
  getAllSyllabus: async () => {
    const snapshot = await getDocs(collectionRef)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  },

  getSyllabusById: async (id) => {
    const docRef = doc(db, "syllabus", id)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) throw new Error("Syllabus not found")
    return { id: docSnap.id, ...docSnap.data() }
  },

  createSyllabus: async (syllabus) => {
    const docRef = await addDoc(collectionRef, syllabus)
    return { id: docRef.id, ...syllabus }
  },

  updateSyllabus: async (id, syllabus) => {
    const docRef = doc(db, "syllabus", id)
    await updateDoc(docRef, syllabus)
    return { id, ...syllabus }
  },

  deleteSyllabus: async (id) => {
    const docRef = doc(db, "syllabus", id)
    await deleteDoc(docRef)
  }
}
