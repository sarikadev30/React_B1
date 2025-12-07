import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
    const navigate=useNavigate()
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      savedUser &&
      savedUser.email === loginUser.email &&
      savedUser.password === loginUser.password
    ) {
        // setting token
        localStorage.setItem("token",`sampleValue${savedUser.email}`)
        navigate("/dashboard")
    }
    else{
        alert("Invalid Email or Password")
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
      >
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={loginUser.password}
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
