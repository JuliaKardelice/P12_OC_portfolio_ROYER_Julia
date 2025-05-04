import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <h1> Portfolio de Julia Royer </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
