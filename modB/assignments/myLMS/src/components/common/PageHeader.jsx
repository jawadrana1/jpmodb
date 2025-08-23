"use client"
import { Typography, Box, Breadcrumbs, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"

const PageHeader = ({ title, subtitle, breadcrumbs = [], actions }) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ mb: 3 }}>
      {breadcrumbs.length > 0 && (
        <Breadcrumbs sx={{ mb: 1 }}>
          {breadcrumbs.map((crumb, index) => (
            <Link
              key={index}
              color="inherit"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (crumb.path) navigate(crumb.path)
              }}
              sx={{ cursor: "pointer" }}
            >
              {crumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        {actions && <Box sx={{ display: "flex", gap: 1 }}>{actions}</Box>}
      </Box>
    </Box>
  )
}

export default PageHeader
