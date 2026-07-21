import { Edit, Trash2 } from "lucide-react";


function StudentTable({ students, onDelete, onEdit }) {

  if (students.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h3>No Data Found</h3>
        <p>No student matches your search/filter criteria.</p>
      </div>
    );
  }


  return (
    <div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.phone}</td>

              <td>{student.studentClass}</td>


              <td>

                <button onClick={() => onEdit(student)}>
                  <Edit size={18}/>
                </button>


                <button onClick={() => onDelete(student.id)}>
                  <Trash2 size={18}/>
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}


export default StudentTable;