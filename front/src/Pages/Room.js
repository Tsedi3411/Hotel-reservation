import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants";

function Room() {
  const [rooms, setRooms] = useState([])



  const fetchRooms = async () => {
    let response = await axios.get(baseUrl + '/all-rooms')
    setRooms(response.data)
  }



  useEffect(() => {
    fetchRooms()
  }, [])

  return <div className="room">
    {rooms.map(items => (<div style={{ border: '2px solid #000', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <p>ROOM:{items.code}</p>
      <p>{items.type}</p>
      <p>level {items.level}</p>
      <Link to={'/create-reservation/'+ items.id}>Create Reservation</Link>
    </div>
    ))}
  </div>;

  }
  export default Room;
