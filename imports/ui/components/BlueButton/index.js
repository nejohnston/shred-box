import React from "react";
import PropTypes from "prop-types";

const BlueButton = ({ blueInput }) => (
  <div onClick={blueInput} className="blue-button">
    Blue
  </div>
);

BlueButton.propTypes = {
  blueInput: PropTypes.func.isRequired
};

export default BlueButton;
