"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Alert,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import Header from "../../Components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import Button from "../../components/common/Button"
import { feeService } from "../services/feeService"
import { studentService } from "../services/studentService"

const FeeSubmission = () => {
  const navigate = useNavigate()

  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState("")
  const [studentData, setStudentData] = useState(null)
  const [feeStructure, setFeeStructure] = useState(null)
  const [paymentData, setPaymentData] = useState({
    paymentDate: new Date().toISOString().split("T")[0],
    paymentMethod: "",
    amountPaid: "",
    discount: "",
    lateFee: "",
    remarks: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const paymentMethodOptions = [
    { value: "cash", label: "Cash" },
    { value: "bank_transfer", label: "Bank Transfer" },
    { value: "cheque", label: "Cheque" },
    { value: "online", label: "Online Payment" },
  ]

  useEffect(() => {
    loadStudents()
  }, [])

  useEffect(() => {
    if (selectedStudent) {
      loadStudentData()
    }
  }, [selectedStudent])

  const loadStudents = async () => {
    try {
      const studentsData = await studentService.getAllStudents()
      const activeStudents = studentsData.filter((student) => student.status === "active")
      setStudents(
        activeStudents.map((student) => ({
          value: student.id,
          label: `${student.rollNumber} - ${student.name}`,
        })),
      )
    } catch (error) {
      setError("Error loading students")
      console.error("Error loading students:", error)
    }
  }

  const loadStudentData = async () => {
    try {
      setLoading(true)
      const student = await studentService.getStudentById(selectedStudent)
      setStudentData(student)

      // Load fee structure for student's class
      const feeStructures = await feeService.getFeeStructureByClass(student.class)
      if (feeStructures.length > 0) {
        setFeeStructure(feeStructures[0])
        setPaymentData((prev) => ({
          ...prev,
          amountPaid: feeStructures[0].totalFee,
        }))
      }
    } catch (error) {
      setError("Error loading student data")
      console.error("Error loading student data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field) => (event) => {
    setPaymentData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!selectedStudent || !paymentData.paymentMethod || !paymentData.amountPaid) {
      setError("Please fill all required fields")
      return
    }

    try {
      setLoading(true)

      const submissionData = {
        studentId: selectedStudent,
        studentName: studentData.name,
        studentRollNumber: studentData.rollNumber,
        studentClass: studentData.class,
        feeStructureId: feeStructure?.id,
        ...paymentData,
        totalAmount: Number.parseFloat(paymentData.amountPaid) + Number.parseFloat(paymentData.lateFee || 0),
        status: "paid",
      }

      const submissionId = await feeService.createFeeSubmission(submissionData)
      setSuccess("Fee payment recorded successfully!")

      // Generate voucher
      setTimeout(() => {
        navigate(`/fees/voucher/${submissionId}`)
      }, 2000)
    } catch (error) {
      setError("Error recording payment: " + error.message)
      console.error("Error recording payment:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateTotal = () => {
    const amount = Number.parseFloat(paymentData.amountPaid || 0)
    const discount = Number.parseFloat(paymentData.discount || 0)
    const lateFee = Number.parseFloat(paymentData.lateFee || 0)
    return amount - discount + lateFee
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
            title="Fee Submission"
            subtitle="Record student fee payments"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Fee Submission" }]}
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

          <Grid container spacing={3}>
            {/* Student Selection */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Select Student
                  </Typography>
                  <Select
                    label="Student"
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    options={students}
                    required
                    fullWidth
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Student Information */}
            {studentData && (
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Student Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Roll Number
                        </Typography>
                        <Typography variant="body1">{studentData.rollNumber}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Name
                        </Typography>
                        <Typography variant="body1">{studentData.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Class
                        </Typography>
                        <Typography variant="body1">
                          {studentData.class} - {studentData.section}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Father's Name
                        </Typography>
                        <Typography variant="body1">{studentData.fatherName}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )}

            {/* Fee Structure */}
            {feeStructure && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Fee Structure
                    </Typography>
                    <TableContainer component={Paper} variant="outlined">
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Fee Type</TableCell>
                            <TableCell align="right">Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Tuition Fee</TableCell>
                            <TableCell align="right">Rs. {feeStructure.tuitionFee}</TableCell>
                          </TableRow>
                          {feeStructure.admissionFee > 0 && (
                            <TableRow>
                              <TableCell>Admission Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.admissionFee}</TableCell>
                            </TableRow>
                          )}
                          {feeStructure.examFee > 0 && (
                            <TableRow>
                              <TableCell>Exam Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.examFee}</TableCell>
                            </TableRow>
                          )}
                          {feeStructure.libraryFee > 0 && (
                            <TableRow>
                              <TableCell>Library Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.libraryFee}</TableCell>
                            </TableRow>
                          )}
                          {feeStructure.sportsFee > 0 && (
                            <TableRow>
                              <TableCell>Sports Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.sportsFee}</TableCell>
                            </TableRow>
                          )}
                          {feeStructure.transportFee > 0 && (
                            <TableRow>
                              <TableCell>Transport Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.transportFee}</TableCell>
                            </TableRow>
                          )}
                          {feeStructure.miscFee > 0 && (
                            <TableRow>
                              <TableCell>Miscellaneous Fee</TableCell>
                              <TableCell align="right">Rs. {feeStructure.miscFee}</TableCell>
                            </TableRow>
                          )}
                          <TableRow>
                            <TableCell>
                              <strong>Total Fee</strong>
                            </TableCell>
                            <TableCell align="right">
                              <strong>Rs. {feeStructure.totalFee}</strong>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            )}

            {/* Payment Form */}
            {studentData && feeStructure && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Payment Details
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <Input
                            label="Payment Date"
                            type="date"
                            value={paymentData.paymentDate}
                            onChange={handleChange("paymentDate")}
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Select
                            label="Payment Method"
                            value={paymentData.paymentMethod}
                            onChange={handleChange("paymentMethod")}
                            options={paymentMethodOptions}
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Input
                            label="Amount Paid"
                            type="number"
                            value={paymentData.amountPaid}
                            onChange={handleChange("amountPaid")}
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Input
                            label="Discount"
                            type="number"
                            value={paymentData.discount}
                            onChange={handleChange("discount")}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Input
                            label="Late Fee"
                            type="number"
                            value={paymentData.lateFee}
                            onChange={handleChange("lateFee")}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Input label="Total Amount" type="number" value={calculateTotal()} disabled fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                          <Input
                            label="Remarks"
                            value={paymentData.remarks}
                            onChange={handleChange("remarks")}
                            multiline
                            rows={3}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                            <Button variant="outlined" onClick={() => navigate("/fees/structure")}>
                              Cancel
                            </Button>
                            <Button type="submit" variant="contained" disabled={loading}>
                              {loading ? "Processing..." : "Submit Payment"}
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default FeeSubmission
