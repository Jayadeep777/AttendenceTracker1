import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Alice", present: false },
    { name: "Bob", present: false },
    { name: "Charlie", present: false },
    { name: "Diana", present: false },
  ]);

  const toggleAttendance = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  const totalPresent = students.filter((s) => s.present).length;

  return (
    <div className="container">
      <h1>🎓 Attendance Tracker</h1>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>
                  <button
                    className={student.present ? "present" : "absent"}
                    onClick={() => toggleAttendance(index)}
                  >
                    {student.present ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Present: {totalPresent}</h3>
      </div>
    </div>
  );
}

export default App;
