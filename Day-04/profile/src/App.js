
import './App.css';
import './assets/css/compo.css'
import { students } from './data'
import StudentDetails from './components/StudentDetails'


function App() {
  return (
   
    <div className="outerDiv">
      <h1><center>Student Details</center></h1>
      <div >
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Location</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <StudentDetails key={student.studentId} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
