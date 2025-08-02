// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Paper, Typography, TextField, Button } from "@mui/material";

// const CreateUser = () => {
//   let [createUserData, setCreateUserData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//   });

//   const navigate = useNavigate();

//   const createUser = () => {
//     axios
//       .post("http://localhost:3000/users", createUserData)
//       .then(() => {
//         alert("User created successfully");
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <form>
//       <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
//         <Typography sx={{ marginBottom: 3 }} variant="h5">
//           Create User
//         </Typography>

//         <TextField
//           onChange={(e) =>
//             setCreateUserData({ ...createUserData, name: e.target.value })
//           }
//           sx={{ marginBottom: 3 }}
//           label="Enter name"
//           fullWidth
//         />
//         <TextField
//           onChange={(e) =>
//             setCreateUserData({ ...createUserData, username: e.target.value })
//           }
//           sx={{ marginBottom: 3 }}
//           label="Enter Username"
//           fullWidth
//         />
//         <TextField
//           onChange={(e) =>
//             setCreateUserData({ ...createUserData, email: e.target.value })
//           }
//           sx={{ marginBottom: 3 }}
//           label="Enter Email"
//           fullWidth
//         />
//         <TextField
//           onChange={(e) =>
//             setCreateUserData({ ...createUserData, phone: e.target.value })
//           }
//           sx={{ marginBottom: 3 }}
//           label="Enter Phone"
//           fullWidth
//         />

//         <Button onClick={createUser} variant="contained">
//           Create User
//         </Button>
//       </Paper>
//     </form>
//   );
// };

// export default CreateUser;


// src/pages/CreateUser.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent
} from "@mui/material";

const CreateUser = () => {
  const [createUserData, setCreateUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const createUser = () => {
    axios
      .post("http://localhost:3000/users", createUserData)
      .then(() => {
        alert("User created successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#0f172a"
      px={2}
    >
      <Card
        sx={{
          width: 500,
          bgcolor: '#1e293b',
          borderRadius: 4,
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          color: '#e2e8f0',
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: '28px',
              color: '#f8fafc',
              textAlign: 'center',
              mb: 3,
            }}
          >
            Create User
          </Typography>

          <TextField
            onChange={(e) =>
              setCreateUserData({ ...createUserData, name: e.target.value })
            }
            label="Enter name"
            variant="filled"
            fullWidth
            sx={{
              mb: 2,
              input: { color: '#f1f5f9' },
              label: { color: '#94a3b8' },
              backgroundColor: '#334155',
              borderRadius: 1,
            }}
          />

          <TextField
            onChange={(e) =>
              setCreateUserData({ ...createUserData, username: e.target.value })
            }
            label="Enter username"
            variant="filled"
            fullWidth
            sx={{
              mb: 2,
              input: { color: '#f1f5f9' },
              label: { color: '#94a3b8' },
              backgroundColor: '#334155',
              borderRadius: 1,
            }}
          />

          <TextField
            onChange={(e) =>
              setCreateUserData({ ...createUserData, email: e.target.value })
            }
            label="Enter email"
            variant="filled"
            fullWidth
            sx={{
              mb: 2,
              input: { color: '#f1f5f9' },
              label: { color: '#94a3b8' },
              backgroundColor: '#334155',
              borderRadius: 1,
            }}
          />

          <TextField
            onChange={(e) =>
              setCreateUserData({ ...createUserData, phone: e.target.value })
            }
            label="Enter phone"
            variant="filled"
            fullWidth
            sx={{
              mb: 3,
              input: { color: '#f1f5f9' },
              label: { color: '#94a3b8' },
              backgroundColor: '#334155',
              borderRadius: 1,
            }}
          />

          <Box textAlign="center">
            <Button
              onClick={createUser}
              variant="contained"
              sx={{
                backgroundColor: '#00c853',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  backgroundColor: '#00e676',
                }
              }}
            >
              Create
            </Button>

            <Button
              component={Link}
              to="/"
              sx={{
                color: '#00e676',
                ml: 2,
                textTransform: 'capitalize',
              }}
            >
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateUser;
