import React from "react";
import img from "../assets/freecodecamp-logo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="task-app-logo">
      <img src={img} className="logo" alt="logo" />
    </div>
  );
};

export default Logo;
