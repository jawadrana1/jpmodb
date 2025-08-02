import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let [createUserData, setCreateUserData] = useState({
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
        alert("create USER Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
        <Typography sx={{ marginBottom: 3 }} variant="h5">
          Create User
        </Typography>

        <TextField
          onChange={(e) =>
            setCreateUserData({ ...createUserData, name: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter name"
          fullWidth
        />
        <TextField
          onChange={(e) =>
            setCreateUserData({ ...createUserData, username: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Username"
          fullWidth
        />

        <TextField
          onChange={(e) =>
            setCreateUserData({ ...createUserData, email: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Email"
          fullWidth
        />

        <TextField
          onChange={(e) =>
            setCreateUserData({ ...createUserData, phone: e.target.value })
          }
          sx={{ marginBottom: 3 }}
          label="Enter Phone"
          fullWidth
        />

        <Button onClick={createUser} variant="contained">
          Create User
        </Button>
      </Paper>
    </form>
  );
};

export default CreateUser;
