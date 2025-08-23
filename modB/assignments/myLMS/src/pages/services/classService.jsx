import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

const collectionRef = collection(db, "classes")

export const classService = {
  getAllClasses: async () => {
    try {
      const querySnapshot = await getDocs(collectionRef)
      const classes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      return classes
    } catch (error) {
      console.error("Error fetching classes:", error)
      throw error
    }
  },

  getClassById: async (id) => {
    try {
      const docRef = doc(db, "classes", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        throw new Error("Class not found")
      }
    } catch (error) {
      console.error("Error fetching class:", error)
      throw error
    }
  },

  createClass: async (cls) => {
    try {
      const docRef = await addDoc(collectionRef, cls)
      return { id: docRef.id, ...cls }
    } catch (error) {
      console.error("Error creating class:", error)
      throw error
    }
  },

  updateClass: async (id, cls) => {
    try {
      const docRef = doc(db, "classes", id)
      await updateDoc(docRef, cls)
      return { id, ...cls }
    } catch (error) {
      console.error("Error updating class:", error)
      throw error
    }
  },

  deleteClass: async (id) => {
    try {
      const docRef = doc(db, "classes", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.error("Error deleting class:", error)
      throw error
    }
  },
}
