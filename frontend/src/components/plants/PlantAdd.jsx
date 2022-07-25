import { useEffect, useState } from "react";
import "./styles/PlantAdd.css";
// import axios from "axios";

export default function PlantAdd() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    /*   const plant = {
      name,
      category,
      water,
      light,
      humidity,
      image,
    };

      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/plantes`)
        .then((response) => response.data)
        .then((data) => {
          setPlants(data);
        })
        .catch((error) => {
          console.error(error);
        });
*/
  };

  return (
    <div id="plantadd">
      <h1 className="plantadd_title">Ajouter une plante</h1>

      <form className="plantadd_form" onSubmit={handleSubmit}>
        <label className="plantadd_label" htmlFor="name">
          Nom de la plante
          <input className="plantadd_input" id="name" name="name" type="text" />
        </label>

        <label className="plantadd_label" htmlFor="category">
          Catégorie
          <select className="plantadd_input" name="category_id" id="category">
            <option value="0">Choisir une catégorie... </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="plantadd_label" htmlFor="water">
          Arrosage
          <input
            className="plantadd_input"
            id="water"
            name="water"
            type="number"
          />
        </label>

        <label className="plantadd_label" htmlFor="sun">
          Exposition
          <input className="plantadd_input" id="sun" name="sun" type="number" />
        </label>

        <label className="plantadd_label" htmlFor="water">
          Humidité
          <input
            className="plantadd_input"
            id="humidity"
            name="humidity"
            type="text"
          />
        </label>

        <label className="plantadd_label" htmlFor="image">
          Image
          <input
            className="plantadd_input"
            id="image"
            name="image"
            type="text"
          />
        </label>

        <button className="button" type="submit">
          Ajouter la plante
        </button>
      </form>
    </div>
  );
}
