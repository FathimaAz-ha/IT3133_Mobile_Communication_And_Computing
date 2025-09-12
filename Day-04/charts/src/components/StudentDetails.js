import Student from "./Student";

import '../css/styles.css'
function StudentDetails(params){

    const students = params.studata; // getting data from the parent - app.js
    return(
      
        <table border={1}>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            </tr>

            {
                //JS code to access the array
                students.map(s=>
                    <Student id={s.id} name={s.name} course={s.course}/>

                )
            }
        </table>
        
    )
}

export default StudentDetails
