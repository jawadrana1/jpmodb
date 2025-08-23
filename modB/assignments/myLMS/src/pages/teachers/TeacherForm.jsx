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
import { teacherService } from "../services/teacherService"

const TeacherForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    cnic: "",
    qualification: "",
    experience: "",
    department: "",
    designation: "",
    joiningDate: "",
    salary: "",
    email: "",
    phone: "",
    address: "",
    emergencyContact: "",
    bloodGroup: "",
    maritalStatus: "",
    subjects: [],
    status: "active",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]

  const departmentOptions = [
    { value: "mathematics", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "english", label: "English" },
    { value: "urdu", label: "Urdu" },
    { value: "islamiat", label: "Islamiat" },
    { value: "social_studies", label: "Social Studies" },
    { value: "computer_science", label: "Computer Science" },
    { value: "arts", label: "Arts" },
    { value: "physical_education", label: "Physical Education" },
  ]

  const designationOptions = [
    { value: "principal", label: "Principal" },
    { value: "vice_principal", label: "Vice Principal" },
    { value: "head_teacher", label: "Head Teacher" },
    { value: "senior_teacher", label: "Senior Teacher" },
    { value: "teacher", label: "Teacher" },
    { value: "assistant_teacher", label: "Assistant Teacher" },
    { value: "substitute_teacher", label: "Substitute Teacher" },
  ]

  const qualificationOptions = [
    { value: "matric", label: "Matric" },
    { value: "intermediate", label: "Intermediate" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "mphil", label: "M.Phil" },
    { value: "phd", label: "PhD" },
    { value: "bed", label: "B.Ed" },
    { value: "med", label: "M.Ed" },
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

  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ]

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "on_leave", label: "On Leave" },
    { value: "terminated", label: "Terminated" },
  ]

  useEffect(() => {
    if (isEdit) {
      loadTeacher()
    }
  }, [id, isEdit])

  const loadTeacher = async () => {
    try {
      setLoading(true)
      const teacher = await teacherService.getTeacherById(id)
      setFormData(teacher)
    } catch (error) {
      setError("Error loading teacher data")
      console.error("Error loading teacher:", error)
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
        await teacherService.updateTeacher(id, formData)
        setSuccess("Teacher updated successfully!")
      } else {
        await teacherService.createTeacher(formData)
        setSuccess("Teacher created successfully!")
      }

      setTimeout(() => {
        navigate("/teachers")
      }, 2000)
    } catch (error) {
      setError("Error saving teacher: " + error.message)
      console.error("Error saving teacher:", error)
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
            title={isEdit ? "Edit Teacher" : "Add New Teacher"}
            subtitle={isEdit ? "Update teacher information" : "Enter teacher details"}
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Teachers", path: "/teachers" },
              { label: isEdit ? "Edit Teacher" : "Add Teacher" },
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
                      label="Employee ID"
                      value={formData.employeeId}
                      onChange={handleChange("employeeId")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Teacher Name"
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
                      label="CNIC"
                      value={formData.cnic}
                      onChange={handleChange("cnic")}
                      required
                      fullWidth
                      placeholder="12345-1234567-1"
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

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Marital Status"
                      value={formData.maritalStatus}
                      onChange={handleChange("maritalStatus")}
                      options={maritalStatusOptions}
                      fullWidth
                    />
                  </Grid>

                  {/* Professional Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Professional Information
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Department"
                      value={formData.department}
                      onChange={handleChange("department")}
                      options={departmentOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Designation"
                      value={formData.designation}
                      onChange={handleChange("designation")}
                      options={designationOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Qualification"
                      value={formData.qualification}
                      onChange={handleChange("qualification")}
                      options={qualificationOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Experience (Years)"
                      type="number"
                      value={formData.experience}
                      onChange={handleChange("experience")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Joining Date"
                      type="date"
                      value={formData.joiningDate}
                      onChange={handleChange("joiningDate")}
                      required
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      label="Salary"
                      type="number"
                      value={formData.salary}
                      onChange={handleChange("salary")}
                      required
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
                      required
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

                  {/* Form Actions */}
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 3 }}>
                      <Button variant="outlined" onClick={() => navigate("/teachers")} disabled={loading}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained" disabled={loading}>
                        {loading ? "Saving..." : isEdit ? "Update Teacher" : "Add Teacher"}
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

export default TeacherForm
