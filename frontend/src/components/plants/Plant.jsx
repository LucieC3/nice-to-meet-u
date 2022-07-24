/* eslint-disable react/prop-types */
import "./styles/Plant.css";

function Plant({ plant }) {
  const { name, image } = plant;

  return (
    <div className="plant-container">
      <img className="plant-image" src={image} alt={`${name}`} />
      <div className="legende">
        <div className="plant-name">{name}</div>
      </div>
    </div>
  );
}

export default Plant;
