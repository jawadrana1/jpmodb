"use client"

import React, { useEffect, useState } from "react"
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase"

// Layout Components
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import DataGrid from "../../components/common/DataGrid"

const SubjectList = () => {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteDialog, setDeleteDialog] = useState({ open: false, subject: null })
  const navigate = useNavigate()

  const fetchSubjects = async () => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, "subjects"))
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setSubjects(data)
    } catch (error) {
      console.error("Error fetching subjects:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubjects()
  }, [])

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "subjects", deleteDialog.subject.id))
      setDeleteDialog({ open: false, subject: null })
      fetchSubjects()
    } catch (error) {
      console.error("Error deleting subject:", error)
    }
  }

  const columns = [
    { field: "name", headerName: "Subject Name", width: 200 },
    { field: "code", headerName: "Subject Code", width: 150 },
    { field: "department", headerName: "Department", width: 180 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/subjects/edit/${params.row.id}`)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => setDeleteDialog({ open: true, subject: params.row })}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` },
          mt: "64px",
          p: 3,
        }}
      >
        <Header />
        <Container maxWidth="xl">
          <PageHeader
            title="Subjects"
            subtitle="Manage subject records"
            breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Subjects" }]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/subjects/add")}>
                Add Subject
              </Button>
            }
          />

          <DataGrid rows={subjects} columns={columns} loading={loading} pageSize={25} checkboxSelection />
        </Container>

        <Dialog
          open={deleteDialog.open}
          onClose={() => setDeleteDialog({ open: false, subject: null })}
        >
          <DialogTitle>Delete Subject</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {deleteDialog.subject?.name}? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog({ open: false, subject: null })}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default SubjectList
