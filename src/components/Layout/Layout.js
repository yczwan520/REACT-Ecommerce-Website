import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div>
      <h1>Fruit Emporium</h1>
      <div className="Nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/sellers">Sellers</NavLink>
      </div>
    </div>
  );
};

export { Layout };
