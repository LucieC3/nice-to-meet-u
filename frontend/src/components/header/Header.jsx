import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <ul>
          <li>
            <Link to="/plantes">Plantes</Link>
          </li>
          <li>
            <Link to="/calendrier">Calendrier d'entretien</Link>
          </li>
          <li>
            <Link to="/sites-utiles">Sites utiles</Link>
          </li>
          <li>
            <Link to="/wishlist" className="button">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
      <h1>WELCOME</h1>
    </div>
  );
}
