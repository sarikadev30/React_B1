import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background:theme=="dark"?"blue":"yellow",
        color:theme=="dark"?"white":"black",
      }}
    >
      <h4>Web-App</h4>
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
}
