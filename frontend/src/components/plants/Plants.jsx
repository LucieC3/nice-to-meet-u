import "./styles/Plants.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Plant from "./Plant";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/plantes`)
      .then((response) => response.data)
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="plants-list-container">
      <h1>Plantes</h1>
      <div className="plants-list">
        {plants &&
          plants.map((plant) => (
            <li key={plant.id}>
              <Link to={`/plantes/${plant.id}`}>
                <Plant plant={plant} />
              </Link>
            </li>
          ))}
      </div>
    </div>
  );
}
