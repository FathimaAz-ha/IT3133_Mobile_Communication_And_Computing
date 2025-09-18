import react, { useState } from 'react'; //importing use state
import Student from './Student'
import '../css/style.css'
function StudentDetails(params) {
    const [greet, setGreet] = useState("Hello React!"); //initial state using useState
    let [count, setCount] = useState(1); //setting initial count to 1
    let [color, setColor] = useState("coral");

    const students = params.studata; //getting data from parent
    return (
        <center>
            <h1>{greet}</h1>
            <button onClick={() => { setGreet("Hello to React world!") }}> Change Heading </button>

            <h1>{count}</h1>
            <button onClick={() => {
                setCount(
                    count + 1
                )
            }}> Increase </button>

            <button onClick={() => {
                setCount(
                    count - 1
                )
            }}> Decrease </button>

            <h1 style={{color : color}}>{color}</h1>
            <button onClick={() => {
                setGreet("Hey!");
                    setColor(
                   "Red"
                )
            }}> Change Color </button>
            <table border={1} cellPadding={10} >
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>COURSE</th>
                </tr>
                {
                    students.map(s =>
                        <Student id={s.id} name={s.name} course={s.course} />
                    )
                }

            </table>
        </center>
    )
}

export default StudentDetails
