import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, sound) => {
  
  if (noteChoice === 1) {
    sound.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const BlueButton = ({noteChoice}, sound) => (
  <div
    onClick={() => {
      blueClicked(noteChoice, sound);
    }}
    className="blue-button"
  />
);

export default BlueButton;
