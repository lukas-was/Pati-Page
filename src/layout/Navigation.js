import React from "react";
import { NavLink } from "react-router-dom";

import "../style/Navigation.css";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "o nas", path: "/about", exact: false },
  { name: "projekty", path: "/projects", exact: false },
  { name: "oferta", path: "/offer", exact: false },
  { name: "co nas wyróżnia", path: "/why-us", exact: false },
  { name: "kontakt", path: "/contact", exact: false },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? true : false}>
        <span>{item.name}</span>
        <div className="dot"></div>
      </NavLink>
    </li>
  ));

  return (
    <ul>
      {menu}
      <li>
        <div className="media">fb ig</div>
      </li>
    </ul>
  );
};

export default Navigation;
