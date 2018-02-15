import React from "react";
import PropTypes from "prop-types";

const purpleClicked = (noteChoice, sound) => {
  // if (!this.props.lives===0){
  if (noteChoice === 3) {
    const snd1 = new Audio("BaiscKick2.wav");
    snd1.play();
    Meteor.call("score.updateScore");
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
    Meteor.call("score.updateLives");
  }
};
const PurpleButton = ({ noteChoice }) => (
  <div
    onClick={() => {
      purpleClicked(noteChoice);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
