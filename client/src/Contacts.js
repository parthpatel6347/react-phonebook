import React, { useContext, Fragment } from "react";
import ContactContext from "./context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </Fragment>
  );
};

export default Contacts;
