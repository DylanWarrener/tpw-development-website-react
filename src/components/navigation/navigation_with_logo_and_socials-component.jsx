import React from "react";

// React router
import { NavLink } from "react-router-dom";

// Navigation data
import NAV_DATA from "../../data/navigation-data";

// SVG
import { ReactComponent as Logo } from "../../assets/static/logo/logo.svg";

// Stylesheet
import "./navigation_with_logo_and_socials-component.scss";

const Navigation = ({ logo }) => {
  return (
    <div id="nav-container">
      <div id="logo-container">
        <NavLink id="logo-link" to="/">
          <Logo id="logo" />
        </NavLink>
      </div>
      <div id="nav-links-container">
        <ul id="nav-links">
          {Object.keys(NAV_DATA).map((key) => (
            <li key={NAV_DATA[key].id}>
              <NavLink
                to={NAV_DATA[key].routeName}
                className={(navLink) =>
                  "link" + (navLink.isActive ? " active" : "")
                }
              >
                {NAV_DATA[key].title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
