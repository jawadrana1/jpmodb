"use client"

import { useState, useEffect } from "react"
import { Box, Container, Chip, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import DataGrid from "../../components/common/DataGrid"
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Select from "../../components/common/Select"
import { examService } from "../services/examService"

const ExamList = () => {
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [deleteDialog, setDeleteDialog] = useState({ open: false, exam: null })
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
    loadExams()
  }, [])

  const loadExams = async () => {
    try {
      setLoading(true)
      const data = await examService.getAllExams()
      setExams(data)
    } catch (error) {
      console.error("Error loading exams:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await examService.deleteExam(deleteDialog.exam.id)
      setDeleteDialog({ open: false, exam: null })
      loadExams()
    } catch (error) {
      console.error("Error deleting exam:", error)
    }
  }

  const filteredExams = exams.filter(
    (exam) =>
      exam.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!classFilter || exam.class === classFilter)
  )

  const columns = [
    { field: "name", headerName: "Exam Name", width: 200 },
    { field: "code", headerName: "Exam Code", width: 150 },
    { field: "class", headerName: "Class", width: 120 },
    { field: "date", headerName: "Exam Date", width: 130 },
    { field: "description", headerName: "Description", width: 250 },
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
            onClick={() => navigate(`/exams/edit/${params.row.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => setDeleteDialog({ open: true, exam: params.row })}
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

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="xl">
          <PageHeader
            title="Exams"
            subtitle="Manage exam records"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Exams" }]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/exams/add")}>
                Add Exam
              </Button>
            }
          />

          {/* Filters */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Input
              label="Search Exams"
              placeholder="Search by exam name"
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

          <DataGrid rows={filteredExams} columns={columns} loading={loading} pageSize={25} checkboxSelection />
        </Container>

        {/* Delete Dialog */}
        <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, exam: null })}>
          <DialogTitle>Delete Exam</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {deleteDialog.exam?.name}? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog({ open: false, exam: null })}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default ExamList
