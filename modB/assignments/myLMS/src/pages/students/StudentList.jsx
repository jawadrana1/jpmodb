"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import DataGrid from "../../components/common/DataGrid"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import { studentService } from "../services/studentService"

const StudentList = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [deleteDialog, setDeleteDialog] = useState({ open: false, student: null })
  const navigate = useNavigate()

  const classOptions = [
    { value: "", label: "All Classes" },
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
    loadStudents()
  }, [])

  const loadStudents = async () => {
    try {
      setLoading(true)
      const studentsData = await studentService.getAllStudents()
      setStudents(studentsData)
    } catch (error) {
      console.error("Error loading students:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await studentService.deleteStudent(deleteDialog.student.id)
      setDeleteDialog({ open: false, student: null })
      loadStudents()
    } catch (error) {
      console.error("Error deleting student:", error)
    }
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = !classFilter || student.class === classFilter
    return matchesSearch && matchesClass
  })

  const columns = [
    { field: "rollNumber", headerName: "Roll Number", width: 130 },
    { field: "name", headerName: "Student Name", width: 200 },
    { field: "class", headerName: "Class", width: 120 },
    { field: "section", headerName: "Section", width: 100 },
    { field: "fatherName", headerName: "Father Name", width: 180 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip label={params.value} color={params.value === "active" ? "success" : "default"} size="small" />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/students/edit/${params.row.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => setDeleteDialog({ open: true, student: params.row })}
          >
            Delete
          </Button>
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
            title="Students"
            subtitle="Manage student records and information"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Students" }]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/students/add")}>
                Add Student
              </Button>
            }
          />

          {/* Filters */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Input
              label="Search Students"
              placeholder="Search by name, roll number, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 300 }}
            />
            <Select
              label="Filter by Class"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              options={classOptions}
              sx={{ minWidth: 200 }}
            />
          </Box>

          <DataGrid rows={filteredStudents} columns={columns} loading={loading} pageSize={25} checkboxSelection />
        </Container>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, student: null })}>
          <DialogTitle>Delete Student</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {deleteDialog.student?.name}? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog({ open: false, student: null })}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default StudentList
