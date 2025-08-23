import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

// MUI Imports
import { Box, Container, Typography, TextField, Button, Paper } from "@mui/material";

// Layout Components
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const drawerWidth = 240; // Sidebar width

const SubjectForm = () => {
  const [subject, setSubject] = useState({ name: "", code: "", department: "" });
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      const subjectRef = doc(db, "subjects", id);
      await updateDoc(subjectRef, subject);
    } else {
      await addDoc(collection(db, "subjects"), subject);
    }
    navigate("/subjects");
  };

  useEffect(() => {
    if (isEdit) {
      const fetchSubject = async () => {
        const docRef = doc(db, "subjects", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setSubject(docSnap.data());
      };
      fetchSubject();
    }
  }, [id, isEdit]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`, // Leave space for sidebar
          mt: "64px", // Height of Header
          p: 3,
        }}
      >
        <Header />
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              {isEdit ? "Edit Subject" : "Add Subject"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                label="Subject Name"
                name="name"
                value={subject.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Subject Code"
                name="code"
                value={subject.code}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Department"
                name="department"
                value={subject.department}
                onChange={handleChange}
                required
                fullWidth
              />

              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button variant="contained" color="primary" type="submit">
                  {isEdit ? "Update" : "Add"} Subject
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => navigate("/subjects")}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default SubjectForm;
