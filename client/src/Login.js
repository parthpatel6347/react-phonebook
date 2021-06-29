import React, { useState } from "react";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN submit");
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
