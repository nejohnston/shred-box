import React from "react";
import PropTypes from "prop-types";

const redClicked = (answer, turn) => {
  if (answer === 0) {
    const snd = new Audio("ThunderKick.wav"); // buffers automatically when created
    snd.play();

   
  } else {
    console.log("wrong");
    const errorsnd = new Audio("record-scratch.mp3"); // buffers automatically when created
    errorsnd.play();
   
  }
};

const RedButton = ({ answer, turn }) => (
  <div
    onClick={() => {
      redClicked(answer);
    }}
    className="red-button"
  />
);

export default RedButton;
