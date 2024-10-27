import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>WELCOME TO SKYLIGHT HOTEL</h1>
      <p>Ethiopia, Addis Abeba</p>
      <Link to="/user">Explore Now</Link>
    </div>
  );
}

export default Home;
