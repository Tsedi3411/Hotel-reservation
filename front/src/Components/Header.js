import React, { useContext } from "react";
import after from "../Assets/sky.png";
import icon from "../Assets/settings.png";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../App";
function Header() {
  const { token, setToken } = useContext(appContext)
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.removeItem('sky_token')
    setToken(null)
    navigate('/login')
  }
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/"> <img className="log" src={after} alt="" /></Link>
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          {
            token ? <>
              <Link to="/room">My Rooms</Link>
              <Link to="/my-reservation">My Reservations</Link>
              <Link to="/create-reservation">Create Reservation</Link>
              <button onClick={logout}>Logout</button>
            </>
              : <Link to="/user">Register</Link>
          }

          {/* <Link to="/Hotel">Hotel</Link>
          <Link to="/branch">Branch</Link> */}

          <Link to="/setting">
            <img src={icon} title="setting" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
