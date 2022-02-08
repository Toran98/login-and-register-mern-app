import React, { useState } from "react"
import "./register.css"
import { useHistory } from "react-router-dom"
import 'dotenv/config'

const Register = () => {

    const history = useHistory()

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [reEnterPassword,setReEnterPassword] = useState("");

    function register(){

        console.log(reEnterPassword);
  
        var jsonData = {
            "name" : name,
            "email" : email,
            "password" : password
        };

        fetch('http://localhost:5000/api/user', {  
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) 
      });


        history.push('/login');

        }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name"  placeholder="Your Name"  onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" name="email"  placeholder="Your Email"  onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" name="password" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="password" name="reEnterPassword"  placeholder="Re-enter Password"  onChange={(e)=>setReEnterPassword(e.target.value)}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register