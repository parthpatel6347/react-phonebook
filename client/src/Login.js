import React, { useState, useEffect, useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";

import "./styles/Login.css";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setAlert } = useContext(AlertContext);
  const { login, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }

    if (error) {
      setAlert(error);
    }
    clearErrors();
  }, [error, isAuthenticated, props]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className="root">
      <div className="main">
        <h1>phoneBook</h1>
        <div className="form-container">
          <h2>Sign in</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="custom-group" controlId="Email">
              <FormLabel className="custom-label">Email</FormLabel>
              <FormControl
                className="custom-input"
                type="email"
                // placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup controlId="Password">
              <FormLabel className="custom-label">Password</FormLabel>
              <FormControl
                className="custom-input"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormGroup>
            <input className="submit-btn" type="submit" value="Continue" />
          </Form>
          <p className="signup-text">
            Don't have an account?
            <Link to="/register">
              <span> Sign up!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
