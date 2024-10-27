import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants";

function MyReservations() {
  
  return <div className="room">
    
      <div style={{border: '2px solid #000', display: 'flex', flexDirection: 'column', gap: 20}}>
        <p>ROOM: 233</p>
        <p>Duration: 2</p>
        <p>Price: 3000</p>
        <p>Date: 2024/3</p>
        <p>Status: </p>
        <p>2 bedrroms</p>
        <p>level 2</p>
      </div>

    
  </div>;
}

export default MyReservations;
