import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore"
import { db } from "../../config/firebase"

const COLLECTION_NAME = "students"

export const studentService = {
  // Get all students
  getAllStudents: async () => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy("name"))
      const querySnapshot = await getDocs(q)
      const students = []

      querySnapshot.forEach((doc) => {
        students.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return students
    } catch (error) {
      console.error("Error getting students:", error)
      throw error
    }
  },

  // Get student by ID
  getStudentById: async (id) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      } else {
        throw new Error("Student not found")
      }
    } catch (error) {
      console.error("Error getting student:", error)
      throw error
    }
  },

  // Create new student
  createStudent: async (studentData) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...studentData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating student:", error)
      throw error
    }
  },

  // Update student
  updateStudent: async (id, studentData) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        ...studentData,
        updatedAt: new Date().toISOString(),
      })

      return true
    } catch (error) {
      console.error("Error updating student:", error)
      throw error
    }
  },

  // Delete student
  deleteStudent: async (id) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error("Error deleting student:", error)
      throw error
    }
  },

  // Transfer student
  transferStudent: async (id, transferData) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        status: "transferred",
        transferDetails: transferData,
        updatedAt: new Date().toISOString(),
      })

      return true
    } catch (error) {
      console.error("Error transferring student:", error)
      throw error
    }
  },

  // Get students by class
  getStudentsByClass: async (className) => {
    try {
      const q = query(collection(db, COLLECTION_NAME), where("class", "==", className), orderBy("rollNumber"))
      const querySnapshot = await getDocs(q)
      const students = []

      querySnapshot.forEach((doc) => {
        students.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return students
    } catch (error) {
      console.error("Error getting students by class:", error)
      throw error
    }
  },

  // Search students
  searchStudents: async (searchTerm) => {
    try {
      // Note: Firestore doesn't support full-text search natively
      // This is a basic implementation - for production, consider using Algolia or similar
      const q = query(collection(db, COLLECTION_NAME), orderBy("name"))
      const querySnapshot = await getDocs(q)
      const students = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        if (
          data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.email.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          students.push({
            id: doc.id,
            ...data,
          })
        }
      })

      return students
    } catch (error) {
      console.error("Error searching students:", error)
      throw error
    }
  },
}
