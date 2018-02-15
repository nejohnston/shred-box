import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice,score) => {
  // if (!this.props.lives===0){
  if (noteChoice === 1) {
    const snd3 = new Audio("GreenPerc2.wav");
    snd3.play();
    Meteor.call("score.updateScore", score);
    
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    console.log("wrong");
    errorsnd.play();
    // Meteor.call("score.updateLives");
  }
  // }else{
  //   alert (" you've lost")
  // }
};

const BlueButton = ({ noteChoice, score}) => (
  <div
    onClick={() => {
      blueClicked(noteChoice, score);
    }}
    className="blue-button"
  />
);

export default BlueButton;
