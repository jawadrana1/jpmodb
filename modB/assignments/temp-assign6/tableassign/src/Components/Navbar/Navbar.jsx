import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manage Employees
          </Typography>

          {/* Delete Button (Red) */}
          <Button
            startIcon={<DeleteIcon />}
            sx={{
              color: 'white',
              backgroundColor: 'red',
              '&:hover': {
                backgroundColor: 'darkred',
              },
              mr: 1, // margin right to separate buttons
            }}
          >
            Delete
          </Button>

          {/* Add New Employee Button (Green) */}
          <Button
            startIcon={<AddIcon />}
            sx={{
              color: 'white',
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
            }}
          >
            Add New
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}