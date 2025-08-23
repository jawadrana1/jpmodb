

// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebase";
// import {
//   Container,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Alert,
//   Paper,
// } from "@mui/material";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           p: 5,
//           borderRadius: 3,
//           width: "100%",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         <Typography
//           variant="h4"
//           mb={3}
//           textAlign="center"
//           sx={{ fontWeight: "bold", color: "#1976d2" }}
//         >
//           Login
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}

//         <form onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             required
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{
//               "& .MuiInputBase-root": {
//                 backgroundColor: "#fff",
//                 borderRadius: 1,
//               },
//             }}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             required
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={{
//               "& .MuiInputBase-root": {
//                 backgroundColor: "#fff",
//                 borderRadius: 1,
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             type="submit"
//             fullWidth
//             sx={{
//               mt: 3,
//               py: 1.5,
//               fontWeight: "bold",
//               backgroundColor: "#1976d2",
//               "&:hover": {
//                 backgroundColor: "#1565c0",
//               },
//             }}
//           >
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;



// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard after login
    } catch (error) {
      alert("Invalid email or password!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={6} sx={{ padding: 4, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>Login</Button>
          <Typography align="center" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;