import React from "react";
import Navbar from "./Navbar";
import "./styles/Splash.css";
import illustration from "./styles/assets/illustration.png";

import { Link } from "react-router-dom";

function Splash(props) {
  return (
    <div className="root">
      <div className="container">
        <Navbar />
        <div className="content">
          <div className="content-left">
            <h1>The best place to save your contacts.</h1>
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
