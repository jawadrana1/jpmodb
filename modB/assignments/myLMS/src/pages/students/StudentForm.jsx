"use client"

import { useState, useEffect } from "react"
import { Box, Container, Grid, Card, CardContent, Typography, Alert } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import Button from "../../components/common/Button"
import { studentService } from "../services/studentService"

const StudentForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    class: "",
    section: "",
    admissionDate: "",
    email: "",
    phone: "",
    address: "",
    emergencyContact: "",
    bloodGroup: "",
    medicalConditions: "",
    previousSchool: "",
    status: "active",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]

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

  const sectionOptions = [
    { value: "A", label: "Section A" },
    { value: "B", label: "Section B" },
    { value: "C", label: "Section C" },
    { value: "D", label: "Section D" },
  ]

  const bloodGroupOptions = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ]

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "transferred", label: "Transferred" },
    { value: "graduated", label: "Graduated" },
  ]

  useEffect(() => {
    if (isEdit) {
      loadStudent()
    }
  }, [id, isEdit])

  const loadStudent = async () => {
    try {
      setLoading(true)
      const student = await studentService.getStudentById(id)
      setFormData(student)
    } catch (error) {
      setError("Error loading student data")
      console.error("Error loading student:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      setLoading(true)

      if (isEdit) {
        await studentService.updateStudent(id, formData)
        setSuccess("Student updated successfully!")
      } else {
        await studentService.createStudent(formData)
        setSuccess("Student created successfully!")
      }

      setTimeout(() => {
        navigate("/students")
      }, 2000)
    } catch (error) {
      setError("Error saving student: " + error.message)
      console.error("Error saving student:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          mt: "64px",
        }}
      >
        <Container maxWidth="lg">
          <PageHeader
            title={isEdit ? "Edit Student" : "Add New Student"}
            subtitle={isEdit ? "Update student information" : "Enter student details"}
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Students", path: "/students" },
              { label: isEdit ? "Edit Student" : "Add Student" },
            ]}
          />

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* Basic Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Basic Information
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Roll Number"
                      value={formData.rollNumber}
                      onChange={handleChange("rollNumber")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Student Name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Father's Name"
                      value={formData.fatherName}
                      onChange={handleChange("fatherName")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Mother's Name"
                      value={formData.motherName}
                      onChange={handleChange("motherName")}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Input
                      label="Date of Birth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange("dateOfBirth")}
                      required
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Select
                      label="Gender"
                      value={formData.gender}
                      onChange={handleChange("gender")}
                      options={genderOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Select
                      label="Blood Group"
                      value={formData.bloodGroup}
                      onChange={handleChange("bloodGroup")}
                      options={bloodGroupOptions}
                      fullWidth
                    />
                  </Grid>

                  {/* Academic Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Academic Information
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Select
                      label="Class"
                      value={formData.class}
                      onChange={handleChange("class")}
                      options={classOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Select
                      label="Section"
                      value={formData.section}
                      onChange={handleChange("section")}
                      options={sectionOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Input
                      label="Admission Date"
                      type="date"
                      value={formData.admissionDate}
                      onChange={handleChange("admissionDate")}
                      required
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Previous School"
                      value={formData.previousSchool}
                      onChange={handleChange("previousSchool")}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Status"
                      value={formData.status}
                      onChange={handleChange("status")}
                      options={statusOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  {/* Contact Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Contact Information
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Emergency Contact"
                      value={formData.emergencyContact}
                      onChange={handleChange("emergencyContact")}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="Address"
                      value={formData.address}
                      onChange={handleChange("address")}
                      multiline
                      rows={3}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="Medical Conditions"
                      value={formData.medicalConditions}
                      onChange={handleChange("medicalConditions")}
                      multiline
                      rows={2}
                      fullWidth
                      placeholder="Any medical conditions or allergies"
                    />
                  </Grid>

                  {/* Form Actions */}
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 3 }}>
                      <Button variant="outlined" onClick={() => navigate("/students")} disabled={loading}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained" disabled={loading}>
                        {loading ? "Saving..." : isEdit ? "Update Student" : "Add Student"}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default StudentForm
