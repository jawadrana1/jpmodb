import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Components/Table/Table";
import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from "../Components/Navbar/Navbar";
import MediaCard from "../Components/CardsComp/CardsComp";


const Home = () => {
  const [userData, setUserData] = useState([]);
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

  return (<>
     
    <Box  sx={{ backgroundColor: "#DCDCDC", minHeight: "100vh" }}>
     <ButtonAppBar />
      <Container maxWidth="auto" sx={{ pt: 2 }}>
        
        

        <BasicTable userdata={userData} />
      </Container>
    </Box>
    </>
  );
};

export default Home;























