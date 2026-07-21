// import { useState } from "react";
// // import useStudents from "../hooks/useStudents";
// import { useStudents } from "../hooks/useStudents";
// import StudentTable from "../components/layout/student/StudentTable.jsx";
// import { Search } from "lucide-react";

// // Local Loader Component
// function Loader() {
//   return (
//     <div style={{ textAlign: "center", padding: "40px", fontSize: "18px", color: "#64748b" }}>
//       ⏳ Loading student data...
//     </div>
//   );
// }

// function Students() {
//   const { students, setStudents, loading } = useStudents();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedClass, setSelectedClass] = useState("");

//   // Delete Student Handler
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this student?")) {
//       setStudents(students.filter((s) => s.id !== id));
//     }
//   };

//   // Search & Filter Logic
//   const filteredStudents = students.filter((student) => {
//     const matchesSearch =
//       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesClass = selectedClass === "" || student.studentClass === selectedClass;
//     return matchesSearch && matchesClass;
//   });

//   return (
//     <div>
//       <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Students Management</h1>

//       {/* Search Bar & Class Filter */}
//       <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
//         <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", border: "1px solid #ccc", padding: "8px 12px", borderRadius: "6px", flex: "1", minWidth: "200px" }}>
//           <Search size={18} style={{ color: "#888", marginRight: "8px" }} />
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ border: "none", outline: "none", width: "100%" }}
//           />
//         </div>

//         <select
//           value={selectedClass}
//           onChange={(e) => setSelectedClass(e.target.value)}
//           style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#fff" }}
//         >
//           <option value="">All Classes</option>
//           <option value="Class 9">Class 9</option>
//           <option value="Class 10">Class 10</option>
//           <option value="Class 11">Class 11</option>
//           <option value="Class 12">Class 12</option>
//         </select>
//       </div>

//       {/* Loading or Data Table */}
//       {loading ? (
//         <Loader />
//       ) : (
//         <StudentTable
//           students={filteredStudents}
//           onDelete={handleDelete}
//           onEdit={(student) => alert(`Edit student: ${student.name}`)}
//         />
//       )}
//     </div>
//   );
// }

// export default Students;





import { useState } from "react";
import { useStudents } from "../hooks/useStudents";
import { Search, Edit, Trash2 } from "lucide-react";

function Students() {
  const { students, loading, deleteStudent, updateStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateStudent(editingStudent);
    alert(`Student "${editingStudent.name}" updated successfully!`);
    setEditingStudent(null);
  };

  const filteredStudents = (students || []).filter((student) => {
    const matchesSearch =
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "" || student.studentClass === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Students Management
      </h1>

      {/* Search & Filter */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", border: "1px solid #ccc", padding: "8px 12px", borderRadius: "6px", flex: "1", minWidth: "200px" }}>
          <Search size={18} style={{ color: "#888", marginRight: "8px" }} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", outline: "none", width: "100%" }}
          />
        </div>

        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#fff" }}
        >
          <option value="">All Classes</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>
      </div>

      {/* Table / Loader */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>⏳ Loading students...</div>
      ) : filteredStudents.length === 0 ? (
        <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#fff", borderRadius: "8px", color: "#64748b" }}>
          No students found.
        </div>
      ) : (
        <div style={{ overflowX: "auto", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <th style={{ padding: "12px 16px", color: "#475569" }}>Name</th>
                <th style={{ padding: "12px 16px", color: "#475569" }}>Email</th>
                <th style={{ padding: "12px 16px", color: "#475569" }}>Phone</th>
                <th style={{ padding: "12px 16px", color: "#475569" }}>Class</th>
                <th style={{ padding: "12px 16px", color: "#475569", textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "600", color: "#0f172a" }}>{student.name}</td>
                  <td style={{ padding: "12px 16px", color: "#64748b" }}>{student.email}</td>
                  <td style={{ padding: "12px 16px", color: "#64748b" }}>{student.phone}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ backgroundColor: "#e0f2fe", color: "#0369a1", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
                      {student.studentClass}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>
                    <button
                      onClick={() => setEditingStudent(student)}
                      style={{ border: "none", background: "none", color: "#2563eb", cursor: "pointer", marginRight: "10px" }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      style={{ border: "none", background: "none", color: "#ef4444", cursor: "pointer" }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {editingStudent && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "8px", width: "400px", maxWidth: "90%" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Edit Student</h2>
            <form onSubmit={handleEditSubmit}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold" }}>Name</label>
                <input
                  type="text"
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                  required
                />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold" }}>Email</label>
                <input
                  type="email"
                  value={editingStudent.email}
                  onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                  required
                />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold" }}>Phone</label>
                <input
                  type="text"
                  value={editingStudent.phone}
                  onChange={(e) => setEditingStudent({ ...editingStudent, phone: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "bold" }}>Class</label>
                <select
                  value={editingStudent.studentClass}
                  onChange={(e) => setEditingStudent({ ...editingStudent, studentClass: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                >
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button type="button" onClick={() => setEditingStudent(null)} style={{ padding: "8px 15px", borderRadius: "4px", border: "none", backgroundColor: "#cbd5e1", cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: "8px 15px", borderRadius: "4px", border: "none", backgroundColor: "#2563eb", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;