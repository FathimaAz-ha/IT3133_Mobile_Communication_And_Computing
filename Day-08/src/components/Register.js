
function Register(){
return (
    <div className="container">
        <h2>Register</h2>
        <form>
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
            <br></br>
            <button>Register</button>

                <p>Already Have an account?<span onClick={onToggle} className='toggleLink' >Login</span></p>
        </form>
    </div>

)
}
export default Register