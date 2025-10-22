
import '../CSS/Login.css'
import Register from '../components/Register'

function Login({onToggle}){
return (
    <div className="container">
        <center>
       
        <form>
        <h2>Login</h2>
            <label for="email"> Eamil <br></br>
            <input type="text" id="email" name="email"></input></label>
            <br></br>
            <label for="password">Password <br></br>
            <input type="password" id="password" name="email"></input></label>
            <br></br><br></br>
            <button>Login</button>

            <p>Don't Have an account{''} <span onClick={onToggle} className='toggleLink'> Register Here</span></p>
        </form>
        </center>
    </div>

)
}
export default Login