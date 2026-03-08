import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
       "https://vmaautomation.in/api/login.php",
        { username, password }
      );

      const token = res.data.token
      localStorage.setItem("token",token)
      alert(res.data.message);
      navigate("/admin/dashboard");

    } catch (err) {

      alert("Invalid username or password");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h2 className="login-title">Admin Login</h2>

        <form onSubmit={handleLogin} className="login-form">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;