import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "./context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <input
        ref={text}
        type="text"
        placeholder="Search Contacts..."
        onChange={handleChange}
      />
      <button onClick={clearFilter}> Clear</button>
    </div>
  );
};

export default ContactFilter;
