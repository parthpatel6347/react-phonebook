import React, { useContext, useState, useEffect } from "react";
import ContactContext from "./context/contact/contactContext";
import { Modal } from "react-bootstrap";

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

  const { name, email, phone, type } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearAll();
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "Personal",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Modal {...props} centered>
      <form onSubmit={handleSubmit}>
        <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="Personal"
          checked={type === "Personal"}
          onChange={handleChange}
        />{" "}
        Personal
        <input
          type="radio"
          name="type"
          value="Professional"
          checked={type === "Professional"}
          onChange={handleChange}
        />{" "}
        Professional
        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ContactForm;
