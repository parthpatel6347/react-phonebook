import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "./context/contact/contactContext";
import ContactItem from "./ContactItem";
import Loading from "./Loading";
import "./styles/Contacts.css";

const Contacts = ({ handleEdit }) => {
  const { contacts, filtered, getContacts, loading } =
    useContext(ContactContext);

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h3>Please add a contact</h3>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup className="contacts-container">
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} handleEdit={handleEdit} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} handleEdit={handleEdit} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Contacts;
