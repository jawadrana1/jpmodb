// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";


// const AdmissionForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // agar edit ho to id milegi
//   const isEdit = Boolean(id);

//   // student state
//   const [student, setStudent] = useState({
//     name: "",
//     age: "",
//     className: "",
//     section: "",
//     rollNo: "",
//   });

//   // agar edit mode hai to dummy data load karein
//   useEffect(() => {
//     if (isEdit) {
//       // yahan API call hoga baad me (abhi dummy data)
//       const existingStudent = {
//         id,
//         name: "Ali Khan",
//         age: "12",
//         className: "Class 6",
//         section: "A",
//         rollNo: "15",
//       };
//       setStudent(existingStudent);
//     }
//   }, [id, isEdit]);

//   // input change handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent({ ...student, [name]: value });
//   };

//   // form submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       alert(`Student updated: ${student.name}`);
//       // API call update karega
//     } else {
//       alert(`New student admitted: ${student.name}`);
//       // API call add karega
//     }
//     navigate("/students"); // list page par wapas bhej dega
//   };

//   return (
//     <div className="p-6 centered-container">
//       <h1 className="text-2xl font-bold mb-4">
//         {isEdit ? "Edit Admission" : "New Admission"}
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md max-w-md"
//       >
//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Student Name</label>
//           <input
//             type="text"
//             name="name"
//             value={student.name}
//             onChange={handleChange}
//             placeholder="Enter student name"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Age */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={student.age}
//             onChange={handleChange}
//             placeholder="Enter age"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Class */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Class</label>
//           <input
//             type="text"
//             name="className"
//             value={student.className}
//             onChange={handleChange}
//             placeholder="Enter class"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Section */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Section</label>
//           <input
//             type="text"
//             name="section"
//             value={student.section}
//             onChange={handleChange}
//             placeholder="Enter section"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Roll Number */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Roll Number</label>
//           <input
//             type="text"
//             name="rollNo"
//             value={student.rollNo}
//             onChange={handleChange}
//             placeholder="Enter roll number"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700"
//         > 
//           {isEdit ? "Update Admission" : "Admit Student"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdmissionForm;



// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";

// // const AdmissionForm = () => {
// //   const navigate = useNavigate();
// //   const { id } = useParams();
// //   const isEdit = Boolean(id);

// //   const [student, setStudent] = useState({
// //     name: "",
// //     age: "",
// //     className: "",
// //     section: "",
// //     rollNo: "",
// //   });

// //   useEffect(() => {
// //     if (isEdit) {
// //       const existingStudent = {
// //         id,
// //         name: "Ali Khan",
// //         age: "12",
// //         className: "Class 6",
// //         section: "A",
// //         rollNo: "15",
// //       };
// //       setStudent(existingStudent);
// //     }
// //   }, [id, isEdit]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setStudent({ ...student, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (isEdit) {
// //       alert(`Student updated: ${student.name}`);
// //     } else {
// //       alert(`New student admitted: ${student.name}`);
// //     }
// //     navigate("/students");
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
// //       >
// //         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
// //           {isEdit ? "Edit Admission" : "New Admission"}
// //         </h1>

// //         {/* Name */}
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2 font-medium">
// //             Student Name
// //           </label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={student.name}
// //             onChange={handleChange}
// //             placeholder="Enter student name"
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* Age */}
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2 font-medium">Age</label>
// //           <input
// //             type="number"
// //             name="age"
// //             value={student.age}
// //             onChange={handleChange}
// //             placeholder="Enter age"
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* Class */}
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2 font-medium">Class</label>
// //           <input
// //             type="text"
// //             name="className"
// //             value={student.className}
// //             onChange={handleChange}
// //             placeholder="Enter class"
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* Section */}
// //         <div className="mb-4">
// //           <label className="block text-gray-700 mb-2 font-medium">Section</label>
// //           <input
// //             type="text"
// //             name="section"
// //             value={student.section}
// //             onChange={handleChange}
// //             placeholder="Enter section"
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* Roll Number */}
// //         <div className="mb-6">
// //           <label className="block text-gray-700 mb-2 font-medium">
// //             Roll Number
// //           </label>
// //           <input
// //             type="text"
// //             name="rollNo"
// //             value={student.rollNo}
// //             onChange={handleChange}
// //             placeholder="Enter roll number"
// //             required
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //           />
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
// //         >
// //           {isEdit ? "Update Admission" : "Admit Student"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AdmissionForm;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Dummy student data
const dummyAdmissions = [
  { id: 1, name: "Ali Khan", admissionNo: "ADM001", className: "Class 6", section: "A", admissionDate: "2025-08-01", status: "Pending" },
  { id: 2, name: "Sara Ahmed", admissionNo: "ADM002", className: "Class 7", section: "B", admissionDate: "2025-08-02", status: "Approved" },
  { id: 3, name: "Hamza Ali", admissionNo: "ADM003", className: "Class 6", section: "A", admissionDate: "2025-08-03", status: "Rejected" },
];

const AdmissionScreen = () => {
  const navigate = useNavigate();

  const [admissions, setAdmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    // Load dummy admissions (replace with API call)
    setAdmissions(dummyAdmissions);
  }, []);

  const handleEdit = (id) => {
    navigate(`/admission/${id}`); // go to edit form
  };

  const handleView = (id) => {
    alert("View details for ID: " + id);
  };

  const handleStatusChange = (id, status) => {
    setAdmissions(admissions.map(a => a.id === id ? { ...a, status } : a));
  };

  const filteredAdmissions = admissions.filter(a => {
    return (
      a.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus === "" || a.status === filterStatus)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admissions</h1>

      {/* Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => navigate("/admission/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Admission
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Export List
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Print Admission Form
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, class or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/3"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Admissions Table */}
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Admission No</th>
            <th className="border px-4 py-2">Class / Section</th>
            <th className="border px-4 py-2">Admission Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmissions.map((admission) => (
            <tr key={admission.id} className="text-center">
              <td className="border px-4 py-2">{admission.name}</td>
              <td className="border px-4 py-2">{admission.admissionNo}</td>
              <td className="border px-4 py-2">{admission.className} / {admission.section}</td>
              <td className="border px-4 py-2">{admission.admissionDate}</td>
              <td className="border px-4 py-2">{admission.status}</td>
              <td className="border px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => handleEdit(admission.id)}
                  className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleView(admission.id)}
                  className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleStatusChange(admission.id, "Approved")}
                  className="bg-green-500 px-2 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(admission.id, "Rejected")}
                  className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
          {filteredAdmissions.length === 0 && (
            <tr>
              <td colSpan="6" className="py-4">No admissions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdmissionScreen;

