/* eslint-disable react/prop-types */
import { RiPlantFill } from "react-icons/ri";
import "./Website.css";

function Website({ website }) {
  const { name, link } = website;

  return (
    <div className="div-name-link">
      <div className="website-name">
        <RiPlantFill />
        {name}
      </div>
      <div className="website-link">
        <a href={link}>{link}</a>
      </div>
    </div>
  );
}

export default Website;
