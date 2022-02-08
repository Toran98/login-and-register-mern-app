import React, {useState} from "react"
import "./login.css"
import { useHistory } from "react-router-dom"
import 'dotenv/config'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    function login(){
  

        var jsonData = {

            "email" : email,
            "password" : password
        
        };

        fetch('http://localhost:5000/api/login', {  
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) 
      });


        history.push('/homepage');

        }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"></input>
            <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login