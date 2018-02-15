import React from "react";
import PropTypes from "prop-types";

const redClicked = (noteChoice, sound) => {
  if (noteChoice === 0) {
    const snd = new Audio("ThunderKick.wav");
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const RedButton = ({ noteChoice }, sound) => (
  <div
    onClick={() => {
      redClicked(noteChoice, sound);
    }}
    className="red-button"
  />
);

export default RedButton;
