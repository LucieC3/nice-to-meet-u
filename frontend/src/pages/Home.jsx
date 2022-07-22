import React from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <div className="App" id="outer-container">
        {window.innerWidth > 1024 ? (
          <Header />
        ) : (
          <NavBar pageWrapId="page-wrap" outerContainerId="outer-container" />
        )}
        <div id="page-wrap" />
      </div>
    </div>
  );
}
