"use client"

import { useState, useEffect } from "react"
import { Box, Container } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import { examService } from "../services/examService"

const ExamForm = () => {
  const { id } = useParams() // Edit ke liye
  const navigate = useNavigate()
  const [examData, setExamData] = useState({
    name: "",
    code: "",
    class: "",
    date: "",
    description: "",
  })

  const classOptions = [
    { value: "nursery", label: "Nursery" },
    { value: "prep", label: "Prep" },
    { value: "class-1", label: "Class 1" },
    { value: "class-2", label: "Class 2" },
    { value: "class-3", label: "Class 3" },
    { value: "class-4", label: "Class 4" },
    { value: "class-5", label: "Class 5" },
    { value: "class-6", label: "Class 6" },
    { value: "class-7", label: "Class 7" },
    { value: "class-8", label: "Class 8" },
    { value: "class-9", label: "Class 9" },
    { value: "class-10", label: "Class 10" },
  ]

  useEffect(() => {
    if (id) {
      loadExam()
    }
  }, [id])

  const loadExam = async () => {
    try {
      const data = await examService.getExamById(id)
      setExamData(data)
    } catch (error) {
      console.error("Error loading exam:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExamData({ ...examData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (id) {
        await examService.updateExam(id, examData)
      } else {
        await examService.addExam(examData)
      }
      navigate("/exams")
    } catch (error) {
      console.error("Error saving exam:", error)
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="md">
          <PageHeader
            title={id ? "Edit Exam" : "Add Exam"}
            subtitle={id ? "Update exam information" : "Add a new exam"}
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Exams" }]}
          />

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Input label="Exam Name" name="name" value={examData.name} onChange={handleChange} required />
            <Input label="Exam Code" name="code" value={examData.code} onChange={handleChange} required />
            <Select
              label="Class"
              name="class"
              value={examData.class}
              onChange={handleChange}
              options={classOptions}
              required
            />
            <Input label="Exam Date" type="date" name="date" value={examData.date} onChange={handleChange} required />
            <Input label="Description" name="description" value={examData.description} onChange={handleChange} multiline rows={3} />

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button type="submit" variant="contained">
                {id ? "Update Exam" : "Add Exam"}
              </Button>
              <Button variant="outlined" onClick={() => navigate("/exams")}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ExamForm
