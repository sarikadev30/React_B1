import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered Successfully");
    setUser({email:"",password:""})
    navigate("/login");
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
      >
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an Account <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
