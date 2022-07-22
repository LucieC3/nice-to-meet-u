/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import "./styles/Care.css";

export default function Care({ type, amount }) {
  return (
    <>
      {[...Array(amount)].map((item, index) => (
        <img
          key={`${type}-${index}`}
          src={`/src/assets/${type}.svg`}
          alt={type}
        />
      ))}
    </>
  );
}
