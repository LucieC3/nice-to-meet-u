import "./styles/Plants.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlantInfo from "./PlantInfo";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/plants`)
      .then((res) => setPlants(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="plants-list">
      <h1>Plantes</h1>
      <div className="plant-list">
        {plants &&
          plants.map((plant) => (
            <li key={plant.id}>
              <Link to={`/plants/${plant.id}`}>
                <PlantInfo plant={plant} />
              </Link>
            </li>
          ))}
      </div>
    </div>
  );
}
