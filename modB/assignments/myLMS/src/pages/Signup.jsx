import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Sign-Up Successful!");
      navigate("/login"); // Redirect to login after sign-up
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={6} sx={{ padding: 4, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} margin="normal" required
            InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }} />
          <TextField fullWidth label="Confirm Password" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} margin="normal" required
            InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>Sign Up</Button>
          <Typography align="center" sx={{ mt: 2 }}>Already have an account? <a href="/login">Login</a></Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
