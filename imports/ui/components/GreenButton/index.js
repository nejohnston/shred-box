import React, { Component } from "react";
import PropTypes from "prop-types";

const greenClicked = (noteChoice, score) => {
  // if (!this.props.lives===0){
  if (noteChoice === 2) {
    const snd2 = new Audio("BlueHat.wav");
    snd2.play();
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

const GreenButton = ({ noteChoice, score }) => (
  <div
    onClick={() => {
      greenClicked(noteChoice, score);
    }}
    className="green-button"
  />
);

export default GreenButton;
