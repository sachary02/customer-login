import "./login.css";

const Login = () =>{
    return(<section className="login-form-wrap">
    <h2>Login/Registration Page</h2>
    <form className="login-form">
    <div>
      <p><input  placeholder="Name *"/></p>
      <p><input  placeholder="Email *"/></p>
      <p><input  placeholder="Password *"/></p>
      <p><button type="submit">Create account</button></p>
      <p><button type="submit">Log In</button></p>

    </div>
    </form>

  </section>)
}

export default Login