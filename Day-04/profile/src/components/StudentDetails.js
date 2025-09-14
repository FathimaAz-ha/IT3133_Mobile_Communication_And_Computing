
import "../assets/css/compo.css"

const StudentDetails= ({ student }) => {
  return (
    <tr>
      <td>
        <img src={student.profilePic} alt={`${student.firstName} ${student.lastName}`} className="profile" />
      </td>
      <td>{student.studentId}</td>
      <td>{student.firstName} {student.lastName}</td>
      <td>{student.age}</td>
      <td>{student.course}</td>
      <td>{student.address.city}, {student.address.country}</td>
      <td>{student.skills.join(', ')}</td>
    </tr>
  );
};

export default StudentDetails;