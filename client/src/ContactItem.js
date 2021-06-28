import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "./context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const { id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{name}</h3>
      <h4>{type}</h4>
      {email && <p>{email}</p>}
      {phone && <p>{phone}</p>}
      <p>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
