import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css"
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme=="dark"?"dark-theme":"light-theme"}
      style={{
        padding: "30px",
        borderRadius: "10px",
        transition: "0.3s",
        height:"300px"
      }}
    >
      Home
    </div>
  );
}
