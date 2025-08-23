"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Alert,
} from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Visibility as ViewIcon } from "@mui/icons-material"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import DataGrid from "../../components/common/DataGrid"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import { feeService } from "../services/feeService"

const FeeStructure = () => {
  const [feeStructures, setFeeStructures] = useState([])
  const [loading, setLoading] = useState(true)
  const [feeDialog, setFeeDialog] = useState({ open: false, isEdit: false, data: null })
  const [deleteDialog, setDeleteDialog] = useState({ open: false, structure: null })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [formData, setFormData] = useState({
    class: "",
    academicYear: "",
    tuitionFee: "",
    admissionFee: "",
    examFee: "",
    libraryFee: "",
    sportsFee: "",
    transportFee: "",
    miscFee: "",
    totalFee: "",
    dueDate: "",
    lateFeePercentage: "",
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
    loadFeeStructures()
  }, [])

  useEffect(() => {
    // Calculate total fee when individual fees change
    const total =
      Number.parseFloat(formData.tuitionFee || 0) +
      Number.parseFloat(formData.admissionFee || 0) +
      Number.parseFloat(formData.examFee || 0) +
      Number.parseFloat(formData.libraryFee || 0) +
      Number.parseFloat(formData.sportsFee || 0) +
      Number.parseFloat(formData.transportFee || 0) +
      Number.parseFloat(formData.miscFee || 0)

    setFormData((prev) => ({
      ...prev,
      totalFee: total.toString(),
    }))
  }, [
    formData.tuitionFee,
    formData.admissionFee,
    formData.examFee,
    formData.libraryFee,
    formData.sportsFee,
    formData.transportFee,
    formData.miscFee,
  ])

  const loadFeeStructures = async () => {
    try {
      setLoading(true)
      const structures = await feeService.getAllFeeStructures()
      setFeeStructures(structures)
    } catch (error) {
      setError("Error loading fee structures")
      console.error("Error loading fee structures:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (isEdit = false, data = null) => {
    if (isEdit && data) {
      setFormData(data)
    } else {
      setFormData({
        class: "",
        academicYear: new Date().getFullYear().toString(),
        tuitionFee: "",
        admissionFee: "",
        examFee: "",
        libraryFee: "",
        sportsFee: "",
        transportFee: "",
        miscFee: "",
        totalFee: "",
        dueDate: "",
        lateFeePercentage: "5",
      })
    }
    setFeeDialog({ open: true, isEdit, data })
  }

  const handleCloseDialog = () => {
    setFeeDialog({ open: false, isEdit: false, data: null })
    setFormData({})
  }

  const handleSubmit = async () => {
    setError("")
    setSuccess("")

    try {
      setLoading(true)

      if (feeDialog.isEdit) {
        await feeService.updateFeeStructure(feeDialog.data.id, formData)
        setSuccess("Fee structure updated successfully!")
      } else {
        await feeService.createFeeStructure(formData)
        setSuccess("Fee structure created successfully!")
      }

      handleCloseDialog()
      loadFeeStructures()
    } catch (error) {
      setError("Error saving fee structure: " + error.message)
      console.error("Error saving fee structure:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await feeService.deleteFeeStructure(deleteDialog.structure.id)
      setSuccess("Fee structure deleted successfully!")
      setDeleteDialog({ open: false, structure: null })
      loadFeeStructures()
    } catch (error) {
      setError("Error deleting fee structure: " + error.message)
      console.error("Error deleting fee structure:", error)
    }
  }

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  const columns = [
    { field: "class", headerName: "Class", width: 120 },
    { field: "academicYear", headerName: "Academic Year", width: 130 },
    { field: "tuitionFee", headerName: "Tuition Fee", width: 120 },
    { field: "totalFee", headerName: "Total Fee", width: 120 },
    { field: "dueDate", headerName: "Due Date", width: 130 },
    { field: "lateFeePercentage", headerName: "Late Fee %", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" onClick={() => handleOpenDialog(false, params.row)} title="View">
            <ViewIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleOpenDialog(true, params.row)} title="Edit">
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => setDeleteDialog({ open: true, structure: params.row })}
            title="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ]

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
        <Container maxWidth="xl">
          <PageHeader
            title="Fee Structure"
            subtitle="Manage fee structures for different classes"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Fee Structure" }]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
                Add Fee Structure
              </Button>
            }
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

          {/* Data Grid */}
          <DataGrid rows={feeStructures} columns={columns} loading={loading} pageSize={25} />
        </Container>
      </Box>

      {/* Fee Structure Dialog */}
      <Dialog open={feeDialog.open} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{feeDialog.isEdit ? "Edit Fee Structure" : "Add Fee Structure"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Select
                label="Class"
                value={formData.class}
                onChange={handleChange("class")}
                options={classOptions}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Academic Year"
                value={formData.academicYear}
                onChange={handleChange("academicYear")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Tuition Fee"
                type="number"
                value={formData.tuitionFee}
                onChange={handleChange("tuitionFee")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Admission Fee"
                type="number"
                value={formData.admissionFee}
                onChange={handleChange("admissionFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Exam Fee"
                type="number"
                value={formData.examFee}
                onChange={handleChange("examFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Library Fee"
                type="number"
                value={formData.libraryFee}
                onChange={handleChange("libraryFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Sports Fee"
                type="number"
                value={formData.sportsFee}
                onChange={handleChange("sportsFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Transport Fee"
                type="number"
                value={formData.transportFee}
                onChange={handleChange("transportFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Miscellaneous Fee"
                type="number"
                value={formData.miscFee}
                onChange={handleChange("miscFee")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Total Fee"
                type="number"
                value={formData.totalFee}
                onChange={handleChange("totalFee")}
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Due Date"
                type="date"
                value={formData.dueDate}
                onChange={handleChange("dueDate")}
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Late Fee Percentage"
                type="number"
                value={formData.lateFeePercentage}
                onChange={handleChange("lateFeePercentage")}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" disabled={loading}>
            {loading ? "Saving..." : feeDialog.isEdit ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, structure: null })}>
        <DialogTitle>Delete Fee Structure</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the fee structure for {deleteDialog.structure?.class}? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, structure: null })}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default FeeStructure
