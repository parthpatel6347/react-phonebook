import React, { useContext, useState, useEffect } from "react";
import ContactContext from "./context/contact/contactContext";
import { Modal } from "react-bootstrap";
import "./styles/ContactForm.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const ContactForm = (props) => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: "", email: "", phone: "", type: "Personal" });
    }
  }, [current, contactContext]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
  });

  const [validated, setValidated] = useState(false);

  const { name, email, phone, type } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      if (current === null) {
        addContact(contact);
        props.onHide();
      } else {
        updateContact(contact);
        clearAll();
        props.onHide();
      }

      setValidated(false);

      setContact({
        name: "",
        email: "",
        phone: "",
        type: "Personal",
      });
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Modal {...props} centered>
      <Modal.Header className="modal-head" closeButton>
        <h3>{current ? "Edit Contact" : "Add Contact"}</h3>
      </Modal.Header>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <FormControl
          required
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <FormControl
          required
          type="email"
          placeholder="Email*"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormControl
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <h6>Tag</h6>
        <div className="radio-grp">
          <input
            className="radio-btn"
            type="radio"
            name="type"
            value="Personal"
            checked={type === "Personal"}
            onChange={handleChange}
          />{" "}
          <div className="tag-sticker personal"></div> Personal
        </div>
        <div className="radio-grp">
          <input
            className="radio-btn"
            type="radio"
            name="type"
            value="Professional"
            checked={type === "Professional"}
            onChange={handleChange}
          />{" "}
          <div className="tag-sticker professional"></div> Professional
        </div>
        <div>
          <input
            className="add-btn"
            type="submit"
            value={current ? "Update" : "Add Contact"}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default ContactForm;
