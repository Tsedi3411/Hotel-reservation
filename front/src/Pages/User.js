import React from "react";
import after from "../Assets/sky.png";
import e from "../Assets/email.png";
import p from "../Assets/password.png";
import m from "../Assets/person.png";
import axios from 'axios'
import { baseUrl } from "../constants";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const navigate=useNavigate()

  const register=async(event)=>{
    event.preventDefault()
    let fn=event.target.first_name.value
    let ln=event.target.last_name.value
    let email=event.target.email.value
    let password=event.target.password.value
    let response = await axios.post(baseUrl +'/register', {
      email:email,
      password:password,
      first_name:fn,
      last_name:ln
    })
    //or .then(response=>{
     // })
   
    alert('successfully register')
    console.log(response.data)
    navigate('/login')

  }
  
  return (
    <div className="user">
      <form onSubmit={register} action="" method="post">
        <img className="sky" src={after} alt="" />
        <div className="fname">
          <img src={m} />
          <input type="text" placeholder="first name" name="first_name" />
        </div>
        <div className="lname">
          <img src={m} />
          <input type="text" placeholder="last name" name="last_name" />
        </div>
        <div className="email">
          <img src={e} />
          <input type="email" placeholder="email" name="email"/>
        </div>
        <div className="password">
          <img src={p} />
          <input type="password" placeholder="password" name="password" />
        </div>
       
        <div className="roll">
          {/* <i className="fa-solid fa-user-lock"></i>
          <select name="" id="">
            <option hidden>Roll</option>
            <option value="">Admin</option>
            <option value="">Client</option>
          </select> */}
          <input type="reset"/>
        </div>
        <Link to='/login'>Login</Link>
        <div className="register">
          <input type="submit" value="register"/>
        </div>
      </form>
    </div>
  );
}

export default User;
