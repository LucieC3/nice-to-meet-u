import { useEffect, useState } from "react";
import "./styles/PlantAdd.css";

export default function PlantAdd() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryPlant, setCategoryPlant] = useState("");
  const [water, setWater] = useState("");
  const [light, setLight] = useState("");
  const [humidity, setHumidity] = useState("");
  const [image, setImage] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const plant = {
      name,
      categoryPlant,
      water,
      light,
      humidity,
      image,
    };

    const formData = new FormData();
    formData.append("mon-image", image);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    };

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/ajouter-une-plante`,
      formData,
      requestOptions
    )
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
      })
      .then(
        setName(""),
        setCategoryPlant(""),
        setWater(""),
        setLight(""),
        setHumidity(""),
        setImage("")
      );
  };

  return (
    <div id="plantadd">
      <h1 className="plantadd_title">Ajouter une plante</h1>

      <form
        className="plantadd_form"
        method="POST"
        encType="multipart/form-data"
        action="uploaddufichier"
        onSubmit={handleSubmit}
      >
        <label className="plantadd_label" htmlFor="name">
          Nom de la plante
          <input
            className="plantadd_input"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="plantadd_label" htmlFor="category">
          Catégorie
          <select
            className="plantadd_input"
            name="category_id"
            id="category"
            value={categoryPlant}
            onChange={(e) => setCategoryPlant(e.target.value)}
          >
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
            type="text"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />
        </label>

        <label className="plantadd_label" htmlFor="sun">
          Exposition
          <input
            className="plantadd_input"
            id="sun"
            name="sun"
            type="text"
            value={light}
            onChange={(e) => setLight(e.target.value)}
          />
        </label>

        <label className="plantadd_label" htmlFor="water">
          Humidité
          <input
            className="plantadd_input"
            id="humidity"
            name="humidity"
            type="text"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </label>

        <label className="plantadd_label" htmlFor="image">
          Image
          <input
            className="plantadd_input"
            id="image"
            name="mon-image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <button className="button" type="submit">
          Ajouter la plante
        </button>
      </form>
    </div>
  );
}
