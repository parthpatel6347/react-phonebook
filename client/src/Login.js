import React, { useState, useEffect, useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import AuthContext from "./context/auth/authContext";

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
    login({
      email,
      password,
    });
  };

  return (
    <div>
      <h1> Login</h1>
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
  );
}

export default Login;
