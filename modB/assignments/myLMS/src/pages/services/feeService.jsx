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

const FEE_STRUCTURES_COLLECTION = "fee_structures"
const FEE_SUBMISSIONS_COLLECTION = "fee_submissions"

export const feeService = {
  // Fee Structure Methods
  getAllFeeStructures: async () => {
    try {
      const q = query(collection(db, FEE_STRUCTURES_COLLECTION), orderBy("class"))
      const querySnapshot = await getDocs(q)
      const feeStructures = []

      querySnapshot.forEach((doc) => {
        feeStructures.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return feeStructures
    } catch (error) {
      console.error("Error getting fee structures:", error)
      throw error
    }
  },

  getFeeStructureById: async (id) => {
    try {
      const docRef = doc(db, FEE_STRUCTURES_COLLECTION, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      } else {
        throw new Error("Fee structure not found")
      }
    } catch (error) {
      console.error("Error getting fee structure:", error)
      throw error
    }
  },

  getFeeStructureByClass: async (className) => {
    try {
      const q = query(collection(db, FEE_STRUCTURES_COLLECTION), where("class", "==", className))
      const querySnapshot = await getDocs(q)
      const feeStructures = []

      querySnapshot.forEach((doc) => {
        feeStructures.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return feeStructures
    } catch (error) {
      console.error("Error getting fee structure by class:", error)
      throw error
    }
  },

  createFeeStructure: async (feeStructureData) => {
    try {
      const docRef = await addDoc(collection(db, FEE_STRUCTURES_COLLECTION), {
        ...feeStructureData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating fee structure:", error)
      throw error
    }
  },

  updateFeeStructure: async (id, feeStructureData) => {
    try {
      const docRef = doc(db, FEE_STRUCTURES_COLLECTION, id)
      await updateDoc(docRef, {
        ...feeStructureData,
        updatedAt: new Date().toISOString(),
      })

      return true
    } catch (error) {
      console.error("Error updating fee structure:", error)
      throw error
    }
  },

  deleteFeeStructure: async (id) => {
    try {
      const docRef = doc(db, FEE_STRUCTURES_COLLECTION, id)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error("Error deleting fee structure:", error)
      throw error
    }
  },

  // Fee Submission Methods
  getAllFeeSubmissions: async () => {
    try {
      const q = query(collection(db, FEE_SUBMISSIONS_COLLECTION), orderBy("paymentDate", "desc"))
      const querySnapshot = await getDocs(q)
      const feeSubmissions = []

      querySnapshot.forEach((doc) => {
        feeSubmissions.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return feeSubmissions
    } catch (error) {
      console.error("Error getting fee submissions:", error)
      throw error
    }
  },

  getFeeSubmissionById: async (id) => {
    try {
      const docRef = doc(db, FEE_SUBMISSIONS_COLLECTION, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      } else {
        throw new Error("Fee submission not found")
      }
    } catch (error) {
      console.error("Error getting fee submission:", error)
      throw error
    }
  },

  getFeeSubmissionsByStudent: async (studentId) => {
    try {
      const q = query(
        collection(db, FEE_SUBMISSIONS_COLLECTION),
        where("studentId", "==", studentId),
        orderBy("paymentDate", "desc"),
      )
      const querySnapshot = await getDocs(q)
      const feeSubmissions = []

      querySnapshot.forEach((doc) => {
        feeSubmissions.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return feeSubmissions
    } catch (error) {
      console.error("Error getting fee submissions by student:", error)
      throw error
    }
  },

  createFeeSubmission: async (feeSubmissionData) => {
    try {
      const docRef = await addDoc(collection(db, FEE_SUBMISSIONS_COLLECTION), {
        ...feeSubmissionData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating fee submission:", error)
      throw error
    }
  },

  updateFeeSubmission: async (id, feeSubmissionData) => {
    try {
      const docRef = doc(db, FEE_SUBMISSIONS_COLLECTION, id)
      await updateDoc(docRef, {
        ...feeSubmissionData,
        updatedAt: new Date().toISOString(),
      })

      return true
    } catch (error) {
      console.error("Error updating fee submission:", error)
      throw error
    }
  },

  deleteFeeSubmission: async (id) => {
    try {
      const docRef = doc(db, FEE_SUBMISSIONS_COLLECTION, id)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error("Error deleting fee submission:", error)
      throw error
    }
  },

  // Analytics Methods
  getFeeCollectionReport: async (startDate, endDate) => {
    try {
      const q = query(
        collection(db, FEE_SUBMISSIONS_COLLECTION),
        where("paymentDate", ">=", startDate),
        where("paymentDate", "<=", endDate),
        orderBy("paymentDate", "desc"),
      )
      const querySnapshot = await getDocs(q)
      const submissions = []
      let totalCollection = 0

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        submissions.push({
          id: doc.id,
          ...data,
        })
        totalCollection += Number.parseFloat(data.totalAmount || 0)
      })

      return {
        submissions,
        totalCollection,
        totalSubmissions: submissions.length,
      }
    } catch (error) {
      console.error("Error getting fee collection report:", error)
      throw error
    }
  },

  getPendingFees: async () => {
    try {
      // This would require a more complex query to find students who haven't paid
      // For now, returning empty array - would need to implement based on business logic
      return []
    } catch (error) {
      console.error("Error getting pending fees:", error)
      throw error
    }
  },
}

 