// Login.js - React component for the login form

import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling login, you can send username, password, and userType to your backend for authentication
    console.log("Login credentials:", { username, password });
    // Reset form after login
    navigate("/Dashboard", { state: { username } });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Hostel Login Form</h1>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username / Email </label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
