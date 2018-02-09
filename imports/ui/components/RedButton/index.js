import React from "react";
import PropTypes from "prop-types";

const redClicked = (answer, turn) => {
  if (answer === 0) {
    const snd = new Audio("ThunderKick.wav"); // buffers automatically when created
    snd.play();
    alert("correct");
    console.log(turn);
  } else {
    console.log("wrong");
    const snd = new Audio("ThunderKick.wav"); // buffers automatically when created
    snd.play();
    console.log(turn);
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
