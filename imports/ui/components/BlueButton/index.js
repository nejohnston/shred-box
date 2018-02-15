import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, sound) => {
  if (noteChoice === 1) {
    const snd3 = new Audio("GreenPerc2.wav");
    snd3.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const BlueButton = ({ noteChoice }) => (
  <div
    onClick={() => {
      blueClicked(noteChoice);
    }}
    className="blue-button"
  />
);

export default BlueButton;
