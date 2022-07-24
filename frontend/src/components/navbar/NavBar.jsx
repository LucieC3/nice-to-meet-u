/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo-ficus.png";

export default function Navbar() {
  const [active, setActive] = useState(true);

  function mobileMenu() {
    setActive(!active);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="image-logo" src={logo} alt="logo ficus" />
      </Link>
      <div className={active ? "nav-menu" : null} onClick={mobileMenu}>
        <ul className="nav-menu-left">
          <li className="nav-item">
            <Link to="/plantes" className="nav-link">
              Plantes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendrier" className="nav-link">
              Calendrier
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sites-utiles" className="nav-link">
              Sites utiles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              Wishlist
            </Link>
          </li>
        </ul>
        <ul className="nav-menu-right">
          <li className="nav-item">
            <Link to="/admin" className="nav-link login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className={active ? "hamburger" : null} onClick={mobileMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
}
