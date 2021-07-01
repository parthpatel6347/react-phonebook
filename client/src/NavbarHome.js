import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/auth/authContext";
import ContactContext from "./context/contact/contactContext";
import "./styles/Navbar.css";

const NavbarHome = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);

  const handleLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <a onClick={handleLogout} href="#!">
      Logout
    </a>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/register">Register</Link>

      <Link to="/login">Login</Link>
    </Fragment>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

export default NavbarHome;
