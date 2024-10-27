
import React, { useContext, useState } from "react";
import after from "../Assets/sky.png";
import e from "../Assets/email.png";
import p from "../Assets/password.png";
import m from "../Assets/person.png";
import axios from 'axios'
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import { appContext } from "../App";

function Login() {
  const [error, setError]=useState(false)
  const{setToken} = useContext(appContext)

  const navigate=useNavigate()

  const submit = async (event)=>{
    event.preventDefault()
    let email=event.target.email.value
    let password=event.target.password.value
    let response=await axios.post(baseUrl +'/login',{
       email:email,
       password:password
    })
   if(!response.data.success){
    setError(true)
   }else{
    localStorage.setItem('token', response.data.token)
    setToken(response.data.token)
    navigate('/room')
   
   }
  }

  return (
    <div className="user">
      <form onSubmit= {submit} action="" method="post">
        <img className="sky" src={after} alt="" />
        
        <div className="email">
          <img src={e} />
          <input type="email" placeholder="email" name="email"/>
        </div>
        <div className="password">
          <img src={p} />
          <input type="password" placeholder="password" name="password" />
        </div>
       {error && <p>incorect email or password</p>} 
        <div className="roll">
          {/* <i className="fa-solid fa-user-lock"></i>
          <select name="" id="">
            <option hidden>Roll</option>
            <option value="">Admin</option>
            <option value="">Client</option>
          </select> */}
          <input type="reset"/>
        </div>
        <div className="register">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );
}

export default Login;
