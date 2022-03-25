import React, { useState } from "react";

// React router
import { NavLink } from "react-router-dom";

// Navigation data
import NAV_DATA from "../../data/navigation-data";

// SVGs
import { ReactComponent as Logo } from "../../assets/static/logo/logo.svg";
import { ReactComponent as Burger } from "../../assets/static/icons/burger.svg";

// Stylesheet
import "./navigation_with_logo_and_socials-component.scss";

const Navigation = () => {
  const [navMenu, setNavMenu] = useState("closed");

  const handleClick = () => {
    if (navMenu === "closed") setNavMenu("open");
    if (navMenu === "open") setNavMenu("closed");
  };

  return (
    <div id="nav-container">
      <div id="nav-horizontal-container">
        <NavLink id="logo-container" to="/">
          <Logo id="logo" />
        </NavLink>
        <nav id="horizontal">
          <ul>
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
        </nav>
        <div id="burger-container" onClick={handleClick}>
          <Burger id="burger" />
        </div>
      </div>
      <div className={`nav-vertical-container ${navMenu}`}>
        <nav id="vertical">
          <ul>
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
                <hr />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
