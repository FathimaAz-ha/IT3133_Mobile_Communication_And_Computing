import Login from '../components/Login'
function Register({onToggle}){
return (
    <div className="container">
        <center>
        
        <form>
        <h2>Register</h2>
            <label for="name"> Name <br></br>
            <input type="text" id="name" name="name"></input></label>
            <br></br>
            <label for="email">Email <br></br>
            <input type="text" id="email" name="email"></input></label>
            <br></br>
            <label for="password">Password <br></br>
            <input type="password" id="password" name="password"></input></label>
            <br></br>

            <label for="cpassword">Email <br></br>
            <input type="password" id="cpassword" name="cpassword"></input></label>
            <br></br><br></br>
            <button>Register</button>

                <p>Already Have an account?<span onClick={onToggle} className='toggleLink' >Login</span></p>
        </form>
        </center>
    </div>

)
}
export default Register