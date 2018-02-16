import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, score, lives) => {
  if (!lives == 0) {
    if (noteChoice === 1) {
      const snd3 = new Audio("GreenPerc2.wav");
      snd3.play();
      Meteor.call("score.updateScore", score);
    } else {
      const errorsnd = new Audio("record-scratch.mp3");
      console.log("wrong");
      errorsnd.play();
      Meteor.call("score.updateLives", lives);
    }
  } else {
    alert("You lost, your score is :"+ score);
    Meteor.call("songs.reset");
  }
};

const BlueButton = ({ noteChoice, score, lives }) => (
  <div
    onClick={() => {
      blueClicked(noteChoice, score, lives);
    }}
    className="blue-button"
  />
);

export default BlueButton;
