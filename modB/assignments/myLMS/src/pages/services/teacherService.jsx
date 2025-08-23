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

const COLLECTION_NAME = "teachers"
const ALLOCATIONS_COLLECTION = "teacher_allocations"

export const teacherService = {
  // Get all teachers
  getAllTeachers: async () => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy("name"))
      const querySnapshot = await getDocs(q)
      const teachers = []

      querySnapshot.forEach((doc) => {
        teachers.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return teachers
    } catch (error) {
      console.error("Error getting teachers:", error)
      throw error
    }
  },

  // Get teacher by ID
  getTeacherById: async (id) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        }
      } else {
        throw new Error("Teacher not found")
      }
    } catch (error) {
      console.error("Error getting teacher:", error)
      throw error
    }
  },

  // Create new teacher
  createTeacher: async (teacherData) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...teacherData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error creating teacher:", error)
      throw error
    }
  },

  // Update teacher
  updateTeacher: async (id, teacherData) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        ...teacherData,
        updatedAt: new Date().toISOString(),
      })

      return true
    } catch (error) {
      console.error("Error updating teacher:", error)
      throw error
    }
  },

  // Delete teacher
  deleteTeacher: async (id) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error("Error deleting teacher:", error)
      throw error
    }
  },

  // Get teachers by department
  getTeachersByDepartment: async (department) => {
    try {
      const q = query(collection(db, COLLECTION_NAME), where("department", "==", department), orderBy("name"))
      const querySnapshot = await getDocs(q)
      const teachers = []

      querySnapshot.forEach((doc) => {
        teachers.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return teachers
    } catch (error) {
      console.error("Error getting teachers by department:", error)
      throw error
    }
  },

  // Get teacher allocations
  getTeacherAllocations: async (teacherId) => {
    try {
      const q = query(collection(db, ALLOCATIONS_COLLECTION), where("teacherId", "==", teacherId))
      const querySnapshot = await getDocs(q)
      const allocations = []

      querySnapshot.forEach((doc) => {
        allocations.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return allocations
    } catch (error) {
      console.error("Error getting teacher allocations:", error)
      throw error
    }
  },

  // Add teacher allocation
  addTeacherAllocation: async (teacherId, allocationData) => {
    try {
      const docRef = await addDoc(collection(db, ALLOCATIONS_COLLECTION), {
        teacherId,
        ...allocationData,
        createdAt: new Date().toISOString(),
      })

      return docRef.id
    } catch (error) {
      console.error("Error adding teacher allocation:", error)
      throw error
    }
  },

  // Remove teacher allocation
  removeTeacherAllocation: async (teacherId, allocationId) => {
    try {
      const docRef = doc(db, ALLOCATIONS_COLLECTION, allocationId)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error("Error removing teacher allocation:", error)
      throw error
    }
  },

  // Search teachers
  searchTeachers: async (searchTerm) => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy("name"))
      const querySnapshot = await getDocs(q)
      const teachers = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        if (
          data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          data.email.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          teachers.push({
            id: doc.id,
            ...data,
          })
        }
      })

      return teachers
    } catch (error) {
      console.error("Error searching teachers:", error)
      throw error
    }
  },
}
