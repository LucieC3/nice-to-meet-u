import "./styles/Websites.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Website from "../components/websites/Website";
import Header from "../components/header/Header";

export default function Websites() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sites-utiles`)
      .then((response) => response.data)
      .then((data) => {
        setWebsites(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="global-websites">
      <Header />
      <div className="container-web">
        <div className="websites-list-container">
          <div className="websites-list">
            {websites &&
              websites.map((website) => (
                <li key={website.id}>
                  <Website website={website} />
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
