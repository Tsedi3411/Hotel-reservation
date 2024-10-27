
import React, { useContext } from "react";
import after from "../Assets/sky.png";
import e from "../Assets/email.png";
import p from "../Assets/password.png";
import m from "../Assets/person.png";
import axios from 'axios'
import { baseUrl } from "../constants";
import { useNavigate, useParams } from "react-router-dom";
import { appContext } from "../App";

function CreateReservation() {
  const {roomId}= useParams()
  const token= localStorage.getItem('token')
  const navigate= useNavigate()

  const reserve = async (event)=>{
    event.preventDefault()
    let duration=event.target.duration.value 
    let date=event.target.date.value
    let response= await axios.post(baseUrl +'/reserve',{
      roomId:roomId,
      duration:duration,
      date:date
    },{
      headers:{
        'Authorization':'Bearer ' +token
      }
    })
    alert('successfull y reserved')
    navigate('/my-reservation')
  }
 
  return (
    <div className="user">
      <form action="" onSubmit={reserve} method="post">
        <img className="sky" src={after} alt="skylight Hotel" />
        
        <div className="email">
          <img src={e} />
          <input type="text" placeholder="Duration" name="duration"/>
        </div>
        <div className="password">
          <img src={p} />
          <input type="date" placeholder="password" name="date" />
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
        <div className="register">
          <input type="submit" value="Reserve"/>
        </div>
      </form>
    </div>
  );
}

export default CreateReservation;
