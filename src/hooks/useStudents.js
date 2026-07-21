
// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useStudents = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // LocalStorage se check karein
//     const localData = localStorage.getItem("students");
    
//     if (localData) {
//       setStudents(JSON.parse(localData));
//       setLoading(false);
//     } else {
//       // Agar LocalStorage khali ho to API se data laayein
//       axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           const formattedData = res.data.map((user, index) => ({
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             phone: user.phone,
//             studentClass: `Class ${9 + (index % 4)}` // Class 9, 10, 11, 12
//           }));
//           setStudents(formattedData);
//           localStorage.setItem("students", JSON.stringify(formattedData));
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }, []);

//   return { students, setStudents, loading };
// };
// export default useStudents;




import { useState, useEffect } from "react";
import axios from "axios";

export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial Fetching
  useEffect(() => {
    const localData = localStorage.getItem("students");
    
    if (localData) {
      setStudents(JSON.parse(localData));
      setLoading(false);
    } else {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          const formattedData = res.data.map((user, index) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone || "N/A",
            studentClass: `Class ${9 + (index % 4)}`
          }));
          setStudents(formattedData);
          localStorage.setItem("students", JSON.stringify(formattedData));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, []);

  // Delete Student Function
  const deleteStudent = (id) => {
    const updatedList = students.filter((s) => s.id !== id);
    setStudents(updatedList);
    localStorage.setItem("students", JSON.stringify(updatedList));
  };

  // Edit Student Function
  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((s) => 
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedList);
    localStorage.setItem("students", JSON.stringify(updatedList));
  };

  return { students, setStudents, loading, deleteStudent, updateStudent };
};

export default useStudents;