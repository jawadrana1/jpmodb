// // src/components/routes/routes.jsx
// import Login from "../../pages/Login";
// import Dashboard from "../../pages/Dashboard";
// import StudentList from "../../pages/students/StudentList";
// import StudentForm from "../../pages/students/StudentForm";

// import TeacherList from "../../pages/teachers/TeacherList";
// import TeacherForm from "../../pages/teachers/TeacherForm";

// import SubjectList from "../../pages/subjects/SubjectList";
// import SubjectForm from "../../pages/subjects/SubjectForm";


// import ClassList from "../../pages/classes/ClassList";
// import ClassForm from "../../pages/classes/ClassForm";

// import FeeStructure from "../../pages/fees/FeeStructure";
// import FeeSubmission from "../../pages/fees/FeeSubmission";


//   // Exams
// import ExamList from "../../pages/exams/examList"
// import ExamForm from "../../pages/exams/examForm"




// import SyllabusList from "../../pages/syllabus/SyllabusList";
// import SyllabusForm from "../../pages/syllabus/SyllabusForm";
// import AdmissionForm from "../../pages/admission/AdmissionForm";

// export const routes = [
//   { path: "/login", element: Login, isPublic: true },
//   { path: "/dashboard", element: Dashboard },

//   { path: "/students", element: StudentList },
//   { path: "/students/add", element: StudentForm },
//   { path: "/students/edit/:id", element: StudentForm },

//   { path: "/teachers", element: TeacherList },
//   { path: "/teachers/add", element: TeacherForm },
//   { path: "/teachers/edit/:id", element: TeacherForm },

//   { path: "/subjects", element: SubjectList },
//   { path: "/subjects/add", element: SubjectForm },
//   { path: "subjects/edit/:id", element: SubjectForm },

//   { path: "/classes", element: ClassList },
//   { path: "/classes/add", element: ClassForm },
//   { path: "classes/edit/:id", element: SubjectForm },

//   { path: "/fees/structure", element: FeeStructure },
//   { path: "/fees/submission", element: FeeSubmission },

//   { path: "/exams", element: ExamList },
//   { path: "/exams/add", element: ExamForm },
//   { path: "/exams/edit/:id", element: ExamForm },



//   { path: "/syllabus", element: SyllabusList },
//   { path: "/syllabus/add", element: SyllabusForm },
//   { path: "/syllabus/edit/:id", element: SubjectForm },

//   { path: "/admission", element: AdmissionForm },
// ];

// src/components/routes/routes.jsx
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";

// Students
import StudentList from "../../pages/students/StudentList";
import StudentForm from "../../pages/students/StudentForm";

// Teachers
import TeacherList from "../../pages/teachers/TeacherList";
import TeacherForm from "../../pages/teachers/TeacherForm";

// Subjects
import SubjectList from "../../pages/subjects/SubjectList";
import SubjectForm from "../../pages/subjects/SubjectForm";

// Classes
import ClassList from "../../pages/classes/ClassList";
import ClassForm from "../../pages/classes/ClassForm";

// Fees
import FeeStructure from "../../pages/fees/FeeStructure";
import FeeSubmission from "../../pages/fees/FeeSubmission";

// Exams
import ExamList from "../../pages/exams/examList";
import ExamForm from "../../pages/exams/examForm";

// Syllabus
import SyllabusList from "../../pages/syllabus/SyllabusList";
import SyllabusForm from "../../pages/syllabus/SyllabusForm";

// Admission
import AdmissionForm from "../../pages/admission/AdmissionForm";

export const routes = [
  { path: "/login", element: Login, isPublic: true },
  { path: "/dashboard", element: Dashboard },

  { path: "/students", element: StudentList },
  { path: "/students/add", element: StudentForm },
  { path: "/students/edit/:id", element: StudentForm },

  { path: "/teachers", element: TeacherList },
  { path: "/teachers/add", element: TeacherForm },
  { path: "/teachers/edit/:id", element: TeacherForm },

  { path: "/subjects", element: SubjectList },
  { path: "/subjects/add", element: SubjectForm },
  { path: "/subjects/edit/:id", element: SubjectForm },

  { path: "/classes", element: ClassList },
  { path: "/classes/add", element: ClassForm },
  { path: "/classes/edit/:id", element: ClassForm },

  { path: "/fees/structure", element: FeeStructure },
  { path: "/fees/submission", element: FeeSubmission },

  { path: "/exams", element: ExamList },
  { path: "/exams/add", element: ExamForm },
  { path: "/exams/edit/:id", element: ExamForm },

  { path: "/syllabus", element: SyllabusList },
  { path: "/syllabus/add", element: SyllabusForm },
  { path: "/syllabus/edit/:id", element: SyllabusForm },

  { path: "/admission", element: AdmissionForm },
];

