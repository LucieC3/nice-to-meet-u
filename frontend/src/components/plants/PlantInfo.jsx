import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosWater } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import axios from "axios";

import "./styles/PlantInfo.css";
import Header from "../header/Header";
import PlantDelete from "./PlantDelete";

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
        <div className="image-infos">
          <img src={plant.image} alt={`${plant.name}`} />
        </div>

        <div className="details-container">
          <h1>{plant.name}</h1>
          <h3>Categorie : {plant.category}</h3>
          <div className="details-list">
            <ul>
              <li>
                <BsFillSunFill />
                {plant.light}
              </li>
              <li>
                <IoIosWater />
                {plant.water}
              </li>
              <li>
                <WiHumidity />
                {plant.humidity}
              </li>
            </ul>
          </div>
          <PlantDelete />
        </div>
      </div>
    </div>
  );
}
