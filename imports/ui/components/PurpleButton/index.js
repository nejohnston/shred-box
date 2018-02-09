import React from "react";
import PropTypes from "prop-types";

const purpleClicked = answer => {
  console.log(answer);
  if (answer === 3) {
    const snd = new Audio("GreenPerc2.wav"); // buffers automatically when created
    snd.play();
  } else {
    const snd = new Audio("record-scratch.mp3"); // buffers automatically when created
    snd.play();
  }
};

const PurpleButton = ({ answer }) => (
  <div
    onClick={() => {
      purpleClicked(answer);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
