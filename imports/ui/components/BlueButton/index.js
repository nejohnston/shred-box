import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, sound) => {
  if (noteChoice === 1) {
    const snd3 = new Audio("GreenPerc2.wav");
    snd3.play();
    Meteor.call("score.updateScore");
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
    Meteor.call("score.updateLives");
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
