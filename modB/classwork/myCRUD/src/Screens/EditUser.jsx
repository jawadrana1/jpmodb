// import React from 'react'
// import { Button, Paper, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// const EditUser = () => {
//     const { id } = useParams();
//   const [singleUserData, setSingleUserData] = useState({});

//   const navigate = useNavigate();

//   console.log(id);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/users/${id}`)
//       .then((response) => {
//         setSingleUserData(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const editUser = () => {
//     axios
//       .put(`http://localhost:3000/users/${id}`, singleUserData)
//       .then(() => {
//         alert("edit user successfully...");
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (

   
//      <form>
//       <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
//         <Typography sx={{ marginBottom: 3 }} variant="h5">
//           Edit User
//         </Typography>

//         <TextField
//           onChange={(e) =>
//             setSingleUserData({ ...singleUserData, name: e.target.value })
//           }
//           variant="standard"
//           value={singleUserData.name}
//           sx={{ marginBottom: 3 }}
//           label="Enter name"
//           fullWidth
//         />
//         <TextField
//           onChange={(e) =>
//             setSingleUserData({ ...singleUserData, username: e.target.value })
//           }
//           variant="standard"
//           value={singleUserData.username}
//           sx={{ marginBottom: 3 }}
//           label="Enter Username"
//           fullWidth
//         />

//         <TextField
//           onChange={(e) =>
//             setSingleUserData({ ...singleUserData, email: e.target.value })
//           }
//           variant="standard"
//           value={singleUserData.email}
//           sx={{ marginBottom: 3 }}
//           label="Enter Email"
//           fullWidth
//         />

//         <TextField
//           onChange={(e) =>
//             setSingleUserData({ ...singleUserData, phone: e.target.value })
//           }
//           variant="standard"
//           value={singleUserData.phone}
//           sx={{ marginBottom: 3 }}
//           label="Enter Phone"
//           fullWidth
//         />

//         <Button onClick={editUser} color="error" variant="contained">
//           Edit User
//         </Button>
//       </Paper>
//     </form>
//   )
// }

// export default EditUser;



import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleUserData, setSingleUserData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setSingleUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const editUser = () => {
    axios
      .put(`http://localhost:3000/users/${id}`, singleUserData)
      .then(() => {
        alert("User updated successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 450,
          borderRadius: 4,
          bgcolor: "#1e293b",
          color: "#f1f5f9",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          px: 3,
          py: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
             Edit User
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "#334155" }} />

          <TextField
            label="Name"
            fullWidth
            value={singleUserData.name || ""}
            onChange={(e) =>
              setSingleUserData({ ...singleUserData, name: e.target.value })
            }
            sx={textFieldStyles}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />

          <TextField
            label="Username"
            fullWidth
            value={singleUserData.username || ""}
            onChange={(e) =>
              setSingleUserData({ ...singleUserData, username: e.target.value })
            }
            sx={textFieldStyles}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />

          <TextField
            label="Email"
            fullWidth
            value={singleUserData.email || ""}
            onChange={(e) =>
              setSingleUserData({ ...singleUserData, email: e.target.value })
            }
            sx={textFieldStyles}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />

          <TextField
            label="Phone"
            fullWidth
            value={singleUserData.phone || ""}
            onChange={(e) =>
              setSingleUserData({ ...singleUserData, phone: e.target.value })
            }
            sx={textFieldStyles}
            InputLabelProps={{ sx: { color: "#94a3b8" } }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={editUser}
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#3b82f6",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#2563eb",
              },
            }}
          >
            Update User
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

const textFieldStyles = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#94a3b8" },
    "&:hover fieldset": { borderColor: "#60a5fa" },
    "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
    color: "#f8fafc",
  },
  input: { color: "#f8fafc" },
};

export default EditUser;
