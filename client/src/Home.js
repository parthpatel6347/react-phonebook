import React from "react";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import ContactFilter from "./ContactFilter";

const Home = () => {
  return (
    <div>
      <ContactForm />
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
