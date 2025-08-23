import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TeacherList from "./pages/teachers/TeacherList";
import StudentList from "./pages/students/StudentList";
import SyllabusList from "./pages/syllabus/SyllabusList"
import AdmissionForm from "./pages/admission/AdmissionForm"
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Layout from "./components/layout/Layout";
import SyllabusForm from "./pages/syllabus/SyllabusForm";
import SubjectList from "./pages/subjects/SubjectList";
import StudentForm from "./pages/students/StudentForm";
import ExamList from "./pages/exams/examList";
import ExamForm from "./pages/exams/examForm";
import FeeStructure from "./pages/fees/FeeStructure";
import FeeSubmission from "./pages/fees/FeeSubmission";
import ClassList from "./pages/classes/ClassList";
import ClassForm from "./pages/classes/ClassForm";
import AdmissionScreen from "./pages/admission/AdmissionForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Wrap protected routes with Layout */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/teachers"
        element={
          <ProtectedRoute>
            <Layout>
              <TeacherList />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Layout>
              <StudentList />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/syllabus"
        element={
          <ProtectedRoute>
            <Layout>
              <SyllabusList />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/syllabus/add"
        element={
          <ProtectedRoute>
            <Layout>
              <SyllabusForm />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/subjects"
        element={
          <ProtectedRoute>
            <Layout>
              <SubjectList />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/subjects/add"
        element={
          <ProtectedRoute>
            <Layout>
              <StudentForm />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/exams"
        element={
          <ProtectedRoute>
            <Layout>
              <ExamList />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/exams/add"
        element={
          <ProtectedRoute>
            <Layout>
              <ExamForm />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/fees/structure"
        element={
          <ProtectedRoute>
            <Layout>
              <FeeStructure />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/fee"
        element={
          <ProtectedRoute>
            <Layout>
              <FeeSubmission />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admission/new"
        element={
          <ProtectedRoute>
            <Layout>
              < AdmissionForm />
            </Layout>
          </ProtectedRoute>
        }
      /><Route
        path="/admission"
        element={
          <ProtectedRoute>
            <Layout>
              <AdmissionScreen />
            </Layout>
          </ProtectedRoute>
        }
      /><Route
        path="/classes/add"
        element={
          <ProtectedRoute>
            <Layout>
              <ClassForm />
            </Layout>
          </ProtectedRoute>
        }
      /><Route
        path="/classes"
        element={
          <ProtectedRoute>
            <Layout>
              <ClassList />
            </Layout>
          </ProtectedRoute>
        }
      />
      {/* Add other protected routes similarly */}
    </Routes>
  );
}

export default App;



// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { routes } from "./components/routes/routes";
// import ProtectedRoute from "./components/routes/ProtectedRoute";
// import { AuthProvider } from "./contexts/AuthContext";

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {routes.map((route, index) => {
//           // If route is public, render normally
//           if (route.isPublic) {
//             return <Route key={index} path={route.path} element={<route.element />} />;
//           }

//           // If route is private, wrap in ProtectedRoute
//           return (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <ProtectedRoute>
//                   <route.element />
//                 </ProtectedRoute>
//               }
//             />
//           );
//         })}

//         {/* Redirect unknown routes to dashboard or login */}
//         <Route path="*" element={<Navigate to="/dashboard" replace />} />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;




// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { routes } from "./components/routes/routes";
// import ProtectedRoute from "./components/routes/ProtectedRoute";
// import { AuthProvider } from "./contexts/AuthContext";

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {routes.map((route, index) => {
//           const Element = route.element;

//           // Public route (like Login)
//           if (route.isPublic) {
//             return <Route key={index} path={route.path} element={<Element />} />;
//           }

//           // Protected route (requires auth)
//           return (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <ProtectedRoute>
//                   <Element />
//                 </ProtectedRoute>
//               }
//             />
//           );
//         })}

//         {/* Redirect unknown paths */}
//         <Route path="*" element={<Navigate to="/dashboard" replace />} />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";

// import ProtectedRoute from "./components/routes/ProtectedRoute";

// function App() {
//   return (
    
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } 
//           />
//         </Routes>
    
//   );
// }

// // export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import TeacherList from "./pages/teachers/TeacherList"; // example other page

// import ProtectedRoute from "./components/routes/ProtectedRoute";
// import Layout from "./components/layout/Layout"; // your Sidebar + Header + Outlet

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Protected routes wrapped in Layout */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Navigate to="dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="teachers" element={<TeacherList />} />
//           {/* Add other nested protected routes here */}
//         </Route>

//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { routes } from "./components/routes/routes";
// import ProtectedRoute from "./components/routes/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       {routes.map((route, index) => {
//         const Element = route.element;

//         if (route.isPublic) {
//           return <Route key={index} path={route.path} element={<Element />} />;
//         }

//         return (
//           <Route
//             key={index}
//             path={route.path}
//             element={
//               <ProtectedRoute>
//                 <Element />
//               </ProtectedRoute>
//             }
//           />
//         );
//       })}

//       <Route path="*" element={<Navigate to="/dashboard" replace />} />
//     </Routes>
//   );
// }

// export default App;
