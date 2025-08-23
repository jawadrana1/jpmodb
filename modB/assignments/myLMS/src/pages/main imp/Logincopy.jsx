"use client"

import { useState } from "react"
import { Container, Paper, Typography, Box, Alert, CircularProgress } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import Input from "../components/common/Input"
import Button from "../components/common/Button"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    try {
      setError("")
      setLoading(true)
      await login(email, password)
    } catch (error) {
      setError("Failed to log in: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography component="h1" variant="h4" gutterBottom>
              School Management System
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Sign in to your account
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Login
