import React from "react";
import PropTypes from "prop-types";

const purpleClicked = (noteChoice, sound) => {
  if (noteChoice === 3) {
    const snd1 = new Audio("BaiscKick2.wav");
    snd1.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const PurpleButton = ({ noteChoice }, sound) => (
  <div
    onClick={() => {
      purpleClicked(noteChoice, sound);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
