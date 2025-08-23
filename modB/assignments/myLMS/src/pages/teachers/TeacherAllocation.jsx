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
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Select from "../../components/common/Select"
import Button from "../../components/common/Button"
import { teacherService } from "../../services/teacherService"

const TeacherAllocation = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [teacher, setTeacher] = useState(null)
  const [allocations, setAllocations] = useState([])
  const [allocationDialog, setAllocationDialog] = useState(false)
  const [newAllocation, setNewAllocation] = useState({
    subject: "",
    class: "",
    section: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const subjectOptions = [
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

  const sectionOptions = [
    { value: "A", label: "Section A" },
    { value: "B", label: "Section B" },
    { value: "C", label: "Section C" },
    { value: "D", label: "Section D" },
  ]

  useEffect(() => {
    loadTeacher()
    loadAllocations()
  }, [id])

  const loadTeacher = async () => {
    try {
      const teacherData = await teacherService.getTeacherById(id)
      setTeacher(teacherData)
    } catch (error) {
      setError("Error loading teacher data")
      console.error("Error loading teacher:", error)
    }
  }

  const loadAllocations = async () => {
    try {
      const allocationsData = await teacherService.getTeacherAllocations(id)
      setAllocations(allocationsData)
    } catch (error) {
      console.error("Error loading allocations:", error)
    }
  }

  const handleAddAllocation = async () => {
    if (!newAllocation.subject || !newAllocation.class || !newAllocation.section) {
      setError("Please fill all fields")
      return
    }

    try {
      setLoading(true)
      await teacherService.addTeacherAllocation(id, newAllocation)
      setSuccess("Allocation added successfully!")
      setAllocationDialog(false)
      setNewAllocation({ subject: "", class: "", section: "" })
      loadAllocations()
    } catch (error) {
      setError("Error adding allocation: " + error.message)
      console.error("Error adding allocation:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveAllocation = async (allocationId) => {
    try {
      await teacherService.removeTeacherAllocation(id, allocationId)
      setSuccess("Allocation removed successfully!")
      loadAllocations()
    } catch (error) {
      setError("Error removing allocation: " + error.message)
      console.error("Error removing allocation:", error)
    }
  }

  const handleChange = (field) => (event) => {
    setNewAllocation((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  if (!teacher) {
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
            <Typography>Loading teacher data...</Typography>
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
            title="Teacher Allocation"
            subtitle={`Manage subject and class allocations for ${teacher.name}`}
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Teachers", path: "/teachers" },
              { label: "Teacher Allocation" },
            ]}
            actions={
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => setAllocationDialog(true)}>
                Add Allocation
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

          {/* Teacher Information Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Teacher Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Employee ID
                  </Typography>
                  <Typography variant="body1">{teacher.employeeId}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Name
                  </Typography>
                  <Typography variant="body1">{teacher.name}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Department
                  </Typography>
                  <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                    {teacher.department?.replace("_", " ")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Designation
                  </Typography>
                  <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                    {teacher.designation?.replace("_", " ")}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Current Allocations */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Allocations
              </Typography>

              {allocations.length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ py: 3, textAlign: "center" }}>
                  No allocations found. Click "Add Allocation" to assign subjects and classes.
                </Typography>
              ) : (
                <List>
                  {allocations.map((allocation, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Chip label={allocation.subject} color="primary" size="small" />
                            <Chip
                              label={`${allocation.class} - ${allocation.section}`}
                              color="secondary"
                              size="small"
                            />
                          </Box>
                        }
                        secondary={`Subject: ${allocation.subject} | Class: ${allocation.class} | Section: ${allocation.section}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          color="error"
                          onClick={() => handleRemoveAllocation(allocation.id)}
                          title="Remove Allocation"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Add Allocation Dialog */}
      <Dialog open={allocationDialog} onClose={() => setAllocationDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Allocation</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Select
                label="Subject"
                value={newAllocation.subject}
                onChange={handleChange("subject")}
                options={subjectOptions}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                label="Class"
                value={newAllocation.class}
                onChange={handleChange("class")}
                options={classOptions}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                label="Section"
                value={newAllocation.section}
                onChange={handleChange("section")}
                options={sectionOptions}
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAllocationDialog(false)}>Cancel</Button>
          <Button onClick={handleAddAllocation} variant="contained" disabled={loading}>
            {loading ? "Adding..." : "Add Allocation"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default TeacherAllocation
