import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";
import contactContext from "./contactContext";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Parth Patel",
        email: "p@g.com",
        phone: "1234567891",
        type: "personal",
      },
      {
        id: 2,
        name: "Aneri Patel",
        email: "p123@g.com",
        phone: "1212567893",
        type: "personal",
      },
      {
        id: 3,
        name: "Nishant Vadodaria",
        email: "prt@g.com",
        phone: "1233333331",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
