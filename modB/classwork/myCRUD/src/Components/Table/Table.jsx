import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({ userdata }) {

  const navigate = useNavigate();

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then(() => {
        alert("user delete successfully..");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <TableContainer component={Paper} >
  <Table sx={{ minWidth: 650, backgroundColor: '	#7d7979ff' }} aria-label="simple table">
    <TableHead>
      <TableRow sx={{ backgroundColor: '#424242' }}>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>ID</strong></TableCell>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>Name</strong></TableCell>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>Username</strong></TableCell>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>Email</strong></TableCell>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>Phone</strong></TableCell>
        <TableCell sx={{ fontSize: '20px', color: '#fff' }} align="center"><strong>Actions</strong></TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {userdata &&
        userdata.map((e, i) => (
          <TableRow
            key={e.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              '&:hover': { backgroundColor: '#f1e5e5ff' }
            }}
          >
            <TableCell align="center">{e.id}</TableCell>
            <TableCell align="center">{e.name}</TableCell>
            <TableCell align="center">{e.username}</TableCell>
            <TableCell align="center">{e.email}</TableCell>
            <TableCell align="center">{e.phone}</TableCell>
            <TableCell align="right" sx={{ fontSize: 15 }}>
              <AutoStoriesOutlinedIcon
                onClick={() => navigate(`/readuser/${e.id}`)}
                sx={{ cursor: 'pointer', color: '#FFA500', marginRight: 2 }}
              />
              <EditIcon
                onClick={() => navigate(`/edituser/${e.id}`)}
                sx={{ cursor: 'pointer', color: 'green', marginRight: 2 }}
              />
              <DeleteIcon
                onClick={() => deleteUser(e.id)}
                sx={{ cursor: 'pointer', color: 'red' }}
              />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
</TableContainer>

  );
}
