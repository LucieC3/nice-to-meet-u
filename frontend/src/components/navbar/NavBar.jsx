import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function () {
  return (
    <Menu className="menu-burger">
      <ul>
        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/plantes">
            Plantes
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/calendrier">
            Calendrier d'entretien
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/sites-utiles">
            Sites utiles
          </Link>
        </li>
        <li>
          <Link className="menu-item button" to="/wishlist">
            Wishlist
          </Link>
        </li>
      </ul>
    </Menu>
  );
}
