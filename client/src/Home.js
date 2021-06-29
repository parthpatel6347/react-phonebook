import React, { useContext, useEffect } from "react";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import ContactFilter from "./ContactFilter";
import AuthContext from "./context/auth/authContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

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
