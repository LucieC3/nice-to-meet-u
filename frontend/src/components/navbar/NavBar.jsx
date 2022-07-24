import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo-ficus.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="image--logo" src={logo} alt="logo ficus" />
      </Link>
      <div className="nav-menu">
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
            <Link to="/admin" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
}
