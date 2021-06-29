import React, { useState } from "react";

function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const { name, email, password, cnfPassword } = user;

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register submit");
  };

  return (
    <div>
      <h1> Register Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
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
        <div>
          <label htmlFor="cnfPassword">Confirm Password</label>
          <input
            type="password"
            name="cnfPassword"
            value={cnfPassword}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
