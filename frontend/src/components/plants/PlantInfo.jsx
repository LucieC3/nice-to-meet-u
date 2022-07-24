import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/PlantInfo.css";
import Header from "../header/Header";

export default function PlantInfo() {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/plantes/${id}`)
      .then((response) => response.data)
      .then((data) => setPlant(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="plant-infos">
        <div className="image half">
          <img src={plant.image} alt={`${plant.name}`} />
        </div>

        <div className="detail half">
          <h1>{plant.name}</h1>

          <div className="data">
            <div className="category">Categorie : {plant.category}</div>

            <div className="light">
              <p>Exposition : {plant.light}</p>
            </div>

            <div className="water">
              <p>Arrosage : {plant.water}</p>
            </div>
            <div className="humidity">
              <p>Humidité : {plant.humidity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
