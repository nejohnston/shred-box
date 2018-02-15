import React from "react";
import PropTypes from "prop-types";

const purpleClicked = (noteChoice, score) => {
  // if (!this.props.lives===0){
  if (noteChoice === 3) {
    const snd1 = new Audio("BaiscKick2.wav");
    snd1.play();
    Meteor.call("score.updateScore", score);
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
    Meteor.call("score.updateLives");
  }
  // }else{
  //   alert (" you've lost")
  // }
};

const PurpleButton = ({ noteChoice, score }) => (
  <div
    onClick={() => {
      purpleClicked(noteChoice, score);
    }}
    className="purple-button"
  />
);
export default PurpleButton;
