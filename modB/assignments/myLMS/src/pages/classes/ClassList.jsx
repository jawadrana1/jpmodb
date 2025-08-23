
"use client"

import { useState, useEffect } from "react"
import { Box, Container, Card, CardContent, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button"
import { classService } from "../services/classService"
import DataGrid from "../../components/common/DataGrid"

const ClassList = () => {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteDialog, setDeleteDialog] = useState({ open: false, cls: null })
  const navigate = useNavigate()

  useEffect(() => { loadClasses() }, [])

  const loadClasses = async () => {
    try {
      setLoading(true)
      const data = await classService.getAllClasses()
      setClasses(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      await classService.deleteClass(deleteDialog.cls.id)
      setDeleteDialog({ open: false, cls: null })
      loadClasses()
    } catch (error) {
      console.error(error)
    }
  }

  const columns = [
    { field: "name", headerName: "Class Name", width: 200 },
    { field: "code", headerName: "Class Code", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" onClick={() => navigate(`/classes/edit/${params.row.id}`)} title="Edit"><EditIcon /></IconButton>
          <IconButton size="small" color="error" onClick={() => setDeleteDialog({ open: true, cls: params.row })} title="Delete"><DeleteIcon /></IconButton>
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="lg">
          <PageHeader
            title="Classes"
            subtitle="Manage all classes"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Classes" }]}
            actions={<Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/classes/add")}>Add Class</Button>}
          />

          <Card>
            <CardContent>
              <DataGrid rows={classes} columns={columns} loading={loading} pageSize={25} checkboxSelection />
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Delete Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, cls: null })}>
        <DialogTitle>Delete Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {deleteDialog.cls?.name}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, cls: null })}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ClassList
