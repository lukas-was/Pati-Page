import React from "react";
import "../style/Header.css";

import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
