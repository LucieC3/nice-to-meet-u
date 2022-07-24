import React from "react";
import Header from "../components/header/Header";
import homePhoto from "../assets/photo-leaves-desktop.jpg";
import homeMobilePhoto from "../assets/photo-leaves-mobile.jpg";
import "./styles/Home.css";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="ban-container">
          <img className="banner-home" src={homePhoto} alt="monstera leaves" />
          <img
            className="banner-home-mobile"
            src={homeMobilePhoto}
            alt="monstera leaves petite"
          />
        </div>
      </div>
    </div>
  );
}
