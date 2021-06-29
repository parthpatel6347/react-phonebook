import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";

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
      props.history.push("/");
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
    <div>
      <h1> Register Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            minLength="5"
          />
        </div>
        <div>
          <label htmlFor="cnfPassword">Confirm Password</label>
          <input
            type="password"
            name="cnfPassword"
            value={cnfPassword}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
