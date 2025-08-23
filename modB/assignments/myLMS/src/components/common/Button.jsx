import React from "react"
import {  Routes, Route } from "react-router-dom"
import { AuthProvider } from "../../contexts/AuthContext"
import Login from "../../pages/Login"
import Dashboard from "../../pages/Dashboard"
import ProtectedRoute from "../../components/routes/ProtectedRoute"

function App() {
  return (
    
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    
  )
}

export default App


