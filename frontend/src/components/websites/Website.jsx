/* eslint-disable react/prop-types */
import { RiPlantFill } from "react-icons/ri";
import "./Website.css";

function Website({ website }) {
  const { name, link } = website;

  return (
    <div className="div-name-link">
      <RiPlantFill />
      <a className="website-name" href={link}>
        {name}
      </a>
    </div>
  );
}

export default Website;
