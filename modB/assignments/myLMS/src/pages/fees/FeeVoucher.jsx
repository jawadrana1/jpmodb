"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import { Print as PrintIcon } from "@mui/icons-material"
import { useParams } from "react-router-dom"
import Header from "../../components/layout/Header"
import Sidebar from "../../components/layout/Sidebar"
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button"
import { feeService } from "../../services/feeService"

const FeeVoucher = () => {
  const { id } = useParams()
  const [voucherData, setVoucherData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      loadVoucherData()
    }
  }, [id])

  const loadVoucherData = async () => {
    try {
      setLoading(true)
      const data = await feeService.getFeeSubmissionById(id)
      setVoucherData(data)
    } catch (error) {
      console.error("Error loading voucher data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            mt: "64px",
          }}
        >
          <Container maxWidth="lg">
            <Typography>Loading voucher data...</Typography>
          </Container>
        </Box>
      </Box>
    )
  }

  if (!voucherData) {
    return (
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            mt: "64px",
          }}
        >
          <Container maxWidth="lg">
            <Typography>Voucher not found</Typography>
          </Container>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          mt: "64px",
        }}
      >
        <Container maxWidth="lg">
          <PageHeader
            title="Fee Voucher"
            subtitle="Payment receipt and voucher"
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Fee Submission", path: "/fees/submission" },
              { label: "Voucher" },
            ]}
            actions={
              <Button variant="contained" startIcon={<PrintIcon />} onClick={handlePrint}>
                Print Voucher
              </Button>
            }
          />

          {/* Voucher Content */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              {/* Header */}
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  School Management System
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Fee Payment Voucher
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Receipt No: {voucherData.id}
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Student Information */}
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Student Information
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Roll Number:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{voucherData.studentRollNumber}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Name:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{voucherData.studentName}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Class:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{voucherData.studentClass}</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Payment Information
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Payment Date:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2">{voucherData.paymentDate}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Payment Method:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                        {voucherData.paymentMethod?.replace("_", " ")}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="text.secondary">
                        Status:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2" sx={{ textTransform: "capitalize", color: "success.main" }}>
                        {voucherData.status}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ mb: 3 }} />

              {/* Payment Details */}
              <Typography variant="h6" gutterBottom>
                Payment Details
              </Typography>
              <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Fee Amount</TableCell>
                      <TableCell align="right">Rs. {voucherData.amountPaid}</TableCell>
                    </TableRow>
                    {voucherData.discount > 0 && (
                      <TableRow>
                        <TableCell>Discount</TableCell>
                        <TableCell align="right">- Rs. {voucherData.discount}</TableCell>
                      </TableRow>
                    )}
                    {voucherData.lateFee > 0 && (
                      <TableRow>
                        <TableCell>Late Fee</TableCell>
                        <TableCell align="right">Rs. {voucherData.lateFee}</TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell>
                        <strong>Total Amount Paid</strong>
                      </TableCell>
                      <TableCell align="right">
                        <strong>Rs. {voucherData.totalAmount}</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Remarks */}
              {voucherData.remarks && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Remarks
                  </Typography>
                  <Typography variant="body2">{voucherData.remarks}</Typography>
                </Box>
              )}

              <Divider sx={{ mb: 3 }} />

              {/* Footer */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Generated on: {new Date().toLocaleDateString()}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body2" color="text.secondary">
                    Authorized Signature
                  </Typography>
                  <Box sx={{ mt: 2, borderBottom: "1px solid #ccc", width: "200px" }}></Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default FeeVoucher
