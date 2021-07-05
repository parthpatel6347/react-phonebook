import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "./context/contact/contactContext";
import "./styles/ContactItem.css";
import {
  MailIcon,
  PhoneIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";

const ContactItem = ({ contact, handleEdit }) => {
  const { deleteContact, setCurrent, clearCurrent } =
    useContext(ContactContext);
  const { _id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const handleEditContact = async () => {
    await setCurrent(contact);
    handleEdit();
  };

  return (
    <div className="contact-item">
      <div
        className={`${
          type === "Personal" ? "personal tag" : "professional tag"
        }`}
      ></div>
      <div className="contact-info">
        <div className="top-row">
          <span className="contact-name">{name}</span>
        </div>

        {email && (
          <span className="contact-email">
            <MailIcon className="icon" />
            {email}
          </span>
        )}
        <div className="bottom-row">
          {phone && (
            <span className="contact-phone">
              <PhoneIcon className="icon" />
              {phone}
            </span>
          )}
        </div>
      </div>
      <div className="contact-btns">
        <button className="action-btn btn-top" onClick={handleEditContact}>
          <PencilAltIcon className="icon-btn" />
        </button>
        <button className="action-btn btn-bottom" onClick={handleDelete}>
          <TrashIcon className="icon-btn" />
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
