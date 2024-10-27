import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants";

function MyReservations() {
  const [rooms, setRooms] = useState([])
  const token=localStorage.getItem('token')



  const fetchRooms = async () => {
    let response = await axios.get(baseUrl + '/my-reserves',{
     headers:{
       'Authorization':'Bearer ' + token
     } 
    })
    console.log(response.data)
    setRooms(response.data)
  }

  useEffect(() => {
    fetchRooms()
  }, [])
  
  return <div className="room">
    
     {rooms.map(room=>(
      <div style={{border: '2px solid #000', display: 'flex', flexDirection: 'column', gap: 20}}>
        <p>ROOM: {room.code}</p>
        <p>Duration:{room.reservation.duration} </p>
        <p>Price: {room.price}</p>
        <p>Date: {room.reservation.date}</p>
        <p>Status:{room.type} </p>
        <p>{room.level}</p>
      </div>
 ))}
    
  </div>;
}

export default MyReservations;
