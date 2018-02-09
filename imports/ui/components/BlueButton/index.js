import React from "react";
import PropTypes from "prop-types";

const blueClicked = answer => {
  console.log(answer);
  if (answer === 1) {
    alert("correct");
  } else {
    console.log("wrong");
  }
};

const BlueButton = ({ answer }) => (
  <div
    onClick={() => {
      blueClicked(answer);
    }}
    className="blue-button"
  />
);

// BlueButton.propTypes = {
//   blueInput: PropTypes.func.isRequired
// };

export default BlueButton;
