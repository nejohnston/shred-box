import React from "react";
import PropTypes from "prop-types";

const redClicked = (noteChoice, sound) => {
  // if (!this.props.lives===0){
  if (noteChoice === 0) {
    const snd = new Audio("ThunderKick.wav");
    snd.play();
    Meteor.call("score.updateScore");
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    errorsnd.play();
    Meteor.call("score.updateLives");
  }
  // }else{
  //   alert (" you've lost")
  // }
};

const RedButton = ({ noteChoice }) => (
  <div
    onClick={() => {
      redClicked(noteChoice);
    }}
    className="red-button"
  />
);

export default RedButton;
