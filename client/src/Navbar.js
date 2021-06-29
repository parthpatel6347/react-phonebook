import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/auth/authContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const authLinks = (
    <li>
      <a onClick={handleLogout} href="#!">
        Logout
      </a>
    </li>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <h1>Navbar</h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
