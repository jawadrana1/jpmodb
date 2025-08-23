"use client"

import { useState, useEffect } from "react"
import { Box, Container, Card, CardContent, Typography, Alert, Grid } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import Button from "../../components/common/Button"
import { studentService } from "../../services/studentService"

const StudentTransfer = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [student, setStudent] = useState(null)
  const [transferData, setTransferData] = useState({
    transferDate: new Date().toISOString().split("T")[0],
    transferTo: "",
    transferReason: "",
    newSchoolName: "",
    newSchoolAddress: "",
    transferCertificateIssued: false,
    remarks: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const transferReasonOptions = [
    { value: "family_relocation", label: "Family Relocation" },
    { value: "better_opportunity", label: "Better Educational Opportunity" },
    { value: "financial_reasons", label: "Financial Reasons" },
    { value: "disciplinary", label: "Disciplinary Issues" },
    { value: "medical_reasons", label: "Medical Reasons" },
    { value: "other", label: "Other" },
  ]

  useEffect(() => {
    loadStudent()
  }, [id])

  const loadStudent = async () => {
    try {
      setLoading(true)
      const studentData = await studentService.getStudentById(id)
      setStudent(studentData)
    } catch (error) {
      setError("Error loading student data")
      console.error("Error loading student:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field) => (event) => {
    setTransferData((prev) => ({
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

      // Update student status to transferred
      await studentService.transferStudent(id, {
        ...transferData,
        status: "transferred",
        transferredAt: new Date().toISOString(),
      })

      setSuccess("Student transferred successfully!")

      setTimeout(() => {
        navigate("/students")
      }, 2000)
    } catch (error) {
      setError("Error transferring student: " + error.message)
      console.error("Error transferring student:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!student) {
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
            <Typography>Loading student data...</Typography>
          </Container>
        </Box>
      </Box>
    )
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
            title="Transfer Student"
            subtitle={`Transfer ${student.name} to another school`}
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Students", path: "/students" },
              { label: "Transfer Student" },
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

          {/* Student Information Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Roll Number
                  </Typography>
                  <Typography variant="body1">{student.rollNumber}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Name
                  </Typography>
                  <Typography variant="body1">{student.name}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Class
                  </Typography>
                  <Typography variant="body1">
                    {student.class} - {student.section}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Father's Name
                  </Typography>
                  <Typography variant="body1">{student.fatherName}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Transfer Form */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Transfer Details
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Transfer Date"
                      type="date"
                      value={transferData.transferDate}
                      onChange={handleChange("transferDate")}
                      required
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Select
                      label="Transfer Reason"
                      value={transferData.transferReason}
                      onChange={handleChange("transferReason")}
                      options={transferReasonOptions}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="New School Name"
                      value={transferData.newSchoolName}
                      onChange={handleChange("newSchoolName")}
                      required
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="New School Address"
                      value={transferData.newSchoolAddress}
                      onChange={handleChange("newSchoolAddress")}
                      multiline
                      rows={3}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Input
                      label="Remarks"
                      value={transferData.remarks}
                      onChange={handleChange("remarks")}
                      multiline
                      rows={3}
                      fullWidth
                      placeholder="Additional notes about the transfer"
                    />
                  </Grid>

                  {/* Form Actions */}
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 3 }}>
                      <Button variant="outlined" onClick={() => navigate("/students")} disabled={loading}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained" color="warning" disabled={loading}>
                        {loading ? "Processing Transfer..." : "Transfer Student"}
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

export default StudentTransfer
