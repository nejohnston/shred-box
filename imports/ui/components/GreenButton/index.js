import React, { Component } from "react";
import PropTypes from "prop-types";

const greenClicked = (noteChoice, sound) => {
  if (noteChoice === 2) {
    const snd2 = new Audio("BlueHat.wav");
    snd2.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const GreenButton = ({ noteChoice }, sound) => (
  <div
    onClick={() => {
      greenClicked(noteChoice, sound);
    }}
    className="green-button"
  />
);

export default GreenButton;
