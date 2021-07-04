import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";

import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

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
    }
    clearErrors();
  }, [error, isAuthenticated, props]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cnfPassword) {
      setAlert("Passwords do not match.");
    } else {
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
          <Form onSubmit={handleSubmit}>
            <FormGroup className="custom-group" controlId="Name">
              <FormLabel className="custom-label">Name</FormLabel>
              <FormControl
                className="custom-input"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="custom-group" controlId="Email">
              <FormLabel className="custom-label">Email</FormLabel>
              <FormControl
                className="custom-input"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="custom-group" controlId="Password">
              <FormLabel className="custom-label">Password</FormLabel>
              <FormControl
                className="custom-input"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                minLength="5"
              />
            </FormGroup>
            <FormGroup controlId="Confirm Password">
              <FormLabel className="custom-label">Confirm Password</FormLabel>
              <FormControl
                className="custom-input"
                type="password"
                name="cnfPassword"
                value={cnfPassword}
                onChange={handleChange}
                required
              />
            </FormGroup>
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
