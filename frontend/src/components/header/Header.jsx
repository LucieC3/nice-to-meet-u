import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <ul>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
          <li>
            <Link to="/plantes">Plantes</Link>
          </li>
          <li>
            <Link to="/projets">Projets</Link>
          </li>
          <li>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <h1>WELCOME</h1>
    </div>
  );
}
