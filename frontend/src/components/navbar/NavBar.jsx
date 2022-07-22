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
          <Link className="menu-item" to="/apropos">
            A propos
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/plants">
            Plantes
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/projets">
            Projets
          </Link>
        </li>
        <li>
          <Link className="menu-item button" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Menu>
  );
}
