import React, { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import "./styles/Splash.css";
import illustration from "./styles/assets/illustration.png";
import AuthContext from "./context/auth/authContext";

import { Link } from "react-router-dom";

function Splash(props) {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  }, []);

  return (
    <div className="root">
      <div className="container-custom">
        <Navbar />
        <div className="content">
          <div className="content-left">
            <span className="main-text">
              The best place to save your contacts.
            </span>
            <p>Add and access your contacts from anywhere.</p>
            <Link to="/register">
              <button>
                <span>Get Started</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </Link>
          </div>
          <div className="content-right">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
