import React, { useContext, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import ContactFilter from "./ContactFilter";
import NavbarHome from "./NavbarHome";
import "./styles/Home.css";
import { Modal, Button } from "react-bootstrap";

import AuthContext from "./context/auth/authContext";
import ContactContext from "./context/contact/contactContext";

const Home = () => {
  const { loadUser, user } = useContext(AuthContext);
  const { clearCurrent } = useContext(ContactContext);

  useEffect(() => {
    loadUser();
  }, []);

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => clearCurrent(), 300);
  };
  const handleShow = () => setShow(true);

  const greeting = user == null ? "Hello" : `Hello, ${user.name}`;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavbarHome />
      <div className="home">
        <h1>{greeting}</h1>
        <div className="line"></div>
        <ContactForm show={show} onHide={handleClose} />
        <div className="action-bar">
          <span>Your Contacts</span>
          <div className="contact-actions">
            <ContactFilter />
            <button onClick={handleShow}>Add Contact</button>
          </div>
        </div>
        <div>
          <Contacts handleEdit={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
