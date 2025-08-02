// src/pages/ReadUser.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Card, CardContent, Typography, Box, Button, CircularProgress
} from '@mui/material';

const ReadUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("User fetch error:", err));
  }, [id]);

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#111827">
        <CircularProgress sx={{ color: "#00e676" }} />
      </Box>
    );
  }

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
             User Profile
          </Typography>

          <Typography textAlign={"center"} variant="body1" sx={{ mb: 1 }}><strong>ID:</strong> {id}</Typography>
          <Typography textAlign={"center"}variant="body1" sx={{ mb: 1 }}><strong>Name:</strong> {user.name}</Typography>
          <Typography textAlign={"center"}variant="body1" sx={{ mb: 1 }}><strong>Username:</strong> {user.username}</Typography>
          <Typography textAlign={"center"}variant="body1" sx={{ mb: 1 }}><strong>Email:</strong> {user.email}</Typography>
          <Typography textAlign={"center"}variant="body1" sx={{ mb: 1 }}><strong>Phone:</strong> {user.phone}</Typography>

          {/* Optional: Address structured display */}
          {/* {user.address && (
            <Typography textAlign={"center"}variant="body1" sx={{ mt: 1 }}>
              <strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
            </Typography>
          )} */}

          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{
                backgroundColor: '#00c853',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  backgroundColor: '#00e676',
                }
              }}
            >
              ⬅ Back to List
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReadUser;


