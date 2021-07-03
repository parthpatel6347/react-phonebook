import React, { useState, useEffect, useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";
import "./styles/Login.css";

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
      <div className="container">
        <h1>phoneBook</h1>
        <div className="form-container">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
