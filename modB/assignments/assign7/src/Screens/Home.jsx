import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Components/Table/Table";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box>
      <Button
        onClick={() => navigate("/createUser")}
        variant="contained"
        sx={{ marginY: 3, float: "right" }}
      >
        Create User
      </Button>
      <BasicTable userdata={userData} />
    </Box>
  );
};

export default Home;
