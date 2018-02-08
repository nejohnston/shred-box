import React from "react";
import PropTypes from "prop-types";

const GreenButton = ({ greenInput }) => (
  <div onClick={greenInput} className="green-button">
    Green
  </div>
);

// GreenButton.propTypes = {
//   greenInput: PropTypes.func.isRequired
// };

export default GreenButton;
