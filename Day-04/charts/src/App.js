
import './App.css';
import StudentDetails from './components/StudentDetails'

const students = [
  {id : "2021ICT01", name: "Kamal", course : "IT"},
  {id : "2021ICT02", name: "Kamali", course : "IT"},
  {id : "2021ICT03", name: "Malathi", course : "IT"},
  {id : "2021ICT04", name: "Mala", course : "IT"},
  {id : "2021ICT05", name: "Suresh", course : "IT"},
  {id : "2021ICT06", name: "Kamala", course : "IT"}
]
function App() {
  
    
  return (
    <div className="App">
      <StudentDetails studata={students}/>
    </div>
  );
}
 

export default App;
