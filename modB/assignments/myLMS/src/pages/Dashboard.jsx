// "use client"

// import React, { useState } from "react"
// import { Box, Grid, Card, CardContent, Typography, Container, Button } from "@mui/material"
// import { School as StudentIcon, Person as TeacherIcon, Class as ClassIcon, Assignment as ExamIcon } from "@mui/icons-material"
// import Header from "../components/layout/Header"
// import Sidebar from "../components/layout/Sidebar"
// import PageHeader from "../components/common/PageHeader"
// import { useAuth } from "../contexts/AuthContext"

// const Dashboard = () => {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const { logout } = useAuth()

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

//   const stats = [
//     { title: "Total Students", count: 1250, icon: <StudentIcon />, color: "#1976d2" },
//     { title: "Total Teachers", count: 85, icon: <TeacherIcon />, color: "#388e3c" },
//     { title: "Total Classes", count: 24, icon: <ClassIcon />, color: "#f57c00" },
//     { title: "Upcoming Exams", count: 8, icon: <ExamIcon />, color: "#d32f2f" },
//   ]

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Header onMenuClick={handleDrawerToggle} />
//       <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

//       <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//             <PageHeader title="Dashboard" subtitle="Welcome to School Management System" />
//             <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
//           </Box>

//           <Grid container spacing={3}>
//             {stats.map((stat, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Card sx={{ height: "100%" }}>
//                   <CardContent>
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                       <Box sx={{ p: 1, borderRadius: 1, backgroundColor: stat.color + "20", color: stat.color, mr: 2 }}>
//                         {stat.icon}
//                       </Box>
//                       <Typography variant="h6">{stat.title}</Typography>
//                     </Box>
//                     <Typography variant="h4" sx={{ fontWeight: "bold" }}>{stat.count}</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   )
// }

// export default Dashboard


// "use client"

// import React, { useState } from "react"
// import { Box, Grid, Card, CardContent, Typography, Container, Button } from "@mui/material"
// import { School as StudentIcon, Person as TeacherIcon, Class as ClassIcon, Assignment as ExamIcon } from "@mui/icons-material"
// import Header from "../components/layout/Header"
// import Sidebar from "../components/layout/Sidebar"
// import PageHeader from "../components/common/PageHeader"
// import { useAuth } from "../contexts/AuthContext"

// const Dashboard = () => {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const { logout } = useAuth()

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

//   const stats = [
//     { title: "Total Students", count: 1250, icon: <StudentIcon />, color: "#1976d2" },
//     { title: "Total Teachers", count: 85, icon: <TeacherIcon />, color: "#388e3c" },
//     { title: "Total Classes", count: 24, icon: <ClassIcon />, color: "#f57c00" },
//     { title: "Upcoming Exams", count: 8, icon: <ExamIcon />, color: "#d32f2f" },
//   ]

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Header onMenuClick={handleDrawerToggle} />
//       <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

//       <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
//         <Container maxWidth="lg">
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//             <PageHeader title="Dashboard" subtitle="Welcome to School Management System" />
//             <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
//           </Box>

//           <Grid container spacing={3}>
//             {stats.map((stat, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Card sx={{ height: "100%" }}>
//                   <CardContent>
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                       <Box sx={{ p: 1, borderRadius: 1, backgroundColor: stat.color + "20", color: stat.color, mr: 2 }}>
//                         {stat.icon}
//                       </Box>
//                       <Typography variant="h6">{stat.title}</Typography>
//                     </Box>
//                     <Typography variant="h4" sx={{ fontWeight: "bold" }}>{stat.count}</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   )
// }

// export default Dashboard;


// // import { Button, Container, Typography } from "@mui/material";
// // import { signOut } from "firebase/auth";
// // import { auth } from "../config/firebase";
// // import { useNavigate } from "react-router-dom";

// // const Dashboard = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = async () => {
// //     await signOut(auth);
// //     navigate("/login");
// //   };

// //   return (
// //     <Container>
// //       <Typography variant="h3" mt={5}>
// //         Welcome to Dashboard
// //       </Typography>
// //       <Button variant="contained" color="error" sx={{ mt: 3 }} onClick={handleLogout}>
// //         Logout
// //       </Button>
// //     </Container>
// //   );
// // };

// // export default Dashboard;



"use client";

import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Container, Button } from "@mui/material";
import { School as StudentIcon, Person as TeacherIcon, Class as ClassIcon, Assignment as ExamIcon } from "@mui/icons-material";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import PageHeader from "../components/common/PageHeader";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
const logout = async () => {
  await signOut(auth);
  setUser(null);
};

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const stats = [
    { title: "Total Students", count: 250, icon: <StudentIcon />, color: "#1976d2" },
    { title: "Total Teachers", count: 15, icon: <TeacherIcon />, color: "#388e3c" },
    { title: "Total Classes", count: 14, icon: <ClassIcon />, color: "#f57c00" },
    { title: "Upcoming Exams", count: 8, icon: <ExamIcon />, color: "#d32f2f" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Header onMenuClick={handleDrawerToggle} />
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: "64px" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <PageHeader title="Dashboard" subtitle="Welcome to School Management System" />
            <Button variant="contained" color="secondary" onClick={logout()}>Logout</Button>
          </Box>

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ p: 1, borderRadius: 1, backgroundColor: stat.color + "20", color: stat.color, mr: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h6">{stat.title}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>{stat.count}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
