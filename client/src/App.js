import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactState from "./context/contact/ContactState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
