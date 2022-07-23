import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/PlantInfo.css";

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
    <div id="plant-detail">
      <div className="image half">
        <img src={plant.image} alt={`${plant.name}`} />
      </div>

      <div className="detail half">
        <h1>{plant.name}</h1>

        <div className="data">
          <div className="category">Category : {plant.category}</div>

          <div className="light">
            <p>Besoin en lumière :</p>
          </div>

          <div className="water">
            <p>Besoin en eau :</p>
          </div>
        </div>
      </div>
    </div>
  );
}
