import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
