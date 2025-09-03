function StudentInfo(props){
    const studentData = props.student;

    return(
        <div className="studentInfo">
            <h4>Student Details </h4>
            <p>Name : {studentData.type}</p>
            <p>Age : {studentData.age}</p>
        </div>
    )
}
export default StudentInfo