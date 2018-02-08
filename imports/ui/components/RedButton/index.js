import React from "react";
import PropTypes from "prop-types";

const RedButton = ({ redInput }) => (
  <div onClick={redInput} className="red-button">
    Red
  </div>
);

// RedButton.propTypes = {
//   redInput: PropTypes.func.isRequired
// };

export default RedButton;
