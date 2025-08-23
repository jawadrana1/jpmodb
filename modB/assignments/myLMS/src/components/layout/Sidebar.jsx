// "use client"
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   ListItemButton,
//   Divider,
//   Typography,
//   Box,
// } from "@mui/material"
// import { useNavigate, useLocation } from "react-router-dom"
// import {
//   Dashboard as DashboardIcon,
//   School as StudentIcon,
//   Person as TeacherIcon,
//   Subject as SubjectIcon,
//   Class as ClassIcon,
//   Payment as FeeIcon,
//   Assignment as ExamIcon,
//   MenuBook as SyllabusIcon,
//   PersonAdd as AdmissionIcon,
// } from "@mui/icons-material"

// const drawerWidth = 240

// const menuItems = [
//   { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
//   { text: "Students", icon: <StudentIcon />, path: "/students" },
//   { text: "Teachers", icon: <TeacherIcon />, path: "/teachers" },
//   { text: "Subjects", icon: <SubjectIcon />, path: "/subjects" },
//   { text: "Classes", icon: <ClassIcon />, path: "/classes" },
//   { text: "Fees", icon: <FeeIcon />, path: "/fees/structure" },
//   { text: "Exams", icon: <ExamIcon />, path: "/exams/schedule" },
//   { text: "Syllabus", icon: <SyllabusIcon />, path: "/syllabus" },
//   { text: "Admission", icon: <AdmissionIcon />, path: "/admission" },
// ]

// const Sidebar = ({ open, onClose }) => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const handleNavigation = (path) => {
//     navigate(path)
//     if (onClose) onClose()
//   }

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "primary.main" }}>
//           School Management
//         </Typography>
//       </Box>
//       <Divider />

//       <List>
//         {menuItems.map((item) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton selected={location.pathname === item.path} onClick={() => handleNavigation(item.path)}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   )
// }

// export default Sidebar

"use client"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Typography,
  Box,
} from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Dashboard as DashboardIcon,
  School as StudentIcon,
  Person as TeacherIcon,
  Subject as SubjectIcon,
  Class as ClassIcon,
  Payment as FeeIcon,
  Assignment as ExamIcon,
  MenuBook as SyllabusIcon,
  PersonAdd as AdmissionIcon,
} from "@mui/icons-material"

const drawerWidth = 240

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Students", icon: <StudentIcon />, path: "/students" },
  { text: "Teachers", icon: <TeacherIcon />, path: "/teachers" },
  { text: "Subjects", icon: <SubjectIcon />, path: "/subjects" },
  { text: "Classes", icon: <ClassIcon />, path: "/classes" },
  { text: "Fees", icon: <FeeIcon />, path: "/fees/structure" },
  { text: "Exams", icon: <ExamIcon />, path: "/exams" },

  { text: "Syllabus", icon: <SyllabusIcon />, path: "/syllabus" },
  { text: "Admission", icon: <AdmissionIcon />, path: "/admission" },
]

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    navigate(path)
    if (onClose) onClose()
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "primary.main" }}>
          School Management
        </Typography>
      </Box>
      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton selected={location.pathname === item.path} onClick={() => handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar


