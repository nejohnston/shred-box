import React from "react";
import PropTypes from "prop-types";

const purpleClicked = noteChoice => {
  if (noteChoice === 3) {
    const snd = new Audio("GreenPerc2.wav");
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const PurpleButton = ({ noteChoice }) => (
  <div
    onClick={() => {
      purpleClicked(noteChoice);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
