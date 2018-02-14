import React from "react";
import PropTypes from "prop-types";

const redClicked = (noteChoice) => {

  if (noteChoice === 0) {
    const snd = new Audio("ThunderKick.wav"); 
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const RedButton = ({noteChoice}) => (
  <div
    onClick={() => {
      redClicked(nextNonoteChoicete);
    }}
    className="red-button"
  />
);

export default RedButton;
