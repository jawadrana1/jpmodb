"use client"

import React from "react"
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from "@mui/material"
import { Menu as MenuIcon, AccountCircle, Logout } from "@mui/icons-material"
import { useAuth } from "../../contexts/AuthContext"

const Header = ({ onMenuClick }) => {
  const { user, logout, userRole } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    try {
      await logout()
      handleClose()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={onMenuClick} edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          School Management System
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
            {userRole}
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircle sx={{ mr: 1 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Logout sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
