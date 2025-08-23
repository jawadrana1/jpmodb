// src/pages/services/examService.js
import { db } from "../../config/firebase"
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"

const examCollection = collection(db, "exams")

export const examService = {
  // Get all exams
  getAllExams: async () => {
    try {
      const querySnapshot = await getDocs(examCollection)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error("Error fetching exams:", error)
      return []
    }
  },

  // Get single exam by ID
  getExamById: async (id) => {
    try {
      const examDoc = await getDoc(doc(db, "exams", id))
      if (examDoc.exists()) {
        return { id: examDoc.id, ...examDoc.data() }
      } else {
        console.error("Exam not found")
        return null
      }
    } catch (error) {
      console.error("Error fetching exam:", error)
      return null
    }
  },

  // Add new exam
  addExam: async (examData) => {
    try {
      const docRef = await addDoc(examCollection, examData)
      return docRef.id
    } catch (error) {
      console.error("Error adding exam:", error)
      return null
    }
  },

  // Update existing exam
  updateExam: async (id, examData) => {
    try {
      const examDoc = doc(db, "exams", id)
      await updateDoc(examDoc, examData)
      return true
    } catch (error) {
      console.error("Error updating exam:", error)
      return false
    }
  },

  // Delete exam
  deleteExam: async (id) => {
    try {
      await deleteDoc(doc(db, "exams", id))
      return true
    } catch (error) {
      console.error("Error deleting exam:", error)
      return false
    }
  },
}
