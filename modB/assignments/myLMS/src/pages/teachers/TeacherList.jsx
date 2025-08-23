"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
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
import { teacherService } from "../services/teacherService"

const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [deleteDialog, setDeleteDialog] = useState({ open: false, teacher: null })
  const navigate = useNavigate()

  const departmentOptions = [
    { value: "", label: "All Departments" },
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

  useEffect(() => {
    loadTeachers()
  }, [])

  const loadTeachers = async () => {
    try {
      setLoading(true)
      const teachersData = await teacherService.getAllTeachers()
      setTeachers(teachersData)
    } catch (error) {
      console.error("Error loading teachers:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await teacherService.deleteTeacher(deleteDialog.teacher.id)
      setDeleteDialog({ open: false, teacher: null })
      loadTeachers()
    } catch (error) {
      console.error("Error deleting teacher:", error)
    }
  }

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = !departmentFilter || teacher.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  const columns = [
    { field: "employeeId", headerName: "Employee ID", width: 130 },
    { field: "name", headerName: "Teacher Name", width: 200 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "qualification", headerName: "Qualification", width: 150 },
    { field: "experience", headerName: "Experience", width: 120 },
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
            onClick={() => navigate(`/teachers/edit/${params.row.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => setDeleteDialog({ open: true, teacher: params.row })}
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
            title="Teachers"
            subtitle="Manage teacher records and assignments"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Teachers" }]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/teachers/add")}>
                Add Teacher
              </Button>
            }
          />

          {/* Filters */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Input
              label="Search Teachers"
              placeholder="Search by name, employee ID, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 300 }}
            />
            <Select
              label="Filter by Department"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              options={departmentOptions}
              sx={{ minWidth: 200 }}
            />
          </Box>

          <DataGrid rows={filteredTeachers} columns={columns} loading={loading} pageSize={25} checkboxSelection />
        </Container>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, teacher: null })}>
          <DialogTitle>Delete Teacher</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {deleteDialog.teacher?.name}? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog({ open: false, teacher: null })}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default TeacherList
