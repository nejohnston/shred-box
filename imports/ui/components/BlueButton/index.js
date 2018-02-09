import React from "react";
import PropTypes from "prop-types";

const blueClicked = answer => {
  console.log(answer);
  if (answer === 1) {
    const snd = new Audio("BaiscKick2.wav"); // buffers automatically when created
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3"); // buffers automatically when created
    errorsnd.play();
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
