import { useState } from "react";



const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const saveUser = async (user) => {
      
        await fetch("http://localhost:8080/api/addCustomer", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        body: JSON.stringify(user),
      }).then((response) => response.json())
      .then((data) => {return data})
      .catch((error) => {
        console.error('Error:', error);
      });
     
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        if(!name || !email || !password)
            return setError('Please complete all required fields.')
        if (password.length < 8)
            return setError('Password should be at least 8 characters long.')

        saveUser({id:name, name:'Test', address:email, age:10})
      };


  return (
    <section className="login-form-wrap">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <p>
            <input 
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </p>
          <p>
            <input  
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </p>
          <p>
            <input role='textbox' 
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </p>
          <p className="error">{error}</p>
          <p>
            <button type="submit" >Create Account</button>
            <button type="submit" >Log In</button>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
