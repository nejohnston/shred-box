import React from "react";
import PropTypes from "prop-types";

const purpleClicked = (score, answer) => {
  console.log(answer);
  if (answer === 3) {
    const snd = new Audio("GreenPerc2.wav"); // buffers automatically when created
    snd.play();
  }
   else {
    const errorsnd = new Audio("record-scratch.mp3"); 
    alert("GAME OVER, you got " + score + " correct answers!!")
    errorsnd.play();
  }
};

const PurpleButton = ({score, answer }) => (
  <div
    onClick={() => {
      purpleClicked(score, answer);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
