import React from "react";
import "./ButtonConnexion.css";
import PropTypes from "prop-types";

function ButtonConnexion({ handleSubmit }) {
  return (
    <button type="submit" className="buttonconnexion" onClick={handleSubmit}>
      <h3>CONNEXION</h3>
    </button>
  );
}

ButtonConnexion.propTypes = {
  handleSubmit: PropTypes.func,
};

ButtonConnexion.defaultProps = {
  handleSubmit: PropTypes.func,
};

export default ButtonConnexion;
