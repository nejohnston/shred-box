import React from "react";
import PropTypes from "prop-types";

const redClicked = (score, answer) => {
  if (answer === 0) {
    const snd = new Audio("ThunderKick.wav"); // buffers automatically when created
    snd.play();

   
  } else {

    const errorsnd = new Audio("record-scratch.mp3"); 
    alert("GAME OVER, you got " + score + " correct answers!!")// buffers automatically when created
    errorsnd.play();
   
  }
};

const RedButton = ({ score, answer }) => (
  <div
    onClick={() => {
      redClicked(score, answer);
    }}
    className="red-button"
  />
);

export default RedButton;
