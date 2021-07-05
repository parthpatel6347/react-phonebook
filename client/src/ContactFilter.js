import React, { useContext, useRef, useEffect, useState } from "react";
import ContactContext from "./context/contact/contactContext";
import "./styles/ContactFilter.css";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const [showClear, setShowClear] = useState(false);

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
      setShowClear(true);
    } else {
      clearFilter();
      setShowClear(false);
    }
  };

  const handleClear = () => {
    clearFilter();
    setShowClear(false);
  };

  return (
    <div className="filter-container">
      <input
        ref={text}
        type="text"
        placeholder="Search Contacts..."
        onChange={handleChange}
      ></input>
      {showClear && <i class="fas fa-times-circle" onClick={handleClear}></i>}
    </div>
  );
};

export default ContactFilter;
