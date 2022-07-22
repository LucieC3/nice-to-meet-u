import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Care from "./Care";

import "./styles/PlantInfo.css";

export default function PlantInfo() {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/plants/${id}`)
      .then((response) => response.json())
      .then((data) => setPlant(data));
  }, []);

  return (
    <div id="plant-detail">
      <div className="image half">
        <img src={plant.image} alt="" />
      </div>

      <div className="detail half">
        <h1>{plant.name}</h1>

        <div className="data">
          <div className="category">Category : {plant.category}</div>

          <div className="light">
            Besoin en lumière : <Care type="sun" amount={plant.light} />
          </div>

          <div className="water">
            Besoin en eau : <Care type="water" amount={plant.water} />
          </div>
        </div>
      </div>
    </div>
  );
}
