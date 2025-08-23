
// src/pages/syllabus/SyllabusForm.jsx
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Container, Paper, Typography, TextField, Button } from "@mui/material"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import { syllabusService } from "../services/syllabusService"

const SyllabusForm = () => {
  const [syllabus, setSyllabus] = useState({ class: "", subject: "", description: "" })
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = Boolean(id)

  useEffect(() => {
    const fetchSyllabus = async () => {
      if (isEdit) {
        try {
          const data = await syllabusService.getSyllabusById(id)
          setSyllabus({
            class: data.class || "",
            subject: data.subject || "",
            description: data.description || ""
          })
        } catch (error) {
          alert("Syllabus not found!")
          navigate("/syllabus")
        }
      }
    }
    fetchSyllabus()
  }, [id, isEdit, navigate])

  const handleChange = (e) => setSyllabus({ ...syllabus, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isEdit) await syllabusService.updateSyllabus(id, syllabus)
      else await syllabusService.createSyllabus(syllabus)
      alert(isEdit ? "Syllabus updated!" : "Syllabus added!")
      navigate("/syllabus")
    } catch (error) {
      console.error(error)
      alert("Failed to save syllabus. Check console.")
    }
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Header />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>{isEdit ? "Edit Syllabus" : "Add Syllabus"}</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField label="Class" name="class" value={syllabus.class} onChange={handleChange} required fullWidth />
              <TextField label="Subject" name="subject" value={syllabus.subject} onChange={handleChange} required fullWidth />
              <TextField label="Description" name="description" value={syllabus.description} onChange={handleChange} multiline rows={3} fullWidth />
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button variant="contained" color="primary" type="submit">{isEdit ? "Update" : "Add"} Syllabus</Button>
                <Button variant="outlined" color="secondary" onClick={() => navigate("/syllabus")}>Cancel</Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}

export default SyllabusForm
