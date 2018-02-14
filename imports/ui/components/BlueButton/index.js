import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice) => {
  
  if (noteChoice === 1) {
    const snd = new Audio("BaiscKick2.wav"); 
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const BlueButton = ({noteChoice}) => (
  <div
    onClick={() => {
      blueClicked(noteChoice);
    }}
    className="blue-button"
  />
);

export default BlueButton;
