import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1>phoneBook</h1>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
