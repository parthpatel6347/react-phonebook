import React, { useState, useEffect, useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";

import Alert from "./Alert";

import "./styles/Login.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [validated, setValidated] = useState(false);

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
      setValidated(false);
    }
    clearErrors();
  }, [error, isAuthenticated, props, validated]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
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
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <FormGroup className="custom-group" controlId="Email">
              <FormLabel className="custom-label">Email</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  required
                  className="custom-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <FormGroup controlId="Password" className="bottom-input">
              <FormLabel className="custom-label">Password</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  required
                  className="custom-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <div style={{ height: "24px" }}>
              <Alert />
            </div>
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
