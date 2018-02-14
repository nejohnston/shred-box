import React from "react";
import PropTypes from "prop-types";

const purpleClicked = (nextNote) => {
  if (nextNote === 3) {
    const snd = new Audio("GreenPerc2.wav"); 
    snd.play();
  }
   else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
  }
};

const PurpleButton = ({snextNote}) => (
  <div
    onClick={() => {
      purpleClicked(nextNote);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
