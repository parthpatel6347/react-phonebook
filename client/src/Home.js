import React from "react";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div>
      <ContactForm />
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
