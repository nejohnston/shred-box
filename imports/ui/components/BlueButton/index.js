import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, sound) => {
  if (noteChoice === 1) {
    const snd3 = new Audio("GreenPerc2.wav");
    snd3.play();
    console.log("right")
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    console.log("wrong")
    errorsnd.play();
  }
};

const BlueButton = ({ noteChoice }, sound) => (
  <div
    onClick={() => {
      blueClicked(noteChoice, sound);
    }}
    className="blue-button"
  />
);

export default BlueButton;
