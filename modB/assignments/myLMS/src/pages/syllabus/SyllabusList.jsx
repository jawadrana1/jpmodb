

// src/pages/syllabus/SyllabusList.jsx
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Container, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import DataGrid from "../../components/common/DataGrid"
import { syllabusService } from "../services/syllabusService"

const SyllabusList = () => {
  const [syllabusList, setSyllabusList] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteDialog, setDeleteDialog] = useState({ open: false, syllabus: null })
  const navigate = useNavigate()

  useEffect(() => { loadSyllabus() }, [])

  const loadSyllabus = async () => {
    try {
      setLoading(true)
      const data = await syllabusService.getAllSyllabus()
      setSyllabusList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await syllabusService.deleteSyllabus(deleteDialog.syllabus.id)
      setDeleteDialog({ open: false, syllabus: null })
      loadSyllabus()
    } catch (error) { console.error(error) }
  }

  const columns = [
    { field: "class", headerName: "Class", width: 150 },
    { field: "subject", headerName: "Subject", width: 150 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" onClick={() => navigate(`/syllabus/edit/${params.row.id}`)} title="Edit"><EditIcon /></IconButton>
          <IconButton size="small" color="error" onClick={() => setDeleteDialog({ open: true, syllabus: params.row })} title="Delete"><DeleteIcon /></IconButton>
        </Box>
      ),
    }
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="lg">
          <PageHeader
            title="Syllabus"
            subtitle="Manage all syllabus"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Syllabus" }]}
            actions={<Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/syllabus/add")}>Add Syllabus</Button>}
          />

          <Card>
            <CardContent>
              <DataGrid rows={syllabusList} columns={columns} loading={loading} pageSize={25} checkboxSelection />
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Delete Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, syllabus: null })}>
        <DialogTitle>Delete Syllabus</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {deleteDialog.syllabus?.subject} for {deleteDialog.syllabus?.class}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, syllabus: null })}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default SyllabusList
