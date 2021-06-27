import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{name}</h3>
      <h4>{type}</h4>
      {email && <p>{email}</p>}
      {phone && <p>{phone}</p>}
      <p>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
