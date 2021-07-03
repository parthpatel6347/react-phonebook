import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>phoneBook</h1>
      <Link to="/login">
        <button>
          <span>Sign in</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
