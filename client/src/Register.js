import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";
import Alert from "./Alert";

import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const [validated, setValidated] = useState(false);

  const { setAlert } = useContext(AlertContext);
  const { register, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const { name, email, password, cnfPassword } = user;

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

    if (password !== cnfPassword) {
      e.preventDefault();
      setAlert("Passwords do not match.");
      setValidated(false);
    } else {
      e.preventDefault();
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="root">
      <div className="main">
        <h1>phoneBook</h1>
        <div className="form-container">
          <h2> Register Account</h2>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <FormGroup className="custom-group" controlId="Name">
              <FormLabel className="custom-label">Name</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  className="custom-input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <FormGroup className="custom-group" controlId="Email">
              <FormLabel className="custom-label">Email</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  className="custom-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <FormGroup className="custom-group" controlId="Password">
              <FormLabel className="custom-label">Password</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  className="custom-input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  minLength="5"
                />
                <Form.Control.Feedback type="invalid">
                  Password must be atleast 5 characters.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <FormGroup controlId="Confirm Password" className="bottom-input">
              <FormLabel className="custom-label">Confirm Password</FormLabel>
              <InputGroup hasValidation>
                <FormControl
                  className="custom-input"
                  type="password"
                  name="cnfPassword"
                  value={cnfPassword}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please re-enter the password.
                </Form.Control.Feedback>
              </InputGroup>
            </FormGroup>
            <div style={{ height: "24px" }}>
              <Alert />
            </div>
            <input className="submit-btn" type="submit" value="Register" />
          </Form>
          <p className="signup-text">
            Have an account?
            <Link to="/login">
              <span> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
