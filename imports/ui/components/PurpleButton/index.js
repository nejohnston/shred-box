import React from "react";
import PropTypes from "prop-types";

const PurpleButton = ({ purpleInput }) => (
  <div onClick={purpleInput} className="purple-button">
    Purple
  </div>
);

PurpleButton.propTypes = {
  purpleInput: PropTypes.func.isRequired
};

export default PurpleButton;
