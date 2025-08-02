import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "rgb(37, 37, 73)" }}>
          <TableRow>
            <TableCell sx={{ color: "white", fontSize: 16 }}>ID</TableCell>
            <TableCell sx={{ color: "white", fontSize: 16 }}>Name</TableCell>
            <TableCell sx={{ color: "white", fontSize: 16 }} align="right">
              Username
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: 16 }} align="right">
              Email
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: 16 }} align="right">
              Phone
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: 16 }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata &&
            userdata.map((e, i) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ fontSize: 15 }} component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell sx={{ fontSize: 15 }} component="th" scope="row">
                  {e.name}
                </TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">
                  {e.username}
                </TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">
                  {e.email}
                </TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">
                  {e.phone}
                </TableCell>
                <TableCell sx={{ fontSize: 15 }} align="right">
                  <EditIcon
                    onClick={() => navigate(`/editUser/${e.id}`)}
                    sx={{ cursor: "pointer", color: "green", marginRight: 4 }}
                  />

                  <DeleteIcon
                    onClick={() => deleteUser(e.id)}
                    sx={{ cursor: "pointer", color: "red" }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
