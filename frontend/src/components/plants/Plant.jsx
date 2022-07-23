/* eslint-disable react/prop-types */
import "./styles/Plant.css";

function Plant({ plant }) {
  const { name, water, light, humidity, image, category } = plant;

  return (
    <div className="plant-container">
      <img className="plant-image" src={image} alt={`${name}`} />
      <div className="legende">
        <div className="infos">
          <div className="name">{name}</div>
          <div className="category">{category}</div>
        </div>
        <div className="humidity">{humidity}</div>
        <div className="water">{water}</div>
        <div className="light">{light}</div>
      </div>
    </div>
  );
}

export default Plant;
