import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/auth/authContext";
import ContactContext from "./context/contact/contactContext";
import "./styles/NavbarHome.css";

const NavbarHome = () => {
  const { logout } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);

  const handleLogout = () => {
    logout();
    clearContacts();
  };

  return (
    <div className="nav-home">
      <div className="nav-items">
        <h1>phoneBook</h1>
        <a onClick={handleLogout} href="#!">
          Sign out
        </a>
      </div>
    </div>
  );
};

export default NavbarHome;
