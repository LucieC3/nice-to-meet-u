/* eslint-disable react/prop-types */
import "./Wish.css";
import { GrMagic } from "react-icons/gr";

function Wish({ wish }) {
  const { name } = wish;

  return (
    <div>
      <div className="wish-name">
        <GrMagic />
        {name}
      </div>
    </div>
  );
}

export default Wish;
