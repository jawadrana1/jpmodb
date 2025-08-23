// src/pages/services/subjectService.js
let subjects = [
  { id: 1, name: "Mathematics", code: "MATH101", status: "active" },
  { id: 2, name: "Science", code: "SCI101", status: "active" },
]

export const subjectService = {
  getAllSubjects: async () => {
    return [...subjects]
  },
  getSubjectById: async (id) => {
    return subjects.find((s) => s.id === Number(id))
  },
  createSubject: async (subject) => {
    const newSubject = { id: Date.now(), ...subject }
    subjects.push(newSubject)
    return newSubject
  },
  updateSubject: async (id, updatedSubject) => {
    subjects = subjects.map((s) => (s.id === Number(id) ? { ...s, ...updatedSubject } : s))
    return subjects.find((s) => s.id === Number(id))
  },
  deleteSubject: async (id) => {
    subjects = subjects.filter((s) => s.id !== Number(id))
    return true
  },
}
