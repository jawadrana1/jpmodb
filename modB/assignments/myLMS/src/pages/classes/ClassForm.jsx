// src/pages/classes/ClassForm.jsx
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Paper, Typography, TextField, Box, Button } from "@mui/material"
import { classService } from "../services/classService"

const ClassForm = () => {
  const [cls, setCls] = useState({ name: "", code: "" })
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = Boolean(id)

  // Prefill form if editing
  useEffect(() => {
    const fetchClass = async () => {
      if (isEdit) {
        try {
          const data = await classService.getClassById(id)
          setCls({ name: data.name || "", code: data.code || "" })
        } catch (error) {
          alert("Class not found!")
          navigate("/classes")
        }
      }
    }
    fetchClass()
  }, [id, isEdit, navigate])

  const handleChange = (e) => {
    setCls({ ...cls, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isEdit) {
        await classService.updateClass(id, cls)
        alert("Class updated successfully!")
      } else {
        await classService.createClass(cls)
        alert("Class added successfully!")
      }
      navigate("/classes")
    } catch (error) {
      console.error("Error saving class:", error)
      alert("Failed to save class. Check console for error.")
    }
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f0f2f5", py: 5 }}>
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            {isEdit ? "Edit Class" : "Add Class"}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              label="Class Name"
              name="name"
              placeholder="Enter class name"
              value={cls.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Class Code"
              name="code"
              placeholder="Enter class code"
              value={cls.code}
              onChange={handleChange}
              required
              fullWidth
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                {isEdit ? "Update" : "Add"} Class
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/classes")}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ClassForm
