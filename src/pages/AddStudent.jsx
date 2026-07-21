// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddStudent() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     studentClass: "Class 9",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email) {
//       alert("Please fill in required fields!");
//       return;
//     }
//     alert(`Student "${formData.name}" added successfully!`);
//     navigate("/students");
//   };

//   return (
//     <div>
//       <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
//         Add New Student
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           backgroundColor: "#fff",
//           padding: "25px",
//           borderRadius: "8px",
//           maxWidth: "500px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//         }}
//       >
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
//             Full Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter student name"
//             required
//             style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
//             Email Address *
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter student email"
//             required
//             style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
//             Phone Number
//           </label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter phone number"
//             style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
//             Class *
//           </label>
//           <select
//             name="studentClass"
//             value={formData.studentClass}
//             onChange={handleChange}
//             style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
//           >
//             <option value="Class 9">Class 9</option>
//             <option value="Class 10">Class 10</option>
//             <option value="Class 11">Class 11</option>
//             <option value="Class 12">Class 12</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Add Student
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddStudent;




import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentClass: "Class 9",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in required fields!");
      return;
    }

    // Existing students localStorage se laayein
    const existingStudents = JSON.parse(localStorage.getItem("students")) || [];

    // Naya student add karein
    const newStudent = {
      id: Date.now(), // unique ID
      ...formData
    };

    const updatedList = [newStudent, ...existingStudents];

    // LocalStorage update karein
    localStorage.setItem("students", JSON.stringify(updatedList));

    alert(`Student "${formData.name}" added successfully!`);
    
    // Direct Students Page par jayein
    navigate("/students");
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Add New Student
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "8px",
          maxWidth: "500px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter student email"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontWeight: "600", marginBottom: "5px" }}>
            Class *
          </label>
          <select
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;